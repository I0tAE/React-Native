import React, { Component } from 'react';
import { View,Text,StyleSheet,Image} from 'react-native';

export default class FoodPos extends Component {
  render() {//满屏的效果
    return (  //访问变量的值
        <View style={styles.foodPos}>
          <Text style={styles.foodtxt}>周边美食</Text>
          <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"ms4"}} style={{width:120,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>陈蹄花</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分4.8 </Text>
                          <Text style={styles.price}>&yen; 50</Text>
                      </View>
                      <Text style={styles.type}>餐饮 中餐</Text>
                  </View>
              </View>
            </View>

            <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"ms1"}} style={{width:120,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>聚香缘</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分4.7 </Text>
                          <Text style={styles.price}>&yen; 70</Text>
                      </View>
                      <Text style={styles.type}>餐饮 中餐</Text>
                  </View>
              </View>
            </View>

            <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"ms2"}} style={{width:120,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>山里人</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分4.6 </Text>
                          <Text style={styles.price}>&yen; 78</Text>
                      </View>
                      <Text style={styles.type}>餐饮 火锅</Text>
                  </View>
              </View>
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
        
    },
    itembox:{
       marginTop:5
    },
    item:{
       flexDirection:"row",
       paddingTop:5,
       paddingBottom:5,
       borderBottomWidth:1,
       borderBottomColor:"#ccc"
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
})
