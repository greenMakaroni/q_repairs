import Card from "./Card"
import Diagnosis from "../../../public/diagnosis.svg"
import Replace from "../../../public/replace.svg"
import Upgrade from "../../../public/upgrade.svg"
import Mail from "../../../public/mail.svg"


const Services = () => {
  return (
    <div className={`flex flex-col justify-center items-center w-[100vw]`}>
      <h1 className="font-['Oswald'] text-[3rem] text-gray-600 my-[50px]"> Our services </h1>
      <div className="flex flex-wrap justify-center items-center w-[100vw]">

        <Card buttonText="Fill the form" title="Free diagnostics" text="The diagnostics is free of charge. Our repair shop offers cleaning services." >
          <img src={Diagnosis} alt="diagnosis icon" className="mb-[40px] h-[90px] m-0 p-0" />
        </Card >

        <Card buttonText="Replace" title="Replacements" text="Replacing screens, batteries, keyboards, touchpads, storage and memory." >
          <img src={Replace} alt="diagnosis icon" className="mb-[40px] h-[90px] m-0 p-0" />
        </Card>

        <Card buttonText="I need upgrade" title="Upgrades" text="Upgrade your device's storage and memory, install & update operating systems." >
          <img src={Upgrade} alt="diagnosis icon" className="mb-[40px] h-[90px] m-0 p-0" />
        </Card>

        <Card buttonText="Instructions" title="Remote repair" text="Drop in your device in person or send it by the postal service." >
          <img src={Mail} alt="diagnosis icon" className="mb-[40px] h-[90px] m-0 p-0" />
        </Card>
      </div>

    </div>
  )
}

export default Services