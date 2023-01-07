
import { styled, useTheme } from "@mui/material/styles";
import { SupervisedUserCircle, WhatsApp } from "@mui/icons-material";
import { AppBar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../LoginScreen/Index.scss";
import { getApi } from "../../Webservice/Webservice";
import { userData } from "../../utils/authChecker";

const WAChat = () => {
    const [chatList, setChatList] = useState([]);
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        // getChatList();
        getUsersList();
    }, []);

    const getUsersList = async () => {
        return await getApi("/api/user")
            .then((res) => {
                setUsersList(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // const getChatList = async () => {
    //     return await getApi("/api/chat/" + userId)
    //         .then((res) => {
    //             res.data.map((item, i) => {
    //                 updatedChatList[i] = {
    //                     // item,
    //                     text: item.message,
    //                     // title: item.senderId == userData.userId ? "You" : user,
    //                     className: item.senderId == userData.userId ? "You" : "User",
    //                     status: item.status,
    //                     copiableDate: true,
    //                     // dateString: new Date(),
    //                     date: item.sentTime,
    //                     focus: false,
    //                     notch: false,
    //                     type: "text",
    //                     senderId: item.senderId,
    //                     receiverId: item.receiverId,
    //                     messageId: item.messageId,
    //                     // createdAt: get(item, "sentTime", ""),
    //                 };
    //             });
    //             setChatList(updatedChatList);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    const navigate = useNavigate();
    const handleClick = (nav) => {
        console.log(nav);
        navigate(nav);
    };

    const drawerWidth = 220;

    const [open, setOpen] = React.useState(
        window.innerWidth < 500 ? false : true
    );
    const theme = useTheme();

    const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
        ({ theme, open }) => ({
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `-${drawerWidth}px`,
            ...(open && {
                transition: theme.transitions.create("margin", {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            }),
        })
    );

    const sideBarData = [

        {
            text: "Select User",
            icon: <SupervisedUserCircle className='iCons' />,
            nav: "SelectUsers",
        },
    ];

    return (
        <Box className="waChat" sx={{ display: "flex", marginLeft: 100 }}>
            <AppBar
                className='appBar'
                position="fixed"
                open={open}
            // style={{ backgroundColor: 'red' }}
            >
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    marginTop: 100,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        marginLeft: 30,
                        borderLeft: '1px solid #e5e5e5',
                        marginTop: 8,
                        backgroundColor: ' #ffffff'
                        // paddingTop: 1
                        // zIndex: -1
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <List>
                    {usersList.map((item, index) =>  (
                        < ListItem
                            key = { index }
                            disablePadding
                            onClick={() => handleClick(item.userId)}
                    style={{ borderBottom: '1px solid #f3f3f3' }}
                        >
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                            primary={item.userName}
                        />
                    </ListItemButton>
                </ListItem>

                    ))}

            </List>
            <Divider />
            <Main open={open}>
                {/* <DrawerHeader /> */}
                <div className="route-container">
                    <Outlet />
                </div>
            </Main>

        </Drawer>
        </Box >

    );
};

export default WAChat;
