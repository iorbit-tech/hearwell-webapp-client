import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ChatList } from "react-chat-elements";
import { getApi } from "../../Webservice/Webservice";

const ChatListUi = ({ chats, setSelectedChats, setSelection }) => {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    const filteredMessages = [];
    const uniqueNumbers = new Set();

    for (const chat of chats) {
      if (!uniqueNumbers.has(chat.from)) {
        uniqueNumbers.add(chat.from);
        filteredMessages.push(chat);
      }
    }
    console.log(filteredMessages);
    setChatList(filteredMessages);
  }, []);

  const handleChatSelect = (froms) => {
    getApi("/api/webhook/from/" + froms).then((resp) => {
      console.log(resp);
      setSelection(froms);
      setSelectedChats(resp.data);
    });
    // const result = chats.filter((item) => item.from == froms);
    //console.log(chats, result);
  };

  return (
    <div
      style={{
        width: "30%",
        backgroundColor: "rgb(249, 252, 255)",
      
        height: "100%",
        overflowY: "scroll",
      }}
    >
      {chatList &&
        chatList.map((item) => {
          return (
            <div
              className="chat-list-item"
              onClick={() => handleChatSelect(item.from)}
              style={{
                height: "60px",
              
                margin: 4,
                padding: 8,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                />
              </div>
              <div style={{ width: 5 }}></div>
              <div>
                <div>
                  <p style={{ margin: 0, padding: 0, fontWeight: 600 }}>
                    {item.from}
                  </p>
                </div>
                <p style={{ margin: 0, padding: 0, color: "GrayText" }}>
                  {item.messageBody}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ChatListUi;
