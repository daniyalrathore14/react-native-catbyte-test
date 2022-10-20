import React from "react";
import { ImageBackground, Pressable, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AppColors from "~utils/appColors";
import styles from "./styles";
interface Props {
  onPress?: () => void;
  username: string;
  age: string | number;
  image: string;
  onPressCross?: () => void;
}

const UserCard = ({ onPress, onPressCross, username, age, image }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        style={styles.container}
      >
        <LinearGradient
          style={styles.detailView}
          colors={[AppColors.black10, AppColors.black80]}
        >
          <Text style={styles.usernameText}>{username}</Text>
          <Text style={styles.ageText}>{age}</Text>
        </LinearGradient>
      </ImageBackground>
      <Pressable style={styles.crossBtn} onPress={onPressCross}>
        <Text style={styles.crossText}>X</Text>
      </Pressable>
    </Pressable>
  );
};

export default UserCard;
