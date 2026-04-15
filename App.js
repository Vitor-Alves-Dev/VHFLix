import React, { useState, useEffect } from 'react'
import ListaFilmes from './src/Filmes'
import { View, FlatList, Text, Image, StyleSheet } from 'react-native'
import { api } from './src/Filmes/services/api'
import itACoisa from './src/img/itACoisa.jpg'
import nos from './src/img/nos.webp'
import freira from './src/img/freira.webp'
import hallowen from './src/img/hallowen.webp'
import maligne from './src/img/maligne.webp'
import jonhwick4 from './src/img/johnwick4.webp'
import jonhwick2 from './src/img/johnwick3.jpg'
import jonhwick3 from './src/img/johnwick2.jpg'
import badboys from './src/img/badboys.png'
import batman from './src/img/batman.png'
import vingadoresiw from './src/img/vingadoresiw.jpg'
import homemaranha2 from './src/img/homemaranha2.jpg'
import guardioesdagalaxia from './src/img/guardioesdagalaxia.jpg'
import capitamarvel from './src/img/capitamarvel.jpg'
import changchi from './src/img/changchi.webp'
import homemformiga from './src/img/homemformiga.jpeg'
import vingadoresend from './src/img/vingadoresend.jpg'
import thorragnarok from './src/img/thorragnarok.jpg'
import { LinearGradient } from 'expo-linear-gradient';
import Banner from './src/Banner'
import bannerjonhwick4 from './src/img/bannerjohnwick4.jpg'
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const isWeb = width > 768;


import Header from './src/Header'

export default function App() {
  const [filmes, setFilmes] = useState([
   {
    id: 1,
    titulo: "Filmes de terror",
    filmes: [
      { id: 1, nome: "Hallowen", imagem: hallowen },
      { id: 2, nome: "It a Coisa", imagem: itACoisa },
      { id: 3, nome: "Nós", imagem: nos },
      { id: 4, nome: "A Freira", imagem: freira },
      { id: 5, nome: "Maligne", imagem: maligne },
    ]
  },
  {
    id: 2,
    titulo: "Filmes de Ação",
    filmes: [
      { id: 1, nome: "John Wick3", imagem: jonhwick3 },
      { id: 2, nome: "John Wick", imagem: badboys },
      { id: 3, nome: "John Wick2", imagem: jonhwick2 },
      { id: 4, nome: "John Wick4", imagem: jonhwick4 },
      { id: 5, nome: "John Wick4", imagem: batman}
    ]
  },
  {
    id: 3,
    titulo: "Filmes de Comédia",
    filmes: [
      { id: 1, nome: "John Wick", imagem: itACoisa },
      { id: 2, nome: "John Wick", imagem: itACoisa },
      { id: 3, nome: "John Wick", imagem: itACoisa }
    ]
  },
  {
    id: 4,
    titulo: "Universo Marvel",
    filmes: [
      { id: 1, nome: "John Wick", imagem: vingadoresiw },
      { id: 2, nome: "John Wick", imagem: changchi },
      { id: 3, nome: "John Wick", imagem: homemaranha2 },
      { id: 4, nome: "John Wick", imagem: capitamarvel },
      { id: 5, nome: "John Wick", imagem: guardioesdagalaxia },
      { id: 6, nome: "John Wick", imagem: thorragnarok },
      { id: 7, nome: "John Wick", imagem: vingadoresend },
      { id: 8, nome: "John Wick", imagem: homemformiga }
    ]
  }

  ])

 // useEffect(() => {
  //async function buscaFilme() {
   // try {
   //   const response = await api.get('/categorias')
    //  console.log('DADOS:', response.data)
    //  setFilmes(response.data)
 //   } catch (error) {
   //   console.log('ERRO:', error)
    //}
 // }

 // buscaFilme()
//}, [])
    
  return (
    <View style={ styles.container }>
      
      <Header/>
      <LinearGradient
          colors={['#140A2E','#1f053f', '#330966']}
          locations={[0.3, 0.8, 1]}
          start={{ x: 0, y: 0 }}  
          end={{ x: 1, y: 0 }} 
          style={{ flex: 1 }}
        >
        
        <FlatList
          style={{
            width: '100%',
            maxWidth: isWeb ? 1900 : '100%',
          }}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          data={filmes}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
          <View style={{ width: '100%' }}>
            <Banner imagem={bannerjonhwick4} />
          </View>
  }
          renderItem={({ item }) => ( <ListaFilmes titulo={item.titulo} filmes={item.filmes} 
            />
          )}
        />
      </LinearGradient>
    </View>
  )
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#3C096C',
      overflow: 'hidden', 

   },
   logo: {
      width: 200,
      height: 150,
      alignItems: 'center',
      justifyContent: 'center'
   },
   
})