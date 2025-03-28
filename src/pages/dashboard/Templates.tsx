
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Templates = () => {
  return (
    <DashboardLayout
      title="Templates"
      description="Manage your content templates."
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
        <p className="text-center text-gray-500 py-10">No templates yet. Create your first template to get started.</p>
      </div>
    </DashboardLayout>
  );
};

export default Templates;
