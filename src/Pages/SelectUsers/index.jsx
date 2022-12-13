import React, { useEffect, useState } from "react";
import { Table } from "@mui/material";
import { getApi } from "../../Webservice/Webservice";
import { useNavigate } from "react-router-dom";

const SelectUsers = ({ props }) => {
    const [TellusClicked, setTellusClicked] = useState(0);
    const [HearingClicked, setHearingClicked] = useState(0);
    const [user, setUser] = useState('');
    const [usersList, setUsersList] = useState([]);
    const nav = useNavigate();

    const getTellusAns = (username, id) => {
        console.log(id, 'id');
        setTellusClicked(1);
        setUser(username);
        localStorage.setItem("UserId", id);
    }

    const getHearingAns = (username, id) => {
        console.log(id, 'id');
        setHearingClicked(1);
        setUser(username);
        localStorage.setItem("UserId", id);
    }

    useEffect(() => {
        getUsersList();
    }, []);

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

    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#0000' }} className="container">
            <Table striped bordered hover className="userTable">
                <thead>
                    <tr className="userHeadRow" >
                        <th>ID</th>
                        <th>Date</th>
                        <th>User</th>
                        <th colspan='2'>Q / A</th>
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
                            <td onClick={() => getTellusAns(users.userName, users.userId)} style={{ fontWeight: '500', cursor: 'pointer' }} >Tellus More</td>
                            <td onClick={() => getHearingAns(users.userName, users.userId)} style={{ fontWeight: '400', cursor: 'pointer' }} >Hearing Diary</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            {TellusClicked == 1 &&
                nav("/tellus/" + user)
            }
            {HearingClicked == 1 &&
                nav("/hearingdiary/" + user)
            }
        </div>

    );
};

export default SelectUsers;


