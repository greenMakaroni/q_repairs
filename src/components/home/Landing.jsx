import landingPic from "../../../public/landing.jpg"

const Landing = () => {
  return (
    <div className="bg-landing bg-cover flex w-[100vw] h-[100vh] py-[100px] px-[50px] justify-center items-center">
        <div className="absolute flex w-[100vw] h-[100vh] bg-gradient-to-r from-[rgba(106,106,106,1)] to-[rgba(37,45,55,0.5242471988795518)]"></div>
        <h1 className="z-10 font-['Oswald'] text-white text-[3rem]"> PC, Laptop & MacBook repairs </h1>
    </div>
  )
}

export default Landing