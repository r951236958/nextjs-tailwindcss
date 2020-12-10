import React from 'react'

const Weather = () => {
	return (
		<div class="flex items-center justify-center min-h-screen">
			<div class="flex flex-col p-4 w-full max-w-xs bg-white rounded">
				<div class="text-xl font-bold">Sydney</div>
				<div class="text-gray-500 text-sm">Thursday 10 May 2020</div>
				<div class="inline-flex items-center self-center justify-center mt-6 w-24 h-24 text-indigo-400 text-6xl rounded-lg">
					<svg
						class="w-32 h-32"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
						></path>
					</svg>
				</div>
				<div class="flex flex-row items-center justify-center mt-6">
					<div class="text-6xl font-medium">24°</div>
					<div class="flex flex-col items-center ml-6">
						<div>Cloudy</div>
						<div class="mt-1">
							<span class="text-sm">
								<i class="far fa-long-arrow-up"></i>
							</span>
							<span class="text-gray-500 text-sm font-light">28°C</span>
						</div>
						<div>
							<span class="text-sm">
								<i class="far fa-long-arrow-down"></i>
							</span>
							<span class="text-gray-500 text-sm font-light">20°C</span>
						</div>
					</div>
				</div>
				<div class="flex flex-row justify-between mt-6">
					<div class="flex flex-col items-center">
						<div class="text-sm font-medium">Wind</div>
						<div class="text-gray-500 text-sm">9k/h</div>
					</div>
					<div class="flex flex-col items-center">
						<div class="text-sm font-medium">Humidity</div>
						<div class="text-gray-500 text-sm">68%</div>
					</div>
					<div class="flex flex-col items-center">
						<div class="text-sm font-medium">Visibility</div>
						<div class="text-gray-500 text-sm">10km</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Weather
