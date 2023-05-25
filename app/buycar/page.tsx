"use client";
import DrawerAppBar from "@/components/DrawerAppBar";
import HeaderMiddle from "@/components/HeaderMiddle";
import TopAppBar from "@/components/TopAppBar";
import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  InputAdornment,
  Drawer,
} from "@mui/material";
import BasicBreadcrumbs from "@/components/Breadcrum";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import MediaCard from "@/components/BuyCard";
import RefreshIcon from "@mui/icons-material/Refresh";
import Image from "next/image";
import Slider from "@mui/material/Slider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Chip from '@mui/material/Chip';
import Link from "next/link";
import Footer from "@/components/Footer";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';







type Anchor = 'top' | 'left' | 'bottom' | 'right';

// export default function TemporaryDrawer() {




const data = [
  { heading: 'Second hand Wagon R in New-Delhi (18) ', Amount: '₹70000' },
  { heading: 'Second hand Swift in New-Delhi (8) ', Amount: '₹1,40,000' },
  { heading: 'Second hand Alto 800 in New-Delhi (4) ', Amount: '₹1,90,000' },
  { heading: 'Second hand Baleno in New-Delhi (4) ', Amount: '₹5,75,000' },
  { heading: 'Second hand Celerio in New-Delhi (3) ', Amount: '₹1,98,000' },
  { heading: 'Second hand Celerio in New-Delhi (3)', Amount: '₹2,40,000' },
  { heading: 'Second hand Ciaz in New-Delhi (3) ', Amount: '₹3,85,000' },
  { heading: 'Second hand Ignis in New-Delhi (3) ', Amount: '₹4,70,000' },
  { heading: 'Second hand S-Cross in New-Delhi (3)  ', Amount: '₹3,80,000' },
];

function valueyeartext(value: number) {
  return `${value}Year`;
}

const minDistance = 10;

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  color: "#363636",
  fontSize: 12,
  padding: "6px 18px",
  margin: "0px 10px 15px 0px",
  border: "1px solid",
  lineHeight: 1.2,
  backgroundColor: "#fff",
  borderColor: "#363636",
  borderRadius: "20px",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#2b33a2",
    borderColor: "#0062cc",
    boxShadow: "none",
    color: "#fff",
  },
  "&:active": {
    backgroundColor: "#2b33a2",
    borderColor: "#0062cc",
    boxShadow: "none",
    color: "#fff",
  },
  "&:focus": {
    backgroundColor: "#2b33a2",
    borderColor: "#0062cc",
    boxShadow: "none",
    color: "#fff",
  },
});

const marks = [
  {
    value: 0,
    label: "0Km",
  },

  {
    value: 20,
    label: "20Km",
  },

  {
    value: 40,
    label: "40Km",
  },

  {
    value: 60,
    label: "60Km",
  },

  {
    value: 80,
    label: "80Km",
  },

  {
    value: 100,
    label: "100Km",
  },
];

