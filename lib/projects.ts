import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface Project {
    slug: string;
    title: string;
    subtitle?: string;
    date: string;
    description: string;
    image?: string;
    summary?: string;
    content: string;
}

export function getAllProjects(): Project[] {
    // check if projects directory exists
    if (!fs.existsSync(projectsDirectory)) {
        console.error("Projects directory does not exist:", projectsDirectory);
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames
        .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
        .map(fileName => {
            const slug = fileName.replace(/\.mdx?$/, '');
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title || 'Untitled Project',
                subtitle: data.subtitle || '',
                date: data.date || new Date().toISOString(),
                description: data.description || data.summary || '',  // Use summary as fallback
                image: data.image || '',
                summary: data.summary || '',
                content: content,
            };
        });

    // Sort projects by date (newest first)
    return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.md`);
        if (!fs.existsSync(fullPath)) {
            console.error(`Project not found: ${fullPath}`);
            return null;
        }
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        // convert markdown content to HTML
        const processedContent = await remark()
            .use(html)
            .process(content);
        const contentHtml = processedContent.toString();
        return {
            slug,
            title: data.title || 'Untitled Project',
            subtitle: data.subtitle || '',
            date: data.date || new Date().toISOString(),
            description: data.description || '',
            image: data.image || '',
            summary: data.summary || '',
            content: contentHtml,
        } as Project;
    } catch (error) {
        console.error("Error fetching project by slug:", error);
        return null;
    }
}