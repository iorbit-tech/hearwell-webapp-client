import React, { useDebugValue, useEffect, useState } from "react";
import "../LoginScreen/Index.scss";
import { Table } from "@mui/material";
import QuestionsTable from "./QuestionsTable";
import { getApi } from "../../Webservice/Webservice";
import TellusQuestionsList from "./TellusQuestionsList";

const QuestionsDisplay = () => {
    const [tellusQuestions, setTellusQuestions] = useState([]);
    const [hearingQuestions, setHearingQuestions] = useState([]);
    console.log(tellusQuestions);

    useEffect(() => {
        getTellusQuestions();
        getHearingQuestions();
    }, []);

    async function getTellusQuestions() {
        await getApi("api/questions/page/tellus")
            .then(res => {
                console.log(res, "responseee");
                setTellusQuestions(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    async function getHearingQuestions() {
        await getApi("api/questions/page/hearingdiary")
            .then(res => {
                console.log(res, "getHearingQuestions");
                setHearingQuestions(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div>
                <Table striped bordered hover className="userTable">
                    <thead >
                        <td style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }} colspan='7'>Tellus</td>
                    </thead>
                    <thead>
                        <tr className="userHeadRow">
                            <th>Select</th>
                            <th>Page Name</th>
                            <th>Order No</th>
                            <th>Ans Type</th>
                            <th>Question</th>
                            <th colspan='2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tellusQuestions.map(item => {
                            return (
                                <QuestionsTable item={item} getQuestions={getTellusQuestions} />
                            )
                        })}
                    </tbody>
                </Table>
            </div >
            <div>
                <Table striped bordered hover className="userTable">
                    <thead >
                        <td style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }} colspan='7'>Hearing Diary</td>
                    </thead>
                    <thead>
                        <tr className="userHeadRow">
                            <th>Select</th>
                            <th>Page Name</th>
                            <th>Order No</th>
                            <th>Ans Type</th>
                            <th>Question</th>
                            <th colspan='2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hearingQuestions.map(item => {
                            return (
                                <QuestionsTable item={item} getQuestions={getHearingQuestions} />
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default QuestionsDisplay;
