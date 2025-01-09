import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface Color {
  gradient: string;
}

const colors: Color[] = [
  { gradient: "linear-gradient(132deg, rgb(2, 28, 122) 48.12%, rgb(36, 83, 255) 100.00%)" },
  { gradient: "linear-gradient(132deg, rgb(3, 148, 108) 0.00%, rgb(33, 35, 34) 100.00%)" },
  { gradient: "linear-gradient(132deg, rgb(52, 29, 49) 43.68%, rgb(146, 11, 126) 100.00%)" },
  { gradient: "linear-gradient(132deg, rgb(36, 37, 38) 33.79%, rgb(65, 80, 95) 100.00%)" },
];

export const BackgroundColors: React.FC = (): JSX.Element => {
  const [background, setBackground] = useState<string>(colors[0].gradient);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const changeBackground = (color: string): void => {
    setBackground(color);
    setIsDrawerOpen(false);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background,
        transition: "background 0.5s ease",
        zIndex: 0,
      }}
    >
    <Button
        variant="text"
        onClick={() => setIsDrawerOpen(true)}
        sx={{
          minWidth: "auto",
          padding: 0,
          position: "absolute",
          top: "50%",
          right: "16px",
          transform: "translateY(-50%)" ,
          display: isDrawerOpen ? "none" : "block",
        }}
      >
        <ArrowBackIosNewIcon />
      </Button>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {colors.map(({ gradient }, index) => (
            <ListItem key={index}>
              <ListItemButton onClick={() => changeBackground(gradient)}>
                <Box
                  sx={{
                    background: gradient,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};