import React, { useDebugValue, useEffect, useState } from "react";
import "../LoginScreen/Index.scss";
import { Table } from "@mui/material";
import QuestionsTable from "./QuestionsTable";
import { getApi } from "../../Webservice/Webservice";
import TellusQuestionsList from "./TellusQuestionsList";
import { compare } from "../../Components/utills";

const QuestionsDisplay = () => {
    const [tellusQuestions, setTellusQuestions] = useState([]);
    const [hearingQuestions, setHearingQuestions] = useState([]);

    useEffect(() => {
        getTellusQuestions();
        getHearingQuestions();
    }, []);

    async function getTellusQuestions() {
        await getApi("/api/questions/page/tellus")
            .then(res => {
                console.log(res, "responseee");
                setTellusQuestions(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    async function getHearingQuestions() {
        await getApi("/api/questions/page/hearingdiary")
            .then(res => {
                console.log(res, "getHearingQuestions");
                setHearingQuestions(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    tellusQuestions.sort(compare);
    hearingQuestions.sort(compare);

    return (
        <div className="container" style={{ width: '100%', height: '100%', backgroundColor: '#0000' }}>
            <div>
                <Table striped bordered hover className="userTable" style={{ width: '80%', marginTop: 100 }}>
                    <thead >
                        <td style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }} colspan='11'>Tellus</td>
                    </thead>
                    <thead>
                        <tr className="userHeadRow">
                            {/* <th>Select</th> */}
                            <th>Page Name</th>
                            <th>Order No</th>
                            <th>Ans Type</th>
                            <th>Question</th>
                            <th>Options</th>
                            <th colspan='2' >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tellusQuestions.map(item => {
                            return (
                                <QuestionsTable item={item} getQuestions={getTellusQuestions} key={item.questionId} />
                            )
                        })}
                    </tbody>
                </Table>
            </div >
            <hr style={{ position: 'relative', right: '10%', marginTop: 100, marginBottom: 100, border: '5px solid #f3f3f3', width: '50%' }}></hr>
            <div>
                <Table striped bordered hover className="userTable" style={{ width: '80%' }}>
                    <thead >
                        <td style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }} colspan='11'>Hearing Diary</td>
                    </thead>
                    <thead>
                        <tr className="userHeadRow">
                            {/* <th>Select</th> */}
                            <th>Page Name</th>
                            <th>Order No</th>
                            <th>Ans Type</th>
                            <th>Question</th>
                            <th>Options</th>
                            <th colspan='2' >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hearingQuestions.map(item => {
                            return (
                                <QuestionsTable item={item} getQuestions={getHearingQuestions} key={item.questionId} />
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default QuestionsDisplay;