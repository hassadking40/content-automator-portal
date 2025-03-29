
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button-custom";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const Connections = () => {
  const handleConfigurePlatform = (platformName: string) => {
    toast.info(`${platformName} configuration coming soon!`);
  };

  const handleDisconnectPlatform = (platformName: string) => {
    toast.success(`${platformName} has been disconnected.`);
  };

  const handleConnectPlatform = (platformName: string) => {
    toast.info(`${platformName} connection functionality coming soon!`);
  };

  const handleAddCustomPlatform = () => {
    toast.info("Custom platform configuration coming soon!");
  };

  return (
    <DashboardLayout
      title="Platform Connections"
      description="Connect and manage your social media platforms."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm border shadow-sm hover:shadow transition-all">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="bg-red-100 rounded-full p-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">YouTube</h3>
            <Badge variant="outline" className="mt-2 bg-green-100 text-green-700 border-green-200">Connected</Badge>
            <div className="mt-4 space-y-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleConfigurePlatform("YouTube")}
              >
                Configure
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDisconnectPlatform("YouTube")}
              >
                Disconnect
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border shadow-sm hover:shadow transition-all">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="bg-pink-100 rounded-full p-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Instagram</h3>
            <Badge variant="outline" className="mt-2 bg-green-100 text-green-700 border-green-200">Connected</Badge>
            <div className="mt-4 space-y-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleConfigurePlatform("Instagram")}
              >
                Configure
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDisconnectPlatform("Instagram")}
              >
                Disconnect
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="bg-white/80 backdrop-blur-sm border shadow-sm hover:shadow transition-all cursor-pointer"
          onClick={() => handleConnectPlatform("Facebook")}
        >
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="bg-blue-100 rounded-full p-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Facebook</h3>
            <Button 
              variant="default" 
              className="mt-4"
              onClick={() => handleConnectPlatform("Facebook")}
            >
              Connect
            </Button>
          </CardContent>
        </Card>

        <Card 
          className="bg-white/80 backdrop-blur-sm border shadow-sm hover:shadow transition-all cursor-pointer"
          onClick={() => handleConnectPlatform("TikTok")}
        >
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="bg-teal-100 rounded-full p-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">TikTok</h3>
            <Button 
              variant="default" 
              className="mt-4"
              onClick={() => handleConnectPlatform("TikTok")}
            >
              Connect
            </Button>
          </CardContent>
        </Card>

        <Card 
          className="bg-white/80 backdrop-blur-sm border shadow-sm hover:shadow transition-all cursor-pointer"
          onClick={() => handleConnectPlatform("Twitter/X")}
        >
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="bg-blue-100 rounded-full p-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Twitter/X</h3>
            <Button 
              variant="default" 
              className="mt-4"
              onClick={() => handleConnectPlatform("Twitter/X")}
            >
              Connect
            </Button>
          </CardContent>
        </Card>

        <Card 
          className="bg-white/80 backdrop-blur-sm border border-dashed shadow-sm hover:shadow transition-all cursor-pointer"
          onClick={handleAddCustomPlatform}
        >
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="bg-gray-100 rounded-full p-3 mb-3">
              <Plus className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-semibold">Add Custom Platform</h3>
            <p className="text-gray-500 text-sm text-center mt-2">Connect a custom API endpoint</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={handleAddCustomPlatform}
            >
              Configure
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Connections;
