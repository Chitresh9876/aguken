import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/mock-api");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.summary);
        setLoading(false);
        toast.success("Data loaded successfully!");
      } catch (error) {
        toast.error("Error loading data: " + error.message);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-gray-200 h-40 w-full animate-pulse"></div>
        <div className="bg-gray-200 h-40 w-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Analytics Summary</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-bold">User Growth</h2>
          <p>{data.userGrowth.join(", ")}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-bold">Revenue Trends</h2>
          <p>{data.revenueTrends.join(", ")}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-bold">Engagement Metrics</h2>
          <p>{data.engagementMetrics.join(", ")}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
