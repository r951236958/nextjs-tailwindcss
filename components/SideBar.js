import React from 'react'

export const SideBar = () => (
  <div className="w-full h-screen bg-gray-800">
    <div className="w-64 sm:w-1/2 md:w-64 h-full bg-gray-900 shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl border border-gray-900">
      {/*LOGO start*/}
      <img
        src="https://via.placeholder.com/400x400"
        alt="alt placeholder"
        className="w-10 h-10 mx-auto mb-5 rounded-full"
      />
      {/*LOGO end*/}
      {/*NAV start*/}
      <ul className="text-gray-700">
        <li className="block cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-300">
          <a className href="#">
            <i className="w-8 fas fa-search p-2 bg-gray-800 rounded-full mx-2" />
            Search
          </a>
        </li>
        <li className="block cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-300">
          <a className href="#">
            <span className="w-8 mb-5 relative">
              <i className="w-8 fas fa-file-alt p-2 bg-gray-800 rounded-full mx-2" />
              <span className="absolute right-0 top-0 -mt-2 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                3
              </span>
            </span>
            Pages
          </a>
        </li>
        <li className="block cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-300">
          <a className href="#">
            <i className="w-8 fas fa-paper-plane p-2 bg-gray-800 rounded-full mx-2" />
            Posts
          </a>
        </li>
        <li className="block cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-300">
          <a className href="#">
            <i className="w-8 fas fa-search p-2 bg-gray-800 rounded-full mx-2" />
            Users
          </a>
        </li>
        <li className="block cursor-pointer p-2 hover:bg-gray-800 hover:text-gray-300">
          <a className href="#">
            <i className="w-8 fas fa-search p-2 bg-gray-800 rounded-full mx-2" />
            Users
          </a>
        </li>
      </ul>
      {/*NAV end*/}
    </div>
  </div>
)
export default SideBar
