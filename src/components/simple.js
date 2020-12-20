import Link from 'next/link'

export default function Simple() {
	return (
		<div>
			<div className="mx-auto px-4 py-12 max-w-7xl sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16">
				<h2 className="text-gray-900 text-3xl font-extrabold tracking-tight sm:text-4xl">
					<span className="block">Ready to dive in?</span>
					<span className="text-teal block">Start your free trial today.</span>
				</h2>
				<div className="lex mt-8 lg:flex-shrink-0 lg:mt-0">
					<div className="inline-flex rounded-md shadow">
						<a
							href="#"
							className="inline-flex items-center justify-center px-5 py-3 text-white text-base font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md"
						>
							Get started
						</a>
					</div>
					<div className="inline-flex ml-3 rounded-md shadow">
						<a
							href="#"
							className="inline-flex items-center justify-center px-5 py-3 text-indigo-600 text-base font-medium hover:bg-indigo-50 bg-white border border-transparent rounded-md"
						>
							Learn more
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
