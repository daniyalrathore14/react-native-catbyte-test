import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { Header } from "~components";
import AppColors from "~utils/appColors";
import styles from "./styles";
interface FlatListDataProps {
  image: string;
  age: string | number;
  username: string;
}
const UserDetail = ({ navigation, route }: NativeStackScreenProps<any>) => {
  const userInfo = route.params;
  const DetailView = ({
    label,
    value,
  }: {
    label: string;
    value: string | number | boolean;
  }) => {
    return (
      <View style={styles.contentView}>
        <Text style={styles.labelText}>{label}: </Text>
        <Text style={styles.valueText} numberOfLines={2}>
          {value}
        </Text>
      </View>
    );
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.black}>
      <View style={styles.mainContainer}>
        <Header title={"User Detail"} onPress={() => navigation.goBack()} />

        <Image
          source={{ uri: userInfo?.image }}
          style={styles.imageView}
          resizeMode="cover"
        />
        <View style={styles.personalDetail}>
          <Text style={styles.titleText}>Personal Detail</Text>

          <DetailView label="First Name" value={userInfo?.firstName} />
          <DetailView label="Last Name" value={userInfo?.lastName} />
          <DetailView label="Username" value={userInfo?.username} />
          <DetailView label="Age" value={userInfo?.age} />
        </View>
        <View style={styles.personalDetail}>
          <Text style={styles.titleText}>Comopany Detail</Text>

          <DetailView label="City" value={userInfo?.address?.city} />
          <DetailView label="State" value={userInfo?.address?.state} />
          <DetailView
            label="Postal Code"
            value={userInfo?.address?.postalCode}
          />
          <DetailView label="Address" value={userInfo?.address?.address} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default UserDetail;
