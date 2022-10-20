import React, { forwardRef } from "react";
import { TextInput, View, ViewStyle } from "react-native";

import styles from "./styles";

type keyboardVariation =
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad"
  | "url"
  | "ascii-capable"
  | "numbers-and-punctuation"
  | "name-phone-pad"
  | "twitter"
  | "web-search";
type keyType =
  | "done"
  | "go"
  | "next"
  | "search"
  | "send"
  | "none"
  | "previous"
  | "default"
  | "emergency-call"
  | "google"
  | "join"
  | "route";
interface Props {
  mainContainer?: ViewStyle;
  containerStyle?: ViewStyle;
  underline?: boolean;
  inputStyle?: any;
  placeholder?: string;
  keyboardType?: keyboardVariation;
  maxLength?: undefined | number;
  numberOfLines?: undefined | number;
  containerStyles?: object;
  textAlignVertical?: "auto" | "center" | "top" | "bottom";
  editable?: boolean;
  multiline?: boolean;
  secureTextEntry?: boolean;
  onSubmit?(): void;
  keytype?: keyType;
  value?: any;
  leftIcon?: boolean;
  icon?: JSX.Element;
  onChangeText?: (bvalue: any) => void;
}
const TextField = (
  {
    mainContainer = {},
    inputStyle = {},
    placeholder,
    keytype,
    onSubmit,
    keyboardType = "default",
    maxLength,
    numberOfLines,
    textAlignVertical = "center",
    multiline = false,
    editable = true,
    secureTextEntry = false,
    onChangeText = () => {},
    value,
  }: Props,
  ref: any
) => {
  return (
    <View style={[styles.mainContainer, mainContainer]}>
      <TextInput
        ref={ref}
        placeholder={placeholder}
        keyboardType={keyboardType}
        returnKeyType={keytype}
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
        value={value}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        textAlignVertical={textAlignVertical}
        multiline={multiline}
        editable={editable}
        secureTextEntry={secureTextEntry}
        style={[styles.inputStyle, inputStyle]}
      />
    </View>
  );
};

export default forwardRef(TextField);
