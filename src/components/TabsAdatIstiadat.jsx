import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageSliderTradisi from "./ImageSlider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageSliderTarian from "./ImageSliderTarian";
import ImageSliderPakaian from "./ImageSliderPakaian";
import ImageSliderRumah from "./ImageSliderRumah";
import ImageSliderAlatMusik from "./ImageSliderAlatMusik";
import ImageSliderSenjata from "./ImageSliderSenjata";
import ImageSliderKuliner from "./ImageSliderKuliner";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#aed581",
    },
    secondary: {
      main: "#aed581",
    },
  },
});

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", overflowX: "auto" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="primary"
            indicatorColor="secondary"
            variant="scrollable"
          >
            <Tab
              label="Tradisi Adat"
              {...a11yProps(0)}
              className='mx-6 font-["Poppins"] text-white'
            />
            <Tab
              label="Tarian Adat"
              {...a11yProps(1)}
              className='mx-6 font-["Poppins"] text-white '
            />
            <Tab
              label="Pakaian Adat"
              {...a11yProps(2)}
              className='mx-6 font-["Poppins"] text-white '
            />
            <Tab
              label="Rumah Adat"
              {...a11yProps(3)}
              className='mx-6 font-["Poppins"] text-white '
            />
            <Tab
              label="Alat Musik"
              {...a11yProps(4)}
              className='mx-6 font-["Poppins"] text-white '
            />
            <Tab
              label="Senjata Adat"
              {...a11yProps(5)}
              className='mx-6 font-["Poppins"] text-white '
            />
            <Tab
              label="Kuliner"
              {...a11yProps(6)}
              className='mx-6 font-["Poppins"] text-white '
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="mr-10 ml-10">
            <ImageSliderTradisi props={false} />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="mr-10 ml-10">
            <ImageSliderTarian props={false} />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="mr-10 ml-10">
            <ImageSliderPakaian props={false} />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div className="mr-10 ml-10">
            <ImageSliderRumah props={false} />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <div className="mr-10 ml-10">
            <ImageSliderAlatMusik props={false} />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <div className="mr-10 ml-10">
            <ImageSliderSenjata props={false} />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <div className="mr-10 ml-10">
            <ImageSliderKuliner props={false} />
          </div>
        </CustomTabPanel>
      </Box>
    </ThemeProvider>
    </div>
  );
}
