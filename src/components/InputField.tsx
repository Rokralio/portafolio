import { TextField } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export interface InputFieldProps {
  placeholder: string;
  type: string;
  icon?: React.ReactNode;
}

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  type,
  icon,
}): JSX.Element => {
  return (
    <TextField
      placeholder={placeholder}
      type={type}
      fullWidth
      InputProps={{
        startAdornment: icon,
      }}
    />
  );
};

export const EmailInputField: React.FC = (): JSX.Element => {
  return <InputField placeholder="Correo electrónico" type="email" icon={<MailIcon sx={{ mr: 1 }} />} />;
};

export const PasswordInputField: React.FC = (): JSX.Element => {
  return <InputField placeholder="Contraseña" type="password" icon={<LockOutlinedIcon sx={{ mr: 1 }} />} />;
};

export const ConfirmPasswordInputField: React.FC = (): JSX.Element => {
  return <InputField placeholder="Confirmar contraseña" type="password" icon={<LockOutlinedIcon sx={{ mr: 1 }} />} />;
};

export const NameInputField: React.FC = (): JSX.Element => {
  return <InputField placeholder="Nombre completo" type="text" icon={<PersonOutlineIcon sx={{ mr: 1 }} />} />;
};
