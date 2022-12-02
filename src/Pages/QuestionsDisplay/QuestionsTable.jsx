import { useNavigate } from "react-router-dom";
import React from "react";
import { deleteApi, getApi } from "../../Webservice/Webservice";
import "../LoginScreen/Index.scss";

const QuestionsTable = ({ item, getQuestions, getHearingQuestions }) => {
    console.log(item, 'item1')
    const navigate = useNavigate();

    async function deleteQuestion(questionId) {
        await deleteApi("api/questions/" + questionId)
            .then(res => {
                console.log(res, "responseee");
                getQuestions();
                getHearingQuestions()
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <tr className="usertBodyRow" align="center">
            <td ></td>
            <td>{item.page}</td>
            <td>{item.order}</td>
            <td style={{ fontWeight: '500', cursor: 'pointer' }} >{item.answerType}</td>
            <td style={{ fontWeight: '400', cursor: 'pointer' }} >{item.question}</td>
            <td onClick={() => navigate('/editquestion/' + item.questionId)} style={{ fontWeight: '500', cursor: 'pointer' }} >Edit</td>
            <td onClick={() => deleteQuestion(item.questionId)} style={{ fontWeight: '400', cursor: 'pointer' }} >Delete</td>
        </tr >
    )
};

export default QuestionsTable;
