import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className="bottom-0 mt-2 pb-6 w-full bg-darkBlue-700">
			<div className="container mx-auto px-4">
				<hr className="mb-6 border-b-1 border-gray-200" />
				<div className="flex items-center justify-center lg:flex-wrap lg:justify-between">
					<div className="px-4 w-full text-center md:w-4/12">
						<div className="py-1 text-white text-sm font-semibold">
							Made with{' '}
							<a
								href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit"
								className="py-1 hover:text-gray-400 text-white text-sm font-semibold"
								target="_blank"
								rel="noreferrer"
							>
								Tailwind Starter Kit{' '}
							</a>
						</div>
					</div>
					<div className="px-4 w-full md:w-8/12">
						<ul className="hidden justify-center list-none space-x-2 lg:flex lg:flex-wrap lg:justify-end">
							<li>
								<Link
									href="https://www.creative-tim.com"
									className="block px-3 py-1 hover:text-gray-400 text-white text-sm"
									target="_blank"
									rel="noreferrer"
								>
									Creative Tim
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="block px-32 py-1 hover:text-gray-400 text-white text-sm"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/myicons"
									className="block px-3 py-1 hover:text-gray-400 text-white text-sm"
								>
									icons
								</Link>
							</li>
							<li>
								<a
									href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
									className="block px-3 py-1 hover:text-gray-400 text-white text-sm"
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
