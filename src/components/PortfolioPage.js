import React, {useEffect} from 'react';
import Text from './Text'

function PortfolioPage(props) {

	useEffect(() => {
      window.scrollTo(0, 0)
  })

	return (
		<div className="portfolio-page">
			
			{props.id === 'calculator' ? 
				<img id="large-calculator-img" className="portfolio-page__media" src={props.img} /> 
				:
				<video src={props.video} className="portfolio-page__media" controls />
			}

			{props.id === 'joanne-site' && 
			<Text title={props.title}> 
				<div>
					Joanne Evans is an opera singer currently studying a master’s degree in Opera at the Manhattan School of Music.
					<br /><br />
					Given the subject matter, I tried to keep the design of the site minimalist and classical, without too many distractions, and use plenty of white space to keep the site feeling light and airy. 
					<br /><br />
					I made the site using HTML/CSS and vanilla Javascript. I chose not to use any frameworks or libraries as I thought it would be a good learning experience to build everything from scratch, including the image carousel and the menu animation, which are demonstrated in the above video.	
				<br /><br />
					{props.link} &nbsp; • &nbsp; {props.code}
				</div>
			</Text>
			}

			{props.id === 'coverful' && 
			<Text title={props.title}> 
				<div>
					Coverful is an e-commerce website that sells cushion covers, with a selection of over 1200 different designs.
					<br /><br />
					I built the front-end entirely from scratch using HTML/CSS and vanilla Javascript, including the predictive search function, which is demonstrated in the above video. I used Shopify Lite for the back-end, which handles the ‘Add to Cart’ and ‘Checkout’ functionality.
					<br /><br />
					This was my first experience of using any kind of Inventory Management System. I added the first one hundred or so products myself and then handed over the reigns to the owner of the website, Lewis Bracken, who has since added hundreds more designs. Although listing hundreds of products was a rather lengthy process, it was actually pretty painless thanks to Shopify's website which I found to be very intuitive and easy to use.
					<br /><br />
					{props.link} &nbsp; • &nbsp; {props.code}
				</div>
			</Text>
			}

			{props.id === 'reminders' && 
			<Text title={props.title}> 
				<div>
					This is a fairly simple web app I made with React as an exercise to get to grips with using state.
					<br /><br />
					In this app I used a class component to implement state, but since making the app I have switched to exclusively using functional components  and making use of the useState hook whenever I need a stateful component. 
					<br /><br />
					{props.link} &nbsp; • &nbsp; {props.code}
				</div>
			</Text>
			}
			
			{props.id === 'calculator' && 
			<Text title={props.title}> 
				<div>
					I made this as an exercise when learning Javascript. One of the things that I found interesting about this exercise was that the majority of the code was only needed to prevent bugs or unwanted behaviour (such as preventing multiple presses of the operator buttons).
					<br /><br />
					It is also available to download as an app on Android <a className="link" href="https://build.phonegap.com/apps/3837516/builds" target="_blank" rel="noopener">here</a>. 

					<br /><br />
					{props.link} &nbsp; • &nbsp; {props.code}
				</div>
			</Text>
			}

		</div>
	)
}

export default PortfolioPage;