import './Header.css'
import { LuLightbulb } from "react-icons/lu";


const Header = () => {
  return (
    <header className='main-header'>
        <div className='container header-container'>
            <div className='logo-area'>
                <LuLightbulb />
                <a href='#'>Conception UI</a>
            </div>

            <nav className="main-nav">
                <a href="#features">Features</a>
                <a href="#generator">Generator</a>
                <a href="#">Pricing</a>
                <a href="#">Docs</a>
            </nav>

            <div className="header-actions">
                <button className="get-started-button">Get Started</button>
            </div>
        </div>
    </header>
  )
}

export default Header