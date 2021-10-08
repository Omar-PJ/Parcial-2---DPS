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
        <ScrollView style={{flexDirection:'column',margin:10, paddingHorizontal:5}}>

<Modal trasparente={true} animationType="slide" visible={modalpeli1} onRequestClose={()=>{
  setmodalpeli1(!modalpeli1)
}}>
  <View style={styles.Modal}>
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
</Modal>

<Modal trasparente={true} animationType="slide" visible={modalpeli2} onRequestClose={()=>{
  setmodalpeli2(!modalpeli2)
}}>
  <View style={styles.Modal}>
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
</Modal>

<Modal trasparente={true} animationType="slide" visible={modalpeli3} onRequestClose={()=>{
  setmodalpeli3(!modalpeli3)
}}>
  <View style={styles.Modal}>
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
</Modal>

<Modal trasparente={true} animationType="slide" visible={modalpeli4} onRequestClose={()=>{
  setmodalpeli4(!modalpeli4)
}}>
  <View style={styles.Modal}>
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
</Modal>

<Modal trasparente={true} animationType="slide" visible={modalpeli5} onRequestClose={()=>{
  setmodalpeli5(!modalpeli5)
}}>
  <View style={styles.Modal}>
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
</Modal>

<Modal trasparente={true} animationType="slide" visible={modalpeli6} onRequestClose={()=>{
  setmodalpeli6(!modalpeli6)
}}>
  <View style={styles.Modal}>
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
</Modal>

           
        <View style={{flexDirection:'row'}} >
          <Image
              style={styles.banner}
              source={require('../img/hotel6.jpg')} />
          </View>
  <View style={styles.contenedor}>
      <Text style ={styles.titulo}>Comedia</Text>
    <ScrollView horizontal>

    <TouchableHighlight
  onPress={()=>{setmodalpeli1(!modalpeli1)}}>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/comedia1.jpg')}></Image>
      </View>
      </TouchableHighlight>

<TouchableHighlight
  onPress={()=>{setmodalpeli2(!modalpeli2)}}>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/comedia2.jpg')}></Image>
      </View>
</TouchableHighlight>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/comedia3.jpg')}></Image>
        </View>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/comedia4.jpg')}></Image>
      </View>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/comedia5.jpg')}></Image>
      </View>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/comedia6.jpg')}></Image>
      </View>
    </ScrollView>
  </View>

  <View style={styles.contenedor}>
      <Text style ={styles.titulo}>Romance</Text>
    <ScrollView horizontal>

    <TouchableHighlight
  onPress={()=>{setmodalpeli3(!modalpeli3)}}>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/romance1.jpg')}></Image>
      </View>
      </TouchableHighlight>

  <TouchableHighlight
  onPress={()=>{setmodalpeli4(!modalpeli4)}}>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/romance3.jpg')}></Image>
      </View>
 </TouchableHighlight>

      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/romance4.jpg')}></Image>
        </View>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/romance2.jpg')}></Image>
      </View>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/romance5.jpg')}></Image>
      </View>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/romance6.jpg')}></Image>
      </View>
    </ScrollView>
  </View>

  <View style={styles.contenedor}>
      <Text style ={styles.titulo}>Accion</Text>
    <ScrollView horizontal>

    
  <TouchableHighlight
  onPress={()=>{setmodalpeli5(!modalpeli5)}}>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/Peli6.jpg')}></Image>
      </View>
      </TouchableHighlight>

 <TouchableHighlight
  onPress={()=>{setmodalpeli6(!modalpeli6)}}>      
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/Peli1.jpg')}></Image>
      </View>
</TouchableHighlight>

      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/peli2.jpg')}></Image>
        </View>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/peli4.jpg')}></Image>
      </View>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/peli5.jpg')}></Image>
      </View>
      <View>
        <Image
            style={styles.ciudad}
            source={require('../img/peli3.jpg')}></Image>
      </View>
    </ScrollView>
  </View>
    </ScrollView>
    ); 
}

const styles = StyleSheet.create({
  banner:{
   height:200,
   flex:1
  },
  titulo:{
    color:'black',
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10
  },
  contenedor:{
    marginHorizontal:5,
  },
  ciudad:{
    justifyContent:'flex-start',
    alignContent:'flex-start',
    width:170,
    height:200,
    marginRight:10
  },
  
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5
  },
  listaItem:{
    flexBasis:'49%'
  },
  listado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  vistaModal:{
    backgroundColor:'#000000aa',
  alignItems:"center",
  flex:1
  },
  Modal:{
  alignItems:"center",
  backgroundColor:'#fff',
  flex:1
  },
  subtitulo:{
    fontWeight:'bold',
    fontSize:14,
    justifyContent:'center'
  },
  backgroundVideo: {
 justifyContent:"center",
  top: 150,
  left: 0,
  bottom: 0,
  right: 0,
  width:350,
  height:250,
}
  
  });