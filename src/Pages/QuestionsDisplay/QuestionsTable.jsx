import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { deleteApi, getApi } from "../../Webservice/Webservice";
import "../LoginScreen/Index.scss";
import Edit_Icon from '../../assets/edit_icon.png'
import Delete_Icon from '../../assets/delete_icon.png'


const QuestionsTable = ({ item, getQuestions, getHearingQuestions }) => {
    console.log(item, 'item1')
    const navigate = useNavigate();

    async function deleteQuestion(questionId) {
        await deleteApi("/api/questions/" + questionId)
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
            {/* <td style={{ width: '2%' }}></td> */}
            <td style={{ width: '10%' }}>{item.page}</td>
            <td style={{ width: '2%' }}>{item.order}</td>
            <td style={{ fontWeight: '500', width: '8%' }} >{item.answerType}</td>
            <td style={{ fontWeight: '400', width: '22%', padding: 0 }} >{item.question}</td>
            <td style={{ fontWeight: '400', width: '10%' }} >
                {item.options.map((option, index) => {
                    return <span>{option} <br></br>
                        {item.options.length > 1 &&
                            < hr style={{ borderColor: '#ffffff80', width: 60 }} ></hr>
                        }
                    </span>
                })}
            </td>
            <td style={{ width: '2%' }}>
                <span onClick={() => navigate('/editquestion/' + item.questionId)} style={{ fontWeight: '500', cursor: 'pointer', marginRight: 10 }} >
                    <img src={Edit_Icon} style={{}} width="30" />
                </span>
                <span onClick={() => deleteQuestion(item.questionId)} style={{ fontWeight: '400', cursor: 'pointer', }} >
                    <img src={Delete_Icon} style={{}} width="30" />
                </span>
            </td>
        </tr >
    )
};

export default QuestionsTable;