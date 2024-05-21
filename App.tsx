// Component Imports
import { PaperProvider } from "react-native-paper";

import LoginScreen from "@screens/Login/LoginScreen";

import MainContainer from "./nagivation/MainContainer";

export default function App() {
  const isLogged = false;

  return <PaperProvider>{isLogged ? <MainContainer /> : <LoginScreen />}</PaperProvider>;
}
