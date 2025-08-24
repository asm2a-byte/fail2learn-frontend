export default function Home() {
  const topics = [
    { name: "Pharma", description: "Explore failed experiments in pharmaceuticals" },
    { name: "Batteries", description: "Investigate battery experiments & safety" },
    { name: "Materials", description: "Check material synthesis outcomes" },
    { name: "Catalysis", description: "Analyze catalytic reactions" },
    { name: "Polymers", description: "Discover polymerization failures" },
    { name: "Chemistry Lab", description: "General chemical experiments" }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Fail2LearnLab</h1>
      <p className="mb-8 text-lg">Choose a research theme:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="p-6 rounded-2xl shadow-lg bg-white hover:bg-gray-200 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-2">{topic.name}</h2>
            <p className="text-sm text-gray-600">{topic.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
