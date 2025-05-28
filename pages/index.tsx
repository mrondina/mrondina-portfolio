import { siteSettings } from '../data/settings';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-2xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {siteSettings.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {siteSettings.description}
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md space-y-3 text-left">
          <h2 className="text-lg font-semibold mb-4">Configuration Test:</h2>
          <p><strong>Author:</strong> {siteSettings.author}</p>
          <p><strong>Hero Enabled:</strong> {siteSettings.hero.enable ? 'Yes' : 'No'}</p>
          <p><strong>Navigation Items:</strong> {siteSettings.navigation.length}</p>
          <p><strong>Social Links:</strong> {siteSettings.social.length}</p>
          <p><strong>Color Scheme:</strong> {siteSettings.colorScheme}</p>
        </div>
      </div>
    </div>
  );
}