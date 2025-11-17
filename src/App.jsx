import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Expertise from './components/Expertise'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030712] via-[#0a0f1f] to-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Expertise />
        <Contact />
        <footer className="py-12 text-center text-sm text-white/50">© {new Date().getFullYear()} Marcellini — All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
