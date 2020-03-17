import React, { useEffect } from 'react';
import PortfolioItem from './PortfolioItem'
import coverful from '../images/coverful.png'
import joanne from '../images/joanne.png'
import calculator from '../images/calculator.png'
import reminders from '../images/reminders.png'
import me from '../images/me.png'
import meFade from '../images/me-fade.png'
import $ from 'jquery'

function Home() {

    useEffect(() => {
        document.addEventListener('scroll', scrollEffect);
        return () => document.removeEventListener('scroll', scrollEffect);
    }, []);

    function scrollEffect() {
        var windowTop = $(window).scrollTop();
        var scrollZone1 = $('.fade1').position().top - 660;
        var scrollZone2 = $('.fade2').position().top - 660;
        var scrollZone3 = $('.fade3').position().top - 660;
        var scrollZone4 = $('.fade4').position().top - 660;
        var scrollZone5 = $('.fade5').position().top - 660;

        if (scrollZone1 < windowTop) {
            $('.fade1').addClass('visible');
            $('.fade1').removeClass('invisible');
        }
        if (scrollZone2 < windowTop) {
            $('.fade2').addClass('visible');
            $('.fade2').removeClass('invisible');
        }
        if (scrollZone3 < windowTop) {
            $('.fade3').addClass('visible');
            $('.fade3').removeClass('invisible');
        }
        if (scrollZone4 < windowTop) {
            $('.fade4').addClass('visible');
            $('.fade4').removeClass('invisible');
        }
        if (scrollZone5 < windowTop) {
            $('.fade5').addClass('visible');
            $('.fade5').removeClass('invisible');
        }
    }

    return (
        <main>
            <div className="home-columns">
                <div className="home-columns__left-column textcolumn">
                    <div className="display-text">
                        <div className="display-text__1 large-devices-only">HELLO!</div>
                        <div className="display-text__2 large-devices-only">I’m Paul<span className="blue-text">.</span></div>
                        <div className="display-text__3 large-devices-only">I'm a self-taught front-end developer</div>
                        <div id="mobile-only-1" className="display-text__2 mobile-only">Paul Evans<span className="blue-text">.</span></div>
                        <div id="mobile-only-2" className="display-text__3 mobile-only">Front-end developer</div>

                    </div>
                </div>
                <div className="home-columns__right-column cartooncolumn">
                    <div className="cartoon-container">
                        <img alt="cartoon" className="large-devices-only" src={me} />
                        <img alt="cartoon" className="mobile-only"src={meFade} />
                    </div>
                </div>
            </div>

            <div id="portfolio" className="home-columns">
                <div className="home-columns__left-column">
                    <div id="spacer"></div>
                    <div className="heading fade1 invisible">
                        Things I’ve Made<span className="blue-text">.</span>
                    </div>
                    <div className="fade2 invisible">
                            <PortfolioItem 
                                img={joanne}
                                alt="Screenshot of Joanne Evans's website"
                                title="joanne-evans.com"
                                subtitle="Opera singer"
                                link="/joanne-site"
                            />
                    </div>
                    <div className="fade3 invisible">
                            <PortfolioItem 
                                img={calculator}
                                alt="Screenshot of Calculator App"
                                title="Calculator"
                                subtitle="Web app"
                                link="/calculator-app"
                            />
                    </div>
                </div>
                <div className="home-columns__right-column">
                    <div className="fade4 invisible">
                            <PortfolioItem 
                                img={coverful}
                                alt="Screenshot of coverful.co.uk"
                                title="coverful.co.uk"
                                subtitle="E-commerce site"
                                link="/coverful"
                            />
                    </div>
                    <div className="fade5 invisible">
                            <PortfolioItem 
                                img={reminders}
                                alt="Screenshot of Reminders App"
                                title="Reminders"
                                subtitle="Web app"
                                link="/reminders-app"
                            />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;