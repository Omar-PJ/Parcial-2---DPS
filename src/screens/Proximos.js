import React, { useState } from 'react';
import {View,Text, Button, StyleSheet, ScrollView, Image,Modal,TouchableHighlight, to} from 'react-native'; 
import { Video, AVPlaybackStatus } from 'expo-av';
export default function Peliculas(props){ 
  const [status, setStatus] = React.useState({});
  const video = React.useRef(null);
  const[modalpeli1,setmodalpeli1]=useState(false);
  const[modalpeli2,setmodalpeli2]=useState(false);
  const[modalpeli3,setmodalpeli3]=useState(false);
  const[modalpeli4,setmodalpeli4]=useState(false);
  const[modalpeli5,setmodalpeli5]=useState(false);
  const[modalpeli6,setmodalpeli6]=useState(false);

  

    const{navigation}=props;
    return( 
        <ScrollView style={{flexDirection:'column',}}>
<View style={{margin:10}}>
  <View style={styles.contenedor}>           
        <View style={{flexDirection:'row'}} >
   <Video
        ref={video}
        style={styles.backgroundVideo}
        source={{
          uri: 'https://www.universalpictures-latam.com/tl_files/content/hero/nttd_final_trailer.mp4',
        }} 
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)
        }
      />
          </View>
      <Text style ={styles.titulo}>Venon 2 Peliculas</Text>
      <Text style ={styles.text}>En la película, Brock lucha por adaptarse a la vida como el anfitrión del simbionte alienígena Venom, mientras que el asesino en serie Cletus Kasady (Harrelson) escapa de la prisión después de convertirse en el anfitrión de Carnage, un engendro caótico de Venom.</Text>
      <Text style ={styles.text}>Fecha de extreno: 1 de octubre de 2021 (Estados Unidos)</Text>
  </View>

  <View style={styles.contenedor}>           
        <View style={{flexDirection:'row'}} >
   <Video
        ref={video}
        style={styles.backgroundVideo}
        source={{
          uri: 'https://www.universalpictures-latam.com/tl_files/content/hero/nttd_final_trailer.mp4',
        }} 
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)
        }
      />
          </View>
      <Text style ={styles.titulo}>JOHN WICK 4</Text>
      <Text style ={styles.text}>John Wick: Capítulo 4 (también conocido simplemente como John Wick 4 ) es una próximapelícula de suspenso de acción neo-noir estadounidense que sirve como la secuela directa de John Wick: Capítulo 3 - Parabellum de 2019, así como la cuarta entrega de John Serie de películas de Wick .</Text>
      <Text style ={styles.text}>Fecha de extreno: 27 de mayo de 2022 (Estados Unidos)</Text>
  </View>

  <View style={styles.contenedor}>           
        <View style={{flexDirection:'row'}} >
   <Video
        ref={video}
        style={styles.backgroundVideo}
        source={{
          uri: 'https://www.universalpictures-latam.com/tl_files/content/hero/nttd_final_trailer.mp4',
        }} 
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)
        }
      />
          </View>
      <Text style ={styles.titulo}>Doctor Strange in the Multiverse of Madness</Text>
      <Text style ={styles.text}>Después de los eventos de Avengers: Endgame (2019), WandaVision (2021) y la primera temporada de Loki (2021), la investigación del Dr. Stephen Strange sobre la Gema del Tiempo se ve afectada, porque un viejo amigo, convertido en enemigo, quiere acabar con los hechiceros del mundo acabando con el plan de Strange, haciendo que Strange desate un mal indescriptible.</Text>
      <Text style ={styles.text}>Fecha de extreno: 25 de marzo de 2022 (Estados Unidos)</Text>
  </View>

 


  </View>
  </ScrollView>
    ); 
}


const styles = StyleSheet.create({
    banner:{
     height:150,
     flex:1
    },
    titulo:{
      marginHorizontal:10,
      fontWeight:'bold',
      fontSize:16,
      marginVertical:5
    },
    text:{
      marginHorizontal:10,
      fontSize:14,
      marginVertical:5,
      fontStyle:'italic',
    },
    contenedor:{
      marginHorizontal:5,
      marginVertical:5
    },
    ciudad:{
      width:130,
      height:80,
      marginRight:10,
    }, 
    backgroundVideo: {
 justifyContent:"center",
  top: 0,
  left:0,
  bottom: 0,
  right: 0,
  width:330,
  height:200,
}
    });