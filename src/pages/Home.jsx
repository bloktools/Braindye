import Hero from '../components/Hero.jsx'
import speaceship from '../assets/graffiti/speaceship.jpg'

const Home = () => {
  return (
    <Hero backgroundUrl={speaceship}>
      <div>
        <h1>The future of learning, accessible by all.</h1>
        <button id="get-started-button" onClick={() => location.href="/dashboard"}>Get started</button>
        <> </>
        <button id="learn-more-button" onClick={() => location.href="/about"}>Learn More</button>
        <br /><br />
        <a href="/for-fbla-graders">For FBLA Graders</a>
      </div>
    </Hero>
  )
}

export default Home
