import { useEffect } from "react";

import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import globalStyles from "@components/styles.css";

//redux
import { AppDispatch, RootState } from "@redux/store";

import { UserActions } from "@redux/user/UserSlice";
import { WorkdayActions } from "@redux/workday/WorkdaySlice";
import { GroupActions } from "@redux/group/GroupSlice";

export default function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.user.user);
  const workday = useSelector((state: RootState) => state.workday.workday);
  const group = useSelector((state: RootState) => state.group.group);

  useEffect(() => {
    dispatch(UserActions.getUserAsync());
    dispatch(WorkdayActions.getCurrentWorkdayAsync());
  }, []);

  useEffect(() => {
    if (workday) {
      dispatch(GroupActions.getGroupAsync(workday.group_id));
    }
  }, [workday]);

  // const handleLogout = async () => {
  //   await dispatch(UserActions.logoutUserAsync());
  //   await dispatch(AuthActions.checkUserSessionAsync());
  // };

  return (
    <View style={globalStyles.container}>
      <View>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.user_name}>
          {user?.first_name} {user?.last_name}
        </Text>
      </View>

      <View>
        {workday ? (
          <>
            <Text style={styles.header}>Currently working at group: </Text>
            <Text style={styles.group_name}>{group?.name}</Text>
            <Text> {workday.check_in.getTime()} </Text>
          </>
        ) : (
          <>
            <Text>You are not currently working. Scan the QR code to start working.</Text>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginTop: 20,
  },
  user_name: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  group_name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
});
