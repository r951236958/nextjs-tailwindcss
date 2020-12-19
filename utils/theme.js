import React from 'react'

// theme.js 可以取自己喜歡的名稱
export const ButtonType = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
    secondary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
    basic: "bg-white hover:bg-gray-700 text-gray-700 font-bold rounded",
    delete: "bg-red-300 hover:bg-red-500 text-white font-bold rounded"
  };
  
  export const ButtonSize = {
    sm: "py-2 px-4 text-xs",
    lg: "py-3 px-6 text-lg"
  }
  // 看命名就知道，`ButtonType`：定義按鈕的樣式。`ButtonSizes`：定義按鈕的尺寸。