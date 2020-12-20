import React from 'react'

export const SideBar = () => (
	<div className="w-full h-screen bg-gray-800">
		<div className="w-64 h-full bg-gray-900 border border-gray-900 shadow sm:w-1/2 sm:shadow-md md:w-64 md:shadow-lg lg:shadow-xl xl:shadow-2xl">
			{/*LOGO start*/}
			<img
				src="https://via.placeholder.com/400x400"
				alt="alt placeholder"
				className="mb-5 mx-auto w-10 h-10 rounded-full"
			/>
			{/*LOGO end*/}
			{/*NAV start*/}
			<ul className="text-gray-700">
				<li className="block p-2 hover:text-gray-300 hover:bg-gray-800 cursor-pointer">
					<a className href="#">
						<i className="fas fa-search mx-2 p-2 w-8 bg-gray-800 rounded-full" />
						Search
					</a>
				</li>
				<li className="block p-2 hover:text-gray-300 hover:bg-gray-800 cursor-pointer">
					<a className href="#">
						<span className="relative mb-5 w-8">
							<i className="fas fa-file-alt mx-2 p-2 w-8 bg-gray-800 rounded-full" />
							<span className="absolute right-0 top-0 -mt-2 px-2 text-black text-xs font-medium bg-yellow-500 rounded-full">
								3
							</span>
						</span>
						Pages
					</a>
				</li>
				<li className="block p-2 hover:text-gray-300 hover:bg-gray-800 cursor-pointer">
					<a className href="#">
						<i className="fas fa-paper-plane mx-2 p-2 w-8 bg-gray-800 rounded-full" />
						Posts
					</a>
				</li>
				<li className="block p-2 hover:text-gray-300 hover:bg-gray-800 cursor-pointer">
					<a className href="#">
						<i className="fas fa-search mx-2 p-2 w-8 bg-gray-800 rounded-full" />
						Users
					</a>
				</li>
				<li className="block p-2 hover:text-gray-300 hover:bg-gray-800 cursor-pointer">
					<a className href="#">
						<i className="fas fa-search mx-2 p-2 w-8 bg-gray-800 rounded-full" />
						Users
					</a>
				</li>
			</ul>
			{/*NAV end*/}
		</div>
	</div>
)
export default SideBar
