import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import CV from './components/CV'
import PortfolioPage from './components/PortfolioPage'
import { Switch, Route } from 'react-router-dom'
import joanneSite from './videos/joanne-site-cropped.mp4'
import coverful from './videos/coverful-cropped.mp4'
import reminders from './videos/reminders-cropped.mp4'
import calculator from './images/calculator-large.jpg'

function App() {

  const joanneSiteTitle = <div>joanne-evans<span className="blue-text">.</span>com</div>
  const coverfulTitle = <div>Coverful<span className="blue-text">.</span></div>
  const remindersTitle = <div>Reminders<span className="blue-text">.</span></div>
  const calculatorTitle = <div>Calculator<span className="blue-text">.</span></div>
  
  const joanneSiteCode = <div><a className="link" href="https://github.com/paule89123/Joanne-site" target="_blank" rel="noopener">See the code</a></div>
  
  const coverfulCode = <div><a className="link" href="https://github.com/paule89123/coverful" target="_blank" rel="noopener">See the code</a></div>
  
  const calculatorCode = <div><a className="link" href="https://github.com/paule89123/calculator" target="_blank" rel="noopener">See the code</a></div>
  
  const remindersCode = <div><a className="link" href="https://github.com/paule89123/reminders-app" target="_blank" rel="noopener">See the code</a></div>


  return (
    <div id="app">
        <Switch>
            <Route exact path="/">
                <Header loc="home" />
                <Home />
            </Route>
            <Route path="/about">
                <Header loc="about"/>
                <About />
            </Route>
            <Route path="/cv">
                <Header loc="cv"/>
                <CV />
            </Route>
            <Route path="/joanne-site">
                <Header loc="joanne-site"/>
                <PortfolioPage
                    video={joanneSite}
                    title={joanneSiteTitle}
                    id="joanne-site"
                    description="joanne-site"
                    code={joanneSiteCode}
                />
            </Route>
            <Route path="/coverful">
                <Header loc="coverful"/>
                <PortfolioPage
                    video={coverful}
                    title={coverfulTitle}
                    id="coverful"
                    description="coverful"
                    code={coverfulCode}
                />
            </Route>
            <Route path="/calculator-app">
                <Header loc="calculator-app"/>
                <PortfolioPage
                    img={calculator}
                    title={calculatorTitle}
                    id="calculator"
                    description="calculator"
                    code={calculatorCode}
                />
            </Route>
            <Route path="/reminders-app">
                <Header loc="reminders-app"/>
                <PortfolioPage
                    video={reminders}
                    title={remindersTitle}
                    id="reminders"
                    description="reminders"
                    code={remindersCode}
                />
            </Route>
        </Switch>
        <Footer />
    </div>
  )
}

export default App;
