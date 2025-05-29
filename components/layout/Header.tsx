import Link from "next/link";
import { siteSettings } from "../../data/settings";

export default function Header() {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo or site title */ }
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700">
                            {siteSettings.title.split(' ' )[0]} {siteSettings.title.split(' ')[1]}
                        </Link>
                    </div>

                    {/* Navigation links */ }
                    <nav className="hidden md:flex space-x-8">
                        {siteSettings.navigation.map((item, index) => (
                            <Link
                                key={index}
                                href={item.url}
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors" >
                            
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */ }
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-gray-900 " >
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}