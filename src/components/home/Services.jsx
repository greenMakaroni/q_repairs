import Card from "./Card"

const Services = () => {
  return (
    <div className={`flex flex-col justify-center items-center w-[100vw]`}>
      <h1 className="font-['Oswald'] text-[3rem] text-gray-600 my-[50px]"> Our services </h1>
      <div className="flex flex-wrap justify-center items-center w-[100vw]">
        <Card icon="" buttonText="Fill the form" title="Free diagnostics" text="The diagnostics is free of charge. Our repair shop offers cleaning services." />
        <Card icon="" buttonText="Replace" title="Replacements" text="Replacing screens, batteries, keyboards, touchpads. Increase storage, boost memory of the device." />
        <Card icon="" buttonText="I need upgrade" title="Upgrades" text="Upgrade your device's storage and memory, install & update operating systems and commercial software of choice." />
        <Card icon="" buttonText="Instructions" title="Remote repair" text="Drop in your device in person or send it by post, make sure to fill out the form before you send us your device, instructions below." />
      </div>

    </div>
  )
}

export default Services