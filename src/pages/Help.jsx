import Hero from "../components/Hero"
import youAreBeautiful from '../assets/graffiti/youarebeautiful.jpg'

const Help = () => {
  return (
    <Hero backgroundUrl={youAreBeautiful}>
        <div>
            <h1>How can we assist you?</h1>
            <p>You can reach out to our support team at <a href="mailto:clos.riley@gmail.com">clos.riley@gmail.com</a>.</p>
            <p>Otherwise, here are some community-made articles that may help:</p>
        </div>
    </Hero>
  )
}

export default Help
