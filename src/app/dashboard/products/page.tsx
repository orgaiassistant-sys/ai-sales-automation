"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

type Product = {
  id: number;
  name: string;
  price: string;
  stock: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  function addProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price,
      stock,
    };

    setProducts((previous) => [...previous, newProduct]);

    setName("");
    setPrice("");
    setStock("");
  }

  return (
    <main className="min-h-screen bg-slate-100 md:flex">
      <Sidebar />

      <section className="min-w-0 flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold">Products Management</h1>
        <p className="mt-2 text-slate-600">
          Add and manage your business products.
        </p>

        <form
          onSubmit={addProduct}
          className="mt-8 grid gap-4 rounded-2xl border bg-white p-6 sm:grid-cols-2"
        >
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product name"
            className="rounded-lg border p-3"
          />

          <input
            required
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price (BDT)"
            className="rounded-lg border p-3"
          />

          <input
            required
            type="number"
            min="0"
            step="1"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Stock quantity"
            className="rounded-lg border p-3"
          />

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 p-3 font-semibold text-white"
          >
            Add Product
          </button>
        </form>

        <div className="mt-8 overflow-x-auto rounded-2xl border bg-white p-6">
          <h2 className="mb-5 text-xl font-bold">Product List</h2>

          {products.length === 0 ? (
            <p className="text-slate-500">
              No products added yet.
            </p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-slate-500">
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Stock</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-3">{product.name}</td>
                    <td className="p-3">৳{product.price}</td>
                    <td className="p-3">{product.stock}</td>
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
