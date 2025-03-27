
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { AlertCircle, Calendar, CheckCircle2, Clock, PenSquare, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button-custom";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  email: string;
}

const Dashboard = () => {
  const { user, isLoading: authLoading } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is authenticated
    if (!authLoading && !user) {
      navigate("/auth");
      return;
    }

    // Fetch user profile data
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        setIsLoading(true);
        
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
          
        if (error) {
          throw error;
        }
        
        setProfile(data);
      } catch (error: any) {
        console.error("Error fetching profile:", error.message);
        toast({
          variant: "destructive",
          title: "Failed to load profile",
          description: "Please try refreshing the page.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [user, authLoading, navigate, toast]);

  // Sample data for charts
  const activityData = [
    { name: 'Mon', posts: 4 },
    { name: 'Tue', posts: 3 },
    { name: 'Wed', posts: 7 },
    { name: 'Thu', posts: 5 },
    { name: 'Fri', posts: 8 },
    { name: 'Sat', posts: 2 },
    { name: 'Sun', posts: 0 },
  ];

  // Mock recent posts data
  const recentPosts = [
    { id: 1, title: "10 Tips for Better Social Media Engagement", status: "published", date: "2025-03-27" },
    { id: 2, title: "How to Grow Your Instagram Following", status: "scheduled", date: "2025-03-28" },
    { id: 3, title: "LinkedIn Strategy for B2B Companies", status: "draft", date: "2025-03-26" },
  ];

  if (authLoading || isLoading) {
    return (
      <PageLayout title="Dashboard" description="Your account dashboard">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-1/3" />
              <Skeleton className="h-4 w-1/4" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Skeleton className="h-[300px] w-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skeleton className="h-[200px] w-full" />
            <Skeleton className="h-[200px] w-full" />
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Dashboard" description="Your account dashboard">
      <div className="space-y-6">
        {/* Profile Summary Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Account Overview</CardTitle>
            <CardDescription>Manage your account and profile information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <Avatar className="h-16 w-16 border-2 border-primary/20">
                  <AvatarImage src={profile?.avatar_url || ""} alt={profile?.full_name || "User"} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {profile?.full_name?.split(" ").map(n => n[0]).join("") || user?.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{profile?.full_name || "Your Name"}</h3>
                  <p className="text-muted-foreground">{profile?.email || user?.email}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Settings size={16} />
                <span>Edit Profile</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-3 md:w-[400px] mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Activity Summary</CardTitle>
                <CardDescription>Your posting activity for the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="posts" fill="#8884d8" name="Posts" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>Recent Posts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map(post => (
                      <div key={post.id} className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="font-medium truncate max-w-[200px]">{post.title}</span>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" /> 
                            {post.date}
                          </div>
                        </div>
                        <Badge 
                          variant={
                            post.status === "published" ? "default" : 
                            post.status === "scheduled" ? "secondary" : "outline"
                          }
                        >
                          {post.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>Quick Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    <Button className="w-full justify-start" size="lg">
                      <PenSquare className="mr-2 h-4 w-4" />
                      <span>Create New Post</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="lg">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Schedule Content</span>
                    </Button>
                    <Button variant="secondary" className="w-full justify-start" size="lg">
                      <User className="mr-2 h-4 w-4" />
                      <span>View Analytics</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Posts Tab */}
          <TabsContent value="posts">
            <Card>
              <CardHeader>
                <CardTitle>Your Posts</CardTitle>
                <CardDescription>
                  Manage your published, scheduled, and draft posts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-12 border-2 border-dashed rounded-lg border-muted-foreground/20">
                  <div className="text-center">
                    <PenSquare className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-semibold">No posts yet</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Get started by creating your first post
                    </p>
                    <Button className="mt-4">
                      Create New Post
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Track your social media performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-12 border-2 border-dashed rounded-lg border-muted-foreground/20">
                  <div className="text-center">
                    <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-semibold">No data available</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Start posting content to see your analytics
                    </p>
                    <Button className="mt-4" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
