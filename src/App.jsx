import { useState } from "react"
import Navbar from "./UI/Navbar"
import MobileMenu from "./UI/MobileMenu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />  
    </>
  )
}

export default App
