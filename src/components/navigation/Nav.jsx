import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "../../custom_hooks/useScrollPosition"; 
import useWindowDimensions from '../../custom_hooks/useWindowDimensions'

export default function Nav() {
  const location = useLocation();
  const { height, width } = useWindowDimensions();

  const scrollPosition = useScrollPosition();
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [height, width]);

  useEffect(() => {
    if (scrollPosition.prev < scrollPosition.current) {
      setShow(false);
      } else {
        setShow(true);
      }
  }, [scrollPosition.prev])

  return (
    <nav className={` fixed flex flex-row align-center items-center w-screen h-[100px] bg-gradient-to-r from-[rgb(74,222,128)] to-[rgba(74,222,128,0.4)] m-0 select-none duration-100 top-0 right-0 overflow-hidden z-50 ${show ? "opacity-100" : "opacity-0"}`}>
      <div className=" flex flex-row m-0 p-0 w-screen justify-center">
        <Link to="/" className={` mr-[30px] p-0 text-base text-gray-800 font-['Open_Sans'] font-[700] ${location.pathname === "/" ? "underline decoration-gray-800 decoration-2 underline-offset-8" : "no-underline" }`}> Home </Link>
        <Link to="/contact" className={` mr-[30px] p-0 text-base text-gray-800 font-['Open_Sans'] font-[700] ${location.pathname === "/contact" ? "underline decoration-gray-800 decoration-2 underline-offset-8" : "no-underline" }`}> Contact </Link>
        <Link to="/pricing" className={` mr-[30px] p-0 text-base text-gray-800 font-['Open_Sans'] font-[700] ${location.pathname === "/pricing" ? "underline decoration-gray-800 decoration-2 underline-offset-8" : "no-underline" }`}> Pricing </Link>
        <Link to="/form" className={ `mr-[30px] p-0 text-base text-gray-800 font-['Open_Sans'] font-[700] ${location.pathname === "/form" ? "underline decoration-gray-800 decoration-2 underline-offset-8" : "no-underline" }`}> Form </Link>
      </div>
    </nav>
  )
}

