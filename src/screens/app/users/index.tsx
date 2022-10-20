import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "~components";
import { ScreenNames } from "~routes";
import { selectUserList } from "~store/slices/user";
import getUsersList from "~store/slices/user/actions";
import AppColors from "~utils/appColors";
import styles from "./styles";
interface FlatListDataProps {
  image: string;
  age: string | number;
  username: string;
}
const Users = ({ navigation }: NativeStackScreenProps<any>) => {
  const dispatch = useDispatch();
  const usersList = useSelector(selectUserList);
  useEffect(() => {
    dispatch(getUsersList());
  }, []);
  const _renderItem = ({ item }: { item: FlatListDataProps }) => {
    return (
      <UserCard
        image={item?.image}
        username={item.username}
        age={item.age}
        onPress={() => navigation.navigate(ScreenNames.USERDETAIL, item)}
      />
    );
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.black}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>USERS LIST</Text>
        </View>
        <FlatList
          data={usersList}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
          renderItem={_renderItem}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Users;
