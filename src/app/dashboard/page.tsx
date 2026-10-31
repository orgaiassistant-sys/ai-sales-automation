import Link from "next/link";

const features = [
  {
    title: "AI Assistant",
    description: "Manage automated customer replies.",
    icon: "🤖",
  },
  {
    title: "Products",
    description: "Add and manage your business products.",
    icon: "📦",
  },
  {
    title: "Customers",
    description: "View and manage your customers.",
    icon: "👥",
  },
  {
    title: "Orders",
    description: "Track customer orders.",
    icon: "🛒",
  },
  {
    title: "Messages",
    description: "Manage customer conversations.",
    icon: "💬",
  },
  {
    title: "Analytics",
    description: "Monitor your business performance.",
    icon: "📊",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <header className="flex items-center justify-between border-b bg-white px-6 py-5">
        <h1 className="text-xl font-bold text-indigo-700">
          SalesAI Dashboard
        </h1>

        <Link
          href="/"
          className="rounded-lg border px-4 py-2 text-sm font-medium"
        >
          Home
        </Link>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Business Overview
        </h2>

        <p className="mt-2 text-slate-600">
          Manage your business from one place.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">{feature.icon}</div>

              <h3 className="mt-4 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {feature.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-indigo-600">
                Coming Soon
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
