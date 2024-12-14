import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-center text-3xl font-bold">
          Welcome to the Analytics Dashboard
        </h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Track and visualize your analytics data effortlessly
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Navigate to the different sections of the dashboard to explore user
          growth, revenue trends, and engagement metrics.
        </p>

        <div className="flex space-x-4">
          <Link href="/dashboard">
            <a className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
              Analytics Summary
            </a>
          </Link>
          <Link href="/dashboard/history">
            <a className="px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition">
              View History
            </a>
          </Link>
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-white py-4">
        <p className="text-center">
          © {new Date().getFullYear()} Analytics Dashboard. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
