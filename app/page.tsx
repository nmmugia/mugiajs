import BookPortfolio from "@/components/book-portfolio"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 p-4">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5 mix-blend-overlay"></div>
      <div className="container mx-auto flex min-h-screen items-center justify-center py-8">
        <BookPortfolio />
      </div>
    </main>
  )
}

