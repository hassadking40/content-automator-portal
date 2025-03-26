
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Youtube, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  Link
} from 'lucide-react';

interface PlatformProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const platforms: PlatformProps[] = [
  {
    name: "YouTube",
    description: "Schedule and auto-publish videos with proper titles, descriptions, and tags.",
    icon: <Youtube size={32} />,
    color: "from-red-500 to-red-600"
  },
  {
    name: "Instagram",
    description: "Publish photos, carousels, stories, and reels with hashtags and locations.",
    icon: <Instagram size={32} />,
    color: "from-pink-500 via-purple-500 to-indigo-500"
  },
  {
    name: "Facebook",
    description: "Share posts, photos, videos, and stories to your pages and groups.",
    icon: <Facebook size={32} />,
    color: "from-blue-600 to-blue-700"
  },
  {
    name: "Twitter/X",
    description: "Post tweets with images, videos, polls, and threads at the right time.",
    icon: <Twitter size={32} />,
    color: "from-sky-400 to-blue-500"
  },
  {
    name: "LinkedIn",
    description: "Share professional content to your profile, pages, and showcase pages.",
    icon: <Linkedin size={32} />,
    color: "from-blue-700 to-blue-800"
  },
  {
    name: "TikTok",
    description: "Post videos with captions, hashtags, and mentions to grow your audience.",
    icon: <Link size={32} />,
    color: "from-black via-gray-800 to-gray-900"
  },
];

const PlatformCard = ({ platform, index, isInView }: { platform: PlatformProps; index: number; isInView: boolean }) => {
  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden transform transition-all duration-500",
        isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`p-6 bg-white dark:bg-sahla-dark/80 border border-border hover:border-primary/30 shadow-elevation-low hover:shadow-elevation-medium transition-all duration-300 h-full`}>
        <div className="mb-4">
          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center text-white`}>
            {platform.icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-sahla-dark dark:text-white">{platform.name}</h3>
        <p className="text-muted-foreground">{platform.description}</p>
      </div>
    </div>
  );
};

const PlatformsSection = () => {
  const platformsRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (platformsRef.current) {
      observer.observe(platformsRef.current);
    }

    return () => {
      if (platformsRef.current) {
        observer.unobserve(platformsRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding" id="platforms">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-primary mb-4",
              "transition-all duration-700",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            <span className="mr-1">🌐</span>
            Multiple Platforms
          </div>
          <h2 
            className={cn(
              "h2 mb-4 text-sahla-dark dark:text-white",
              "transition-all duration-700 delay-100",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            Connect and Automate All Your
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sahla-blue to-sahla-purple"> Social Media Accounts</span>
          </h2>
          <p 
            className={cn(
              "text-muted-foreground text-lg",
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            Easily connect all your social media accounts and automate content posting with just a few clicks.
          </p>
        </div>

        <div 
          ref={platformsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {platforms.map((platform, index) => (
            <PlatformCard 
              key={platform.name} 
              platform={platform} 
              index={index}
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
