import React, { useCallback, useEffect, useRef, useState } from "react";

import "../LoginScreen/Index.scss";
import AttachmentPin from '../../assets/attachment.png';
import { MessageList } from "react-chat-elements";
import InputField from "./InputField";
import SendButton from "./SendButton";

const ChatScreen = ({ user }) => {
    const [messageListArray, setMessageListArray] = useState([]);
    const [currentText, setCurrentText] = useState('');
    const [status, setStatus] = useState('');
    const messageListReferance = useRef();
    const inputReferance = useRef();
    const forceUpdate = useForceUpdate()
    let clearRef = () => { }

    useEffect(() => {
        if (currentText != '') {
            let Addmtype = inputReferance.current.value || token();
            Addmtype = 'text'
            setStatus('read')
            setMessageListArray([...messageListArray, randomMessage(Addmtype)])
            // setMessageListArray([...messageListArray, inputReferance.current.value])
            clearRef()
            forceUpdate()
        }
    }, [currentText]);


    console.log(messageListArray, 'messageListArray')
    const addMessage = (data) => {
        console.log(inputReferance.current.value, 'inputReferance')
        setCurrentText(inputReferance.current.value)
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
        // title: 'Title',
        focus: true,
        // date: +new Date(),
        dateString: 'now',
        // avatar: `data:image/png;base64,${photo(20)}`,
        titleColor: 'red',
        // forwarded: true,
        // replyButton: true,
        removeButton: true,
        status: 'received',
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
        <div style={{ position: 'absolute', bottom: 0 }}>
            <div style={{ backgroundColor: '#fff', height: 300, width: 400 }}>
                <div style={{ backgroundColor: '#9E7BF9', height: 50, paddingLeft: 20, paddingBlock: 10 }}   >
                    <p style={{ fontWeight: 'bold' }}>Chat with {user}</p>
                </div>
                <div style={{ height: 200, overflow: 'auto', }}>
                    <MessageList
                        className='message-list'
                        referance={messageListReferance}
                        dataSource={messageListArray}
                        lockable={true}
                        downButton={false}
                        downButtonBadge={10}
                        sendMessagePreview={true}
                    />
                </div>
                <div
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        right: 0,
                        left: 0,
                        margin: '0 auto 1rem auto',
                        width: '60%',
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
        </div >
    );
};

export default ChatScreen;
