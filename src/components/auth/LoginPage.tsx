import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Mail } from "@mui/icons-material";

export const LoginPage: React.FC = (): JSX.Element => {
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
      <Stack spacing={1}>
        <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
          Bienvenido
        </Typography>
        <TextField
          placeholder="Correo electrónico"
          type="email"
          fullWidth
          InputProps={{
            startAdornment: <Mail sx={{ mr: 1 }} />,
          }}
        />
        <TextField
          placeholder="Contraeña"
          type="password"
          fullWidth
          InputProps={{
            startAdornment: <LockOutlinedIcon sx={{ mr: 1 }} />,
          }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Acceso
        </Button>
        <Typography variant="body2" align="center">
          <Button color="secondary">¿HAS OLVIDADO TU CONTRASEÑA?</Button>
        </Typography>
        <Typography variant="body2" align="center">
          iniciar sesión con:
        </Typography>
        <Button variant="outlined" fullWidth sx={{
          backgroundColor: "#b71c1c"
        }}>
          Google
        </Button>
        <Typography variant="body2" align="center">
          ¿No tienes una cuenta? 
          <Button color="secondary">registrar</Button>
        </Typography>
      </Stack>
    </Box>
  );
};
