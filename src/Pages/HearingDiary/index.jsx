import { Table } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../Webservice/Webservice";
import "../LoginScreen/Index.scss";
import { Answers } from "./Answers";

const HearingDiary = () => {
    const [hearingQuestions, setHearingQuestions] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        getHearingQuestions();
    }, []);

    async function getHearingQuestions() {
        await getApi("/api/questions/page/hearingdiary")
            .then(res => {
                setHearingQuestions(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#0000' }} className="container">
            <div style={{ flex: 1, padding: 100 }}>
                <div style={{ alignSelf: 'center' }}>
                    <h3 style={{ textAlign: 'center', }}>HearingDiary</h3>
                    <h3 style={{ textAlign: 'center' }}> {username}</h3>
                </div>
                <div style={{ display: 'flex', overflow: 'auto', width: 1000 }}>
                    <Table striped bordered hover className="userTable" style={{ width: '80%', }}>
                        <thead>
                            <tr className="userHeadRow">
                                <th className="thFirst" style={{ position: 'sticky', left: 0, zIndex: 1000, backgroundColor: '#dbdbdb' }}>Order No</th>
                                {/* <th>Ans Type</th> */}
                                <th className="thSecond">Question</th>
                                <th style={{
                                    position: 'absolute', border: 'none', right: ' 35%'
                                }}>Answers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hearingQuestions.map((item, index) => {
                                return (
                                    <tr className="usertBodyRow" align="center">
                                        <td className="tdFirst" style={{ width: '2%', position: 'sticky', left: 0, zIndex: 1000, backgroundColor: '#dbdbdb' }}>{item.order}</td>
                                        {/* <td style={{ fontWeight: '500', width: '8%' }} >{item.answerType}</td> */}
                                        <td className="tdSecond" style={{ fontWeight: '400', width: '22%', paddingLeft: 50, minWidth: '300px' }} >{item.question}</td>
                                        <Answers id={item.questionId} index={index} />
                                    </tr >
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default HearingDiary;