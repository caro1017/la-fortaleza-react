import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FestivalIcon from "@mui/icons-material/Festival";
import TabsPanel from "../TabsPanel/TabsPanel";
import TabsContent from "../TabsContent/TabsContent";
import "./TabsComponent.css";

const TabsComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="continer-tabs">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                sx: { backgroundColor: "#FF5D02" }, // Set the indicator color
              }}
              variant="fullWidth"
              centered
            >
              <Tab
                label="Pasadia"
                icon={<LightModeIcon />}
                sx={{
                  "&.Mui-selected": {
                    color: "#FF5D02", // Cambiar el color del texto de la pestaña seleccionada
                  },
                }}
                v={value.toString()}
              />
              <Tab
                label="Camping"
                icon={<FestivalIcon />}
                sx={{
                  "&.Mui-selected": {
                    color: "#FF5D02", // Cambiar el color del texto de la pestaña seleccionada
                  },
                }}
                v={value.toString()}
              />
              <Tab
                label="Estadia"
                icon={<HomeIcon />}
                sx={{
                  "&.Mui-selected": {
                    color: "#FF5D02", // Cambiar el color del texto de la pestaña seleccionada
                  },
                }}
                v={value.toString()}
              />
              <Tab
                label="Eventos"
                icon={<CalendarMonthIcon />}
                sx={{
                  "&.Mui-selected": {
                    color: "#FF5D02", // Cambiar el color del texto de la pestaña seleccionada
                  },
                }}
                v={value.toString()}
              />
            </Tabs>
          </Box>

          <TabsPanel value={value} index={0}>
            <TabsContent
              title="Pasadia"
              time="Horario 5am - 4pm"
              people="Minimo 8 personas"
              price="Precio $90.000"
            />
          </TabsPanel>
          <TabsPanel value={value} index={1}>
            <TabsContent
              title="Camping"
              time="Horario 5am - 6pm"
              people="Minimo 4 personas"
              price="Precio $30.000"
            />
          </TabsPanel>
          <TabsPanel value={value} index={2}>
            <TabsContent
              title="Estadia"
              time="Horario 5am - 9am (24h)"
              people="Minimo 2 personas"
              price="Precio $150.000"
            />
          </TabsPanel>
          <TabsPanel value={value} index={3}>
            <TabsContent
              title="Eventos"
              time="Horario 8am - 3pm"
              people="Minimo 15 personas"
              price="Precio Segun tipo de evento"
            />
          </TabsPanel>
        </Box>
      </div>
    </>
  );
};

export default TabsComponent;
