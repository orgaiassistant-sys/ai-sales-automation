"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: "🏠" },
  { name: "AI Assistant", href: "/dashboard/assistant", icon: "🤖" },
  { name: "Products", href: "/dashboard/products", icon: "📦" },
  { name: "Customers", href: "/dashboard/customers", icon: "👥" },
  { name: "Messages", href: "/dashboard/messages", icon: "💬" },
  { name: "Orders", href: "/dashboard/orders", icon: "🛒" },
  { name: "Channels", href: "/dashboard/channels", icon: "🔗" },
  { name: "Analytics", href: "/dashboard/analytics", icon: "📊" },
  { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b bg-white p-4 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <h2 className="mb-5 text-xl font-bold text-indigo-700">
        SalesAI
      </h2>

      <nav className="flex flex-wrap gap-2 md:flex-col">
        {menuItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-3 text-sm font-medium ${
                active
                  ? "bg-indigo-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item.icon} {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
