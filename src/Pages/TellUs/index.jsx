import { Table } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { compare } from "../../Components/utills";
import { getApi } from "../../Webservice/Webservice";
import "../LoginScreen/Index.scss";
import { Answers } from "./Answers";

const Tellus = () => {
    const [tellusQuestions, setTellusQuestions] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        getTellusQuestions();
    }, []);

    async function getTellusQuestions() {
        await getApi("/api/questions/page/tellus")
            .then(res => {
                setTellusQuestions(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    tellusQuestions.sort(compare);
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#0000' }} className="container">
            <div style={{ flex: 1, width: '30%', alignSelf: 'center', padding: 100 }}>
                <div>
                    <h3 style={{ textAlign: 'center' }}>Tellus More</h3>
                    <h3 style={{ textAlign: 'center' }}> {username}</h3>
                </div>
                <Table striped bordered hover className="userTable" style={{ width: '80%', }}>
                    <thead >
                        <td style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }} colspan='11'>Tellus</td>
                    </thead>
                    <thead>
                        <tr className="userHeadRow">
                            <th>Order No</th>
                            <th>Ans Type</th>
                            <th>Question</th>
                            {/* <th>Options</th> */}
                            <th>Answers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tellusQuestions.map(item => {

                            return (
                                <tr className="usertBodyRow" align="center">
                                    <td style={{ width: '2%' }}>{item.order}</td>
                                    <td style={{ fontWeight: '500', width: '8%' }} >{item.answerType}</td>
                                    <td style={{ fontWeight: '400', width: '22%', padding: 0 }} >{item.question}</td>
                                    <div>
                                        <td style={{ border: 'none' }}>
                                            <Answers id={item.questionId} />
                                        </td>
                                    </div>
                                </tr >
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Tellus;