export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-center">
        Fail2LearnLab
      </h1>
      <p className="text-center text-gray-500 mt-4 text-lg">
        Choose a failure theme:
      </p>

      {/* …grille de cartes… */}

      {/* Pharma */}
      <Card
        title="Pharma"
        description="Explore pharmaceutical failures and lessons learned"
        href="/pharma"
      />

      {/* Batteries */}
      <Card
        title="Batteries"
        description="Investigate battery failure cases & safety incidents"
        href="/batteries"
      />

      {/* Materials */}
      <Card
        title="Materials"
        description="Check material synthesis failures & outcomes"
        href="/materials"
      />

      {/* Catalysis */}
      <Card
        title="Catalysis"
        description="Analyze catalytic reaction failures"
        href="/catalysis"
      />

      {/* Polymers */}
      <Card
        title="Polymers"
        description="Discover polymerization failures"
        href="/polymers"
      />

      {/* Chemistry Lab */}
      <Card
        title="Chemistry Lab"
        description="Explore general chemical experiment failures"
        href="/chemistry"
      />
    </main>
  )
}
