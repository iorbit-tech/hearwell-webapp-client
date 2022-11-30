import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import "../LoginScreen/Index.scss";

const Questions = [
    { id: 0, question: 1, name: "I have worn a hearing device?", },
    { id: 1, question: 2, name: "How long do you have any discomfort using the Hearing Device?", },
    { id: 2, question: 3, name: "How long are you using this device?", },
    { id: 3, question: 4, name: "At what age you started using the device?", },
    { id: 4, question: 5, name: "How long you are using this Brand of your Hearing Device?" },
];

const Tellus = () => {
    const [page, setPage] = useState(10);
    const [orderno, setOrderno] = useState(1);
    const [ansType, setAnsType] = useState(1);


    const handlePageChange = (value) => {
        console.log(value.target.value, 'handlePageChange');
        setPage(value.target.value);
    }

    const handleAnsTypeChange = (value) => {
        console.log(value.target.value, 'handleAnsTypeChange');
        setAnsType(value.target.value);

    }

    const handleOrderChange = (value) => {
        console.log(value.target.value, 'handleOrderChange');
        setOrderno(value.target.value);
    }

    console.log("ansType", ansType);
    return (
        <div className="container">
            <div style={{ width: '30%', alignSelf: 'center', }}>
                <div>
                    <h3 style={{ textAlign: 'center' }}>Tellus More</h3>
                </div>
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
                            <MenuItem value={10}>Tellus More</MenuItem>
                            <MenuItem value={20}>Hearing Diary</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ alignSelf: 'center', height: 100 }}>
                    <p style={{ float: 'left', marginTop: 35, width: 100 }}>Question:</p>
                    <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                        <TextField
                            id="outlined-required"
                            label=""
                            margin="normal"
                        />
                    </FormControl>
                </div>
                <div style={{ alignSelf: 'center', height: 100 }}>
                    <p style={{ float: 'left', marginTop: 25, }}>Order no:</p>
                    <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch' }}>
                        <InputLabel id="demo-simple-select-label">order</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="page-select"
                            value={orderno}
                            label="Page"
                            onChange={handleOrderChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
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
                            value={ansType}
                            label="answer type"
                            onChange={handleAnsTypeChange}
                        >
                            <MenuItem value={100}>Checkbox</MenuItem>
                            <MenuItem value={200}>Radio Button</MenuItem>
                            <MenuItem value={300}>Text Box</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ alignSelf: 'center', height: 400 }}>
                    <p style={{ float: 'left', marginTop: 35, width: 100 }}>Answer:</p>
                    <div style={{ width: 100, float: 'right' }}>
                        <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                            <TextField
                                id="outlined-required"
                                label=""
                                margin="normal"
                            />
                        </FormControl>
                        <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                            <TextField
                                id="outlined-required"
                                label=""
                                margin="normal"
                            />
                        </FormControl>
                        <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                            <TextField
                                id="outlined-required"
                                label=""
                                margin="normal"
                            />
                        </FormControl>
                        <FormControl style={{ float: 'right', marginLeft: 30 }} sx={{ m: 1, width: '25ch', }} variant="outlined">
                            <TextField
                                id="outlined-required"
                                label=""
                                margin="normal"
                            />
                        </FormControl>
                    </div>

                </div>
                <div style={{ float: 'right' }}>
                    <Button style={{ backgroundColor: '#9E7BF9', color: '#fff', fontWeight: '600', }} variant="text">
                        <span>Save</span>
                        {/* <span>Update</span> */}
                    </Button>
                    <Button style={{ backgroundColor: '#9E7BF9', color: '#fff', fontWeight: '600', marginLeft: 20 }} variant="text">Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default Tellus;