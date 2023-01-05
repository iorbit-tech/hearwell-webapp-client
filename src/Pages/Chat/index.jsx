import React, { useEffect, useState, useRef } from "react";
import "../LoginScreen/Index.scss";
import { Table } from "@mui/material";
import ChatScreen from "./ChatScreen";
import { getApi } from "../../Webservice/Webservice";
import { userData } from "../../utils/authChecker";
import MessageTable from "../../Components/UserSelectTable/messageTable";
import { io } from "socket.io-client";

const Chat = ({ props }) => {
  const [chatClicked, setChatClicked] = useState(0);
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [chatList, setChatList] = useState([{}]);
  const [usersList, setUsersList] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);

  // console.log(userId, 'userId');
  let updatedChatList = [];

  const socket = io('ws://localhost:8000/', {
    transports: ['websocket'],
    secure: true,
    jsonp: false
  });

  const chatReply = (username, id) => {
    setChatClicked(1);
    setUser(username);
    setUserId(id);
  };

  const closeChat = () => {
    setChatClicked(0);
  };
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // socket = io('http://localhost:8000');
      console.log(userData.userId, 'userData.userId')
      // socket.emit("setup", userData.userId);
      const eventHandler = () => setSocketConnected(true);
      // socket.once("connection", eventHandler);
      socket.emit("join chat", userId);
      return () => {
        socket.off('connection', eventHandler);
      };
    }
  }, []);

  useEffect(() => {
    console.log(socketConnected, 'socketConnected');
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      socket.once("Web message received", (newMessageReceived) => {
        // if (!newMessageReceived) {

        getChatList();
        // }
        // else {
        console.log(newMessageReceived, 'newMessageReceived');
        // setMessageListArray([...messageListArray, newMessageReceived])
        // }
      });
      return () => {
        socket.off('Web message received', () => console.log("disconnected"));
      };
    }
  }, [setSocketConnected]);

  useEffect(() => {
    console.log('a');
    getChatList();
    getUsersList();
  }, [userId]);

  useEffect(() => {
    console.log('a');
    getChatList();
    getUsersList();
  }, [userId]);

  var newMessage = "New Message";

  const getChatList = async () => {
    console.log('getChatList')
    return await getApi("/api/chat/" + userId)
      .then((res) => {
        res.data.map((item, i) => {
          // console.log(item, 'getChatList')
          updatedChatList[i] = {
            // item,
            text: item.message,
            title: item.senderId == userData.userId ? "You" : user,
            className: item.senderId == userData.userId ? "You" : "User",
            copiableDate: true,
            // dateString: new Date(),
            date: item.sentTime,
            focus: false,
            notch: false,
            type: "text",
            senderId: item.senderId,
            receiverId: item.receiverId,
            // createdAt: get(item, "sentTime", ""),
          };
        });
        setChatList(updatedChatList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsersList = async () => {
    return await getApi("/api/user")
      .then((res) => {
        setUsersList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ marginTop: 64 }}>
      <MessageTable
        usersList={usersList}
        chatReply={chatReply}
        newMessage={newMessage}
        socket={socket}
      // getHearingAns={getHearingAns}
      />
      {/* <Table striped bordered hover className="userTable">
        <thead>
          <tr className="userHeadRow">
            <th>ID</th>
            <th>Date</th>
            <th>User</th>
            <th colspan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((users, i) => (
            <tr className="usertBodyRow" align="center">
              <td>{i + 1}</td>
              <td>11/10/2022</td>
              <td>{users.userName}</td>
              <td
                onClick={() => chatReply(users.userName, users.userId)}
                style={{ fontWeight: "500", cursor: "pointer" }}
              >
                Reply
              </td>
              <td
                onClick={() => ""}
                style={{ fontWeight: "400", cursor: "pointer" }}
              >
                Delete
              </td>
            </tr>
          ))}
          <tr className="usertBodyRow" align="center">
            <td>2</td>
            <td>11/16/2022</td>
            <td>User2</td>
            <td
              onClick={() => chatReply("User2")}
              style={{ fontWeight: "500", cursor: "pointer" }}
            >
              Reply
            </td>
            <td
              onClick={() => ""}
              style={{ fontWeight: "400", cursor: "pointer" }}
            >
              Delete
            </td>
          </tr>
        </tbody>
      </Table> */}
      {chatClicked > 0 && (
        <ChatScreen
          {...props}
          user={user}
          userId={userId}
          getChatList={getChatList}
          chatList={chatList}
          closeChat={closeChat}
          socket={socket}
        />
      )}
    </div>
  );
};

export default Chat;
