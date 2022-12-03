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
            <td style={{ width: '2%' }}></td>
            <td style={{ width: '10%' }}>{item.page}</td>
            <td style={{ width: '2%' }}>{item.order}</td>
            <td style={{ fontWeight: '500', width: '8%' }} >{item.answerType}</td>
            <td style={{ fontWeight: '400', width: '25%', padding: 0 }} >{item.question}</td>
            <td style={{ fontWeight: '400', width: '6%' }} >{item.options[0]}</td>
            <td style={{ fontWeight: '400', width: '6%' }} >{item.options[1]}</td>
            <td style={{ fontWeight: '400', width: '6%' }} >{item.options[2]}</td>
            <td style={{ fontWeight: '400', width: '6%' }} >{item.options[3]}</td>
            <td onClick={() => navigate('/editquestion/' + item.questionId)} style={{ fontWeight: '500', cursor: 'pointer', width: '4%' }} >Edit</td>
            <td onClick={() => deleteQuestion(item.questionId)} style={{ fontWeight: '400', cursor: 'pointer', width: '4%' }} >Delete</td>
        </tr >
    )
};

export default QuestionsTable;
