import { useParams } from 'react-router';
import { Alert, AlertTitle, Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "../LoginScreen/Index.scss";
import { getApi, postApiCall, updateApi } from '../../Webservice/Webservice';

const AddQuestions = () => {
    const [page, setPage] = useState('tellus');
    const [order, setOrder] = useState(1);
    const [answerType, setAnsType] = useState('checkbox');
    const [optionVal, setOptionVal] = useState({ opt1: '', opt2: '', opt3: '', opt4: '' });
    const [success, setSuccess] = useState(0);
    const [questionsData, setQuestionsData] = useState();
    const { item } = useParams();


    useEffect(() => {
        if (item !== undefined) {
            getQuestions();
        }
        else {
            setPage('tellus');
            setOrder(1);
            setAnsType('checkbox');
            setQuestionsData('');
            setOptionVal({ opt1: '', opt2: '', opt3: '', opt4: '' });
        }
    }, [item]);

    async function getQuestions() {
        await getApi("api/questions/qid/" + item)
            .then(res => {

                setQuestionsData(res.data);
                setPage(res.data.page);
                setOrder(res.data.order);
                setAnsType(res.data.answerType);
                console.log(res.data, "responseee");
                setOptionVal({ opt1: res.data.options[0], opt2: res.data.options[1], opt3: res.data.options[2], opt4: res.data.options[3] });
            })
            .catch(error => {
                console.log(error);
            });
    }


    const handlePageChange = (value) => {
        setPage(value.target.value);
    }

    const handleAnsTypeChange = (value) => {
        setAnsType(value.target.value);

    }

    const handleOrderChange = (value) => {
        setOrder(value.target.value);
    }

    const onChangeHanddle = (e) => {
        const { name, value } = e.target;
    };

    async function callAxios(questionData) {
        console.log('newpostApiCall')
        await postApiCall("api/questions", questionData)
            .then((res) => {
                setSuccess(1);
                setTimeout(
                    () => setSuccess(0),
                    5000
                );
            })
            .catch((err) => {
                console.error('error', err);
                setSuccess(-1);
                setTimeout(
                    () => setSuccess(0),
                    5000
                );
            });
    }

    async function callUpdateAxios(questionData) {
        console.log('newupdateApi')
        await updateApi("api/questions/" + questionsData.questionId, questionData)
            .then((res) => {
                console.log(res, "responseee");
                setSuccess(2);
                setTimeout(
                    () => setSuccess(0),
                    5000
                );

            })
            .catch((err) => {
                console.error('error', err.request.response.message); setSuccess(-1); setTimeout(
                    () => setSuccess(0),
                    5000
                );
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const questionData = {
            question: data.get("question"),
            options: [
                data.get("answer1"),
                data.get("answer2"),
                data.get("answer3"),
                data.get("answer4"),],
            page: page,
            order: order,
            answerType: answerType,
            createdBy: 'Doctor'
        };
        console.log(questionData, 'questionsData');
        if (item == undefined) {
            callAxios(questionData);
        } else {
            callUpdateAxios(questionData);
        }
    };

    console.log(optionVal, 'optionVal');

    return (
        <div className="container" style={{ width: '100%', height: '100vh', backgroundColor: '#F3F3F3' }}>
            <div style={{ width: '30%', alignSelf: 'center', marginTop: 20 }}>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                >
                    <div style={{ alignSelf: 'center', height: 100 }}>
                        <p style={{ float: 'left', marginTop: 25, width: 100 }}>Page:</p>
                        <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch' }}>
                            <InputLabel id="demo-simple-select-label">page</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="page-select"
                                value={page}
                                label="Page"
                                onChange={handlePageChange}
                            >
                                <MenuItem value={'tellus'}>Tellus More</MenuItem>
                                <MenuItem value={'hearingdiary'}>Hearing Diary</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="textAreaField" style={{ alignSelf: 'center', height: 100 }}>
                        <p style={{ float: 'left', marginTop: 25, width: 100 }}>Question:</p>
                        <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                            <TextareaAutosize
                                defaultValue={questionsData ? questionsData.question : ''}
                                aria-label=""
                                placeholder=""
                                style={{ width: 210, height: 50, borderRadius: 5, backgroundColor: '#00000000', }}
                                onChange={(e) => onChangeHanddle(e)}
                                name='question'
                            />
                        </FormControl>
                    </div>
                    <div style={{ alignSelf: 'center', height: 100 }}>
                        <p style={{ float: 'left', marginTop: 25, }}>Question order:</p>
                        <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch' }}>
                            <InputLabel id="demo-simple-select-label">order</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="page-select"
                                value={order}
                                label="Page"
                                onChange={handleOrderChange}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ alignSelf: 'center', height: 100 }}>
                        <p style={{ float: 'left', marginTop: 25, width: 100 }}>Answer Type:</p>
                        <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch' }}>
                            <InputLabel id="demo-simple-select-label">answer type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="answer-type-select"
                                value={answerType}
                                label="answer type"
                                onChange={handleAnsTypeChange}
                            >
                                <MenuItem value={'checkbox'}>Checkbox</MenuItem>
                                <MenuItem value={'radio'}>Radio Button</MenuItem>
                                <MenuItem value={'textbox'}>Text Box</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {answerType !== 'textbox' &&
                        <div style={{ alignSelf: 'center', height: 400 }}>
                            <p style={{ float: 'left', marginTop: 35, width: 100 }}>Answer:</p>
                            <div style={{ width: 100, float: 'right' }}>
                                <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                                    <TextField
                                        value={optionVal.opt1}
                                        id="outlined-required"
                                        variant="outlined"
                                        label=""
                                        margin="normal"
                                        onChange={(newValue) => setOptionVal(optionVal.opt1 = newValue)}
                                        name='answer1'
                                    />
                                </FormControl>
                                <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                                    <TextField
                                        value={optionVal.opt2}
                                        id="outlined-required"
                                        variant="outlined"
                                        label=""
                                        margin="normal"
                                        onChange={(newValue) => setOptionVal(optionVal.opt2 = newValue)}
                                        name='answer2'
                                    />
                                </FormControl>
                                <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                                    <TextField
                                        value={optionVal.opt3}
                                        id="outlined-required"
                                        variant="outlined"
                                        label=""
                                        margin="normal"
                                        onChange={(newValue) => setOptionVal(optionVal.opt3 = newValue)}
                                        name='answer3'
                                    />
                                </FormControl>
                                <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                                    <TextField
                                        value={optionVal.opt4}
                                        id="outlined-required"
                                        variant="outlined"
                                        label=""
                                        margin="normal"
                                        onChange={(newValue) => setOptionVal(optionVal.opt4 = newValue)}
                                        name='answer4'
                                    />
                                </FormControl>
                            </div>
                        </div>
                    }
                    <div style={{ float: 'right' }}>
                        <Button style={{ backgroundColor: '#9E7BF9', color: '#fff', fontWeight: '600', }} type="submit" variant="text">
                            {questionsData == (undefined || '') ? <span>Save</span> : <span>Update</span>}
                        </Button>
                    </div>
                </Box>
                {success == 1 && (
                    <Alert className="alertbox" severity="success">
                        <AlertTitle>Success</AlertTitle>
                        <strong>Question created successfully!</strong>
                    </Alert>
                )
                }
                {success == 2 && (
                    <Alert className="alertbox" severity="success">
                        <AlertTitle>Success</AlertTitle>
                        <strong>Question updated successfully!</strong>
                    </Alert>
                )
                }
                {success == -1 && (
                    <Alert className="alertbox" severity="error">
                        <AlertTitle>Error</AlertTitle>
                        <strong><span style={{ fontWeight: 'bolder' }}>Question order</span> already exists!</strong>
                    </Alert>
                )
                }
            </div>
        </div>
    );
};

export default AddQuestions;