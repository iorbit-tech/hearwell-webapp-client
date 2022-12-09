import React, { useEffect, useState } from "react";
import "../LoginScreen/Index.scss";
import { Table } from "@mui/material";
import ChatScreen from "./ChatScreen";
import { getApi } from "../../Webservice/Webservice";
import { userData } from "../../utils/authChecker";

const Chat = ({ props }) => {
    const [chatClicked, setChatClicked] = useState(0);
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');
    const [chatList, setChatList] = useState([{}]);
    const [usersList, setUsersList] = useState([]);
    let updatedChatList = []

    const chatReply = (username, id) => {
        console.log(id, 'id');
        setChatClicked(1);
        setUser(username);
        setUserId(id);
    }

    const closeChat = () => {
        setChatClicked(0);
    }

    useEffect(() => {
        getChatList();
        getUsersList();
    }, [userId]);

    const getChatList = async () => {
        console.log(userData, 'userData')
        return await getApi("/api/chat/" + userId)
            .then(res => {
                res.data.map((item, i) => {
                    console.log(item, 'res.data.map')
                    updatedChatList[i] = {
                        // item,
                        text: item.message,
                        title: item.senderId == userData[0].userId ? "You" : user,
                        className: item.senderId == userData[0].userId ? 'You' : 'User',
                        copiableDate: true,
                        // dateString: new Date(),
                        date: item.sentTime,
                        focus: false,
                        notch: false,
                        type: "text",
                        senderId: item.senderId,
                        receiverId: item.receiverId,
                        // createdAt: get(item, "sentTime", ""),
                    }
                })
                setChatList(updatedChatList);
                console.log(updatedChatList, 'chatList');
            })
            .catch(error => {
                console.log(error);
            });
    }

    const getUsersList = async () => {
        return await getApi("/api/user")
            .then(res => {
                setUsersList(res.data);
                console.log(res.data, 'res_getUsersList');
            })
            .catch(error => {
                console.log(error);
            });
    }

    console.log(userId, 'usersList');
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#0000' }} className="container">
            <Table striped bordered hover className="userTable">
                <thead>
                    <tr className="userHeadRow" >
                        <th>ID</th>
                        <th>Date</th>
                        <th>User</th>
                        <th colspan='2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map((users, i) =>
                        <tr className="usertBodyRow" align="center">
                            <td >{i + 1}</td>
                            <td>11/10/2022</td>
                            <td>
                                {users.userName}
                            </td>
                            <td onClick={() => chatReply(users.userName, users.userId)} style={{ fontWeight: '500', cursor: 'pointer' }} >Reply</td>
                            <td onClick={() => ''} style={{ fontWeight: '400', cursor: 'pointer' }} >Delete</td>
                        </tr>
                    )}
                    {/* <tr className="usertBodyRow" align="center">
                        <td>2</td>
                        <td>11/16/2022</td>
                        <td>User2</td>
                        <td onClick={() => chatReply('User2')} style={{ fontWeight: '500', cursor: 'pointer' }} >Reply</td>
                        <td onClick={() => ''} style={{ fontWeight: '400', cursor: 'pointer' }}>Delete</td>
                    </tr> */}
                </tbody>
            </Table>
            {chatClicked > 0 &&
                <ChatScreen {...props} user={user} userId={userId} getChatList={getChatList} chatList={chatList} closeChat={closeChat} />
            }
        </div>
    );
};

export default Chat;
