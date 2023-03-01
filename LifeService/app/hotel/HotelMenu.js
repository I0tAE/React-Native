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
         autoplayTimeout={3}
         showsButtons={true}
         showsPagination={true}
         >
          <View style={styles.wrap}>
             <Image source={{uri:"htl1"}} style={styles.img} />
             <Text style={styles.txt}>年终促销活动</Text>
          </View>
          <View style={styles.wrap}>
             <Image source={{uri:"htl2"}} style={styles.img} />
             <Text style={styles.txt}>冬季特惠</Text>
          </View>
          <View style={styles.wrap}>
            <Image source={{uri:"htl3"}} style={styles.img} />
            <Text style={styles.txt}>豪华套间最低折扣</Text>
          </View >
          <View style={styles.wrap}>
            <Image source={{uri:"htl4"}} style={styles.img} />
            <Text style={styles.txt}>全场8.5折</Text>
          </View >
         </Swiper>
       </View>
      );
    }
  }  
    const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:200,
        backgroundColor:"#000000",       
      },
      wrap:{
          flex:1,
          height:150,
          justifyContent:"center",
          backgroundColor:"transparent"
      },
      img:{
          width:"100%",
          height:200,
          borderRadius:10
      },
      txt:{
          width:"100%",
          height:30,
          lineHeight:30,
          backgroundColor:"rgba(0,0,0,0.2)",
          position:"absolute",
          bottom:0,
          color:"#FFF7FB",
          paddingLeft:10,
          fontSize:18
      }

  }); 
