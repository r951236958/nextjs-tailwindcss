import Link from 'next/link'
import React from 'react'

export default function Button({ href, primary }, ...other) {
  return (
    <div className="max-w-xs xs:ml-auto xs:max-w-xs" {...other}>
      <Link href={href}>
        <a className="text-center rounded-lg border border-teal-400 px-3 py-2 text-lg leading-6 font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150">
          {primary}
        </a>
      </Link>
    </div>
  )
}
