import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={'/excel'}>
            <button type='button' style={{ padding: '1rem', margin: '1rem' }} onClick={()=>{}}>
              Excel Tool
            </button>
          </Link>
        <button type='button' style={{ padding: '1rem', margin: '1rem' }} onClick={()=>{}}>Button B</button>
        <button type='button' style={{ padding: '1rem', margin: '1rem' }} onClick={()=>{}}>Button C</button>
      </div>
    </div>
  )
}

export default LandingPage
