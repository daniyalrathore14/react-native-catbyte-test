import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icons } from "~assets/icons";
import AppColors from "~utils/appColors";
import styles from "./styles";

// Component Props
type VariantType = "primary" | "secondary";
interface Props {
  onPress?: () => void;
  title: string;
  showRightIcon?: boolean;
}

const Header = ({ onPress, title, showRightIcon = true }: Props) => {
  return (
    <View style={styles.container}>
      {showRightIcon ? (
        <Pressable onPress={onPress}>
          <Image source={Icons.rightArrow} style={styles.backArrow} />
        </Pressable>
      ) : (
        <View />
      )}
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default Header;
