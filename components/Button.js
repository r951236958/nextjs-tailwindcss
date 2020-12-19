//import Link from 'next/link'
import PropTypes from 'prop-types'
//import { ButtonType, ButtonSize } from '../utils/theme';
import React from 'react'
import classnames from "classnames";

//export default function Button({ href, primary }, ...other) {
//  return (
//    <div className="max-w-xs xs:ml-auto xs:max-w-xs" {...other}>
//      <Link href={href}>
//        <a className="text-center rounded-lg border border-teal-400 px-3 py-2 text-lg leading-6 font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150">
//          {primary}
//        </a>
//      </Link>
//    </div>
//  )
//}

function Button ({size, type, children}) {
  const btnSize = "btn-" + size;
  const btnType = "btn-" + type;
  return (
    <button className={classnames("btn", btnSize, btnType)}>{children}</button>
  )
}

Button.propTypes = {
  size: PropTypes.oneOf(['xs, lg']),
  type: PropTypes.oneOf(['primary', 'secondary'])
};

//unction Button({size, type, children}) {
// const classNames = `${ButtonType[type]} ${ButtonSize[size]}`;
// return (
//   <button className={classNames}>{children}</button>
// )
//
export default Button;