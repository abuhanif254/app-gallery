import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"
import Navbar from "./components/header/Navbar"
import Home from "./pages/Home"
import Apps from "./pages/Apps"
import Installation from "./pages/Installation"



function App() {
  

  return (
    <>
      <div>

                <Navbar />
                <Routes>
                    <Route path="/" element= {<Home />} />
                     <Route path="/apps" element= {<Apps />} />
                      <Route path="/installation" element= {<Installation />} />
                </Routes>
                 <Footer />

      </div>
    </>
  )
}

export default App
