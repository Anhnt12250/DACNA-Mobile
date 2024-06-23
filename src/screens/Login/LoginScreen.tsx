import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, Image } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";

//redux
import { AppDispatch, RootState } from "@redux/store";
import { UserActions } from "@redux/user/UserSlice";
import { AuthActions } from "@redux/auth/AuthSlice";

//models
import { LoginFormModel } from "./models/login-form.model";

//components
import FormComponent from "@screens/Login/components/LoginFormComponent";
import PlatformComponent from "@screens/Login/components/PlatformComponent";

function DialogError(props: any) {
  const { error, visible, afterDialogClose } = props;

  const [visibleError, setVisibleError] = useState(false);
  const showDialogError = () => setVisibleError(true);
  const hideDialogError = () => setVisibleError(false);

  useEffect(() => {
    if (visible) {
      showDialogError();
    }
  }, [visible]);

  const handleOnCheckInError = () => {
    hideDialogError();
    afterDialogClose();
  };

  return (
    <Dialog visible={visibleError} onDismiss={hideDialogError}>
      <Dialog.Title>Error</Dialog.Title>
      <Dialog.Content>
        <Text variant="bodyMedium">{error}</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={handleOnCheckInError}>Close</Button>
      </Dialog.Actions>
    </Dialog>
  );
}

export default function LoginScreen(props: any) {
  const { navigation } = props;

  const error = useSelector((state: RootState) => state.user.error);

  const [dialogVisible, setDialogVisible] = useState(false);

  // store
  const dispatch = useDispatch<AppDispatch>();

  const handleOnLogin = async (form: LoginFormModel) => {
    await dispatch(UserActions.loginUserAsync(form));
    await dispatch(AuthActions.checkUserSessionAsync());
  };

  useEffect(() => {
    if (error) {
      setDialogVisible(true);
      console.log("error", error);
    }
  }, [error]);

  const afterDialogClose = async () => {
    console.log("afterDialogClose");
    setDialogVisible(false);
    dispatch(UserActions.refreshUser());
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
      <Portal>
        <DialogError error={error} visible={dialogVisible} afterDialogClose={afterDialogClose} />
      </Portal>
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
