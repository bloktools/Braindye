import Hero from "../components/Hero"
import knowledge from '../assets/graffiti/knowledge.jpg'

const About = () => {
  return (
    <Hero backgroundUrl={knowledge}>
        <div style={{maxWidth: '700px'}}>
            <h1>About Braindye</h1>
            <p>Our mission is to do our part to improve education across the world. Our platform offers a wide range of learning resources, interactive courses, games, and community support to help you achieve your educational goals.</p>
            <p>Founded in 2025 by Riley Clos and Veer Patel, Braindye aims to grow into a vibrant community of learners and educators committed to sharing knowledge and fostering growth.</p>
        </div>
    </Hero>
  )
}

export default About
