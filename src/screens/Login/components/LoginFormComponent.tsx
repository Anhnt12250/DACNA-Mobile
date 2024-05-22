import { StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { Button, Text, ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";

import themes from "@themes/themes";

//redux
import { RootState } from "@redux/store";

//models
import { LoginFormModel } from "../models/login-form.model";

//components
import EmailInput from "@components/EmailInput";
import PasswordInput from "@components/PasswordInput";

export default function Form(props: any) {
  const { control, handleSubmit } = useForm<LoginFormModel>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLogging = useSelector((state: RootState) => state.user.loading);

  const { onLogin, onChangeToRegister } = props;

  const onSubmit = (data: LoginFormModel) => {
    onLogin(data);
  };

  return (
    <>
      <EmailInput control={control} name="email" label="Email" />
      <PasswordInput control={control} name="password" label="Password" />
      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
        {isLogging ? (
          <ActivityIndicator animating={true} color={themes.Custom.colors.onPrimary} />
        ) : (
          "Login"
        )}
      </Button>
      <Text style={styles.register}>
        Don't have an account?{" "}
        <Text style={styles.registerAction} onPress={onChangeToRegister}>
          Register
        </Text>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  register: {
    marginTop: 10,
    textAlign: "center",
  },
  registerAction: {
    color: themes.Custom.colors.primary,
  },
});
