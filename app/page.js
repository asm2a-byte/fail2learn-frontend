export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Fail2LearnLab
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Choose a research theme:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <a
          href="#"
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">Pharma</h2>
          <p className="text-gray-600 mt-2">
            Explore failed experiments in pharmaceuticals
          </p>
        </a>

        <a
          href="#"
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">Batteries</h2>
          <p className="text-gray-600 mt-2">
            Investigate battery experiments & safety
          </p>
        </a>

        <a
          href="#"
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">Materials</h2>
          <p className="text-gray-600 mt-2">
            Check material synthesis outcomes
          </p>
        </a>

        <a
          href="#"
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">Catalysis</h2>
          <p className="text-gray-600 mt-2">
            Analyze catalytic reactions
          </p>
        </a>

        <a
          href="#"
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">Polymers</h2>
          <p className="text-gray-600 mt-2">
            Discover polymerization failures
          </p>
        </a>

        <a
          href="#"
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold text-indigo-600">Chemistry Lab</h2>
          <p className="text-gray-600 mt-2">
            General chemical experiments
          </p>
        </a>
      </div>
    </main>
  )
}
