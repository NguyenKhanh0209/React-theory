import { useState } from 'react'
import './App.css'
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';

function App() {
   const [chatMessages, setChatMessages] = useState([
     {
       message: "Hello chatbot",
       sender: "user",
       id: "id1",
     },
     {
       message: "Hello, how are you?",
       sender: "bot",
       id: "id2",
     },
     {
       message: "Can you help me?",
       sender: "user",
       id: "id3",
     },
     {
       message: "Yes, I can help you.",
       sender: "bot",
       id: "id4",
     },
   ]); 

  
   return (
     <div className="app-container">
       <ChatMessages
         chatMessages={chatMessages} 
       />
       <ChatInput
         chatMessages={chatMessages}
         setChatMessages={setChatMessages}
       />
     </div>
   );
}

export default App
