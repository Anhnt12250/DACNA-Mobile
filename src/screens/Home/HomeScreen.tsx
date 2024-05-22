import { useDispatch } from "react-redux";

import { View } from "react-native";
import { Button } from "react-native-paper";

import globalStyles from "@components/styles.css";

//redux
import { AppDispatch } from "@redux/store";
import { UserActions } from "@redux/user/UserSlice";
import { AuthActions } from "@redux/auth/AuthSlice";

export default function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    await dispatch(UserActions.logoutUserAsync());
    await dispatch(AuthActions.checkUserSessionAsync());
  };

  return (
    <View style={globalStyles.container}>
      <Button onPress={handleLogout}>Logout</Button>
    </View>
  );
}
