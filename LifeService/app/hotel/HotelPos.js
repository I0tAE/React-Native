import React, { Component } from 'react';
import { View,Text,StyleSheet,Image} from 'react-native';

export default class FoodPos extends Component {
  render() {//满屏的效果
    return (  //访问变量的值
        <View style={styles.foodPos}>
          <Text style={styles.foodtxt}>点评高分</Text>
          <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"room1"}} style={{width:120,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>全季酒店</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分4.9 </Text>
                          <Text style={styles.price}>&yen; 298</Text>
                      </View>
                      <Text style={styles.type}>全季酒店是华住集团旗下中档酒店品牌，已....</Text>
                  </View>
              </View>
            </View>

            <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"room2"}} style={{width:120,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>凯悦酒店</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分4.8 </Text>
                          <Text style={styles.price}>&yen; 364</Text>
                      </View>
                      <Text style={styles.type}>凯悦酒店集团在世界各地管理、特许....</Text>
                  </View>
              </View>
            </View>

            <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"room3"}} style={{width:120,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>万豪酒店</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分5.0 </Text>
                          <Text style={styles.price}>&yen; 572</Text>
                      </View>
                      <Text style={styles.type}>为万豪酒店集团旗下30个标志性品牌之一....</Text>
                  </View>
              </View>
          </View>
          <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"room4"}} style={{width:120,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>雅高酒店</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分5.0 </Text>
                          <Text style={styles.price}>&yen; 576</Text>
                      </View>
                      <Text style={styles.type}>雅高是全方位服务的国际酒店集团，通过位....</Text>
                  </View>
              </View>
          </View>
          <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"room5"}} style={{width:120,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>喜达屋国际酒店</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分4.9 </Text>
                          <Text style={styles.price}>&yen; 476</Text>
                      </View>
                      <Text style={styles.type}>喜达屋集团是饭店及娱乐休闲集团....</Text>
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
})
