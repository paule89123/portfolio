import React, { useEffect } from "react";
import Text from "./Text";

function PortfolioPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="portfolio-page">
      {props.id === "calculator" ? (
        <img
          id="large-calculator-img"
          className="portfolio-page__media"
          src={props.img}
          alt={props.alt}
        />
      ) : (
        <video
          src={props.video}
          className="portfolio-page__media video"
          controls
        />
      )}

      {props.id !== "calculator" && (
        <img
          src={props.gif}
          className="portfolio-page__media gif"
          alt={props.alt}
        />
      )}

      {props.id === "joanne-site" && (
        <Text title={props.title}>
          <div>
            Joanne Evans is an opera singer currently studying a master’s degree
            in Opera at the Manhattan School of Music.
            <br />
            <br />
            Given the subject matter, I tried to keep the design of the site
            minimalist and classical, without too many distractions, and use
            plenty of white space to keep the site feeling light and airy.
            <br />
            <br />
            {props.link}
          </div>
        </Text>
      )}

      {props.id === "coverful" && (
        <Text title={props.title}>
          <div>
            Coverful is an e-commerce website that sells cushion covers, with a
            selection of over 1200 different designs.
            <br />
            <br />
            I built the front-end with Gatsby and integrated it with Shopify.
            <br />
            <br />
            I find Shopify’s Inventory Management System to be very good.
            Although listing hundreds of products is a rather lengthy process,
            it’s actually pretty painless thanks to Shopify’s well designed and
            intuitive UX/UI.
            <br />
            <br />
            {props.link}
          </div>
        </Text>
      )}

      {props.id === "reminders" && (
        <Text title={props.title}>
          <div>
            This is a fairly simple web app I made with React as an exercise to
            get to grips with using state.
            <br />
            <br />
            In this app I used a class component to implement state, but since
            making the app I have switched to exclusively using functional
            components and making use of the useState hook whenever I need a
            stateful component.
            <br />
            <br />
            {props.link} &nbsp; • &nbsp; {props.code}
          </div>
        </Text>
      )}

      {props.id === "calculator" && (
        <Text title={props.title}>
          <div>
            I made this as an exercise when learning Javascript. One of the
            things that I found interesting about this exercise was that the
            majority of the code was only needed to prevent bugs or unwanted
            behaviour (such as preventing multiple presses of the operator
            buttons).
            <br />
            <br />
            It is also available to download as an app on Android{" "}
            <a
              className="link"
              href="https://build.phonegap.com/apps/3837516/builds"
              target="_blank"
              rel="noopener"
            >
              here
            </a>
            .
            <br />
            <br />
            {props.link} &nbsp; • &nbsp; {props.code}
          </div>
        </Text>
      )}

      {props.id === "spotifyPlaylistMaker" && (
        <Text title={props.title}>
          <div>
            This React based web app uses the Spotify API to allow users to
            search for songs, create a custom playlist and save it to their
            Spotify account. I made this as an exercise in learning how to make
            API calls using the fetch method.
            <br />
            <br />
            {props.link} &nbsp; • &nbsp; {props.code}
          </div>
        </Text>
      )}

      {props.id === "mernTips" && (
        <Text title={props.title}>
          <div>
            MERN Tips is a single page app (SPA) that I made with React on the
            front-end and Node.js and MongoDB on the back-end. It is intended to
            serve as a resource for coders looking to increase their knowledge
            of the MERN stack.
            <br />
            <br />
            Users are able to register for a free account and then make posts
            after answering a coding question to demonstrate a basic level of
            coding knowledge.
            <br />
            <br />I implemented authentication using{" "}
            <a
              className="link"
              href="https://jwt.io/"
              target="_blank"
              rel="noopener"
            >
              JSON web tokens (JWT)
            </a>{" "}
            which are stored locally on the client's browser when a user logs in
            and then removed when the user logs out.
            <br />
            <br />
            {props.link} &nbsp; • &nbsp; {props.code}
          </div>
        </Text>
      )}
    </div>
  );
}

export default PortfolioPage;
