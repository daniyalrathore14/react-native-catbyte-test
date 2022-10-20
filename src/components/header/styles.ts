import { StyleSheet } from "react-native";
import AppColors from "~utils/appColors";
import { height, width } from "~utils/Dimensions";

const styles = StyleSheet.create({
  container: {
    width: width(100),
    backgroundColor: AppColors.black,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width(3),
    paddingVertical: height(2),
  },
  titleText: {
    fontSize: width(4.5),
    color: AppColors.white,
    fontWeight: "bold",
    width: width(60),
  },
  backArrow: {
    tintColor: AppColors.white,
  },
});

export default styles;
