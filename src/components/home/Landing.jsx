import TypeTextAnimation from "./TypeTextAnimation"
// import landingUrl from "./landing.jpg"
const Landing = () => {
    return (
        <div className={`m-0 bg-landing bg-cover flex flex-col w-[100vw] h-[100vh] py-[100px] px-[50px] justify-center items-center`}>
            <div className="m-0 absolute flex w-[100vw] h-[100vh] bg-gradient-to-r from-[rgba(106,106,106,1)] to-[rgba(37,45,55,0.5242471988795518)]"></div>
            <TypeTextAnimation />
            <div className="m-0 absolute bottom-[10vh] flex flex-row justify-center w-[100vw]">
                <button className="flex px-[30px] py-[15px] border-4 border-green-400 hover:bg-green-400 rounded-xl text-white hover:text-black z-20 font-[700] "> Get a FREE quote! </button>
            </div>
        </div>
    )
}

export default Landing