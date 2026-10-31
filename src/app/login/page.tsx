"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Login system will be connected to the backend soon.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-slate-600">
          Sign in to your AI Sales Automation account.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-slate-600">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold text-indigo-600">
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}
