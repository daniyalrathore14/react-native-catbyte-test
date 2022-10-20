import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { useDispatch, useSelector } from "react-redux";
import { Header, UserCard } from "~components";
import { ScreenNames } from "~routes";
import { selectUserList } from "~store/slices/user";
import getUsersList from "~store/slices/user/actions";
import { updateUserData } from "~store/slices/user/slice";
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
  const _renderItem = ({
    item,
    index,
  }: {
    item: FlatListDataProps;
    index: number;
  }) => {
    return (
      <UserCard
        image={item?.image}
        username={item.username}
        age={item.age}
        onPressCross={() => {
          let temp = [...usersList];
          temp.splice(index, 1);
          dispatch(updateUserData(temp));
        }}
        onPress={() => navigation.navigate(ScreenNames.USERDETAIL, item)}
      />
    );
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.black}>
      <View style={styles.mainContainer}>
        <Header title={"User List"} showRightIcon={false} />

        <FlatList
          data={usersList}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
          renderItem={_renderItem}
        />
      </View>
      <Pressable
        style={styles.floatingBtn}
        onPress={() => navigation.navigate(ScreenNames.ADDUSER)}
      >
        <Text style={styles.plustext}>+</Text>
      </Pressable>
    </ScreenWrapper>
  );
};

export default Users;
