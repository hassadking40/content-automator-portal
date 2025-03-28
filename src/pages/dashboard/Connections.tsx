
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Connections = () => {
  return (
    <DashboardLayout
      title="Connections"
      description="Manage your platform connections."
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
        <p className="text-center text-gray-500 py-10">No connections yet. Connect your first platform to get started.</p>
      </div>
    </DashboardLayout>
  );
};

export default Connections;
