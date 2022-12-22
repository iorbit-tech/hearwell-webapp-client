import { Paper, Table, TableContainer } from "@mui/material";
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
            <div style={{ flex: 1, alignSelf: 'center', padding: 100 }}>
                <Paper sx={{ width: "100%" }}>
                    <Table className="even">
                        <thead style={{
                            backgroundColor: "#51b3ff",
                        }}>
                            <td style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }} colspan='11'>Tellus - {username}</td>
                        </thead>
                        <thead style={{
                            backgroundColor: "#51b3ff",
                            border: 'none',
                            color: '#fff'
                        }}>
                            <tr style={{ borderBottom: '2px solid #0000000f' }} className="userHeadRow">
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
                                        <td style={{ minWidth: '5%' }}>{item.order}</td>
                                        <td style={{ width: '8%' }} >{item.answerType}</td>
                                        <td style={{ minWidth: '20vw', }} >{item.question}</td>
                                        <td>
                                            <Answers id={item.questionId} />
                                        </td>
                                    </tr >
                                )
                            })}
                        </tbody>

                    </Table>
                </Paper>
            </div>
        </div>
    );
};

export default Tellus;