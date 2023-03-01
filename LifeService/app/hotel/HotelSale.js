import React,{Component} from 'react';
import { View,Text,StyleSheet,Dimensions,Image,TextInput} from 'react-native';

const {width}=Dimensions.get('window')
export default class FoodSale extends Component {
    
  render() {//满屏的效果
    return (  //访问变量的值
        <View style={styles.foodPos}>
          <Text style={styles.foodtxt}>预订日期</Text>
          <View style={styles.itembox}>
              <View style={styles.item}>
                 
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>入住日期</Text>
                      <View style={styles.scoreAndprice}>    
                      </View>
                      
                  </View>
                 
              </View>
            </View>
            <View style={styles.searchBox}>
               
               <TextInput
                placeholder="请输入日期"
                style={styles.txtInput}
                underlineColorAndroid="transparent"
               />
           </View>
            <View style={styles.itembox}>
              <View style={styles.item}>
                  
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>离店日期</Text>
                      <View style={styles.scoreAndprice}>
                          
                         
                      </View>
                      
                  </View>
              </View>
            </View>
            <View style={styles.searchBox}>
               
            
            <TextInput
                placeholder="请输入日期"
                style={styles.txtInput}
                underlineColorAndroid="transparent"
               />
           </View>
            
          
        </View>


    );
  }
}
const styles=StyleSheet.create({
    foodPos:{
        marginTop:5,
        backgroundColor:"#fff",
        padding:6
    },
    foodtxt:{
        fontWeight:"bold",
        lineHeight:26,
        height:26,
        color:"#ff9900"
    },
    itembox:{
       marginTop:5
    },
    item:{
       flexDirection:"row",
       paddingTop:5,
       paddingBottom:5,
       borderBottomWidth:3,
       borderBottomColor:"black"
    },
    itemRight:{
       flex:1,
       marginLeft:10
    },
    itemtitle:{
        fontWeight:"bold",
        color:"#000"
    },
    scoreAndprice:{
      flexDirection:"row",
      justifyContent:"space-around"
    },
    price:{
        color:"red"
    },
    type:{
        fontSize:12,
        color:"#ccc"
    }
  }); 