import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Image } from "react-native";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import products from "./src/data/products";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen />  */}
      <ProductDetailsScreen />

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.ItemContainer}>
            <Image
              source={{
                uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
              }}
              style={styles.image}
            />
          </View>
        )}
        numColumns={2}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
