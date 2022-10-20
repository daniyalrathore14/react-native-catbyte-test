import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Icons } from "~assets/icons";
import styles from "./styles";

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
