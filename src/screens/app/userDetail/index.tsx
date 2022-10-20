import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "~components";
import { selectUserList } from "~store/slices/user";
import getUsersList from "~store/slices/user/actions";
import AppColors from "~utils/appColors";
import styles from "./styles";
interface FlatListDataProps {
  image: string;
  age: string | number;
  username: string;
}
const UserDetail = ({ navigation }: NativeStackScreenProps<any>) => {
  const dispatch = useDispatch();
  const usersList = useSelector(selectUserList);

  return (
    <ScreenWrapper statusBarColor={AppColors.black}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Users Detail</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default UserDetail;
