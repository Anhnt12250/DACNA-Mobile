import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  inputContainer: {
    marginBottom: 5,
  },
  input: {
    marginBottom: 0,
  },
  inputError: {
    color: MD3Colors.error50,
    fontSize: 13,
    marginBottom: 0,
  },
});
