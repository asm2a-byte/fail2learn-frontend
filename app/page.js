import Link from "next/link";

const topics = [
  { slug: "pharma", name: "Pharma", description: "Explore failed experiments in pharmaceuticals" },
  { slug: "batteries", name: "Batteries", description: "Investigate battery experiments & safety" },
  { slug: "materials", name: "Materials", description: "Check material synthesis outcomes" },
  { slug: "catalysis", name: "Catalysis", description: "Analyze catalytic reactions" },
  { slug: "polymers", name: "Polymers", description: "Discover polymerization failures" },
  { slug: "chemistry", name: "Chemistry Lab", description: "General chemical experiments" }
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-2">Fail2LearnLab</h1>
      <p className="mb-8 text-lg text-gray-700">Choose a research theme:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {topics.map((t) => (
          <Link
            key={t.slug}
            href={`/${t.slug}`}
            className="p-6 rounded-2xl shadow-md bg-white hover:bg-gray-50 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{t.name}</h2>
            <p className="text-sm text-gray-600">{t.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
