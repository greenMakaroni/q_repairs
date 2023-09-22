import { useRef } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen.jsx"
import useWindowDimensions from "../../custom_hooks/useWindowDimensions.jsx"

const Card = (props) => {
  const { width } = useWindowDimensions()
  const card = useRef()
  const isVisible = useOnScreen(card)
  const isMobile = width < 650
  return (
    <div ref={card} className={`${isVisible && `animate-elementIn`} opacity-0 shadow-xl flex flex-col w-[290px] border-2 ${isMobile ? "mx-[20px] my-[50px]" : "m-[20px]"} py-[30px] px-[30px]`}>
      <div className="h-[40vh]  flex flex-col justify-center items-center">
        {props.children}
        <h1 className=" self-center font-['Open_Sans'] font-[700] text-gray-600 text-[1.4rem] mb-[30px]"> {props.title} </h1>
        <p className="  text-center font-['Open_Sans'] text-[1rem] font-[400] text-gray-800"> {props.text} </p>
      </div>
      <div className=" h-[15vh] flex items-end justify-center">
        <button className="w-[100%] rounded-md flex justify-center items-center px-[30px] py-[10px] border-2 border-green-400 hover:bg-green-400 text-green-700 hover:text-black z-20 font-[700] "> {props.buttonText} </button>
      </div>
    </div>
  )
}

export default Card