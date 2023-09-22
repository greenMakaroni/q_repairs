import Call from "../../../public/call.svg"
import Mail from "../../../public/mail2.svg"
import Location from "../../../public/location.svg"

const Form = () => {
  return (
    // 100vw 100vh main div
    <div className="m-0 flex flex-col justify-center items-center w-[100vw]">
      <h1 className="mt-[100px] font-['Oswald'] text-[3rem] text-gray-600 "> Get In Touch with Us</h1>
      <p className="font-['Oswald'] text-[1.4rem]">Give us a call, send an email or fill out the form to receive service fee estimate. </p>

      {/*  form div */}
      <div className="flex flex-row border-2 m-[50px] h-[90vh] justify-around bg-gray-800 shadow-2xl">

        {/* form */}
        <div className="w-[40vw] bg-white">

        </div>

        {/* Map */}
        <div className="px-[30px] py-[30px] flex flex-col justify-center">
          <div className="mb-[50px] flex flex-col">
            <div className="flex flex-row">
              <img src={Call} alt="Phone icon" className="w-[30px]"/>
              <h1 className="p-[10px] font-['Open_Sans'] text-[1.2rem] font-[400] text-green-400"> +44 (0) 123 456 789 </h1>
            </div>

            <div className="flex flex-row">
              <img src={Mail} alt="Mail icon" className="w-[30px]"/>
              <h1 className="p-[10px] font-['Open_Sans'] text-[1.2rem] font-[400] text-green-400"> example.email@gmail.com </h1>
            </div>

            <div className="flex flex-row">
              <img src={Location} alt="Location icon" className="w-[30px]"/>
              <h1 className="p-[10px] font-['Open_Sans'] text-[1.2rem] font-[400] text-green-400"> 22 Paget Street LE11 5DS</h1>
            </div>

          </div>
          {/* google maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.5979954646707!2d-1.2178300442818548!3d52.775264872534265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e0b6409eddc5%3A0x4636b99387ef4b04!2s22%20Paget%20St%2C%20Loughborough%20LE11%205DS!5e0!3m2!1sen!2suk!4v1695388159066!5m2!1sen!2suk"
            width="400"
            height="400"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy">
          </iframe>
        </div>
      </div>

    </div>
  )
}

export default Form