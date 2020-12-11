import React from 'react'

export default function ButtonComponents() {
	return (
		<>
			{/*<!-- component -->*/}
			<div className="flex items-center justify-center w-screen h-screen bg-gray-100">
				<div className="mx-auto py-16 w-full">
					{/*<!-- Title -->*/}
					<h1 className="mb-6 text-center text-3xl font-bold">
						Button Component (Default)
					</h1>
					{/*<!-- End Title -->*/}

					{/*<!-- Default -->*/}
					<div className="flex items-center mx-auto my-3 px-6 py-4 w-3/4 bg-white rounded-md shadow">
						<div className="mx-auto w-full text-center">
							<button
								type="button"
								className="ease focus:shadow-outline m-2 px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 border border-indigo-500 rounded-md focus:outline-none select-none transition duration-500"
							>
								Primary
							</button>
							<button
								type="button"
								className="ease focus:shadow-outline m-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 border border-green-500 rounded-md focus:outline-none select-none transition duration-500"
							>
								Success
							</button>
							<button
								type="button"
								className="ease focus:shadow-outline m-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 border border-red-500 rounded-md focus:outline-none select-none transition duration-500"
							>
								Error
							</button>
							<button
								type="button"
								className="ease focus:shadow-outline m-2 px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 border border-yellow-500 rounded-md focus:outline-none select-none transition duration-500"
							>
								Warning
							</button>
							<button
								type="button"
								className="ease focus:shadow-outline m-2 px-4 py-2 text-white bg-teal-500 hover:bg-teal-600 border border-teal-500 rounded-md focus:outline-none select-none transition duration-500"
							>
								Info
							</button>
							<button
								type="button"
								className="ease focus:shadow-outline m-2 px-4 py-2 text-white bg-gray-700 hover:bg-gray-800 border border-gray-700 rounded-md focus:outline-none select-none transition duration-500"
							>
								Dark
							</button>
							<button
								type="button"
								className="ease focus:shadow-outline m-2 px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 border border-gray-200 rounded-md focus:outline-none select-none transition duration-500"
							>
								Light
							</button>
						</div>
					</div>
					{/*<!-- End Default -->*/}
				</div>
			</div>
		</>
	)
}
