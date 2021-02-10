import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section id="three" className="wrapper style1 fade-up">
					<div className="inner">
						<h2>Get in touch</h2>
						<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
						<div className="split style1">
							<section>
								<form method="post" action="#">
									<div className="fields">
										<div className="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div className="field half">
											<label for="email">Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<div className="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="5"></textarea>
										</div>
									</div>
									<ul className="actions">
										<li><a href="" className="button submit">Send Message</a></li>
									</ul>
								</form>
							</section>
							<section>
								<ul className="contact">
									<li>
										<h3>Address</h3>
										<span>12345 Somewhere Road #654<br />
										Nashville, TN 00000-0000<br />
										USA</span>
									</li>
									<li>
										<h3>Email</h3>
										<a href="#">user@untitled.tld</a>
									</li>
									<li>
										<h3>Phone</h3>
										<span>(000) 000-0000</span>
									</li>
									<li>
										<h3>Social</h3>
										<ul className="icons">
											<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
											<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
											<li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
											<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
											<li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
										</ul>
									</li>
								</ul>
							</section>
						</div>
					</div>
				</section>
      </div>
    )
  }
}