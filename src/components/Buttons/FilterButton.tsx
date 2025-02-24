import React from 'react'
interface Props{
    children: React.ReactNode
    onClick?: () => any
}
const FilterButton: React.FC<Props> = ({children, onClick}) => {
  return (
    <div className='flex text-center items-center rounded-[1.5rem] gap-2 bg-white text-gray-600 mr-2 py-[5px] px-[18px] font-semibold border-[2px] border-solid cursor-pointer border-gray-300 hover:bg-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300' onClick={onClick}>
        {children}
    </div>
  )
}

export default FilterButton