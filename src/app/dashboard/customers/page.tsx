"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function addCustomer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setCustomers((previous) => [
      ...previous,
      {
        id: Date.now(),
        name,
        email,
        phone,
      },
    ]);

    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <main className="min-h-screen bg-slate-100 md:flex">
      <Sidebar />

      <section className="min-w-0 flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold">
          Customers Management
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your business customers.
        </p>

        <form
          onSubmit={addCustomer}
          className="mt-8 grid gap-4 rounded-2xl border bg-white p-6"
        >
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Customer full name"
            className="rounded-lg border p-3"
          />

          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Customer email"
            className="rounded-lg border p-3"
          />

          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="rounded-lg border p-3"
          />

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 p-3 font-semibold text-white"
          >
            Add Customer
          </button>
        </form>

        <div className="mt-8 rounded-2xl border bg-white p-6">
          <h2 className="mb-5 text-xl font-bold">
            Customer List
          </h2>

          {customers.length === 0 ? (
            <p className="text-slate-500">
              No customers added yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                  </tr>
                </thead>

                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b">
                      <td className="p-3">{customer.name}</td>
                      <td className="p-3">{customer.email}</td>
                      <td className="p-3">{customer.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
