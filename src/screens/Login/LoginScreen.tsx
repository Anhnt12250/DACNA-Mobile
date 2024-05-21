import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";

import LoginFormComponent from "./components/LoginFormComponent";
import PlatformComponent from "./components/PlatformComponent";

export default function LoginScreen() {
  const handleOnLogin = (email: string, password: string) => {
    console.log(email, password);
  };

  const handleOnGoogleLogin = () => {
    console.log("Google login");
  };

  const handleOnFacebookLogin = () => {
    console.log("Facebook login");
  };

  const handleOnGithubLogin = () => {
    console.log("Github login");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require("@assets/logo.png")} />
        <Text style={styles.title} variant="titleLarge">
          Chấm Công Online
        </Text>
      </View>
      <LoginFormComponent submitForm={handleOnLogin} />
      <PlatformComponent
        onGoogleLogin={handleOnGoogleLogin}
        onFacebookLogin={handleOnFacebookLogin}
        onGithubLogin={handleOnGithubLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
});
