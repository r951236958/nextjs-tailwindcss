import React from 'react'

const CardHero = () => {
    return (
  <div class="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10">
    <div class="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
      <div class="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
      <div class="relative bg-white shadow-lg sm:rounded-3xl">

        <div class="flex items-center justify-start pt-6 pl-6">
          <span class="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
          <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
          <span class="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
        </div>
        
        <div class="px-20 py-6">
          
          {/*<!-- nav -->*/}
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-center">
              <div class="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                <svg class="w-10 h-10 mr-1 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                </svg>
                AR
              </div>   
              <div class="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Product
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Community
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Plans
                </a>
              </div>
            </div>
            <div class="hidden md:flex items-center justify-center">
              <a href="#" class="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out">Login</a>
              <button class="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">Sign Up</button>
            </div>
          </div>
          {/*<!-- /nav -->*/}

          {/*<!-- hero section -->*/}
          <div class="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
            <div class="text-6xl font-semibold text-gray-900 leading-none">Bring all your work together</div>
            <div class="mt-6 text-xl font-light text-true-gray-500 antialiased">A better experience for yout attendees and less stress yout team.</div>
            <button class="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
              Download for Free
            </button>
          </div>
          <div class="mt-12 lg:mt-32 lg:ml-20 text-left">
            <bottom type="button" class="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </bottom>
          </div>

          {/*<!-- /hero section -->*/}

        </div>
      </div>
    </div>
  </div>

    )
}

export default CardHero