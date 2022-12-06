import React, { useEffect, useState } from "react";
import "../LoginScreen/Index.scss";
import { Table } from "@mui/material";
import ChatScreen from "./ChatScreen";
import { getApi } from "../../Webservice/Webservice";

const Chat = ({ props }) => {
    const [chatClicked, setChatClicked] = useState(0);
    const [user, setUser] = useState('');
    const [chatList, setChatList] = useState([{}]);
    let updatedChatList = []

    const chatReply = (username) => {
        setChatClicked(1);
        setUser(username);
        console.log(username)
    }

    const closeChat = () => {
        setChatClicked(0);
    }


    useEffect(() => {
        getChatList();
    }, []);

    const getChatList = async () => {
        return await getApi("/api/chat/b68a5944-f1f2-4c1c-b82c-e654448da4c8")  //need to handle Userid
            .then(res => {
                res.data.map((item, i) => {
                    updatedChatList[i] = {
                        // item,
                        text: item.message,
                        title: item.subject == 'Expert' ? 'You' : 'Test2',
                        className: item.subject == 'Expert' ? 'Expert' : 'User',
                        copiableDate: true,
                        dateString: new Date(),
                        focus: true,
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
                    <tr className="usertBodyRow" align="center">
                        <td >1</td>
                        <td>11/10/2022</td>
                        <td>Test2</td>
                        <td onClick={() => chatReply('Test2')} style={{ fontWeight: '500', cursor: 'pointer' }} >Reply</td>
                        <td onClick={() => ''} style={{ fontWeight: '400', cursor: 'pointer' }} >Delete</td>
                    </tr>
                    <tr className="usertBodyRow" align="center">
                        <td>2</td>
                        <td>11/16/2022</td>
                        <td>User2</td>
                        <td onClick={() => chatReply('User2')} style={{ fontWeight: '500', cursor: 'pointer' }} >Reply</td>
                        <td onClick={() => ''} style={{ fontWeight: '400', cursor: 'pointer' }}>Delete</td>
                    </tr>
                </tbody>
            </Table>
            {chatClicked > 0 &&
                <ChatScreen {...props} user={user} getChatList={getChatList} chatList={chatList} closeChat={closeChat} />
            }
        </div>
    );
};

export default Chat;
