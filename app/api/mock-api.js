export default function handler(req, res) {
  if (req.method === "GET") {
    // Mock data
    const data = {
      summary: {
        userGrowth: [10, 20, 30, 40, 50],
        revenueTrends: [500, 1000, 1500, 2000, 2500],
        engagementMetrics: [60, 70, 80, 90, 100],
      },
      history: [
        { id: 1, date: "2024-12-01", region: "North", activity: "Active" },
        { id: 2, date: "2024-12-02", region: "South", activity: "Inactive" },
        { id: 3, date: "2024-12-03", region: "West", activity: "Active" },
        { id: 4, date: "2024-12-04", region: "East", activity: "Inactive" },
      ],
    };

    // Send the response
    res.status(200).json(data);
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
