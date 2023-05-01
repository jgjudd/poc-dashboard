import { useState, useEffect, useRef } from 'react';
import Paper from '@mui/material/Paper';

const ChatTool = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const submitMessage = () => {
    setMessages(messages => [ ...messages, newMessage ])
  }

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <Paper elevation={24}>
      <div style={container}>
        <div style={chatStyles}>
          <div id="user-response" style={{ height: '7%', display: 'flex', justifyContent: 'flex-end' }}>
            <input type='text' value={newMessage} onChange={e => setNewMessage(e.target.value)} style={{ width: '100%' }} />
            <button onClick={() => submitMessage(newMessage)}>Enter</button>
          </div>
          <div id="chat-messages" style={{ height: '93%', backgroundColor: 'white', border: '1px solid black', overflowAnchor: 'auto', overflowY: 'scroll' }}>
            {
              messages?.map(message => (
                <div style={messageStyles}>{message}</div>
              ))
            }
            <div id="end-of-messages" ref={messagesEndRef}></div>
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

    overflowY: 'scroll',
    overscrollBehaviorY: 'contain',
    scrollSnapType: 'y proximity',
}
const chatStyles = { 
  backgroundColor: 'lightgrey',
  border: '1px solid black', 
  padding: '1rem', 
  display: 'flex', 
  flexDirection: 'column-reverse', 
  width: '50%',
  height: '75%',
  overflowAnchor: 'none',
}

const messageStyles = {
    scrollSnapAlign: 'end',
}