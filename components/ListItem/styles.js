import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    marginTop:10,
    display: "flex",
    flexDirection: "row",
    padding: 20,
    borderWidth: 1
  },
  image: {
    width:70,
    height:70,
    borderRadius: 50,
    overflow: "hidden",
  },
  detailsContainer: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "grey"
  },
})