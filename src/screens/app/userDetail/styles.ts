import { StyleSheet } from "react-native";
import AppColors from "~utils/appColors";
import { height, width } from "~utils/Dimensions";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  header: {
    backgroundColor: AppColors.black,
    paddingVertical: height(2),
    paddingHorizontal: width(2),
    alignItems: "center",
  },
  headerText: {
    color: AppColors.white,
    fontSize: width(5),
    fontWeight: "bold",
  },
});
export default styles;
