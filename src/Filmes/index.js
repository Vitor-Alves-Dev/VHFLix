import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import CardFilme from '../CardFilme'
export default function ListaFilmes({ titulo, filmes }) {
  return (
    
    <View style={{ marginBottom: 20 }}>

        
      
      {/* Título da categoria */}
      <Text style={ styles.titulos }>
        {titulo}
        
      </Text>

      {/* Lista horizontal */}
      <FlatList
        data={filmes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <CardFilme item={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    cards: {
        elevation: 5,
        borderRadius: 8,
        overflow: 'hidden',
        marginLeft: 15,
        width: 100, 
        height: 150 
 }, 
    titulos: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 15,
        paddingBottom: 5,
        marginTop: 5
 }
})