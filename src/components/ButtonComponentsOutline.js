import React from 'react'

export default function ButtonComponentsOutline() {
	return (
		<>
			{/*<!-- component -->*/}
			<div class="flex items-center justify-center w-screen h-screen bg-gray-100">
				<div class="mx-auto py-16 w-full">
					{/*<!-- Title -->*/}
					<h1 class="mb-6 text-center text-3xl font-bold">
						Button Component (Outline)
					</h1>
					{/*<!-- End Title -->*/}

					{/*<!-- Outline -->*/}
					<div class="flex items-center mx-auto my-3 px-6 py-4 w-3/4 bg-white rounded-md shadow">
						<div class="mx-auto w-full text-center">
							<button
								type="button"
								class="ease focus:shadow-outline m-2 px-4 py-2 text-indigo-500 hover:text-white hover:bg-indigo-600 border border-indigo-500 rounded-md focus:outline-none select-none transition duration-500"
							>
								Primary
							</button>
							<button
								type="button"
								class="ease focus:shadow-outline m-2 px-4 py-2 text-green-500 hover:text-white hover:bg-green-600 border border-green-500 rounded-md focus:outline-none select-none transition duration-500"
							>
								Success
							</button>
							<button
								type="button"
								class="ease focus:shadow-outline m-2 px-4 py-2 text-red-500 hover:text-white hover:bg-red-600 border border-red-500 rounded-md focus:outline-none select-none transition duration-500"
							>
								Error
							</button>
							<button
								type="button"
								class="ease focus:shadow-outline m-2 px-4 py-2 hover:text-white text-yellow-500 hover:bg-yellow-600 border border-yellow-500 rounded-md focus:outline-none select-none transition duration-500"
							>
								Warning
							</button>
							<button
								type="button"
								class="ease focus:shadow-outline m-2 px-4 py-2 text-teal-500 hover:text-white hover:bg-teal-600 border border-teal-500 rounded-md focus:outline-none select-none transition duration-500"
							>
								Info
							</button>
							<button
								type="button"
								class="ease focus:shadow-outline m-2 px-4 py-2 text-gray-700 hover:text-white hover:bg-gray-800 border border-gray-700 rounded-md focus:outline-none select-none transition duration-500"
							>
								Dark
							</button>
							<button
								type="button"
								class="ease focus:shadow-outline m-2 px-4 py-2 text-gray-700 hover:bg-gray-300 border border-gray-300 rounded-md focus:outline-none select-none transition duration-500"
							>
								Light
							</button>
						</div>
					</div>
					{/*<!-- End Outline -->*/}
				</div>
			</div>
		</>
	)
}
