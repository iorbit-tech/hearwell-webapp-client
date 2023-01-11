import React, { useEffect, useRef, useState } from "react";
import { postApiCall } from "../../Webservice/Webservice";
import "./style.scss";

function ChatBoxUi({ selectedChat, selection }) {
  const [chatList, setChatList] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({});
  };

  useEffect(() => {
    setChatList(selectedChat);
  }, [selectedChat]);

  useEffect(() => {
    scrollToBottom();
  }, [chatList]);
  const handleMsgChange = (e) => {
    console.log(e.target.value);
    setMessage(e.target.value);
  };

  const handleSend = () => {
    const data = {
      from: selection,
      messageBody: message,
      reply: true,
      phoneNumberId: "114161568217634",
    };
    console.log("inside handle send", data);
    postApiCall("/api/webhook/send", data)
      .then((resp) => {
        console.log(resp);
        let temChat = [...chatList, data];
        setChatList(temChat);
        setMessage("");
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      })
      .catch((err) => {
        console.log(err, "erre");
      });
  };

  const handleMsgKeyPress = (e) => {
    if (e.key == "Enter") {
      console.log(e);
      handleSend();
    }
  };

  return (
    <div className="message-list-cont">
      <div
        className="messages-list"
        style={{ height: "90%", overflowY: "scroll" }}
      >
        {chatList &&
          chatList.map((item) => {
            return (
              <div className={item.reply ? `message-right` : `message-left`}>
                <div style={{maxWidth:"80%"}}>
                  <p className="timestamp">
                  {new Date(item.createdAt).toLocaleString('en-US', { hour: 'numeric',minute:'numeric',hour12: true })}
                  </p>
                  <p className="message">{item.messageBody}</p>
                </div>
                <div ref={messagesEndRef} />
              </div>
            );
          })}
        {/* <div className="message-right">
          <p>helloo</p>
        </div> */}
      </div>
      <div className="texbox-cont">
        <input
          onKeyDown={(e) => handleMsgKeyPress(e)}
          onChange={(e) => handleMsgChange(e)}
          type="text"
          placeholder="Type a message"
          value={message}
        />
        {/* <button onClick={handleSend}>send</button> */}
      </div>
    </div>
  );
}

export default ChatBoxUi;
