import { useEffect, useState } from "react";
import { compare } from "../../Components/utills";
import { postApiCall } from "../../Webservice/Webservice";

export function Answers({ id }) {
    const [ansData, setAnsData] = useState([]);

    useEffect(() => {
        function getAnsData(id) {
            var ansReq = {
                'questionId': id,
                'userId': localStorage.getItem('UserId')
            }
            postApiCall("/api/answers/get", ansReq)
                .then((data) => {
                    setAnsData(data.data.options);
                });
        }

        getAnsData(id);
    }, []);

    ansData.sort(compare);

    return (
        <div>
            {
                ansData.length > 0 && (
                    ansData.map((item, index) => {
                        return (
                            <div>
                                <span>{item}</span>
                                <br></br>
                                {ansData.length > 1 &&
                                    < hr style={{ borderColor: '#ffffff80', width: 60 }} ></hr>
                                }
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}