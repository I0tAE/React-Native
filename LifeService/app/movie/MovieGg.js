import React,{Component} from 'react';
import { View,Text,StyleSheet,TextInput,Image,Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

const {width,height}=Dimensions.get('window')
export default class MovieTop extends Component {   
  
    render() {
      return (
       <View style={styles.container}>
         <Swiper 
         horizontal={true}
         autoplay
         autoplayTimeout={2}
         showsButtons={true}
         showsPagination={true}
         >
          <View style={styles.wrap}>
             <Image source={{uri:"gg2"}} style={styles.img} />
            
          </View>
          <View style={styles.wrap}>
             <Image source={{uri:"gg1"}} style={styles.img} />
             
          </View>
          <View style={styles.wrap}>
            <Image source={{uri:"gg4"}} style={styles.img} />
            
          </View >
          <View style={styles.wrap}>
            <Image source={{uri:"gg3"}} style={styles.img} />
            
          </View >
         </Swiper>
       </View>
      );
    }
  }  
    const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:70,
        backgroundColor:"#fff",       
      },
      wrap:{
          flex:1,
          height:70,
          justifyContent:"center",
          backgroundColor:"transparent"
      },
      img:{
          width:"100%",
          height:50,
          borderRadius:30
      },
      txt:{
          width:"100%",
          height:20,
          lineHeight:20,
          backgroundColor:"rgba(0,0,0,0.2)",
          position:"absolute",
          bottom:0,
          color:"#fff",
          paddingLeft:10
      }

  }); 
