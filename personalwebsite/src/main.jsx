import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components/style.css'
import Navbar from './components/navbar.jsx'
import SocialBar from './components/social-bar.jsx'
import Home from './components/home.jsx'
import Projects from './components/projects.jsx'
import ExperienceData from './components/experience.jsx'
import { Quote1, Quote2 } from './components/quote.jsx'
import AboutMe from './components/aboutme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <App />
    <AboutMe />
    <Quote1 />
    <ExperienceData />
    <Projects />
    <Quote2 />
    <SocialBar />
  </React.StrictMode>,
)
