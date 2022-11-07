import React, { useState } from "react";
import { Box, styled, Tab, Typography } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Colors } from "../assets/global/theme";
import DeliveryForm from "./DeliveryForm";
import Payment from "./Payment";

const CartContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  padding: "15px 10px",
  gap: "12px",
  p: 0,
  marginTop: "8px",
  backgroundColor: Colors.secondary,
}));

const ListTabs = styled(TabList)(() => ({
  color: Colors.dark_grey,
}));

const Form = () => {
  const [tab, setTab] = useState("1");

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <CartContainer>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <ListTabs
            aria-label="Tabs checkout"
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#FFCC1C",
              },
            }}
          >
            <Tab
              label={<Typography variant="h4">Entrega</Typography>}
              value="1"
            />
            <Tab
              label={<Typography variant="h4">Pagamento</Typography>}
              value="2"
            />
          </ListTabs>
        </Box>
        <TabPanel value="1">
          <DeliveryForm setTab={setTab} />
        </TabPanel>
        <TabPanel value="2">
          <Payment />
        </TabPanel>
      </TabContext>
    </CartContainer>
  );
};

export default Form;
