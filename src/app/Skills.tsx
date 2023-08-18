import React from 'react'

const Skills: React.FC = () => {
	const skillText = "transition-opacity duration-400 hover:opacity-50"	
return (
	<div className="">
		<div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 flex-col flex justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
		<div className="leading-[1.15]">
		<p className={skillText}>We know our tools inside out.</p>
		  <span  className={`${skillText} inline-block after:content-['_']`}>
				Our team has contributed 123 commits to React Native core, powering thousands of apps worldwide.
			</span>
			<span  className={`${skillText} inline-block`}>
				We&apos;re maintaining some of the most popular open-source projects, with over 1,234 downloads.
			</span>
		 </div>
		</div>
	</div>
	)
}

export default Skills

