import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import { TabList } from "@mui/lab";
import { TabPanel } from "@mui/lab";
import { TableContainer } from "@mui/material";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import User from "../user/User.jsx";
import Box from "@mui/material/Box";
import { useState } from "react";
import styles from "./ProductTabs.module.scss";
import { formatDistance } from "date-fns";
import { parseISO } from "date-fns";
import { NoEncryption } from "@mui/icons-material";


export default function ProductTabs({ text, bids }) {
  const [value, setValue] = useState("details");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${styles["product-tabs"]}`}>
      <Box sx={{ width: "100%" }}>
       
          <TabContext  sx={{borderRadius: '0'}} value={value}>
            <TabList sx={{ borderBottom: 2, borderColor: "divider", width: "100%" }}  onChange={handleChange}> 
              <Tab 
                label="DETAILS"
                value="details"
                className={styles["tab-details"]}
              />
              <Tab label="BIDS" value="bids" className={styles["tab-bids"]} />
              </TabList>
            <TabPanel value="details">
              <p>{text}</p>
            </TabPanel>
            <TabPanel sx={{p: '0'}} value="bids">
              <TableContainer >
                <Table>
                  <TableBody className={styles.tableBody}>
                    {bids
                      .sort((a, b) => b.amount - a.amount)
                      .map((user, i) => (
                        <TableRow key={i} 
                        className={`{table-row-${i}}`}
                        sx={{
                          backgroundColor: `${ i % 2 == 0 ? "#0F0D1F" : "#161035"}`
                        }}
                        >
                          <TableCell align="right" >
                            <User
                              name={user.user.name}
                              verified={user.user.verified}
                              avatar={user.user.avatar}
                            />
                          </TableCell>
                          <TableCell>{user.amount} ETH</TableCell>
                          <TableCell align="right">
                            {formatDistance(Date.now(), parseISO(user.date), {
                              includeSeconds: true,
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabContext>
        </Box>
     
    </div>
  );
}
