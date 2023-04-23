import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={'/excel'}>
            <button type='button' style={{ padding: '1rem', margin: '1rem' }}>
              Excel Tool
            </button>
          </Link>
          <Link to={'/router'}>
            <button type='button' style={{ padding: '1rem', margin: '1rem' }}>
              Nested Router Demo
            </button>
          </Link>
          <Link to={'/text'}>
            <button type='button' style={{ padding: '1rem', margin: '1rem' }}>
              Text Tool
            </button>
          </Link>
      </div>
    </div>
  )
}

export default LandingPage
