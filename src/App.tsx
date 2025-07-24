import bandPhoto from './assets/group.jpg'
import logo from './assets/logo.png'
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
    <div className="max-w-[1920px] w-full">
      <div className="w-full">
        <div className="flex items-center justify-center h-auto w-full py-4 gap-x-4 md:gap-x-8 lg:gap-x-16 flex-wrap">
          <button className="button px-8 py-3" onClick={() => setView("shows")}>Shows</button>
          <button className="button px-8 py-3" onClick={() => setView("music")}>Music</button>
          <a onClick={() => setView("shows")} className="flex-shrink-0 cursor-pointer">
            <img src={logo} className="unifrakturmaguntia-regular w-[700px] h-auto leading-none py-4 drop-shadow-lg" alt="Gorilla Destiny"/>
          </a>
          <button className="button px-8 py-3" onClick={() => setView("gallery")}>Gallery</button>
          <button className="button px-8 py-3" onClick={() => setView("contact")}>Contact</button>
        </div>
        <hr className="py-1 w-full" />
      </div>
      
      <div className="content_container py-4 flex flex-col items-center">
        <LoadContent />
      </div>

      <div className="footer">
        
      </div>
    </div>
  )
}

export default App
