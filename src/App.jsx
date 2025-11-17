import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Expertise from './components/Expertise'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Expertise />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Marcellini — All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