const currencies = [
  {
    value: "Shorted",
    label: "Shorted by",
  },
  {
    value: "Low-height",
    label: "Price (Low to High)",
  },
  {
    value: "High-Low",
    label: "Price (High to Low)",
  },
  {
    value: "Low-height",
    label: "Km (Low to High)",
  },
  {
    value: "High-Low",
    label: "Km (High to Low)",
  },
];
const location = [
  {
    value: "Select location",
    label: "Select location",
  },
  {
    value: "Ambala",
    label: "Ambala",
  },
  {
    value: "Moali",
    label: "Moali",
  },
  {
    value: "shahabad",
    label: "shahabad",
  },
  {
    value: "Kurukshetra",
    label: "Kurukshetra",
  },
];
function valuetext(value: number) {
  return `${value}Km`;
}
export default function Page() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = () => () => { };
  const [value1, setValue1] = React.useState<number[]>([0, 10]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  // Accordion faq
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };




  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        `<div className="shadow-lg bg-white px-7">
              <Stack direction={"row"} className="justify-between py-2">
                <Typography variant="h6">Refine Your Result</Typography>
                <Button
                  variant="text"
                  startIcon={<RefreshIcon />}
                  className="capitalize"
                >
                  Reset
                </Button>
              </Stack>
              <Divider />
              <Box className="py-4">
                <Typography variant="body1" fontWeight={"600"} gutterBottom>
                  Location
                </Typography>
                <div className="my-4 flex items-center gap-4">
                  <TextField
                    id=""
                    select
                    label="Select location"
                    defaultValue="Select location"
                    fullWidth
                  >
                    {location.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Image
                    src={"/location-icon.jpg"}
                    width={"18"}
                    height={"18"}
                    alt="location icon"
                  ></Image>
                </div>
              </Box>
              <Divider />
              <Box className="py-4">
                <Typography variant="body1" fontWeight={"600"} gutterBottom>
                  Range
                </Typography>
                <div className="my-4">
                  <Box>
                    <Slider
                      aria-label="Custom marks"
                      defaultValue={20}
                      getAriaValueText={valuetext}
                      step={10}
                      valueLabelDisplay="auto"
                      marks={marks}
                    />
                  </Box>
                </div>
                <List sx={{ width: "100%" }}>
                  {[
                    "True Value Certified",
                    "Smart Finance Available",
                    "Remove Booked Cars",
                  ].map((element) => {
                    const labelId = `checkbox-list-label-${element}`;
                    return (
                      <ListItem
                        className="border-b-2"
                        key={element}
                        disablePadding
                      >
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle()}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              className="p-1"
                              edge="start"
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId} primary={` ${element}`} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Select Budget
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <BootstrapButton variant="contained" disableRipple>
                      Less than 2L
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      2L to 4L
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      4L to 6L
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      more then 6L
                    </BootstrapButton>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Body Type
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <BootstrapButton variant="contained" disableRipple>
                      HATCHBACK (22)
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      SEDAN (2)
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      VAN
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      SUV
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      MUV
                    </BootstrapButton>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Brand
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List sx={{ width: "100%" }} className="brand-list">
                      {[
                        "Wagon R (5)",
                        "Alto 800 (3)",
                        "Swift (5)",
                        "Dzire",
                        "Alto (3)",
                        "Alto K10 (1)",
                        "Eeco",
                        "Celerio",
                        "Baleno",
                        "Omni",
                        "Vitara Brezza",
                        "Ritz (1)",
                        "Ciaz",
                        "S-presso",
                        "Zen Estilo (2)",
                        "Maruti 800 (2)",
                        "Ertiga",
                        "S-cross",
                        "Ignis",
                        "A Star",
                      ].map((element) => {
                        const labelId = `checkbox-list-label-${element}`;
                        return (
                          <ListItem
                            className="border-b-2 c-list-item"
                            key={element}
                            disablePadding
                          >
                            <ListItemButton
                              role={undefined}
                              onClick={handleToggle()}
                              dense
                            >
                              <ListItemIcon>
                                <Checkbox
                                  className="p-1"
                                  edge="start"
                                  disableRipple
                                  inputProps={{ "aria-labelledby": labelId }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                id={labelId}
                                primary={` ${element}`}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Car Age
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ width: 300 }}>
                      <Slider
                        getAriaLabel={() => "Minimum distance"}
                        value={value1}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueyeartext}
                        disableSwap
                      />
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      {" "}
                      Owner
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List sx={{ width: "100%" }}>
                      {["1st Owner", "2nd Owner", "More Then 2 Owner"].map(
                        (element) => {
                          const labelId = `checkbox-list-label-${element}`;
                          return (
                            <ListItem
                              className="border-b-2 c-list-item"
                              key={element}
                              disablePadding
                            >
                              <ListItemButton
                                role={undefined}
                                onClick={handleToggle()}
                                dense
                              >
                                <ListItemIcon>
                                  <Checkbox
                                    className="p-1"
                                    edge="start"
                                    disableRipple
                                    inputProps={{ "aria-labelledby": labelId }}
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  id={labelId}
                                  primary={` ${element}`}
                                />
                              </ListItemButton>
                            </ListItem>
                          );
                        }
                      )}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Kilometers Driven
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <BootstrapButton variant="contained" disableRipple>
                      {`<10kM`}
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      {`<25kM`}
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      {`<50kM`}
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      {`<75kM`}
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      {`<75kM+`}
                    </BootstrapButton>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Fuel Type
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List sx={{ width: "100%" }}>
                      {["Petrol", "Disel", "CNG"].map((element) => {
                        const labelId = `checkbox-list-label-${element}`;
                        return (
                          <ListItem
                            className="border-b-2 c-list-item"
                            key={element}
                            disablePadding
                          >
                            <ListItemButton
                              role={undefined}
                              onClick={handleToggle()}
                              dense
                            >
                              <ListItemIcon>
                                <Checkbox
                                  className="p-1"
                                  edge="start"
                                  disableRipple
                                  inputProps={{ "aria-labelledby": labelId }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                id={labelId}
                                primary={` ${element}`}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8a-content"
                    id="panel8a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Colors
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <input type="color" name="" id="" />
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel9a-content"
                    id="panel9a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Transmission
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List sx={{ width: "100%" }}>
                      {["Manual", "Automatic"].map((element) => {
                        const labelId = `checkbox-list-label-${element}`;
                        return (
                          <ListItem
                            className="border-b-2 c-list-item"
                            key={element}
                            disablePadding
                          >
                            <ListItemButton
                              role={undefined}
                              onClick={handleToggle()}
                              dense
                            >
                              <ListItemIcon>
                                <Checkbox
                                  className="p-1"
                                  edge="start"
                                  disableRipple
                                  inputProps={{ "aria-labelledby": labelId }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                id={labelId}
                                primary={` ${element}`}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>`
      </List>

    </Box>
  );



  return (
    <div className="section-bg-color">
      <TopAppBar />
      <HeaderMiddle />
      <DrawerAppBar />
      <div className="px-6">
        <Grid container className="my-30 ">
          <Grid xs={12} lg={3} item className=" md:pr-6 hidden lg:block ">
            <div className="shadow-lg bg-white px-7 pb-7 sticky top-3 overflow-y-scroll max-w-[400px] w-full">
              <Stack direction={"row"} className="justify-between py-2">
                <Typography variant="h6">Refine Your Result</Typography>
                <Button
                  variant="text"
                  startIcon={<RefreshIcon />}
                  className="capitalize"
                >
                  Reset
                </Button>
              </Stack>
              <Divider />
              <Box className="py-4">
                <Typography variant="body1" fontWeight={"600"} gutterBottom>
                  Location
                </Typography>
                <div className="my-4 flex items-center gap-4">
                  <TextField
                    id=""
                    select
                    label="Select location"
                    defaultValue="Select location"
                    fullWidth
                  >
                    {location.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Image
                    src={"/location-icon.jpg"}
                    width={"18"}
                    height={"18"}
                    alt="location icon"
                  ></Image>
                </div>
              </Box>
              <Divider />
              <Box className="py-4">
                <Typography variant="body1" fontWeight={"600"} gutterBottom>
                  Range
                </Typography>
                <div className="my-4">
                  <Box>
                    <Slider
                      aria-label="Custom marks"
                      defaultValue={20}
                      getAriaValueText={valuetext}
                      step={10}
                      valueLabelDisplay="auto"
                      marks={marks}
                    />
                  </Box>
                </div>
                <List sx={{ width: "100%" }}>
                  {[
                    "True Value Certified",
                    "Smart Finance Available",
                    "Remove Booked Cars",
                  ].map((element) => {
                    const labelId = `checkbox-list-label-${element}`;
                    return (
                      <ListItem
                        className="border-b-2"
                        key={element}
                        disablePadding
                      >
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle()}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              className="p-1"
                              edge="start"
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId} primary={` ${element}`} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Select Budget
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <BootstrapButton variant="contained" disableRipple>
                      Less than 2L
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      2L to 4L
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      4L to 6L
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      more then 6L
                    </BootstrapButton>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Body Type
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <BootstrapButton variant="contained" disableRipple>
                      HATCHBACK (22)
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      SEDAN (2)
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      VAN
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      SUV
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      MUV
                    </BootstrapButton>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Brand
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List sx={{ width: "100%" }} className="brand-list">
                      {[
                        "Wagon R (5)",
                        "Alto 800 (3)",
                        "Swift (5)",
                        "Dzire",
                        "Alto (3)",
                        "Alto K10 (1)",
                        "Eeco",
                        "Celerio",
                        "Baleno",
                        "Omni",
                        "Vitara Brezza",
                        "Ritz (1)",
                        "Ciaz",
                        "S-presso",
                        "Zen Estilo (2)",
                        "Maruti 800 (2)",
                        "Ertiga",
                        "S-cross",
                        "Ignis",
                        "A Star",
                      ].map((element) => {
                        const labelId = `checkbox-list-label-${element}`;
                        return (
                          <ListItem
                            className="border-b-2 c-list-item"
                            key={element}
                            disablePadding
                          >
                            <ListItemButton
                              role={undefined}
                              onClick={handleToggle()}
                              dense
                            >
                              <ListItemIcon>
                                <Checkbox
                                  className="p-1"
                                  edge="start"
                                  disableRipple
                                  inputProps={{ "aria-labelledby": labelId }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                id={labelId}
                                primary={` ${element}`}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Car Age
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ width: 300 }}>
                      <Slider
                        getAriaLabel={() => "Minimum distance"}
                        value={value1}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueyeartext}
                        disableSwap
                      />
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      {" "}
                      Owner
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List sx={{ width: "100%" }}>
                      {["1st Owner", "2nd Owner", "More Then 2 Owner"].map(
                        (element) => {
                          const labelId = `checkbox-list-label-${element}`;
                          return (
                            <ListItem
                              className="border-b-2 c-list-item"
                              key={element}
                              disablePadding
                            >
                              <ListItemButton
                                role={undefined}
                                onClick={handleToggle()}
                                dense
                              >
                                <ListItemIcon>
                                  <Checkbox
                                    className="p-1"
                                    edge="start"
                                    disableRipple
                                    inputProps={{ "aria-labelledby": labelId }}
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  id={labelId}
                                  primary={` ${element}`}
                                />
                              </ListItemButton>
                            </ListItem>
                          );
                        }
                      )}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Kilometers Driven
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <BootstrapButton variant="contained" disableRipple>
                      {`<10kM`}
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      {`<25kM`}
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      {`<50kM`}
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      {`<75kM`}
                    </BootstrapButton>
                    <BootstrapButton variant="contained" disableRipple>
                      {`<75kM+`}
                    </BootstrapButton>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Fuel Type
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List sx={{ width: "100%" }}>
                      {["Petrol", "Disel", "CNG"].map((element) => {
                        const labelId = `checkbox-list-label-${element}`;
                        return (
                          <ListItem
                            className="border-b-2 c-list-item"
                            key={element}
                            disablePadding
                          >
                            <ListItemButton
                              role={undefined}
                              onClick={handleToggle()}
                              dense
                            >
                              <ListItemIcon>
                                <Checkbox
                                  className="p-1"
                                  edge="start"
                                  disableRipple
                                  inputProps={{ "aria-labelledby": labelId }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                id={labelId}
                                primary={` ${element}`}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8a-content"
                    id="panel8a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Colors
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <input type="color" name="" id="" />
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel9a-content"
                    id="panel9a-header"
                  >
                    <Typography fontWeight={"600"} className="text-gray">
                      Transmission
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List sx={{ width: "100%" }}>
                      {["Manual", "Automatic"].map((element) => {
                        const labelId = `checkbox-list-label-${element}`;
                        return (
                          <ListItem
                            className="border-b-2 c-list-item"
                            key={element}
                            disablePadding
                          >
                            <ListItemButton
                              role={undefined}
                              onClick={handleToggle()}
                              dense
                            >
                              <ListItemIcon>
                                <Checkbox
                                  className="p-1"
                                  edge="start"
                                  disableRipple
                                  inputProps={{ "aria-labelledby": labelId }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                id={labelId}
                                primary={` ${element}`}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </Grid>
          <Grid xs={12} lg={9} item className=" lg:pl-8 c-pb-70 ">
            <BasicBreadcrumbs
              breadcrumb1={"Home"}
              breadcrumb2={""}
              breadcrumb3={""}
              breadcrumb4={""}
              breadcrumbend={"Buy Car"}
            />
            <div className="block lg:hidden">
              {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button className="w-full bg-darkblue" onClick={toggleDrawer(anchor, true)}>Filter</Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
            <Box className="flex item-center justify-between p-2 my-4 flex-wrap md:flex-nowrap gap-10">
              <Typography variant="h5" className="font-bold">
                27 Used Cars in Ambala for sale!
              </Typography>
              <TextField id="" className="w-full md:w-[250px]" select label="Sort by" defaultValue="Shorted"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <ImportExportIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box className='flex items-center '>
              <Box className='w-[116px] h-[50px] flex items-center justify-center bg-darkblue c-border-radius'>
                <Image src={'/calender.png'} width={'36'} height={'31'} alt="calender.png"></Image>
              </Box>
              <Box className="c-border-dotted w-full h-[50px] flex items-center px-4 bg-white">
                <Typography className="text-darkblue font-semibold text-xs sm:text-sm md:text-lg">885 customers have booked test drives in your city. Don’t miss out</Typography>
              </Box>
            </Box>
            <Box>
              <Stack direction="row" spacing={1} className="my-4">
                <Chip label="black" className="bg-darkblue text-white" />
                <Chip label="200km" className="bg-darkblue text-white" />
              </Stack>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={4} >
                <MediaCard
                  imageUrl={"/banner-image-cardetail-1.jpg"}
                  cardTitle="Swift"
                  place="delhi"
                  location="2 Kms Away"
                  modelYear="2020"
                  fuelType="petrol"
                  travelled="50000"
                  price="200000"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} >
                <MediaCard
                  imageUrl={"/card-1.jpg"}
                  cardTitle="Swift"
                  place="delhi"
                  location="2 Kms Away"
                  modelYear="2020"
                  fuelType="petrol"
                  travelled="50000"
                  price="200000"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} >
                <MediaCard
                  imageUrl={"/car-3.jpg"}
                  cardTitle="Swift"
                  place="delhi"
                  location="2 Kms Away"
                  modelYear="2020"
                  fuelType="petrol"
                  travelled="50000"
                  price="200000"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} >
                <MediaCard
                  imageUrl={"/banner-image-cardetail-1.jpg"}
                  cardTitle="Swift"
                  place="delhi"
                  location="2 Kms Away"
                  modelYear="2020"
                  fuelType="petrol"
                  travelled="50000"
                  price="200000"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} >
                <MediaCard
                  imageUrl={"/card-1.jpg"}
                  cardTitle="Swift"
                  place="delhi"
                  location="2 Kms Away"
                  modelYear="2020"
                  fuelType="petrol"
                  travelled="50000"
                  price="200000"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} >
                <MediaCard
                  imageUrl={"/car-3.jpg"}
                  cardTitle="Swift"
                  place="delhi"
                  location="2 Kms Away"
                  modelYear="2020"
                  fuelType="petrol"
                  travelled="50000"
                  price="200000"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} >
                <MediaCard
                  imageUrl={"/banner-image-cardetail-1.jpg"}
                  cardTitle="Swift"
                  place="delhi"
                  location="2 Kms Away"
                  modelYear="2020"
                  fuelType="petrol"
                  travelled="50000"
                  price="200000"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} >
                <MediaCard
                  imageUrl={"/card-1.jpg"}
                  cardTitle="Swift"
                  place="delhi"
                  location="2 Kms Away"
                  modelYear="2020"
                  fuelType="petrol"
                  travelled="50000"
                  price="200000"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} >
                <MediaCard
                  imageUrl={"/car-3.jpg"}
                  cardTitle="Swift"
                  place="delhi"
                  location="2 Kms Away"
                  modelYear="2020"
                  fuelType="petrol"
                  travelled="50000"
                  price="200000"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={2} className="my-4 items-center">
                <Pagination count={10} />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={'600'}>Frequently Asked Questions</Typography>
            </Grid>
            <Grid item xs={12}>
              <div className="my-4">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<KeyboardArrowDownIcon/>}>
                    <Typography variant="body1" fontWeight={'600'}>How to buy a used car in Delhi?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      If you are planning to buy a used car in Delhi, you can find a wide range of quality pre-owned cars at Maruti Suzuki True Value where every such car undergoes 376 quality checks. This ensures that you get the <Link href={'#'}>best second hand car</Link> that you can rely on and the assurance of Maruti Suzuki to go along with it.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<KeyboardArrowDownIcon/>}>
                    <Typography variant="body1" fontWeight={'600'}>How can an old car be used in Delhi?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      In Delhi, the registration for petrol and diesel cars is valid till 15 years and 10 years, respectively. If you are planning to buy a used car that is nearing the end of its validity, you will have to get it re-registered in your name. To get the ownership transferred, you will have to submit an application to the Regional Transport Office or RTO. You can always visit your nearest True Value outlet and speak to our experts to get the right guidance in this regard.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<KeyboardArrowDownIcon/>}>
                    <Typography variant="body1" fontWeight={'600'}>What body types are available for second hand cars in Delhi?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      At Maruti Suzuki True Value you can explore a wide range of second hand cars in Delhi and other cities in India. Here, you can find different body types from hatchbacks to sedans, SUVs etc. Finding a car that caters to your needs and fits in your budget has now become easier than ever.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" expandIcon={<KeyboardArrowDownIcon/>}>
                    <Typography variant="body1" fontWeight={'600'}>How to transfer pre owned car in Delhi?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      When you buy a pre owned car in Delhi from Maruti Suzuki True Value, all the documentation, including RC transfer, is taken care of us. Our objective is to ensure that your car-buying experience is convenient and this is a small step in that direction.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                  <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" expandIcon={<KeyboardArrowDownIcon/>}>
                    <Typography variant="body1" fontWeight={'600'}>How many years a car can be used in Delhi?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      It depends on the car you are using. In Delhi, if you have a petrol car then it is valid for 15 years and if it is a diesel one then it can be used for 10 years. After this time limit, your car will have to be re-registered. This period of validity is determined as per assessment by the registering authority.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={12} className="flex items-center justify-center my-6">
              <Box className="max-w-2xl bg-white w-full border-1 p-5 border-gray-200 ">
                <Typography variant="h6" fontWeight={'600'}>Used car prices as on 15 May 2023</Typography>
                <Stack direction={"row"} className="justify-between py-2 border-b-2">
                  <Typography variant="h6" fontWeight={'600'} className="text-gray-600">Car</Typography>
                  <Typography variant="h6" fontWeight={'600'} className="text-gray-600">Price Starting From</Typography>
                </Stack>
                {data.map((element) => {
                  const labelId = `checkbox-list-label-${element}`;
                  return (
                    <Stack key={element.heading} direction={"row"} className="justify-between py-2 border-b-2 c-list-item">
                      <Link href={'/'}><Typography variant="body2" className="text-darkblue hover:text-blue-500">{element.heading}</Typography></Link>
                      <Typography variant="body2" className="text-darkblue hover:text-blue-500">{element.Amount}</Typography>
                    </Stack>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className="text-darkblue mt-4 mb-2" gutterBottom>Purchase Certified Second Hand Cars in Delhi</Typography>
              <Typography variant="body2" gutterBottom>Have you been searching for top-conditioned, second hand cars in New Delhi? Come visit a Maruti Suzuki True Value showroom near you, and see our real-time inventory of certified pre-owned cars in Delhi to choose from. Maruti Suzuki True Value has <Link href={'#'} className="text-darkblue hover:text-blue-400">over 11 showrooms in New Delhi</Link> wherein you can find top quality, well-conditioned used cars for buying.</Typography>
              <Typography variant="body2" gutterBottom>You can also choose to check out our stock of second hand cars in Delhi via our website, online or through our mobile apps. You can not only check out your favourite pre-owned car; conveniently book a test drive for your favourite used car in Delhi online through the <Link href={'#'} className="text-darkblue hover:text-blue-400">True Value website or app.</Link></Typography>
              <Typography variant="body2" gutterBottom >All the certified preowned cars that we offer at True Value have been extensively checked for quality purposes before they are put up for sale. With complete customer satisfaction being our motto, we strive to deliver nothing but the best second hands cars in Delhi to our customers.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className="text-darkblue mt-4 mb-2" gutterBottom>Buy the Best Used Cars in Delhi At True Value</Typography>
              <Typography variant="body2" gutterBottom>As a customer-focused brand, Maruti Suzuki True Value aims at making the process of buying used cars in Delhi NCR as simple and hassle-free for our customers as possible. For this purpose, our showrooms have undergone a revamp and we have undertaken a digitally driven approach for selling second-hand cars in Delhi.</Typography>
              <Typography variant="body2" gutterBottom>We also have a highly intuitive website and mobile apps (Android and iOS) using which our customers can view the real-time inventory of used cars for sale in Delhi and book a test drive. At the same, if you have to exchange your old cars at True Value in Delhi, you can also <Link href={'#'} className="text-darkblue hover:text-blue-400">book car evaluation at home online. </Link></Typography>
              <Typography variant="body2" gutterBottom>You can also find the nearest Maruti Suzuki True Value from your place of residence using the <Link href={'#'}>Showroom Locator.</Link> Furthermore, there are inbuilt filters that will help simplify your research to help you find the most suitable used cars in Delhi as per your needs and preferences.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className="text-darkblue mt-4 mb-2" gutterBottom>Top Reasons to Buy From Maruti Suzuki True Value</Typography>
              <Typography variant="body2" gutterBottom>Buying used cars in Delhi has seen an upturn in the last few years, and Maruti Suzuki is pioneering in context of this shift. Here’s more on why Maruti Suzuki True Value is the perfect destination for buying a used car in Delhi:-</Typography>
              <Typography variant="body1" fontWeight={'600'} gutterBottom>Verified Car History</Typography>
              <Typography variant="body2" gutterBottom>At the time of buying from Maruti Suzuki True Value, car buyers get a detailed history of the pre-owned car they’ve selected which includes number of previous owners, kilometres run, and more. Ensuring transparency is pivotal to the way True Value works when buying and selling second-hand cars in Delhi.</Typography>
              <Typography variant="body1" fontWeight={'600'} gutterBottom>Paperwork is Quick and Convenient</Typography>
              <Typography variant="body2" gutterBottom>Another aspect of pre-owned car buying that concerns a lot of buyers is the documentation involved. Well, at Maruti Suzuki True Value, we’ll take care of it, ensuring the entire process of <Link href={'#'}>buying second hand cars</Link> in Delhi is seamless.</Typography>
              <Typography variant="body1" fontWeight={'600'} gutterBottom>Extensive Quality Check</Typography>
              <Typography variant="body2" gutterBottom>At Maruti Suzuki True Value, second-hand cars for sale in Delhi have to go through 376 quality checks before they are True Value certified and listed for sale. These checks undertaken for second hand cars in Delhi include engine, suspension, frame, body panels, transmission, and more.</Typography>
              <Typography variant="body1" fontWeight={'600'} gutterBottom>Digital Buying Experience</Typography>
              <Typography variant="body2" gutterBottom>While Maruti Suzuki True Value showrooms in New Delhi are well-stocked up with certified pre-owned cars, you can now do the exploring from the comfort of your home or office. Visit the website or download the <Link href={'#'} className="text-darkblue hover:text-blue-400">Maruti Suzuki True Value mobile app</Link>. After that, you are all set to go and shortlist the best second-hand cars for sale in Delhi. You can also book yourself a test drive for your preferred pre-owned car via either of these platforms. After that, you can visit the pre-designated showroom and take your test drive.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className="text-darkblue mt-4 mb-2" gutterBottom>Experience Convenience & Transparency at Every True Value Showroom</Typography>
              <Typography variant="body1" fontWeight={'600'} gutterBottom>Wide Range of Pre-Owned Cars to Choose From</Typography>
              <Typography variant="body2" gutterBottom>When you have more choices to assess from, your buying decision is a lot more well-informed. At Maruti Suzuki True Value showrooms, you can browse the used cars for sale in Delhi available in stock in the large car display yard to shortlist your options as per your preferences. Other big benefits of buying Maruti Suzuki certified pre-owned cars in Delhi are the 1-year warranty and 3 free services on offer.</Typography>
              <Typography variant="body1" fontWeight={'600'} gutterBottom>Scan the QR code for complete details about second hand cars</Typography>
              <Typography variant="body2" gutterBottom>Once you get to your nearest True Value showroom, scan the QR code on any pre-owned car with the help of your Maruti Suzuki True Value app. You will get all the details of your preferred car right before you.</Typography>
              <Typography variant="body1" fontWeight={'600'} gutterBottom>Get all the help you need from your Dedicated Relationship Officer</Typography>
              <Typography variant="body2" gutterBottom>Upon registration, we assign a dedicated relationship officer to our customers across all our showrooms, for attending to the customer’s queries and confusions. The officer takes you through the most relevant old cars at the True Value showroom after recognising your requirements and choices.</Typography>
              <Typography variant="body2" gutterBottom>They will clear all your doubts and queries, help you with the test drive and also guide you through the documentation procedure, all in a bid to ensure that you have a personalized experience while buying a second hand car from Maruti Suzuki True Value.</Typography>
              <Typography variant="body1" fontWeight={'600'} gutterBottom>Taking care of all your car-buying needs</Typography>
              <Typography variant="body2" gutterBottom>Transparency is a pillar at Maruti Suzuki True Value. Therefore, what you see on the website or app in terms of the available second hand cars in Delhi is what you will get when you visit the showroom. Furthermore, all your buying needs related to second hand cars in Delhi, like car finance and insurance are also catered to at Maruti Suzuki True Value showrooms, to make your car-buying experience as convenient as possible.</Typography>
              <Typography variant="body2" fontWeight={'600'}>Note – Warranty and Free Services may vary from one certified pre-owned car to another.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="bg-white pt-5">
        <Footer />
      </div>
    </div>
  );
}
