import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import ComparisonTable from "./components/ComparisonTable"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Features />
      <ComparisonTable />
      <FAQ />
      <Footer />
    </main>
  )
}

