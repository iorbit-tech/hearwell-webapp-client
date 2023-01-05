import React, { useEffect, useState } from "react";
import "../LoginScreen/Index.scss";
import { Table } from "@mui/material";
import ChatScreen from "./ChatScreen";
import { getApi, updateApi } from "../../Webservice/Webservice";
import { userData } from "../../utils/authChecker";
import MessageTable from "../../Components/UserSelectTable/messageTable";

const Chat = ({ props }) => {
  const [chatClicked, setChatClicked] = useState(0);
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [chatList, setChatList] = useState([{}]);
  const [usersList, setUsersList] = useState([]);
  const [msgList, setMsgList] = useState([]);
  const [msgListID, setMsgListID] = useState([]);
  const [newMsgList, setNewMsgList] = useState([]);


  let updatedChatList = [];
  console.log(chatList, 'chatList')
  const chatReply = (username, id) => {
    setChatClicked(1);
    setUser(username);
    setUserId(id);
    let filteredID = msgListID.filter(item => item !== id)
    setMsgListID(filteredID)
  };

  const closeChat = () => {
    setChatClicked(0);
  };

  useEffect(() => {
    getChatList();
    getUsersList();
  }, [userId]);

  useEffect(() => {
    getUsersMessage()
  }, []);

  const getChatList = async () => {
    return await getApi("/api/chat/" + userId)
      .then((res) => {
        res.data.map((item, i) => {
          updatedChatList[i] = {
            // item,
            text: item.message,
            title: item.senderId == userData.userId ? "You" : user,
            className: item.senderId == userData.userId ? "You" : "User",
            status: item.status,
            copiableDate: true,
            // dateString: new Date(),
            date: item.sentTime,
            focus: false,
            notch: false,
            type: "text",
            senderId: item.senderId,
            receiverId: item.receiverId,
            messageId: item.messageId,
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

  const getUsersMessage = async () => {
    return await getApi("/api/chat/status/get")
      .then((res) => {
        console.log(res)
        let newArray = [];
        let uniqueObject = {};
        let i;
        for (let i in res.data) {
          let senderId;
          senderId = res.data[i]['senderId'];
          uniqueObject[senderId] = res.data[i];
        }

        for (i in uniqueObject) {
          newArray.push(uniqueObject[i]);
        }
        setNewMsgList(newArray);
        let msgListsenderId = [];
        msgListsenderId = newArray.map((msgList) => {
          return (
            msgList.senderId
          )
        })
        setMsgListID(msgListsenderId);
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
        msgListID={msgListID}
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
        />
      )}
    </div>
  );
};

export default Chat;
