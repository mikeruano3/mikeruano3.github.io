import React from 'react'
import './MainContent.scss'
//import InfoBanner from '../InfoBanner/InfoBanner'
import { NavLink } from 'react-router-dom'

const Header = props => (
	<header id="header" className="banner-div">
		<h1>Miguel Ruano</h1>
		<div id="dotted-area">
			<hr />
		</div>
		<h3><span aria-label="img" role="img">🚀</span> Full Stack Web Developer</h3>
		<h4><span aria-label="img" role="img"></span> Science and Systems Engineer</h4>
		<p> Welcome to my website!</p>
		<p>
			React
			| Angular
			| HTML/CSS
			| Bootstrap
			| JavaScript
			| NodeJS
			| Docker
            </p>
		<div className="social-links">
			{/* LinkedIn */}
			<a href="https://www.linkedin.com/in/miguelruanoroca" rel="noopener noreferrer" target="_blank">
				<span className="fa fa-linkedin" aria-hidden="true" />
			</a>

			{/* Github */}
			<a href="https://github.com/mikeruano3" rel="noopener noreferrer" target="_blank">
				<span className="fa fa-github" aria-hidden="true" />
			</a>

			{/* Youtube */}
			<a href="https://www.youtube.com/user/MRmoogle10" rel="noopener noreferrer" target="_blank">
				<span className="fa fa-youtube" aria-hidden="true" />
			</a>

			{/* Twitter */}
			<a href="https://twitter.com/mikeruano3" rel="noopener noreferrer" target="_blank">
				<span className="fa fa-twitter" aria-hidden="true" />
			</a>
		</div>
	</header>
)

const MainContent = props => {
	return <div id="main">

		<Header />
		{/*
            <blockquote id="blockquote">
                <p>I like making stuff and putting it on the internet</p>
            </blockquote>      
        */}

		<section id="section">
			<h2><span aria-label="img" role="img">📜</span> Manifesto</h2>
			<p><i>Please refer to the <NavLink to="/resume">resume section</NavLink> for aditional info!</i></p>

			<p>
				As a Science and Systems Engineer ( aka Computer Science / Software Engineer ) I have manage to
				find my way to learn a lot of the amazing technologies that are available for this field.
				From programming languages, software design, computer asseymbly to software architecture, I've
				built a strong background over which I can apply the knowledge to create complex projects when needed.
        </p>

			<p>
				I've been working with a lot of programming languages throughout my time as a computer engineer.
				I've worked with complex languages such as Assembly or C/C++ and simpler ones, such as Python.
				Right now, my personal favorite is JavaScript as is one of the most powerful and popular languages nowadays.
				I love how easily you can manage data structures and all the shorcuts you can use to make your programming life easier.
				Because a like JavaScript so much, my love for React has been flourishing ever since I discovered it.
        </p>

			<p>
				Currently I'm working on my master's degree for Artifitial Intelligence alongside my DevOps trainning.
        </p>

		</section>

		<section id="section" className="light">
			<h2><span aria-label="img" role="img">👩🏽‍🚀</span> Projects</h2>
			<p><i>Please refer to the <NavLink to="/projects">project's section</NavLink> for aditional info!</i></p>

			<ul>
				<li>
					Worked mainly with Angular10, ReactJS and NodeJS in TICO Clasp Project. Also Firebase, Firebase Functions, FireStorage, etc.
				</li>
				<br />
				<li>
					Worked mainly with React for OMNI Interactions Project. Also Azure DevOps, NodeJS.
				</li>
			</ul>
			<p>

			</p>

			<h2><span aria-label="img" role="img">🏆</span> Accomplishments</h2>
			<p>Graduated from my Bachelor's Degree in Science and Systems Engineer at Universidad de San Carlos de Guatemala</p>
			<h5>Udemy Courses completed:</h5>
			<p>React - The Complete Guide (incl Hooks, React Router, Redux) <a href="https://www.udemy.com/certificate/UC-ce33efce-cd96-4c1e-855d-dbabdf24df4b" rel="noopener noreferrer" target="_blank">
						View Certificate
					</a>

			</p>
		</section>

		<div id="blockquote">
			<p>The best way out is always through <br /></p>
			<p>-Robert Frost</p>
		</div>
		

		<section className="left" id="section">
			<h2><span aria-label="img" role="img">💻</span> Work History</h2>
			<p><i>Please refer to the <NavLink to="/resume">resume section</NavLink> for aditional info!</i></p>

			<h3>Reporting Pal</h3>
				<p>Worked as a FullStack Developer for several projects.</p>
				<p>
					<a href="https://reporting-pal.com/" rel="noopener noreferrer" target="_blank">
						Reporting Pal Website
					</a>
				</p>
			<h3>InfoUtility S.A.</h3>
				<p>Worked as a FullStack Developer for several projects.</p>
				<p>
					<a href="http://infoutilitygt.com/" rel="noopener noreferrer" target="_blank">
						InfoUtility Website
					</a>
				</p>
			<h3>Seguros GyT</h3>
			<p>Worked as a Data Scientist and as a Developer.</p>
				<p>
					<a href="https://segurosgyt.com.gt/" rel="noopener noreferrer" target="_blank">
						Seguros GyT Website
					</a>
				</p>
			<p>
        </p>

		</section>

		<div id="blockquote">
			<p>Thanks for watching!</p>
		</div>
	</div>
}

export default MainContent