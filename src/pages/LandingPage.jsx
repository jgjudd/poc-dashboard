import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

const LandingPage = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Landing Page</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to={'/excel'} style={{ textDecoration: 'none' }}>
          <Card sx={cardStyles}>
            <CardContent>
              <Typography>Excel Tool</Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to={'/router'} style={{ textDecoration: 'none' }}>
          <Card sx={cardStyles}>
            <CardContent>
              <Typography>Nested Router Demo</Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to={'/text'} style={{ textDecoration: 'none' }}>
          <Card sx={cardStyles}>
            <CardContent>
              <Typography>Text Tool</Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to={'/mixin'} style={{ textDecoration: 'none' }}>
          <Card sx={cardStyles}>
            <CardContent>
              <Typography>Mixin Tool</Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to={'/calculator'} style={{ textDecoration: 'none' }}>
          <Card sx={cardStyles}>
            <CardContent>
              <Typography>Calculator Tool</Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    </>
  )
}

export default LandingPage

// const linkStyles = {
//   textDecoration: 'none',
// }
const cardStyles = {
  backgroundColor: 'lightgrey',
  color: 'black',
  margin: '1rem',
  border: '1px solid grey',
  minWidth: '200px',
  minHeight: '200px',
  textAlign: 'center',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
// const cardContentStyles = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// }