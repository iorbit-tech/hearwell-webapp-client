import React, { useState } from "react";
import "../LoginScreen/Index.scss";
import { Table } from "@mui/material";
import ChatScreen from "./ChatScreen";

const Chat = ({ props }) => {
    const [chatClicked, setChatClicked] = useState(0);
    const [user, setUser] = useState('');

    const chatReply = (username) => {
        setChatClicked(1);
        setUser(username);
        console.log(username)
    }

    const closeChat = () => {
        setChatClicked(0);
    }

    return (
        <div>
            <Table striped bordered hover className="userTable">
                <thead>
                    <tr className="userHeadRow" >
                        <th>ID</th>
                        <th>Date</th>
                        <th>User</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="usertBodyRow" align="center">
                        <td >1</td>
                        <td>11/10/2022</td>
                        <td>User1</td>
                        <td onClick={() => chatReply('User1')} style={{ fontWeight: '500' }} >Reply</td>
                        <td >Delete</td>
                    </tr>
                    <tr className="usertBodyRow" align="center">
                        <td>2</td>
                        <td>11/16/2022</td>
                        <td>User2</td>
                        <td onClick={() => chatReply('User2')} style={{ fontWeight: '500' }} >Reply</td>
                        <td >Delete</td>
                    </tr>
                </tbody>
            </Table>
            {chatClicked > 0 &&
                <ChatScreen {...props} user={user} closeChat={closeChat} />
            }
        </div>
    );
};

export default Chat;
