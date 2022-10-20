import { StyleSheet } from "react-native";
import AppColors from "~utils/appColors";
import { height, width } from "~utils/Dimensions";

const styles = StyleSheet.create({
  mainContainer: {
    width: width(90),
    marginBottom: height(2),
  },

  inputStyle: {
    height: height(5.5),
    width: "100%",
    fontSize: width(4.5),
    color: AppColors.black,
    paddingBottom: height(0.1),
    borderColor: AppColors.black50,
    borderWidth: width(0.4),
    paddingLeft: width(2),
  },
});

export default styles;
