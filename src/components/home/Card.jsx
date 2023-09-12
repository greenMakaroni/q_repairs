
const Card = ({icon, title, text, buttonText}) => {

  return (
    <div className="shadow-xl flex flex-col justify-between w-[300px] h-[350px] border-2 rounded-3xl m-[20px] p-[30px]">
        <h1 className="font-['Oswald'] text-[1.8rem] mb-[20px]"> {title} </h1>
        <p className="font-['Open_Sans']"> {text} </p>
        <button className="flex justify-center items-center px-[30px] py-[10px] border-4 border-green-400 hover:bg-green-400 rounded-xl text-green-700 hover:text-black z-20 font-[700] "> {buttonText} </button>
    </div>
  )
}

export default Card