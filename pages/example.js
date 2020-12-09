import Link from 'next/link'
import Layout from '../components/layout'

const Example = props => {
	return (
		<Layout>
			<div className="relative pt-16 pb-32 w-full lg:w-2/5 text-gray-100">
				<div className="flex content-center justify-center h-full">
					<div className="px-4">
						<h1 className="text-white text-5xl py-10">Example</h1>

						<p className="my-4 py-4 text-gray-100">
							This page is static because it does not fetch any data or include
							the authed user info.
						</p>
						<Link href={'/'}>
							<a className="btn-teal-outline">Home</a>
						</Link>

						<h3 className="text-3xl my-6">Button Example</h3>
						<p className="my-4 text-gray-100">
							<button className="text-lg leading-6 font-medium text-gray-900 bg-teal-400 hover:bg-teal-500 hover:text-gray-700 px-4 py-2 rounded-lg transition ease-in-out duration-150">
								Button
							</button>
							<a className="bg-yellow-50 bg-opacity-10">hello</a>
						</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Example
