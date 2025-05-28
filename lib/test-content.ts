import { getAllPosts } from "./posts";
import { getAllProjects } from "./projects";

export function testContentUtils() {
    console.log("testing content utils...");
    const posts = getAllPosts();
    const projects = getAllProjects();
    console.log(`Found ${posts.length} posts and ${projects.length} projects.`);

    return {
        postsCount: posts.length,
        projectsCount: projects.length,
        posts: posts.slice(0, 2),  //first 2 posts for preview
        projects: projects.slice(0, 2), //first 2 projects for preview
        
    }
}
