import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'

function Contact() {

	useEffect(() => {
      window.scrollTo(0, 0)
  })

    return (
    	<div id="contact">

			<div id="contact-left-column">
	    		<div id="contact-heading" className="heading">
		    		Contact<span className="blue-text">.</span>
		    	</div>
	    		<div id="contact-description">
		    		To get in touch, you can email me at <a className="blue-link" href="mailto:hello@paulevans.tech"><span className="blue-text">hello@paulevans.tech</span></a> or send me a message using the contact form and I will try to respond as quickly as I can.
		    	</div>
		    </div>

	        <div id="contact-right-column">
				<form name="contactform" method="post" action="https://usebasin.com/f/adbcb51dcb04">
			        <div className="input-container">
				        <input placeholder=" " type="text" name="name" id="name" required autocomplete="off" />
				        <label for="name">
					    	<span className="label-content">Name</span>
					    </label>
					</div>
					<div className="input-container">
				        <input placeholder=" " type="email" name="email" id="email" required autocomplete="off" />
				        <label for="email">
					    	<span className="label-content">Email address</span>
					    </label>
					</div>
					<div className="input-container">
				        <textarea placeholder=" " type="text" name="message" id="message" required autocomplete="off" />
				        <label for="message">
				        	<span className="label-content">Message</span>
				        </label>
				    </div>
			        <br /><br />
			        <div className="input-container submit-container">
				        <input type="submit" name="submit" value="Send" id="submit" />
				    </div>
			    </form> 
	        </div>

        </div>
    )
}

export default Contact;