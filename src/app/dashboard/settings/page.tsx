"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function SettingsPage() {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState(true);

  function saveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Settings saved temporarily. Database connection is coming soon.");
  }

  return (
    <main className="min-h-screen bg-slate-100 md:flex">
      <Sidebar />

      <section className="min-w-0 flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold">Settings</h1>

        <p className="mt-2 text-slate-600">
          Manage your business preferences.
        </p>

        <form
          onSubmit={saveSettings}
          className="mt-8 max-w-2xl space-y-6 rounded-2xl border bg-white p-6"
        >
          <div>
            <h2 className="text-xl font-bold">Business Information</h2>
            <p className="mt-1 text-sm text-slate-500">
              Update your business details.
            </p>
          </div>

          <div>
            <label className="mb-2 block font-medium">Business Name</label>
            <input
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Enter business name"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Business Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter business email"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full rounded-lg border p-3"
            >
              <option>English</option>
              <option>বাংলা</option>
            </select>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-sm text-slate-500">
                Enable business notifications.
              </p>
            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="h-5 w-5"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 p-3 font-semibold text-white"
          >
            Save Settings
          </button>
        </form>
      </section>
    </main>
  );
}
