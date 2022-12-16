import { Table } from "@mui/material";
import { useEffect, useState } from "react";
import { postApiCall } from "../../Webservice/Webservice";

export function Answers({ id }) {
    const [ansData, setAnsData] = useState([]);

    useEffect(() => {
        function getAnsData(id) {
            var ansReq = {
                'questionId': id,
                'userId': localStorage.getItem('UserId'),
                'page': 'hearingdiary'
            }
            postApiCall("/api/answers/get/bypage", ansReq)
                .then((data) => {
                    console.log(data, 'postApiCall')
                    // data.data.map((hearingData) => {
                    //     console.log(hearingData, 'hearingData')
                    //     setAnsData(hearingData.options);
                    // })
                    setAnsData(data.data);
                });
        }

        getAnsData(id);
    }, []);
    console.log(ansData, 'ansData')

    return (
        <div style={{ display: 'flex', height: '100%', }}>
            {
                ansData.length > 0 && (
                    ansData.map((item, Index) => {
                        // var timeStr = item.createdAt;
                        // var date = new Date(timeStr).toUTCString();
                        // var Time = date.getUTCDate();
                        // console.log(Time, 'date')
                        return (

                            <td style={{ width: 150, border: 'none', borderRight: '1px solid', }} >
                                {/* <span>{Time}</span> */}
                                {/* <br></br> */}
                                {item.options.map((finalData) => {
                                    return (
                                        <div style={{ width: '100%', alignItems: 'center' }}>
                                            <span style={{ padding: 10, alignItems: 'center' }}>{finalData}</span>
                                            <br></br>
                                            <hr></hr>
                                        </div>
                                    )
                                })
                                }
                            </td>

                        )
                    })
                )
            }
        </div >
    )
}