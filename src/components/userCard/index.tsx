import React from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AppColors from "~utils/appColors";
import styles from "./styles";

// Component Props
type VariantType = "primary" | "secondary";
interface Props {
  onPress?: () => void;
  username: string;
  age: string | number;
  image: string;
}

const Button = ({ onPress, username, age, image }: Props) => {
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
    </Pressable>
  );
};

export default Button;
