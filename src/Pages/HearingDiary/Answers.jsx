import { useEffect, useState } from "react";
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
    return (
        <div>
            {ansData.map((item) => {
                return (
                    <div>
                        <span>{item}</span>
                        <br></br>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}