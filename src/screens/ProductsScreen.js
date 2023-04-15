import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from '../data/products';


const ProductsScreen = () => {

    return (
     <FlatList
    data={products}
    renderItem={({ item }) => (
      <View style={styles.ItemContainer}>
      <Image 
      source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png'}}
      style={styles.image}
      />
      </View>
    )}
    numColumns={2}
    />
    )
}

const styles = StyleSheet.create({
    ItemContainer: {
     width: '50%', 
     padding: 1,
    },
  
     image: {
       width: '100%', 
       aspectRatio: 1,
     }
  });
  
  export default ProductsScreen; 