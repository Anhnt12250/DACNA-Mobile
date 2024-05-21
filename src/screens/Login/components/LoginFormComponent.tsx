import { useState } from "react";

import { StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function LoginForm(props: any) {
  const { submitForm } = props;

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <TextInput
        label="Email"
        value={email}
        mode="outlined"
        inputMode="email"
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="Password"
        value={password}
        mode="outlined"
        secureTextEntry={!showPassword}
        onChangeText={(password) => setPassword(password)}
        style={styles.input}
        right={<TextInput.Icon icon="eye" onPress={toggleShowPassword} />}
      />
      <Button mode="contained" onPress={() => submitForm(email, password)} style={styles.button}>
        Login
      </Button>
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
});
