import React,{FC} from 'react'

interface Button{
    textD:string,
    textColor:string
    borderColor:string

}

const Linebutton:FC<Button> = ({
    textD,
    textColor,
    borderColor
}) => {
  return (
    <div>
        <button className={`text-${textColor} hover:border-2 hover:border-${borderColor} py-1 px-6 rounded-lg
         hover:brightness-150 hover:scale-105 `}>{textD}</button>
    </div>
  )
}

export default Linebutton