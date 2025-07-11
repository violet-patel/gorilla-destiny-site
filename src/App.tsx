import bandPhoto from './assets/group.jpg'
import './App.css'
import { useState } from 'react';
import Shows from './components/Shows';
import Contact from './components/Contact';

function App() {
  const [view, setView] = useState("");

  const LoadContent = () => {
    switch (view) {
      case "shows":
        return <Shows />
      case "contact":
        return <Contact />
      default:
        return (
          <div className="fade-in flex flex-col items-center">
            <a href="https://www.instagram.com/gorilladestinyband/" target="_blank" className="w-[85%] h-auto">
              <img src={bandPhoto} className="logo w-full h-auto" alt="Gorilla Destiny" />
            </a>
            <a href="https://www.instagram.com/mintgreentz/" target="_blank" className="block text-left w-[85%]">
              Photo Credit: @mintgreentz
            </a>
            <Shows />
            <Contact />
          </div>
        )
    }
  }

  return (
    <>
      <div className="header top-0 text-center">
        <h1 className="unifrakturmaguntia-regular text-[110px] leading-none">
          Gorilla Destiny
        </h1>
        <hr></hr>
        <div className="button_bar space-x-3 py-2">
          <button className="button" onClick={() => setView("")}>Home</button>
          <button className="button" onClick={() => setView("shows")}>Shows</button>
          <button className="button" onClick={() => setView("contact")}>Contact</button>
        </div>
      </div>
      
      <div className="content_container py-2 flex flex-col items-center">
        <LoadContent />
      </div>
    </>
  )
}

export default App
