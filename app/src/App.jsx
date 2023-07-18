import { useState } from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  ChatContainer,
  MainContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello! I am ChatGPT",
      sender: "ChatGPT",
    },
  ]);

  const sendHandler = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <MainContainer>
            <ChatContainer>
              <MessageList>
                {messages.map((message, index) => {
                  return <Message key={index} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="write message here please"
                onSend={sendHandler}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </>
  );
}

export default App;
