import Paper from '@mui/material/Paper';

const ChatTool = () => {
  return (
    <Paper elevation={24}>
      <div style={container}>
        <div style={chatStyles}>
          <div id="chat-messages" style={{ height: '93%', backgroundColor: 'white', border: '1px solid black' }}>

          </div>
          <div id="user-response" style={{ height: '7%', display: 'flex', justifyContent: 'flex-end' }}>
            <input type='text' style={{ width: '100%' }} />
            <button>Enter</button>
          </div>
        </div>
      </div>
    </Paper>
  )
}

export default ChatTool

const container = {
  // backgroundColor: 'red',
  width: '100vw',
  height: '92vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const chatStyles = { 
  backgroundColor: 'lightgrey',
  border: '1px solid black', 
  padding: '1rem', 
  display: 'flex', 
  flexDirection: 'column', 
  width: '50%',
  height: '75%',
}