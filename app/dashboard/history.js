import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("/api/mock-api");
        if (!response.ok) {
          throw new Error("Failed to fetch history");
        }
        const result = await response.json();
        setHistory(result.history);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <p>Loading history...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">History</h1>
      <table className="w-full border-collapse border border-gray-200 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Region</th>
            <th className="border px-4 py-2">Activity</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">{item.region}</td>
              <td className="border px-4 py-2">{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
