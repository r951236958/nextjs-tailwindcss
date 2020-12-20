import React from 'react'

export default function FooterSmall(props) {
	return (
		<>
			<footer
				className={
					(props.absolute
						? 'absolute w-full bottom-0 bg-gray-900'
						: 'relative') + ' pb-6'
				}
			>
				<div className="container mx-auto px-4">
					<hr className="mb-6 border-b-1 border-gray-700" />
					<div className="flex flex-wrap items-center justify-center md:justify-between">
						<div className="px-4 w-full md:w-4/12">
							<div className="py-1 text-white text-sm font-semibold">
								Copyright © {new Date().getFullYear()}{' '}
								<a
									href="https://www.creative-tim.com"
									className="py-1 hover:text-gray-400 text-white text-sm font-semibold"
								>
									Creative Tim
								</a>
							</div>
						</div>
						<div className="px-4 w-full md:w-8/12">
							<ul className="flex flex-wrap justify-center list-none md:justify-end">
								<li>
									<a
										href="https://www.creative-tim.com"
										className="block px-3 py-1 hover:text-gray-400 text-white text-sm font-semibold"
									>
										Creative Tim
									</a>
								</li>
								<li>
									<a
										href="https://www.creative-tim.com/presentation"
										className="block px-3 py-1 hover:text-gray-400 text-white text-sm font-semibold"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="http://blog.creative-tim.com"
										className="block px-3 py-1 hover:text-gray-400 text-white text-sm font-semibold"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
										className="block px-3 py-1 hover:text-gray-400 text-white text-sm font-semibold"
									>
										MIT License
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
