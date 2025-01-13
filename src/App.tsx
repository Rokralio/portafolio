import { BackgroundColors } from "./components/styles/BackgroundColors";
import { LoginPage } from "./pages/auth/LoginPage";

// import { RegisterPage } from './pages/auth/RegisterPage';

export const App: React.FC = () => {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <BackgroundColors />
      <LoginPage />
      {/* <RegisterPage /> */}
    </div>
  );
};
