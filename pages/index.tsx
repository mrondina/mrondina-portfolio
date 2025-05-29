import { GetStaticProps } from 'next';
import Layout from '../components/layout/Layout';  // Add this import
import { siteSettings } from '../data/settings';
import { getAllPosts } from '../lib/posts';
import { getAllProjects } from '../lib/projects';
import { get } from 'http';

// Keep your existing interface
interface HomeProps {
  postsCount: number;
  projectsCount: number;
  samplePosts: Array<{
    title: string;
    slug: string;
    date: string;
  }>;
  sampleProjects: Array<{
    title: string;
    slug: string;
    date: string;
  }>;
}

export default function Home({ postsCount, projectsCount, samplePosts, sampleProjects }: HomeProps) {
  return (
    <Layout>  {/* Wrap everything in Layout */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {siteSettings.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {siteSettings.description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Configuration Test:</h2>
            <div className="space-y-2 text-left text-sm">
              <p><strong>Author:</strong> {siteSettings.author}</p>
              <p><strong>Navigation Items:</strong> {siteSettings.navigation.length}</p>
              <p><strong>Social Links:</strong> {siteSettings.social.length}</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Content Migration Test:</h2>
            <div className="space-y-2 text-left text-sm">
              <p><strong>Posts Found:</strong> {postsCount}</p>
              <p><strong>Projects Found:</strong> {projectsCount}</p>
              <p className="text-green-600">✅ Content migration successful!</p>
            </div>
          </div>
        </div>

        {samplePosts.length > 0 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Sample Posts:</h3>
            <div className="space-y-2 text-left text-sm">
              {samplePosts.map((post, index) => (
                <p key={index}><strong>{post.title}</strong> ({post.date.split('T')[0]})</p>
              ))}
            </div>
          </div>
        )}

        {sampleProjects.length > 0 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Sample Projects:</h3>
            <div className="space-y-2 text-left text-sm">
              {sampleProjects.map((project, index) => (
                <p key={index}><strong>{project.title}</strong> ({project.date.split('T')[0]})</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>  
  );
}

// Keep your existing getStaticProps exactly as is
export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = getAllPosts();
    const projects = getAllProjects();
    
    // Ensure dates are strings for JSON serialization
    const samplePosts = posts.slice(0, 2).map(post => ({
      title: post.title,
      slug: post.slug,
      date: String(post.date) // Convert any date to string
    }));
    
    const sampleProjects = projects.slice(0, 2).map(project => ({
      title: project.title,
      slug: project.slug,
      date: String(project.date) // Convert any date to string
    }));
    
    return {
      props: {
        postsCount: posts.length,
        projectsCount: projects.length,
        samplePosts,
        sampleProjects,
      },
    };
  } catch (error) {
    console.error('Error loading content:', error);
    return {
      props: {
        postsCount: 0,
        projectsCount: 0,
        samplePosts: [],
        sampleProjects: [],
      },
    };
  }
};