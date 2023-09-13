import Card from "./Card"

const Services = () => {
  return (
    <div className={`flex flex-col justify-center items-center w-[100vw]`}>
      <h1 className="font-['Oswald'] text-[3rem] text-gray-600 my-[50px]"> Our services </h1>
      <div className="flex flex-wrap justify-center items-center w-[100vw]">
        <Card icon="" buttonText="Fill the form" title="Free cleaning & diagnostics" text="Diagnostics and cleaning is free and guaranteed. If the device is beyond repair, there's no charge!" />
        <Card icon="" buttonText="Need replacement" title="Screen & battery replacements" text="Is your battery dying too quickly? Is your screen cracked or not working at all? Either way we can fix it!" />
        <Card icon="" buttonText="I need upgrade" title="Hardware & software upgrades" text="Upgrade your device's storage and memory, install & update operating systems and commercial software of choice." />
        <Card icon="" buttonText="Instructions" title="Not a local? Not a problem!" text="Drop in your device in person or send it by mail, press the instructions button below for more details on repair by mail service." />
      </div>

    </div>
  )
}

export default Services