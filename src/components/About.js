import React from 'react';
import about from '../images/about2.jpg'
import Text from './Text'

function About() {
	return (
		<div>
			<div className="about-img-container">
				<img alt="" className="about-img" src={about} />
			</div>

			<Text title=<div>About Me<span className="blue-text">.</span></div> page="about"> 
				<div>
					Hi, I’m Paul. I am a front-end developer based in London with a background in science.
					<br /><br />
					I am proficient in HTML, CSS, Javascript (ES6+) and also have experience using Node.js, Express and MongoDB.
					<br /><br />
					I graduated from Oxford University in 2012 with a Master’s degree in Biochemistry, following which I worked at Pfizer as an analytical chemist and subsequently at GlaxoSmithKline as a senior scientist.
					<br /><br />
					After roughly six years in the pharmaceutical industry, I made the switch to coding full time in October 2019.
					<br /><br />
					I built this site using React, making use of some of the recent features in React including Hooks (useState and useEffect). The code for this site is available to view <a className="link" href="https://github.com/paule89123/portfolio" target="_blank" rel="noopener">here</a>. 
					<br /><br />
					Besides coding, in my free time I listen to a large number of podcasts and audiobooks, and love to travel whenever I can.
				</div>
			</Text>
‍		</div>
	)
}

export default About;