//import Layout from '../src/components/layout'
import Layout from '@components/layout'
import Link from 'next/link'

const Example = props => {
	return (
		<Layout>
			<div className="relative pb-32 pt-16 max-w-full text-gray-100 lg:max-w-2xl mx-8 flex content-center justify-center">
				<h1 className="py-10 text-white text-5xl">Example</h1>
				<div class="grid grid-cols-2 md:grid-cols-1 gap-4 w-full">
					<div className="px-2 ">
						<article className="prose lg:prose-xl">
							<h2 className="py-10 text-white text-5xl">
								Garlic bread with cheese: What the science tells us
							</h2>
							<p>
								For years parents have espoused the health benefits of eating
								garlic bread with cheese to their children, with the food
								earning such an iconic status in our culture that kids will
								often dress up as warm, cheesy loaf for Halloween.
							</p>
							<p>
								But a recent study shows that the celebrated appetizer may be
								linked to a series of rabies cases springing up around the
								country.
							</p>
						</article>
					</div>
					<div className="px-4">
						<p className="my-4 py-4 text-gray-100">
							This page is static because it does not fetch any data or include
							the authed user info.
						</p>

						<Link href={'/'}>
							<a className="btn-teal-outline">Home</a>
						</Link>

						<h3 className="my-6 text-3xl">Button Example</h3>
						<p className="my-4 text-gray-100">
							<button className="px-4 py-2 hover:text-gray-700 text-gray-900 text-lg font-medium leading-6 bg-teal-400 hover:bg-teal-500 rounded-lg transition duration-150 ease-in-out">
								Button
							</button>
							<a className="bg-yellow-50 bg-opacity-10">hello</a>
						</p>
					</div>
				</div>
				<div className="h-full">
					<ul className="px-0">
						<a href="#">
							<li
								className="px-3 py-3 border rounded-sm list-none"
								style={{ borderBottomWidth: 0 }}
							>
								List Item 1
							</li>
						</a>
						<a href="#">
							<li
								className="px-3 py-3 border rounded-sm list-none"
								style={{ borderBottomWidth: 0 }}
							>
								List Item 2
							</li>
						</a>
						<a href="#">
							<li
								className="px-3 py-3 border rounded-sm list-none"
								style={{ borderBottomWidth: 0 }}
							>
								List item 3
							</li>
						</a>
						<a href="#">
							<li
								className="px-3 py-3 border rounded-sm list-none"
								style={{ borderBottomWidth: 0 }}
							>
								List Item 4
							</li>
						</a>
						<a href="#">
							<li className="px-3 py-3 border rounded-sm list-none">
								List Item 5
							</li>
						</a>
					</ul>
				</div>
			</div>
		</Layout>
	)
}

export default Example
