import React, { useState } from 'react';
import {View,Text, Button, StyleSheet, ScrollView, Image,Modal,TouchableHighlight, to} from 'react-native'; 
import { Video, AVPlaybackStatus } from 'expo-av';

export default function Gatos(){ 
  const [status, setStatus] = React.useState({});
  const video = React.useRef(null);
  const[modalser1,setmodalser1]=useState(false);
  const[modalser2,setmodalser2]=useState(false);
  const[modalser3,setmodalser3]=useState(false);
  const[modalser4,setmodalser4]=useState(false);
  const[modalser5,setmodalser5]=useState(false);
  const[modalser6,setmodalser6]=useState(false);

    return( 
      <ScrollView style={{flexDirection:'column',margin:2, paddingHorizontal:5}}> 

<Modal trasparente={true} animationType="slide" visible={modalser1} onRequestClose={()=>{
  setmodalser1(!modalser1)
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

<Modal trasparente={true} animationType="slide" visible={modalser2} onRequestClose={()=>{
  setmodalser2(!modalser2)
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

<Modal trasparente={true} animationType="slide" visible={modalser3} onRequestClose={()=>{
  setmodalser3(!modalser3)
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

<Modal trasparente={true} animationType="slide" visible={modalser4} onRequestClose={()=>{
  setmodalser4(!modalser4)
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

<Modal trasparente={true} animationType="slide" visible={modalser5} onRequestClose={()=>{
  setmodalser5(!modalser5)
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

<Modal trasparente={true} animationType="slide" visible={modalser6} onRequestClose={()=>{
  setmodalser6(!modalser6)
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
              source={require('../img/portada-series.jpg')} />
          </View>
  <View style={styles.contenedor}>
      <Text style ={styles.titulo}>Series de Comedia</Text>


      <View style={{flexDirection:'row', margin:5}}>
       <TouchableHighlight
  onPress={()=>{setmodalser1(!modalser1)}}>
      <Image style={styles.ciudad} source={require('../img/Scomedia1.jpg')}></Image>
      </TouchableHighlight>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> Youg Sheldon </Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 4 Temporadas </Text> 
      </View>
      </View>
      

      <View style={{flexDirection:'row', margin:5}}>
       <TouchableHighlight
  onPress={()=>{setmodalser2(!modalser2)}}>
      <Image style={styles.ciudad} source={require('../img/Scomedia2.jpg')}></Image>
      </TouchableHighlight>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}>The BigBang Theory </Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 12 Temporadas </Text> 
      </View>
      </View>

      <View style={{flexDirection:'row', margin:5}}>
      <Image style={styles.ciudad} source={require('../img/Scomedia3.jpg')}></Image>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> Henrry Denger</Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 5 temporadas </Text> 
      </View>
      </View>

      <View style={{flexDirection:'row', margin:5}}>
      <Image style={styles.ciudad} source={require('../img/Scomedia4.jpg')}></Image>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> El juego de llaves </Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 2  Temporadas </Text> 
      </View>
      </View>
      </View>


      <View style={styles.contenedor}>
      <Text style ={styles.titulo}>Series de Aventura</Text>

      <View style={{flexDirection:'row', margin:5}}>
       <TouchableHighlight
  onPress={()=>{setmodalser3(!modalser3)}}>
      <Image style={styles.ciudad} source={require('../img/Sav1.jpg')}></Image>
      </TouchableHighlight>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> What if ...?</Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 1 Temporadas </Text> 
      </View>
      </View>
      

      <View style={{flexDirection:'row', margin:5}}>
       <TouchableHighlight
  onPress={()=>{setmodalser4(!modalser4)}}>
      <Image style={styles.ciudad} source={require('../img/Sav2.jpg')}></Image>
      </TouchableHighlight>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}>Sombra y Hueso </Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 1 Temporadas </Text> 
      </View>
      </View>

      <View style={{flexDirection:'row', margin:5}}>
      <Image style={styles.ciudad} source={require('../img/Sav3.jpg')}></Image>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> Titanes</Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 3 temporadas </Text> 
      </View>
      </View>

      <View style={{flexDirection:'row', margin:5}}>
      <Image style={styles.ciudad} source={require('../img/Sav4.jpg')}></Image>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> The Umbrella Academy </Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 2  Temporadas </Text> 
      </View>
      </View>
      </View>

      <View style={styles.contenedor}>
      <Text style ={styles.titulo}>Series de Fantasia</Text>

      <View style={{flexDirection:'row', margin:5}}>
       <TouchableHighlight
  onPress={()=>{setmodalser5(!modalser5)}}>
      <Image style={styles.ciudad} source={require('../img/Sfa1.jpg')}></Image>
      </TouchableHighlight>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> Lucifer</Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 6 Temporadas </Text> 
      </View>
      </View>
      

      <View style={{flexDirection:'row', margin:5}}>
       <TouchableHighlight
  onPress={()=>{setmodalser6(!modalser6)}}>
      <Image style={styles.ciudad} source={require('../img/Sfa2.jpg')}></Image>
      </TouchableHighlight>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> Super Natural </Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 15 Temporadas </Text> 
      </View>
      </View>

      <View style={{flexDirection:'row', margin:5}}>
      <Image style={styles.ciudad} source={require('../img/Sfa5.jpeg')}></Image>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> Super Girl </Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 5 temporadas </Text> 
      </View>
      </View>

      <View style={{flexDirection:'row', margin:5}}>
      <Image style={styles.ciudad} source={require('../img/Sfa4.jpg')}></Image>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> ShadowHunter </Text> 
      <Text style={{paddingTop:20, fontStyle:'italic'}}> 3  Temporadas </Text> 
      </View>
      </View>
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
      fontWeight:'bold',
      fontSize:24,
      marginVertical:5
    },
    contenedor:{
      marginHorizontal:5,
    },
    ciudad:{
      width:130,
      height:80,
      marginRight:10,
    }, 
    backgroundVideo: {
 justifyContent:"center",
  top: 150,
  left:5,
  bottom: 0,
  right: 0,
  width:350,
  height:250,
}
    });