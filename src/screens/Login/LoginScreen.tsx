import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";

import { LoginFormModel } from "./models/login-form.model";

import FormComponent from "@screens/Login/components/LoginFormComponent";
import PlatformComponent from "@screens/Login/components/PlatformComponent";

export default function LoginScreen(props: any) {
  const { navigation } = props;

  const handleOnLogin = (form: LoginFormModel) => {
    console.log(form);
  };

  const handleChangeToRegister = () => {
    navigation.navigate("Register");
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
          Login
        </Text>
      </View>
      <FormComponent onLogin={handleOnLogin} onChangeToRegister={handleChangeToRegister} />
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
