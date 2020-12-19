import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className="w-full bottom-0 bg-darkBlue-700 mt-2 pb-6">
			<div className="container mx-auto px-4">
				<hr className="mb-6 border-b-1 border-gray-200" />
				<div className="flex lg:flex-wrap items-center lg:justify-between justify-center">
					<div className="w-full md:w-4/12 px-4 text-center">
						<div className="text-sm text-white font-semibold py-1">
							Made with{' '}
							<a
								href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit"
								className="text-white hover:text-gray-400 text-sm font-semibold py-1"
								target="_blank"
								rel="noreferrer"
							>
								Tailwind Starter Kit{' '}
							</a>
						</div>
					</div>
					<div className="w-full md:w-8/12 px-4">
						<ul className="hidden lg:flex lg:flex-wrap space-x-2 list-none justify-center lg:justify-end ">
							<li>
								<Link
									href="https://www.creative-tim.com"
									className="text-white hover:text-gray-400 text-sm block py-1 px-3"
									target="_blank"
									rel="noreferrer"
								>
									Creative Tim
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-white hover:text-gray-400 text-sm block py-1 px-32"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/test"
									className="text-white hover:text-gray-400 text-sm block py-1 px-3"
								>
									Test
								</Link>
							</li>
							<li>
								<a
									href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
									className="text-white hover:text-gray-400 text-sm block py-1 px-3"
									target="_blank"
									rel="noreferrer"
								>
									MIT License
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
