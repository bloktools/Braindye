import Hero from "../components/Hero"
import shepperds from '../assets/graffiti/shepperds.jpeg'

const Pricing = () => {
  return (
    <Hero backgroundUrl={shepperds}>
        <div>
            <h1>Choose the plan that's right for you.</h1>
            <div className="pricing-cards">
                <div className="pricing-card">
                    <h2>Free, forever.</h2>
                    <p className="price">$0</p>
                    <ul>
                        <li>Access to all courses</li>
                        <li>Access to all games</li>
                        <li>Community support</li>
                        <li>Live tutoring sessions</li>
                    </ul>
                    <button>Select Plan</button>
                </div>
                <div className="pricing-card">
                    <h2>Small Establishment</h2>
                    <p className="price">$120/year</p>
                    <ul>
                        <li>Link Braindye to your school's SSO</li>
                        <li>Developer support</li>
                        <li>Monitoring dashboard</li>
                        <ul>
                            <li>Student engagement</li>
                            <li>Scores on assignments & in games</li>
                        </ul>
                        <li>Deploy assignments to student dashboards</li>
                    </ul>
                    <button>Select Plan</button>
                </div>
                <div className="pricing-card">
                    <h2>Large Institution</h2>
                    <p className="price">Contact us</p>
                    <ul>
                        <li>All features in Small Establishment</li>
                        <li>Dedicated account manager</li>
                        <li>Custom integrations</li>
                        <li>On-site training sessions</li>
                    </ul>
                    <button>Select Plan</button>
                </div>
            </div>
        </div>
    </Hero>
  )
}

export default Pricing
