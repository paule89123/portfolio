import React from 'react';
import './styles.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import CV from './components/CV'
import Contact from './components/Contact'
import PortfolioPage from './components/PortfolioPage'
import { Switch, Route } from 'react-router-dom'
import joanneSite from './videos/joanne-site-cropped.mp4'
import coverful from './videos/coverful-cropped.mp4'
import reminders from './videos/reminders-cropped.mp4'
import calculator from './images/calculator.jpg'
import spotifyPlaylistMaker from './videos/spotify-playlist-maker-cropped.mp4'
import spotifyPlaylistMakerGif from './videos/spotify-playlist-maker.gif'
import coverfulGif from './videos/coverful.gif'
import joanneSiteGif from './videos/joanne-site.gif'
import remindersGif from './videos/reminders.gif'

function App() {

  const joanneSiteTitle = <a className="large-link" href="https://paule89123.github.io/Joanne-site" target="_blank" rel="noopener"><div>joanne-evans<span className="blue-text">.</span>com</div></a>

  const coverfulTitle = <a className="large-link" href="https://paule89123.github.io/coverful/" target="_blank" rel="noopener"><div>Coverful<span className="blue-text">.</span></div></a>

  const calculatorTitle = <a className="large-link" href="https://paule89123.github.io/calculator" target="_blank" rel="noopener"><div>Calculator<span className="blue-text">.</span></div></a>

  const remindersTitle = <a className="large-link" href="https://paule89123.github.io/reminders-app" target="_blank" rel="noopener"><div>Reminders<span className="blue-text">.</span></div></a>

  const spotifyPlaylistMakerTitle = <a className="large-link" href="https://paule89123.github.io/spotify-playlist-maker" target="_blank" rel="noopener"><div>Spotify Playlist Maker<span className="blue-text">.</span></div></a>

  
  const joanneSiteCode = <span><a className="link" href="https://github.com/paule89123/Joanne-site" target="_blank" rel="noopener">See the code</a></span>
  
  const coverfulCode = <span><a className="link" href="https://github.com/paule89123/coverful" target="_blank" rel="noopener">See the code</a></span>
  
  const calculatorCode = <span><a className="link" href="https://github.com/paule89123/calculator" target="_blank" rel="noopener">See the code</a></span>
  
  const remindersCode = <span><a className="link" href="https://github.com/paule89123/reminders-app" target="_blank" rel="noopener">See the code</a></span>

  const spotifyPlaylistMakerCode = <span><a className="link" href="https://github.com/paule89123/spotify-playlist-maker" target="_blank" rel="noopener">See the code</a></span>


  const joanneSiteLink = <span><a className="link" href="https://paule89123.github.io/Joanne-site/" target="_blank" rel="noopener">joanne-evans.com</a></span>
  
  const coverfulLink = <span><a className="link" href="https://paule89123.github.io/coverful/" target="_blank" rel="noopener">coverful.co.uk</a></span>
  
  const calculatorLink = <span><a className="link" href="https://paule89123.github.io/calculator/" target="_blank" rel="noopener">See the web app</a></span>
  
  const remindersLink = <span><a className="link" href="https://paule89123.github.io/reminders-app/" target="_blank" rel="noopener">See the web app</a></span>

  const spotifyPlaylistMakerLink = <span><a className="link" href="https://paule89123.github.io/spotify-playlist-maker/" target="_blank" rel="noopener">See the web app</a></span>


  return (
    <div id="app">
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"}>
                <Header loc="home" />
                <Home />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/about"}>
                <Header />
                <About />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/cv"}>
                <Header />
                <CV />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/joanne-site"}>
                <Header />
                <PortfolioPage
                    video={joanneSite}
                    gif={joanneSiteGif}
                    alt=""
                    title={joanneSiteTitle}
                    id="joanne-site"
                    code={joanneSiteCode}
                    link={joanneSiteLink}
                />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/coverful"}>
                <Header />
                <PortfolioPage
                    video={coverful}
                    gif={coverfulGif}
                    alt="GIF of Coverful website"
                    title={coverfulTitle}
                    id="coverful"
                    code={coverfulCode}
                    link={coverfulLink}
                />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/calculator-app"}>
                <Header />
                <PortfolioPage
                    img={calculator}
                    alt="Image of calculator app"
                    title={calculatorTitle}
                    id="calculator"
                    code={calculatorCode}
                    link={calculatorLink}
                />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/reminders-app"}>
                <Header />
                <PortfolioPage
                    video={reminders}
                    gif={remindersGif}
                    alt="GIF of Reinders app"
                    title={remindersTitle}
                    id="reminders"
                    code={remindersCode}
                    link={remindersLink}
                />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/spotify-playlist-maker"}>
                <Header />
                <PortfolioPage
                    video={spotifyPlaylistMaker}
                    gif={spotifyPlaylistMakerGif}
                    alt="GIF of Spotify Playlist Maker"
                    title={spotifyPlaylistMakerTitle}
                    id="spotifyPlaylistMaker"
                    code={spotifyPlaylistMakerCode}
                    link={spotifyPlaylistMakerLink}
                />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/contact"}>
                <Header />
                <Contact />
            </Route>
        </Switch>
        <Footer />
    </div>
  )
}

export default App;
