import React, { useDebugValue, useEffect, useState } from "react";
import "../LoginScreen/Index.scss";
import { Table } from "@mui/material";
import axios from "axios";

const QuestionsDisplay = () => {
    const baseUrl = 'http://178.128.165.237:8000/';
    const [tellusQuestions, setTellusQuestions] = useState();
    console.log(tellusQuestions);

    useEffect(() => {
        axios
            .get(baseUrl + "api/questions/page/tellus", {
                headers: {
                    Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzNmY0ZTdiYWFkYzBjMWVhY2ViMjcxMSIsInVzZXJOYW1lIjoicmFodWwiLCJwYXNzd29yZCI6IiQyYiQxMCRqSjFwbDNvOExndFUxTHl3ME03R21lMlpZMWZsSThTMzlyR0toeURMakdjN3M1a1pmQkw2NiIsInVzZXJUeXBlIjoidXNlciIsInN0YXR1cyI6dHJ1ZSwiZmlyc3ROYW1lIjoiUmFodWwiLCJsYXN0TmFtZSI6IktpbmciLCJkb2IiOiIxNC0xMi0xOTk1IiwiZ2VuZGVyIjoibWFsZSIsIm1hcml0YWxTdGF0dXMiOiJzaW5nbGUiLCJhZGRyZXNzMSI6ImFkcmVzcyBsaW5lIDEiLCJhZGRyZXNzMiI6ImFkcmVzcyBsaW5lIDIiLCJjaXR5IjoiVHJpdmFuZHJ1bSIsImNvdW50cnkiOiJJbmRpYSIsInppcCI6IjY5NTU3MSIsImVtYWlsIjoicmFodWxAZ2FtYWlsLmNvbSIsInBob25lIjoiMzQ1NDMzNDU1NDM0IiwidXNlcklkIjoiOGU2NTQ3YjMtNDNkOC00MzVlLWFlNzAtNGI4ZmFjZmQ4MzhkIiwiY3JlYXRlZEF0IjoiMjAyMi0xMS0xMlQwNzo0Mjo1MS4zODJaIiwidXBkYXRlZEF0IjoiMjAyMi0xMS0xNFQxMDozNzowMy4wODBaIiwiX192IjowfSwiaWF0IjoxNjY5MTAyOTY2fQ.zNKdeEbuxC7vZZRDZZdVaUvWqXGt_wxtHxW-PYQqaUA'
                }
            })
            .then((res) => {
                console.log(res, "responseee");
                setTellusQuestions(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    // const TellusQuestionsList = () => {
    //     return (
    //         tellusQuestions.map(({ item }) => item)
    //     )
    // }

    // const TellusQuestionsList = tellusQuestions.map(({ item }) => item);

    return (
        <div className="container">
            <Table striped bordered hover className="userTable">
                <thead >
                    <span>Hearing Diary</span>
                </thead>
                <thead>
                    <tr className="userHeadRow" >
                        <th>Select</th>
                        <th>Page Name</th>
                        <th>Order No</th>
                        <th>Ans Type</th>
                        <th>Question</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="usertBodyRow" align="center">
                        <td >1</td>
                        <td>11/10/2022</td>
                        <td>User1</td>
                        <td style={{ fontWeight: '500', cursor: 'pointer' }} >Reply</td>
                        <td style={{ fontWeight: '400', cursor: 'pointer' }} >Delete</td>
                    </tr>
                    <tr className="usertBodyRow" align="center">
                        <td>2</td>
                        <td>11/16/2022</td>
                        <td>User2</td>
                        <td style={{ fontWeight: '500', cursor: 'pointer' }} >Reply</td>
                        <td style={{ fontWeight: '400', cursor: 'pointer' }}>Delete</td>
                    </tr>
                </tbody>
            </Table>
            {/* <div>
                {tellusQuestions.map(item => {
                    console.log(item, 'item')
                    return (
                        <p>item.question</p>
                    )
                })}
            </div> */}
        </div>
    );
};

export default QuestionsDisplay;
