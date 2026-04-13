import Navbar from "./components/navbar"
import Header from "./components/header"
import About from "./components/about"
import Projects from "./components/projects"
import Footer from "./components/footer"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="body-p">

      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Header />
          </>
        } />

        
        <Route path="/about" element={<About />} />

        
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App