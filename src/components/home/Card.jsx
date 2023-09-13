import { useRef } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen.jsx"
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx"

const Card = ({icon, title, text, buttonText}) => {
  const { width } = useWindowDimensions()
  const card = useRef()
  const isVisible = useOnScreen(card)
  const isMobile = width < 650
  return (
    <div ref={card} className={`${isVisible && `animate-elementIn`} opacity-0 shadow-xl flex flex-col justify-between w-[300px] h-[400px] border-2 rounded-3xl ${isMobile ? "mx-[20px] my-[50px]" : "m-[20px]"} py-[30px] px-[25px]`}>
        <h1 className="font-['Open_Sans'] font-[700] text-gray-600 text-[1.5rem] mb-[20px]"> {title} </h1>
        <p className="font-['Open_Sans']"> {text} </p>
        <button className="flex justify-center items-center px-[30px] py-[10px] border-4 border-green-400 hover:bg-green-400 rounded-xl text-green-700 hover:text-black z-20 font-[700] "> {buttonText} </button>
    </div>
  )
}

export default Card