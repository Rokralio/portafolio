import { Box, Typography, Stack, Button } from "@mui/material";
import {
  NameInputField,
  EmailInputField,
  PasswordInputField,
  ConfirmPasswordInputField
} from "../../components/InputField";

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
          Registrar
        </Typography>
        <NameInputField />
        <EmailInputField />
        <PasswordInputField />
        <ConfirmPasswordInputField />
        <Button variant="contained" color="primary" fullWidth>
          Registrar
        </Button>
        <Typography variant="body2" align="center">
          ¿Ya tienes una cuenta? <Button color="secondary">Iniciar sesión</Button>
        </Typography>
      </Stack>
    </Box>
  );
};
