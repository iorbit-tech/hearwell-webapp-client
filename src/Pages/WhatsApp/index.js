import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { baseUrl, postApi } from "../../Webservice/Webservice";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import ChatUi from "./ChatUi";
import { ChatList } from "react-chat-elements";
import { MessageBox, ChatItem } from "react-chat-elements";
import ChatListUi from "./ChatUi";
import ChatBoxUi from "./ChatBoxUi";
import "./style.scss";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link className="link" color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function WAchatUi() {
  const ChatList = [
    {
      _id: "63b6a7582361c92085fc59fb",
      messageId:
        "wamid.HBgMOTE5MDc0NDc4MjY4FQIAEhggRUE3MDE1MjYwREM5RDA4ODE0RDZCMUQ3RjBDNTcxRDMA",
      phoneNumberId: "114161568217634",
      from: "919074478268",
      messageBody: "Haiiii",
      profileName: "Jb",
      conversationId: "107060552269162",
      status: false,
      createdAt: "2023-01-05T10:32:56.079Z",
      updatedAt: "2023-01-05T10:32:56.079Z",
      __v: 0,
    },
    {
      _id: "63b6a3f12361c92085fc59f9",
      messageId:
        "wamid.HBgMOTE3MDEyMTE1MzM1FQIAEhggRUUxRTdENEU5NDRCMkJGOTk4RDREQkExRjhENEZFQjkA",
      phoneNumberId: "114161568217634",
      from: "917012115335",
      messageBody: "Gg",
      profileName: "Athul SS",
      conversationId: "107060552269162",
      status: false,
      createdAt: "2023-01-05T10:18:25.587Z",
      updatedAt: "2023-01-05T10:18:25.587Z",
      __v: 0,
    },
    {
      _id: "63b68cf9720abf0d2776b17f",
      messageId:
        "wamid.HBgMOTE3MDEyMTE1MzM1FQIAEhggODc4QUNBQUQ0MjAxNEQ4OEY3REVCQUFBQ0EwRkI1OTEA",
      phoneNumberId: "114161568217634",
      from: "917012115335",
      messageBody: "Edeyy",
      profileName: "Athul SS",
      conversationId: "107060552269162",
      status: false,
      createdAt: "2023-01-05T08:40:26.010Z",
      updatedAt: "2023-01-05T08:40:26.010Z",
      __v: 0,
    },
    {
      _id: "63b6840173495c76e0c7dd4d",
      messageId: "ajkadjk",
      phoneNumberId: "1235456565",
      from: "77002211555",
      messageBody: "deyy",
      profileName: "atul",
      recievedTime: null,
      conversationId: "",
      status: false,
      __v: 0,
    },
    {
      _id: "63b68940d25af90249b4efd2",
      messageId:
        "wamid.HBgMOTE3MDEyMTE1MzM1FQIAEhggMUVGOTY0NzE4MTI0QThGODM4RjNCNEJGRkVENkZCRjAA",
      phoneNumberId: "114161568217634",
      from: "77002211555",
      messageBody: "deyy",
      profileName: "atul",
      recievedTime: null,
      conversationId: "",
      status: false,
      __v: 0,
    },
    {
      _id: "63b68b2786d40d09ae37b90a",
      messageId:
        "wamid.HBgMOTE3MDEyMTE1MzM1FQIAEhggNDZGOTRCNzExOTE0QkUxNjQ0Q0JGN0ZBNERFMzYyODUA",
      phoneNumberId: "114161568217634",
      from: "917012115335",
      messageBody: "Sugamano ?",
      profileName: "Athul SS",
      recievedTime: null,
      conversationId: "",
      status: false,
      __v: 0,
    },
  ];
  const [chats, setChats] = React.useState(ChatList);
  const [selection, setSelection] = React.useState("");
  const [selectedChat, setSelectedChats] = React.useState([]);

  const chatHistoryRef = React.useRef(null);
  const scrollToBottom = () => {
    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
       
        container
        component="main"
        className="main-cont"
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "48px"
        }}
      >
        <CssBaseline />
        <ChatListUi
          chats={chats}
          setSelectedChats={setSelectedChats}
          setSelection={setSelection}
        />
        <ChatBoxUi
          chats={chats}
          setSelectedChats={setSelectedChats}
          selectedChat={selectedChat}
          selection={selection}
        />
      </Grid>
    </ThemeProvider>
  );
}
