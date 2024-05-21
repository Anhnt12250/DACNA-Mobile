// Component Imports
import { PaperProvider } from "react-native-paper";

import MainNavigation from "./src/nagivation/MainNavigation";
import AuthenticationNavigation from "./src/nagivation/AuthenticationNavigation";

export default function App() {
  const isLogged = false;

  return (
    <PaperProvider>{isLogged ? <MainNavigation /> : <AuthenticationNavigation />}</PaperProvider>
  );
}
