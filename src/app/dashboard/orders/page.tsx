"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

type Order = {
  id: number;
  customer: string;
  product: string;
  amount: string;
  status: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Pending");

  function addOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setOrders((previous) => [
      {
        id: Date.now(),
        customer,
        product,
        amount,
        status,
      },
      ...previous,
    ]);

    setCustomer("");
    setProduct("");
    setAmount("");
    setStatus("Pending");
  }

  function updateStatus(id: number, newStatus: string) {
    setOrders((previous) =>
      previous.map((order) =>
        order.id === id
          ? { ...order, status: newStatus }
          : order
      )
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 md:flex">
      <Sidebar />

      <section className="min-w-0 flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold">Orders Management</h1>
        <p className="mt-2 text-slate-600">
          Manage and track customer orders.
        </p>

        <form
          onSubmit={addOrder}
          className="mt-8 grid gap-4 rounded-2xl border bg-white p-6"
        >
          <h2 className="text-xl font-bold">Create New Order</h2>

          <input
            required
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Customer name"
            className="rounded-lg border p-3"
          />

          <input
            required
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Product name"
            className="rounded-lg border p-3"
          />

          <input
            required
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Order amount (BDT)"
            className="rounded-lg border p-3"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg border p-3"
          >
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Processing</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 p-3 font-semibold text-white"
          >
            Add Order
          </button>
        </form>

        <div className="mt-8 overflow-x-auto rounded-2xl border bg-white p-6">
          <h2 className="mb-5 text-xl font-bold">Order List</h2>

          {orders.length === 0 ? (
            <p className="text-slate-500">No orders available yet.</p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-slate-500">
                  <th className="p-3">Customer</th>
                  <th className="p-3">Product</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="p-3">{order.customer}</td>
                    <td className="p-3">{order.product}</td>
                    <td className="p-3">৳{order.amount}</td>
                    <td className="p-3">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          updateStatus(order.id, e.target.value)
                        }
                        className="rounded-lg border p-2"
                      >
                        <option>Pending</option>
                        <option>Confirmed</option>
                        <option>Processing</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </main>
  );
}
