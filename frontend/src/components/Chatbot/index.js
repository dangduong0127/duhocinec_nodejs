
import React, { useState } from "react";
import "./styles.scss";
import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from '@botpress/webchat';
const clientId = process.env.REACT_APP_CHATBOT_CLIENT_ID;
const configuration: Configuration = {
    botName: "Chuyên viên tư vấn INEC",
    color: '#0c65d8',
    composerPlaceholder: "Tư vấn ngay...",
    locale: "vi",
    closeOnEscape: true, 
  showCloseButton: true,
    botAvatarUrl: "http://localhost:1988/uploads/icon-inec-2024.png",
  welcomeMessage: "Chào bạn! Tôi có thể hỗ trợ gì cho bạn hôm nay?",
};
const Chatbot = () => {
    const client = getClient({
    clientId,
  });

  const [isWebchatOpen, setIsWebchatOpen] = useState(false);


  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return <> <div className="chatBot-wrapper" style={{
            zIndex: isWebchatOpen ? '31' : '0',
          }}>
      <WebchatProvider client={client} configuration={configuration}>
        
        <div
          style={{
            display: isWebchatOpen ? 'block' : 'none',
          }}
        >
              <Webchat />
              
        </div>
      </WebchatProvider>
      <Fab onClick={toggleWebchat} />
    </div></>;
};

export default Chatbot;






