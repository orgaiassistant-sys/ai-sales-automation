"use client";

import Sidebar from "@/components/Sidebar";

const channels = [
  {
    name: "Facebook",
    description: "Connect your Facebook Business Page.",
    icon: "🔵",
  },
  {
    name: "Instagram",
    description: "Connect your Instagram Professional Account.",
    icon: "📸",
  },
  {
    name: "WhatsApp",
    description: "Connect WhatsApp Business.",
    icon: "💬",
  },
  {
    name: "TikTok",
    description: "Connect your TikTok Business Account.",
    icon: "🎵",
  },
];

export default function ChannelsPage() {
  return (
    <main className="min-h-screen bg-slate-100 md:flex">
      <Sidebar />

      <section className="min-w-0 flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold">
          Connected Channels
        </h1>

        <p className="mt-2 text-slate-600">
          Connect your social media business accounts.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="text-4xl">{channel.icon}</div>

              <h2 className="mt-4 text-xl font-bold">
                {channel.name}
              </h2>

              <p className="mt-2 text-slate-600">
                {channel.description}
              </p>

              <button
                type="button"
                disabled
                className="mt-6 w-full cursor-not-allowed rounded-lg bg-slate-200 p-3 font-semibold text-slate-500"
              >
                Integration Coming Soon
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
