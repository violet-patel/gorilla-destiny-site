import bandLogo from './assets/logo.webp'
import './App.css'

function App() {
  return (
    <>
      <div className="header">
        <h1 className="unifrakturmaguntia-regular text-6xl text-center">
          Gorilla Destiny
        </h1>
        <hr></hr>
        <div className="button_bar space-x-3 py-2">
          <button className="button">Home</button>
          <button className="button">Shows</button>
          <button className="button">Gallery</button>
          <button className="button">Contact</button>
        </div>
      </div>
      <div className="content_container">
        <a href="https://www.instagram.com/gorilladestinyband/" target="_blank">
          <img src={bandLogo} className="logo w-128 h-128" alt="Gorilla Destiny logo" />
        </a>
      </div>
    </>
  )
}

export default App
