"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

type Message = {
  id: number;
  customer: string;
  text: string;
  time: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [customer, setCustomer] = useState("");
  const [text, setText] = useState("");

  function addMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessages((previous) => [
      {
        id: Date.now(),
        customer,
        text,
        time: new Date().toLocaleString(),
      },
      ...previous,
    ]);

    setCustomer("");
    setText("");
  }

  return (
    <main className="min-h-screen bg-slate-100 md:flex">
      <Sidebar />

      <section className="min-w-0 flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold">Messages</h1>

        <p className="mt-2 text-slate-600">
          Manage customer conversations.
        </p>

        <form
          onSubmit={addMessage}
          className="mt-8 space-y-4 rounded-2xl border bg-white p-6"
        >
          <h2 className="text-xl font-bold">Add Conversation Note</h2>

          <input
            required
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Customer name"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Conversation message or note"
            rows={4}
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white"
          >
            Add Note
          </button>
        </form>

        <div className="mt-8 rounded-2xl border bg-white p-6">
          <h2 className="mb-5 text-xl font-bold">
            Conversation History
          </h2>

          {messages.length === 0 ? (
            <p className="text-slate-500">
              No conversations available yet.
            </p>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="rounded-xl border p-4"
                >
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="font-bold">{message.customer}</h3>
                    <span className="text-sm text-slate-500">
                      {message.time}
                    </span>
                  </div>

                  <p className="mt-2 text-slate-600">{message.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
