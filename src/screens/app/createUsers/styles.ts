import { StyleSheet } from "react-native";
import AppColors from "~utils/appColors";
import { height, width } from "~utils/Dimensions";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: "center",
    paddingVertical: height(1),
  },

  btn: {
    width: width(80),
    paddingVertical: height(2),
    backgroundColor: AppColors.black,
    borderRadius: width(2),

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
    marginTop: height(4),
  },
  btnText: {
    fontSize: width(5),
    color: AppColors.white,
  },
});
export default styles;
