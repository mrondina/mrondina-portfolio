import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
    slug: string;
    title: string;
    subtitle?: string;
    summary?: string;
    client?: string;
    tools?: string[];
    date: string;
    description: string;
    image?: string;
    tags: string[];
    content: string;
}

export function getAllPosts(): Post[] {
    if (!fs.existsSync(postsDirectory)) {
        console.error("Posts directory does not exist:", postsDirectory);
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
        .map(fileName => {
            const slug = fileName.replace(/\.mdx?$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title || 'Untitled',
                subtitle: data.subtitle || '',      // Add this
                summary: data.summary || '',        // Add this
                client: data.client || '',          // Add this
                tools: data.tools || '',            // Add this
                date: data.date || new Date().toISOString(),
                description: data.description || data.summary || '',  // Use summary as fallback
                image: data.image || '',
                tags: data.tags || [],
                content: content,
            };
        });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        if (!fs.existsSync(fullPath)) {
            console.error(`Post not found: ${fullPath}`);
            return null;
        }
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const processedContent = await remark()
            .use(html)
            .process(content);
        const contentHtml = processedContent.toString();
        
        return {
            slug,
            title: data.title || 'Untitled',
            date: data.date || new Date().toISOString(),
            description: data.description || '',
            image: data.image || '',
            tags: data.tags || [],
            content: contentHtml,
        } as Post;
    } catch (error) {
        console.error(`Error fetching post by slug "${slug}":`, error);
        return null;
    }   
}