import React,{Component} from 'react';
import { View,Text,StyleSheet,TextInput,Image,Dimensions} from 'react-native';

const {width,height}=Dimensions.get('window')
export default class FoodTop extends Component {   
  
    render() {
      return (
       <View style={styles.foodTop}>
           <Text style={{color:"#fff"}}>重庆市/合川区</Text>
           <View style={styles.searchBox}>
               <Image source={{uri:"map"}} style={{width:30,height:30,borderRadius:20}} />
               <TextInput
                placeholder="请选择位置......"
                style={styles.txtInput}
                underlineColorAndroid="transparent"
               />
           </View>
          
       </View>
      );
    }
  }  
    const styles = StyleSheet.create({
      foodTop:{
        width:"100%",
        height:40,
        backgroundColor:"#000000",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
      },
     searchBox: {
      width: width-60-20-20,
      height:39,
      flexDirection:"row",
      borderRadius:15,
      alignItems:"center",
      paddingLeft:5,
      backgroundColor:"#fff"
    },
    txtInput:{
        height:40,
        width:80,
        borderRadius:10
    }
  }); 
