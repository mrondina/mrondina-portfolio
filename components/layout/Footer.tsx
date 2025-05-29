import Link from "next/link";
import { siteSettings } from "../../data/settings";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{siteSettings.author}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            {siteSettings.description}
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {siteSettings.navigation.map((item, index) => (
                                <li key={`nav-${index}`}>
                                    <Link 
                                        href={item.url} 
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                        <div className="flex space-x-4">
                            {siteSettings.social.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors capitalize"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} {siteSettings.author}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}