import { StyleSheet } from "react-native";
import AppColors from "~utils/appColors";
import { height, width } from "~utils/Dimensions";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
  },

  floatingBtn: {
    width: width(15),
    height: width(15),
    backgroundColor: AppColors.black,
    position: "absolute",
    borderRadius: width(100),
    bottom: height(4),
    right: width(4),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",

    justifyContent: "center",
  },
  plustext: {
    fontSize: width(8),
    color: AppColors.white,
  },
});
export default styles;
