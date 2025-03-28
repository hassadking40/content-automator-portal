
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-sahla-blue to-sahla-purple">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8">{description}</p>
            )}
            <div className="mt-6 md:mt-8">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
