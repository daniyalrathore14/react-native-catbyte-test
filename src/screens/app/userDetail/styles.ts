import { StyleSheet } from "react-native";
import AppColors from "~utils/appColors";
import { height, width } from "~utils/Dimensions";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: "center",
  },
  imageView: {
    width: width(60),
    height: width(60),
    borderRadius: width(100),
    backgroundColor: AppColors.black40,
    marginTop: height(2),
  },
  contentView: {
    flexDirection: "row",
    width: width(80),
    paddingBottom: height(0.7),
  },
  personalDetail: {
    width: width(90),
    backgroundColor: AppColors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: height(1.2),
    paddingHorizontal: width(2),
    borderRadius: width(2),
    marginTop: height(3),
  },
  valueText: {
    fontSize: width(3.5),
    width: width(60),
  },
  labelText: {
    fontSize: width(3.5),
    fontWeight: "bold",
    textDecorationLine: "underline",
    width: width(25),
  },
  titleText: {
    fontSize: width(4),
    fontWeight: "bold",
    alignSelf: "center",
    paddingBottom: height(1),
  },
});
export default styles;
