import React from "react";
import { deleteApi, getApi } from "../../Webservice/Webservice";
import "../LoginScreen/Index.scss";

const TellusQuestionsList = ({ item }) => {
    console.log(item, 'item1')

    async function deleteQuestion(questionId) {
        console.log(questionId, 'questionId');
        await deleteApi("/api/questions/questionId")
            .then(res => {
                console.log(res, "responseee");
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
            <td onClick={() => ''} style={{ fontWeight: '500', cursor: 'pointer' }} >Edit</td>
            <td onClick={() => deleteQuestion(item.questionId)} style={{ fontWeight: '400', cursor: 'pointer' }} >Delete</td>
        </tr>
    )
};

export default TellusQuestionsList;