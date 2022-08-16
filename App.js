import { StyleSheet, StatusBar, View} from "react-native";
import Card from "./components/Card";
import ListItem from "./components/ListItem";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card image={require("./assets/jacket.jpg")} title='Red jacket for Sale' subtitle="$100"/>
      </View>
      <ListItem image={require("./assets/mosh.jpg")} title='Mosh Hamedani' description="5 Listings"/>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#ffffff",
    marginTop: StatusBar.currentHeight,

  },
  cardContainer: {

      backgroundColor: "#fff0ff",
      margin:10,
  },
})