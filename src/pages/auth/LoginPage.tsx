import { Box, Typography, Stack, Button } from "@mui/material";
import { EmailInputField, PasswordInputField } from "../../components/InputField"; // Importamos los componentes

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
      <Stack spacing={2}>
        <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
          Iniciar sesión
        </Typography>
        <EmailInputField />
        <PasswordInputField />
        <Button variant="contained" color="primary" fullWidth>
          Acceder
        </Button>
        <Typography variant="body2" align="center">
          <Button color="secondary">¿Olvidaste tu contraseña?</Button>
        </Typography>
        <Typography variant="body2" align="center">
          O inicia sesión con:
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: "#b71c1c",
            color: "white",
            "&:hover": { backgroundColor: "#a31515" },
          }}
        >
          Google
        </Button>
        <Typography variant="body2" align="center">
          ¿No tienes una cuenta? <Button color="secondary">Regístrate</Button>
        </Typography>
      </Stack>
    </Box>
  );
};
