
import { format } from "date-fns";
import PageLayout from "@/components/layout/PageLayout";

const Blog = () => {
  return (
    <PageLayout 
      title="Blog" 
      description="Latest news, updates and insights"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                {format(new Date(post.date), "MMMM d, yyyy")}
              </p>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <a 
                href="#" 
                className="text-primary hover:underline font-medium"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

const blogPosts = [
  {
    title: "Enhancing Productivity with Automation",
    date: "2023-09-15",
    excerpt: "Discover how automation can transform your workflow and boost productivity across your organization."
  },
  {
    title: "The Future of Remote Work",
    date: "2023-08-22",
    excerpt: "Explore the latest trends in remote work and how technology is enabling more flexible work arrangements."
  },
  {
    title: "Building a Data-Driven Culture",
    date: "2023-07-10",
    excerpt: "Learn how to foster a data-driven culture that empowers your team to make better decisions."
  },
  {
    title: "Security Best Practices for Small Businesses",
    date: "2023-06-05",
    excerpt: "Essential security measures every small business should implement to protect sensitive data."
  }
];

export default Blog;
