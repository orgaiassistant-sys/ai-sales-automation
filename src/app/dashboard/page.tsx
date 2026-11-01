import Sidebar from "@/components/Sidebar";

const features = [
  ["🤖", "AI Assistant", "Automate customer replies."],
  ["📦", "Products", "Manage your products."],
  ["👥", "Customers", "View your customers."],
  ["💬", "Messages", "Manage conversations."],
  ["🛒", "Orders", "Track customer orders."],
  ["📊", "Analytics", "Monitor business performance."],
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 md:flex">
      <Sidebar />

      <section className="min-w-0 flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold text-slate-900">
          Business Overview
        </h1>

        <p className="mt-2 text-slate-600">
          Welcome to your AI Sales Automation Dashboard.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {features.map(([icon, title, description]) => (
            <div
              key={title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">{icon}</div>
              <h2 className="mt-4 text-xl font-bold">{title}</h2>
              <p className="mt-2 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
