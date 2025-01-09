import { BackgroundColors } from "./components/styles/BackgroundColors";
import { LoginPage } from "./components/auth/LoginPage";
import { RegisterPage } from './components/auth/RegisterPage';

export const App: React.FC = () => {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <BackgroundColors />
      <LoginPage />
      <RegisterPage />
    </div>
  );
};
