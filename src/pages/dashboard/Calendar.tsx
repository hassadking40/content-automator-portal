
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Calendar = () => {
  return (
    <DashboardLayout
      title="Content Calendar"
      description="Schedule and manage your content across platforms."
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
        <p className="text-center text-gray-500 py-10">No scheduled content yet. Create a workflow to start scheduling content.</p>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;
