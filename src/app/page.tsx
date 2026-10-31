import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="flex items-center justify-between border-b bg-white px-6 py-5">
        <h1 className="text-xl font-bold text-indigo-700">
          SalesAI
        </h1>

        <div className="flex gap-4">
          <Link href="/login" className="text-slate-700">
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="mb-4 font-semibold text-indigo-600">
          AI SOCIAL MEDIA SALES AUTOMATION
        </p>

        <h2 className="text-4xl font-bold leading-tight text-slate-900">
          Grow Your Business With AI
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Manage customer conversations, automate sales,
          track orders and grow your business from one platform.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/register"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white"
          >
            Start for Free
          </Link>

          <Link
            href="/login"
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold"
          >
            Sign In
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 md:grid-cols-3">
        {[
          {
            title: "AI Assistant",
            description: "Help customers with intelligent AI replies.",
          },
          {
            title: "Sales Management",
            description: "Manage products, customers and orders.",
          },
          {
            title: "Business Analytics",
            description: "Understand your business performance.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-xl font-bold">
              {item.title}
            </h3>
            <p className="text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
