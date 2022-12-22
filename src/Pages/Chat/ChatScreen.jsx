import React, { useCallback, useEffect, useRef, useState } from "react";

import "../LoginScreen/Index.scss";
import AttachmentPin from '../../assets/attachment.png';
import { MessageList } from "react-chat-elements";
import InputField from "./InputField";
import SendButton from "./SendButton";
import { postApi, postApiCall } from "../../Webservice/Webservice";
import { userData } from "../../utils/authChecker";

const ChatScreen = ({ user, closeChat, chatList, getChatList, userId }) => {
    const [messageListArray, setMessageListArray] = useState([]);
    const [currentText, setCurrentText] = useState('');
    const [status, setStatus] = useState('');
    const messageListReferance = useRef();
    const inputReferance = useRef();
    const forceUpdate = useForceUpdate()
    let clearRef = () => { }

    console.log(chatList, 'messageListArray');

    useEffect(() => {
        if (currentText != '') {
            let Addmtype = inputReferance.current.value || token();
            Addmtype = 'text';
            setStatus('read');
            setMessageListArray([...messageListArray, randomMessage(Addmtype),])
            console.log(currentText, 'randomMessage');
            submitChat(currentText);
            getChatList();
        }
    }, [currentText]);

    console.log(userData.userId, 'userData');

    async function submitChat(currentText) {
        const submitMessage = {
            subject: "Expert", message: currentText, sentTime: new Date(),
            senderId: userData.userId, receiverId: userId, //need to handle Userid
        }

        await postApiCall("/api/chat/", submitMessage)
            .then(res => {
            })
            .catch(error => {
                console.log(error);
            });
    }

    const addMessage = (data) => {
        setCurrentText(inputReferance.current.value)
        inputReferance.current.value = '';
        clearRef()
        // forceUpdate()
    }

    function useForceUpdate() {
        const [value, setValue] = useState(0)
        return () => setValue(() => value + 1)
    }

    const token = () => {
        return Math.floor((Math.random() * 10) % 9)
    }

    const textMessage = {
        type: 'text',
        id: String(Math.random()),
        position: 'right',
        text: currentText,
        title: 'You',
        focus: true,
        // avatar: `data:image/png;base64,${photo(20)}`,
        titleColor: '#4f81a1',
        // forwarded: true,
        // replyButton: true,
        // removeButton: true,
        // status: 'received',
        notch: false,
        copiableDate: true,
        retracted: false,
        className: '',
    }

    const randomMessage = (type) => {
        switch (type) {
            case 'text':
                return textMessage
            default:
                break
        }
    }

    return (
        <div style={{ position: 'absolute', top: '70%', right: 50 }}>
            <div style={{ backgroundColor: '#51b3ff08', height: 300, width: 400, }}>
                <div onClick={() => closeChat()} style={{ float: 'right', margin: 10 }}>
                    <button style={{ fontWeight: 'bold', borderColor: '#ffffff00' }}>X</button>
                </div>
                <div className="appBar" style={{ height: 50, paddingLeft: 20, paddingBlock: 10 }}   >
                    <p style={{ fontWeight: 'bold' }}>Chat with {user}</p>
                </div>
                <div style={{ height: 200, overflow: 'auto', }}>
                    <MessageList
                        className='message-list'
                        referance={messageListReferance}
                        // dataSource={messageListArray}
                        dataSource={chatList}
                        lockable={true}
                        downButton={false}
                        downButtonBadge={10}
                        sendMessagePreview={true}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            marginBottom: 10
                        }}
                    >
                        <InputField
                            className='rce-example-input'
                            placeholder='Write your message here.'
                            defaultValue=''
                            referance={inputReferance}
                            maxHeight={50}
                            clear={(clear) => (clearRef = clear)}
                            onKeyPress={(e) => {

                                if (e.shiftKey && e.charCode === 13) {
                                    return true
                                }
                                if (e.charCode === 13) {
                                    clearRef()
                                    addMessage(token())
                                }
                            }}
                            rightButtons={<SendButton text='Submit' onClick={() => addMessage(token())} />}
                        />
                    </div>
                </div>

            </div>
        </div >
    );
};

export default ChatScreen;
