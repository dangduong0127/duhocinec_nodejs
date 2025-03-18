
import React, { useState } from "react";
import "./styles.scss";
import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from '@botpress/webchat';
import getImageUrl from "../../utils/getImage"
const clientId = "4147f552-ebe2-493c-af5a-563a1f25a51c";
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

  return <> <div className="chatBot-wrapper">
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






