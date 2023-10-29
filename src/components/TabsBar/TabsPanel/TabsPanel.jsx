/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const TabsPanel = ({ children, value, index }) => {
  
  return (
    <>
 <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    </>
  );
};

export default TabsPanel;
