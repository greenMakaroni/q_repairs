import { useRef } from "react"
import useOnScreen from "../../custom_hooks/useOnScreen.jsx"
import TypeTextAnimation from "./TypeTextAnimation"
// import landingUrl from "./landing.jpg"
const Landing = () => {
    const landing = useRef()
    const isVisible = useOnScreen(landing)
    return (
        <div ref={landing} className={`m-0 bg-landing bg-cover flex flex-col w-[100vw] h-[100vh] py-[100px] px-[50px] justify-center items-center`}>
            <div className="m-0 absolute flex w-[100vw] h-[100vh] bg-gradient-to-r from-[rgba(106,106,106,1)] to-[rgba(37,45,55,0.5242471988795518)]"></div>
            <TypeTextAnimation />
            <p className={`text-white z-20 font-['Open_Sans'] text-[1.2rem] mt-[20px] opacity-0 ${isVisible && "animate-elementIn"}`}> Technology nerds based in Loughborough, dying to take a dive inside a case of your machine! </p>
            <div className="m-0 absolute bottom-[10vh] flex flex-row justify-center w-[100vw]">
                <button className="flex px-[30px] py-[15px] border-4 border-green-400 hover:bg-green-400 rounded-xl text-white hover:text-black z-20 font-[700] "> Get a FREE quote! </button>
            </div>
        </div>
    )
}

export default Landing