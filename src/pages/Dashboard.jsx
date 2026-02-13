import { useState } from "react"
import Notification from "../components/Notification"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('progress')
  const [username] = useState(sessionStorage.getItem('username') || 'Student')

  // Sample data - replace with real data from backend
  const progressData = [
    { subject: 'Mathematics', progress: 65, lessons: '13/20' },
    { subject: 'Physics', progress: 45, lessons: '9/20' },
    { subject: 'Chemistry', progress: 80, lessons: '16/20' },
    { subject: 'Biology', progress: 55, lessons: '11/20' }
  ]

  const upcomingSessions = [
    { id: 1, title: 'Algebra Live Session', instructor: 'Mr. Smith', time: 'Today at 3:00 PM', type: 'Live', participants: 8 },
    { id: 2, title: 'Group Study - Physics', instructor: 'Study Group', time: 'Tomorrow at 5:00 PM', type: 'Group', participants: 4 },
    { id: 3, title: 'Chemistry Workshop', instructor: 'Dr. Johnson', time: 'Friday at 4:30 PM', type: 'Workshop', participants: 12 }
  ]

  const resources = [
    { id: 1, title: 'Calculus Fundamentals', type: 'Video', subject: 'Mathematics', duration: '45 min' },
    { id: 2, title: 'Organic Chemistry Quiz', type: 'Quiz', subject: 'Chemistry', duration: '20 min' },
    { id: 3, title: 'Physics Problems Set', type: 'Document', subject: 'Physics', duration: 'PDF' },
    { id: 4, title: 'Biology Notes Chapter 5', type: 'Document', subject: 'Biology', duration: 'PDF' },
    { id: 5, title: 'Advanced Math techniques', type: 'Video', subject: 'Mathematics', duration: '60 min' }
  ]

  const collaborativeGroups = [
    { id: 1, name: 'Advanced Math Team', members: 5, topic: 'Calculus & Linear Algebra', lastActive: '2 hours ago' },
    { id: 2, name: 'Physics Enthusiasts', members: 8, topic: 'Quantum Mechanics', lastActive: '30 min ago' },
    { id: 3, name: 'Chemistry Lab Partners', members: 3, topic: 'Organic Synthesis', lastActive: 'Today' }
  ]

  return (
    <>
      <Notification 
        title="Welcome to Dashboard" 
        message="Track your learning progress, join study sessions, and collaborate with peers. Click to dismiss." 
      />
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Welcome, {username}!</h1>
          <p>Your personalized learning hub</p>
        </div>

        {/* Tab Navigation */}
        <div className="dashboard-tabs">
          <button 
            className={`tab-btn ${activeTab === 'progress' ? 'active' : ''}`}
            onClick={() => setActiveTab('progress')}
          >
            Progress
          </button>
          <button 
            className={`tab-btn ${activeTab === 'schedule' ? 'active' : ''} schedule-btn`}
            onClick={() => setActiveTab('schedule')}
          >
            Schedule
          </button>
          <button 
            className={`tab-btn ${activeTab === 'resources' ? 'active' : ''} resources-btn`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
          <button 
            className={`tab-btn ${activeTab === 'collaborate' ? 'active' : ''} collaborate-btn`}
            onClick={() => setActiveTab('collaborate')}
          >
            Collaborate
          </button>
        </div>

        {/* Content Sections */}
        <div className="dashboard-content">
          
          {/* Progress Tab */}
          {activeTab === 'progress' && (
            <section className="tab-content">
              <h2>Learning Progress</h2>
              <div className="progress-cards">
                {progressData.map((item) => (
                  <div key={item.subject} className="progress-card">
                    <h3>{item.subject}</h3>
                    <div className="progress-bar-container">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{item.progress}%</span>
                    </div>
                    <p className="lessons-text">Lessons: {item.lessons}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <section className="tab-content">
              <h2>Upcoming Sessions & Events</h2>
              <div className="sessions-list">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="session-card">
                    <div className="session-header">
                      <h3>{session.title}</h3>
                      <span className={`session-type ${session.type.toLowerCase()}`}>
                        {session.type}
                      </span>
                    </div>
                    <p className="session-instructor">Instructor: {session.instructor}</p>
                    <p className="session-time">⏰ {session.time}</p>
                    <p className="session-participants">👥 {session.participants} participants</p>
                    <button className="join-btn">Join Session</button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <section className="tab-content">
              <h2>Learning Resources</h2>
              <div className="resource-filters">
                <button className="filter-btn active" onClick={() => alert('Filters will be available soon')}>All</button>
                <button className="filter-btn" onClick={() => alert('Filters will be available soon')}>Videos</button>
                <button className="filter-btn" onClick={() => alert('Filters will be available soon')}>Quizzes</button>
                <button className="filter-btn" onClick={() => alert('Filters will be available soon')}>Documents</button>
              </div>
              <div className="resources-grid">
                {resources.map((resource) => (
                  <div key={resource.id} className="resource-card">
                    <div className="resource-header">
                      <h3>{resource.title}</h3>
                      <span className={`resource-type ${resource.type.toLowerCase()}`}>
                        {resource.type}
                      </span>
                    </div>
                    <p className="resource-subject">📖 {resource.subject}</p>
                    <p className="resource-duration">⏱️ {resource.duration}</p>
                    <button className="access-btn">Access Resource</button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Collaborate Tab */}
          {activeTab === 'collaborate' && (
            <section className="tab-content">
              <h2>Collaborative Learning Groups</h2>
              <button className="create-group-btn">+ Create New Group</button>
              <div className="groups-list">
                {collaborativeGroups.map((group) => (
                  <div key={group.id} className="group-card">
                    <h3>{group.name}</h3>
                    <p className="group-topic">Topic: {group.topic}</p>
                    <p className="group-members">👥 {group.members} members</p>
                    <p className="group-active">Last active: {group.lastActive}</p>
                    <div className="group-actions">
                      <button className="view-btn">View Group</button>
                      <button className="message-btn">Send Message</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  )
}

export default Dashboard
