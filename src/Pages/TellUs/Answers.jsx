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
                // .then((response) => response.json())
                .then((data) => {
                    console.log(data.data, 'postApiCall_data')
                    setAnsData(data.data.options);
                });
        }

        getAnsData(id);
    }, []);
    // console.log(ansData, 'ansData')
    return <span>{ansData}</span>;
}