export default function TopicPage({ params }) {
  const { topic } = params;

  const titles = {
    pharma: "Pharma",
    batteries: "Batteries",
    materials: "Materials",
    catalysis: "Catalysis",
    polymers: "Polymers",
    chemistry: "Chemistry Lab",
  };

  const name = titles[topic] ?? topic;

  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p className="text-gray-700 mb-6">
        Choose a test to run or explore known failures in this theme.
      </p>

      {/* Placeholder tests – on les détaillera ensuite */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-xl p-5">
          <h2 className="font-semibold">Test 1</h2>
          <p className="text-sm text-gray-600">Fast charging / Thermal runaway / etc.</p>
        </div>
        <div className="border rounded-xl p-5">
          <h2 className="font-semibold">Test 2</h2>
          <p className="text-sm text-gray-600">Safety + process adjustments</p>
        </div>
      </div>

      <div className="mt-8">
        <a href="/" className="text-blue-600 hover:underline">← Back to home</a>
      </div>
    </main>
  );
}
