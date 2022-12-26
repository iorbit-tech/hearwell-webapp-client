import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { deleteApi, getApi } from "../../Webservice/Webservice";
import "../LoginScreen/Index.scss";
import Edit_Icon from '../../assets/edit_icon.png';
import Delete_Icon from '../../assets/delete_icon.png';
import Down_arrow from '../../assets/down-arrow.png';
import Up_arrow from '../../assets/up-arrow.png';



const QuestionsTable = ({ index, item, getQuestions, getHearingQuestions }) => {
    const navigate = useNavigate();
    const [expandedRows, setExpandedRows] = useState([]);

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

    const handleEpandRow = (index, questionId) => {
        const currentExpandedRows = expandedRows;
        const isRowExpanded = currentExpandedRows.includes(questionId);
        let obj = {};
        isRowExpanded ? (obj[questionId] = false) : (obj[questionId] = true);
        const newExpandedRows = isRowExpanded ?
            currentExpandedRows.filter(id => id !== questionId) :
            currentExpandedRows.concat(questionId);

        setExpandedRows(newExpandedRows);
    }

    return (
        <tr className="usertBodyRow" align="center">
            <td style={{ width: '10%' }}>{item.page}</td>
            <td style={{ width: '2%' }}>{item.order}</td>
            <td style={{ fontWeight: '500', width: '8%' }} >{item.answerType}</td>
            <td style={{ fontWeight: '400', width: '22%', padding: 0 }} >{item.question}</td>
            <td style={{ fontWeight: '400', width: '10%' }} >
                {!expandedRows.includes(item.questionId) &&
                    <span onClick={event => handleEpandRow(index, item.questionId)}>{item.options[0]}</span>
                }
                {item.options.length > 1 &&
                    <div onClick={event => handleEpandRow(index, item.questionId)} style={{ cursor: 'pointer', height: 0, }}>
                        {!expandedRows.includes(item.questionId) ?
                            <img style={{ position: 'relative', left: '45%', bottom: 22, }} src={Down_arrow} width="20" />
                            :
                            <img style={{ position: 'relative', left: '45%', bottom: 0 }} src={Up_arrow} width="20" />
                        }
                    </div>

                }
                <br></br>
                {item.options.map((option, index) => {
                    return (

                        expandedRows.includes(item.questionId) ?
                            <span key={index}> {option}<br></br>
                                {item.options.length > 1 &&
                                    < hr style={{ borderColor: '#ffffff80', width: 60 }} ></hr>
                                }
                            </span> :
                            null

                    )

                })}
            </td>
            <td style={{ width: '2%' }}>
                <span onClick={() => navigate('/editquestion/' + item.questionId)} style={{ fontWeight: '500', cursor: 'pointer', marginRight: 10 }} >
                    <img src={Edit_Icon} width="30" />
                </span>
                <span onClick={() => deleteQuestion(item.questionId)} style={{ fontWeight: '400', cursor: 'pointer', }} >
                    <img src={Delete_Icon} width="30" />
                </span>
            </td>
        </tr >
    )
};

export default QuestionsTable;