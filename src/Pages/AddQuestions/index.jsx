import { useParams } from 'react-router';
import { Alert, AlertTitle, Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../LoginScreen/Index.scss";
import { getApi } from '../../Webservice/Webservice';

const AddQuestions = () => {
    const [page, setPage] = useState('tellus');
    const [order, setOrder] = useState(1);
    const [answerType, setAnsType] = useState('checkbox');
    const baseUrl = 'http://178.128.165.237:8000/';
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
        }
    }, [item]);

    async function getQuestions() {
        await getApi("api/questions/qid/" + item)
            .then(res => {
                console.log(res, "responseee");
                setQuestionsData(res.data);
                setPage(res.data.page);
                setOrder(res.data.order);
                setAnsType(res.data.answerType);
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

    const callAxios = (questionsData) => {
        axios
            .post(baseUrl + "api/questions", questionsData, {
                headers: {
                    Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzNmY0ZTdiYWFkYzBjMWVhY2ViMjcxMSIsInVzZXJOYW1lIjoicmFodWwiLCJwYXNzd29yZCI6IiQyYiQxMCRqSjFwbDNvOExndFUxTHl3ME03R21lMlpZMWZsSThTMzlyR0toeURMakdjN3M1a1pmQkw2NiIsInVzZXJUeXBlIjoidXNlciIsInN0YXR1cyI6dHJ1ZSwiZmlyc3ROYW1lIjoiUmFodWwiLCJsYXN0TmFtZSI6IktpbmciLCJkb2IiOiIxNC0xMi0xOTk1IiwiZ2VuZGVyIjoibWFsZSIsIm1hcml0YWxTdGF0dXMiOiJzaW5nbGUiLCJhZGRyZXNzMSI6ImFkcmVzcyBsaW5lIDEiLCJhZGRyZXNzMiI6ImFkcmVzcyBsaW5lIDIiLCJjaXR5IjoiVHJpdmFuZHJ1bSIsImNvdW50cnkiOiJJbmRpYSIsInppcCI6IjY5NTU3MSIsImVtYWlsIjoicmFodWxAZ2FtYWlsLmNvbSIsInBob25lIjoiMzQ1NDMzNDU1NDM0IiwidXNlcklkIjoiOGU2NTQ3YjMtNDNkOC00MzVlLWFlNzAtNGI4ZmFjZmQ4MzhkIiwiY3JlYXRlZEF0IjoiMjAyMi0xMS0xMlQwNzo0Mjo1MS4zODJaIiwidXBkYXRlZEF0IjoiMjAyMi0xMS0xNFQxMDozNzowMy4wODBaIiwiX192IjowfSwiaWF0IjoxNjY5MTAyOTY2fQ.zNKdeEbuxC7vZZRDZZdVaUvWqXGt_wxtHxW-PYQqaUA'
                }
            })
            .then((res) => {
                console.log(res, "responseee");
                setSuccess(1);
                setTimeout(
                    () => setSuccess(0),
                    5000
                );

            })
            .catch((err) => console.error(err, questionsData));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const questionsData = {
            question: data.get("question"),
            // answer1: data.get("answer1"),
            // answer2: data.get("answer2"),
            // answer3: data.get("answer3"),
            // answer4: data.get("answer4"),
            page: page,
            order: order,
            answerType: answerType,
            createdBy: 'Doctor'
        };
        console.log(questionsData, 'questionsData');
        callAxios(questionsData);
    };


    return (
        <div className="container">
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
                                        id="outlined-required"
                                        label=""
                                        margin="normal"
                                        onChange={(e) => onChangeHanddle(e)}
                                        name=''
                                    />
                                </FormControl>
                                <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                                    <TextField
                                        id="outlined-required"
                                        label=""
                                        margin="normal"
                                        onChange={(e) => onChangeHanddle(e)}
                                    />
                                </FormControl>
                                <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                                    <TextField
                                        id="outlined-required"
                                        label=""
                                        margin="normal"
                                        onChange={(e) => onChangeHanddle(e)}
                                    />
                                </FormControl>
                                <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                                    <TextField
                                        id="outlined-required"
                                        label=""
                                        margin="normal"
                                        onChange={(e) => onChangeHanddle(e)}
                                    />
                                </FormControl>
                            </div>
                        </div>
                    }
                    <div style={{ float: 'right' }}>
                        <Button style={{ backgroundColor: '#9E7BF9', color: '#fff', fontWeight: '600', }} type="submit" variant="text">
                            {questionsData == (undefined || '') ? <span>Save</span> : <span>Update</span>}
                        </Button>
                        <Button style={{ backgroundColor: '#9E7BF9', color: '#fff', fontWeight: '600', marginLeft: 20 }} variant="text">Delete</Button>
                    </div>
                </Box>
                {success == 1 && (
                    <Alert className="alertbox" severity="success">
                        <AlertTitle>Success</AlertTitle>
                        <strong>Question created successfully!</strong>
                    </Alert>
                )
                }
            </div>
        </div>
    );
};

export default AddQuestions;