import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { useDispatch, useSelector } from "react-redux";
import { Header, TextField } from "~components";
import { AppDispatch } from "~store";
import { selectUserList } from "~store/slices/user";
import { updateUserData } from "~store/slices/user/slice";
import AppColors from "~utils/appColors";
import styles from "./styles";
interface FlatListDataProps {
  image: string;
  age: string | number;
  username: string;
}
const CreateUsers = ({ navigation }: NativeStackScreenProps<any>) => {
  const [data, setData] = useState({
    image: "",
    firstName: "",
    lastName: "",
    username: "",
    age: "",
    address: "",
    state: "",
    city: "",
    postalCode: "",
  });
  const userRef = useRef<TextInput>();
  const fnRef = useRef<TextInput>();

  const lnRef = useRef<TextInput>();

  const ageRef = useRef<TextInput>();
  const addressRef = useRef<TextInput>();
  const stateRef = useRef<TextInput>();
  const cityRef = useRef<TextInput>();
  const zipCodeRef = useRef<TextInput>();
  const usersList = useSelector(selectUserList);
  const dispatch = useDispatch<AppDispatch>();
  const addUsers = () => {
    if (
      data.image != "" &&
      data?.firstName != "" &&
      data?.lastName != "" &&
      data?.address != "" &&
      data?.age != "" &&
      data?.state != "" &&
      data?.city != "" &&
      data?.postalCode != ""
    ) {
      console.log(data);
      let temp = [...usersList];
      temp.unshift(data);
      dispatch(updateUserData(temp));
      navigation.goBack();
    } else Alert.alert("All fields are required.");
  };
  return (
    <ScreenWrapper
      scrollType="keyboard"
      scrollViewProps={{ style: { backgroundColor: AppColors.white } }}
      statusBarColor={AppColors.black}
    >
      <Header title={"Add User"} onPress={() => navigation.goBack()} />

      <View style={styles.mainContainer}>
        <TextField
          placeholder="Image URL"
          value={data?.image}
          onChangeText={(value: any) => setData({ ...data, image: value })}
          keytype="next"
          onSubmit={() => userRef?.current?.focus()}
        />
        <TextField
          placeholder="Username"
          value={data?.username}
          onChangeText={(value: any) => setData({ ...data, username: value })}
          keytype="next"
          ref={userRef}
          onSubmit={() => fnRef?.current?.focus()}
        />
        <TextField
          placeholder="First Name"
          value={data?.firstName}
          keytype="next"
          ref={fnRef}
          onSubmit={() => lnRef?.current?.focus()}
          onChangeText={(value: any) => setData({ ...data, firstName: value })}
        />
        <TextField
          placeholder="Last Name"
          value={data?.lastName}
          keytype="next"
          ref={lnRef}
          onSubmit={() => ageRef?.current?.focus()}
          onChangeText={(value: any) => setData({ ...data, lastName: value })}
        />
        <TextField
          placeholder="Age"
          value={data?.age}
          keyboardType="number-pad"
          keytype="next"
          ref={ageRef}
          onSubmit={() => addressRef?.current?.focus()}
          onChangeText={(value: any) => setData({ ...data, age: value })}
        />
        <TextField
          placeholder="Address"
          value={data?.address}
          keytype="next"
          ref={addressRef}
          onSubmit={() => stateRef?.current?.focus()}
          onChangeText={(value: any) => setData({ ...data, address: value })}
        />
        <TextField
          placeholder="State"
          value={data?.state}
          keytype="next"
          ref={stateRef}
          onSubmit={() => cityRef?.current?.focus()}
          onChangeText={(value: any) => setData({ ...data, state: value })}
        />
        <TextField
          placeholder="City"
          value={data?.city}
          keytype="next"
          ref={cityRef}
          onSubmit={() => zipCodeRef?.current?.focus()}
          onChangeText={(value: any) => setData({ ...data, city: value })}
        />
        <TextField
          placeholder="ZipCde"
          value={data?.postalCode}
          ref={zipCodeRef}
          keyboardType="number-pad"
          onChangeText={(value: any) => setData({ ...data, postalCode: value })}
        />
        <TouchableOpacity style={styles.btn} onPress={addUsers}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default CreateUsers;
