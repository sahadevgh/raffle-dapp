import React from 'react'

type Props = {
    title: string;
    isActive?: boolean;
}
function NavButton({title, isActive}: Props) {
  return (
    <button className={`${isActive && "bg-green-800"} hover:bg-green-800 text-white font-bold text-xs md:py-2 md:px-4 rounded cursor-pointer`}>
        {title}
    </button>
  )
}

export default NavButton