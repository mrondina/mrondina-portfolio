import Head from "next/head";
import { ReactNode } from "react";
import { siteSettings } from "../../data/settings";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;

}

export default function Layout({
    children,
    title,
    description,
    image,
}: LayoutProps) {
    const pageTitle = title ? `${title} | ${siteSettings.title}` : siteSettings.title;

    const pageDescription = description || siteSettings.description;

    return (
        <>
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="author" content={siteSettings.author} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={siteSettings.url} />
            <meta property="og:type" content="website" />
            {image && <meta property="og:image" content={image} />}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            {image && <meta name="twitter:image" content={image} />}
            <link rel="icon" href={siteSettings.logo} />
        </Head>
        <div className="min-h-screen flex flex-col">
            {/*Header content goes here*/}
            <Header />  

            {/*Main content*/}
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-6">
                    {children}
                </div>
            </main>
            {/*Footer content goes here*/}
            <Footer />
        </div>

        </>

    );
}