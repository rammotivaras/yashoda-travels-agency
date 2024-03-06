import { useEffect, useState } from "react"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

import Services from "./components/services/Services";
import ContactPage from "./components/contact/Contact";
import Reviews from "./components/reviews/Reviews";
import Booking from "./components/booking/Booking";
const App = () => {


  const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"ligth");

  const element = document.documentElement;

  useEffect(()=>{
    if(theme === "dark"){
      element.classList.add("dark") ;
      localStorage.setItem("theme","dark");
    }else{
      element.classList.remove("dark") ;
      localStorage.setItem("theme","light");
    }
  },[theme])





  return (
    <div >
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <About theme={theme} />
      <Services/>
      <Reviews/>
      <Booking/>
      <ContactPage/>
    </div>
  )
}

export default App