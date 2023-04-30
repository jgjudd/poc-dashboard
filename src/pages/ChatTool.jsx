
const ChatTool = () => {
  return (
    <div style={container}>
      <div style={chatStyles}>
        <div id="chat-messages" style={{ height: '93%' }}>Message Section</div>
        <div id="user-response" style={{ height: '7%', display: 'flex', justifyContent: 'flex-end' }}>
          <input type='text' style={{ width: '100%' }} />
          <button>Enter</button>
        </div>
      </div>
    </div>
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
  // backgroundColor: 'green',
  border: '1px solid black', 
  padding: '1rem', 
  display: 'flex', 
  flexDirection: 'column', 
  width: '50%',
  height: '75%',
}