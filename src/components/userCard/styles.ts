import { StyleSheet } from "react-native";
import AppColors from "~utils/appColors";
import { height, width } from "~utils/Dimensions";

const styles = StyleSheet.create({
  container: {
    width: width(43),
    backgroundColor: AppColors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: height(2),
    borderRadius: width(4),
    alignItems: "center",
    height: height(25),
    marginTop: height(1),
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  image: {
    width: width(29),
    height: height(20),
    backgroundColor: "orange",
  },
  detailView: {
    width: "100%",
    overflow: "hidden",
    paddingVertical: height(1),
    paddingHorizontal: width(2),
    borderBottomEndRadius: width(4),
    borderBottomStartRadius: width(4),
  },
  usernameText: {
    color: AppColors.white,
    fontSize: width(5),
    fontWeight: "800",
  },
  ageText: {
    color: AppColors.white,
    fontSize: width(3),
    fontWeight: "600",
  },
  crossBtn: {
    position: "absolute",
    width: width(8),
    height: width(8),
    backgroundColor: AppColors.black50,
    borderRadius: width(100),
    top: height(2),
    right: width(3),
    alignItems: "center",
    justifyContent: "center",
  },
  crossText: {
    color: AppColors.white,
  },
});

export default styles;
