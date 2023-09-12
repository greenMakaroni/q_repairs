import Navigation from "../components/navigation/Navigation"
import Landing from "../components/home/Landing"
import Services from "../components/home/Services"
import Form from "../components/home/Form"

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Landing />
      <Services />
      <Form />
    </div>
  )
}

export default Home