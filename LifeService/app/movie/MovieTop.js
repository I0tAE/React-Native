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
             <Image source={{uri:"film1"}} style={styles.img} />
             <Text style={styles.txt}>死里逃生---最新好莱坞大片</Text>
          </View>
          <View style={styles.wrap}>
             <Image source={{uri:"film2"}} style={styles.img} />
             <Text style={styles.txt}>邪不压正---姜文最新大片</Text>
          </View>
          <View style={styles.wrap}>
            <Image source={{uri:"film3"}} style={styles.img} />
            <Text style={styles.txt}>黄金时代 ---民国风格</Text>
          </View >
          <View style={styles.wrap}>
            <Image source={{uri:"film4"}} style={styles.img} />
            <Text style={styles.txt}>遇见你---浪漫爱情片</Text>
          </View >
         </Swiper>
       </View>
      );
    }
  }  
    const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:150,
        backgroundColor:"#408080",       
      },
      wrap:{
          flex:1,
          height:150,
          justifyContent:"center",
          backgroundColor:"transparent"
      },
      img:{
          width:"100%",
          height:150,
          borderRadius:10
      },
      txt:{
          width:"100%",
          height:30,
          lineHeight:30,
          backgroundColor:"rgba(0,0,0,0.2)",
          position:"absolute",
          bottom:0,
          color:"#FBFBFF",
          paddingLeft:10
      }

  }); 
