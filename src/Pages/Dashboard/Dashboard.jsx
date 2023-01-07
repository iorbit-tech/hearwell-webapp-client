import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from "@mui/icons-material/Mail";
import ArticleIcon from "@mui/icons-material/Article";
import {
  ChatBubbleOutlineOutlined,
  LogoutRounded,
  SupervisedUserCircle,
  WhatsApp,
} from "@mui/icons-material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MoreIcon from "@mui/icons-material/More";
import '../../assets/Style/index.scss'

const drawerWidth = 240;

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function DashBoard() {
  const theme = useTheme();
  const navigate = useNavigate();
  const sideBarData = [
    {
      text: "Add Qns",
      icon: <AddCommentIcon className='iCons' />,
      nav: "addquestions",
    },
    // {
    //   text: "Tellus More",
    //   icon: <MoreIcon style={{ color: "#9a34e3" }} />,
    //   nav: "tellus",
    // },
    {
      text: "Chat",
      icon: <ChatBubbleOutlineOutlined className='iCons' />,
      nav: "chat",
    },
    {
      text: "All Questions",
      icon: <QuestionAnswerIcon className='iCons' />,
      nav: "allquestions",
    },
    {
      text: "User Register",
      icon: <SupervisedUserCircle className='iCons' />,
      nav: "register",
    },
    {
      text: "Select User",
      icon: <SupervisedUserCircle className='iCons' />,
      nav: "SelectUsers",
    },
    {
      text: "WhatsApp Chat",
      icon: <WhatsApp className='iCons' />,
      nav: "whatsappchat",
    },
  ];
  const [open, setOpen] = React.useState(
    window.innerWidth < 500 ? false : true
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (nav) => {
    console.log(nav);
    navigate(nav);

  };

  const logout = () => {
    console.log("log out");
    localStorage.setItem("authToken", null);
    localStorage.setItem("userData", null);
    navigate("/login")
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className='appBar'
        position="fixed"
        open={open}
      // style={{ backgroundColor: 'red' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" noWrap component="div">
              Hearwell
            </Typography>
            <IconButton
              onClick={logout}
              color="inherit"
            // aria-label="open drawer"
            // onClick={handleDrawerOpen}
            // edge="start"
            // sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <LogoutRounded />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideBarData.map((item, index) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => handleClick(item.nav)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  style={{ color: "#51B3FF" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? "<InboxIcon />" : "<MailIcon />"}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        {/* <DrawerHeader /> */}
        <div className="route-container">
          <Outlet />
        </div>
      </Main>
    </Box>
  );
}
