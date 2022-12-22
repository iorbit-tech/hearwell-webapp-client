import { useEffect, useState } from "react";
import { compare } from "../../Components/utills";
import { postApiCall } from "../../Webservice/Webservice";

export function Answers({ id, index }) {
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
                    setAnsData(data.data);
                });
        }

        getAnsData(id);
    }, []);

    ansData.sort(compare);

    return (
        <div style={{ display: 'flex', height: '100%', }}>
            {
                ansData.length > 0 && (
                    ansData.map((item) => {
                        var timeStr = new Date(item.createdAt);
                        var date = timeStr.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
                        var Time = timeStr.toLocaleTimeString();
                        return (
                            <td style={{ width: 150, minHeight: 150, border: 'none', borderRight: '1px solid', }} >
                                <div>
                                    {
                                        ansData.length > 0 && index == 0 && (
                                            <>
                                                <span style={{ fontWeight: 'bold' }}>{date}</span>
                                                <br></br>
                                                <span style={{ fontWeight: 'bold' }}>{Time}</span>
                                                <hr style={{ width: '150px', position: 'relative', right: '10px', borderColor: '#535353bd' }}></hr>
                                            </>
                                        )
                                    }
                                </div>
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