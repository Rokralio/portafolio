import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export const RegisterPage: React.FC = (): JSX.Element => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        width: 300,
        padding: 4,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 2,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
          Register
        </Typography>
        <TextField
          placeholder="Full Name"
          type="text"
          fullWidth
          InputProps={{
            startAdornment: <PersonOutlineIcon sx={{ mr: 1 }} />,
          }}
        />
        <TextField
          placeholder="Email"
          type="email"
          fullWidth
          InputProps={{
            startAdornment: <EmailOutlinedIcon sx={{ mr: 1 }} />,
          }}
        />
        <TextField
          placeholder="Password"
          type="password"
          fullWidth
          InputProps={{
            startAdornment: <LockOutlinedIcon sx={{ mr: 1 }} />,
          }}
        />
        <TextField
          placeholder="Confirm Password"
          type="password"
          fullWidth
          InputProps={{
            startAdornment: <LockOutlinedIcon sx={{ mr: 1 }} />,
          }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Register
        </Button>
        <Typography variant="body2" align="center">
          Already have an account? <Button color="secondary">Login</Button>
        </Typography>
      </Stack>
    </Box>
  );
};
