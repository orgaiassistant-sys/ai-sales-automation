"use client";

import Sidebar from "@/components/Sidebar";

const statistics = [
  {
    title: "Total Sales",
    value: "৳0",
    description: "Total business revenue",
    icon: "💰",
  },
  {
    title: "Total Orders",
    value: "0",
    description: "All customer orders",
    icon: "🛒",
  },
  {
    title: "Total Customers",
    value: "0",
    description: "Registered customers",
    icon: "👥",
  },
  {
    title: "Total Products",
    value: "0",
    description: "Available products",
    icon: "📦",
  },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-slate-100 md:flex">
      <Sidebar />

      <section className="min-w-0 flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold">
          Business Analytics
        </h1>

        <p className="mt-2 text-slate-600">
          Track your business performance.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-medium text-slate-600">
                  {item.title}
                </h2>

                <span className="text-3xl">{item.icon}</span>
              </div>

              <p className="mt-4 text-3xl font-bold">
                {item.value}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border bg-white p-6">
          <h2 className="text-xl font-bold">
            Sales Performance
          </h2>

          <div className="mt-6 flex min-h-48 items-center justify-center rounded-xl bg-slate-50">
            <p className="text-center text-slate-500">
              Sales chart will appear after database integration.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
