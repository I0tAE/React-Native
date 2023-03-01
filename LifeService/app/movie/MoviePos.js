import React, { Component } from 'react';
import { View,Text,StyleSheet,Image} from 'react-native';

export default class MoviePos extends Component {
  render() {//满屏的效果
    return (  //访问变量的值
        <View style={styles.foodPos}> 
          <Text style={styles.foodtxt}>最近热映</Text>
          <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"wjk1"}} style={{width:80,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>749局</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>豆瓣评分8.8</Text>
                          <Text style={styles.price}>&yen;35</Text>
                      </View>
                      <Text style={styles.type}>主演：王俊凯</Text>
                  </View>
              </View>
              <View style={styles.item}>
                  <Image source={{uri:"wjk2"}} style={{width:80,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>1921</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>豆瓣评分8.9 </Text>
                          <Text style={styles.price}>&yen;32</Text>
                      </View>
                      <Text style={styles.type}>王俊凯饰：邓恩铭</Text>
                  </View>
              </View>             
          </View>
          <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"dq"}} style={{width:80,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>断桥</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>豆瓣评分9.1 </Text>
                          <Text style={styles.price}>&yen;35</Text>
                      </View>
                      <Text style={styles.type}>主演:王俊凯</Text>
                  </View>
              </View>
              <View style={styles.item}>
                  <Image source={{uri:"tkyl"}} style={{width:80,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>天坑鹰猎</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>豆瓣评分7.9</Text>
                          <Text style={styles.price}>&yen;28</Text>
                      </View>
                      <Text style={styles.type}>主演：王俊凯</Text>
                  </View>
              </View>             
          </View>
           <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"film5"}} style={{width:80,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>万画影城</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分4.8 </Text>
                          <Text style={styles.price}>&yen;35</Text>
                      </View>
                      <Text style={styles.type}>免费停车</Text>
                  </View>
              </View>
              <View style={styles.item}>
                  <Image source={{uri:"film6"}} style={{width:80,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>财富影城</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分4.7 </Text>
                          <Text style={styles.price}>&yen;32</Text>
                      </View>
                      <Text style={styles.type}>免费停车,提供饮料</Text>
                  </View>
              </View>             
          </View>
          <View style={styles.itembox}>
              <View style={styles.item}>
                  <Image source={{uri:"film5"}} style={{width:80,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>万画影城</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分4.8 </Text>
                          <Text style={styles.price}>&yen;35</Text>
                      </View>
                      <Text style={styles.type}>免费停车</Text>
                  </View>
              </View>
              <View style={styles.item}>
                  <Image source={{uri:"film6"}} style={{width:80,height:80}}/>
                  <View style={styles.itemRight}>
                      <Text style={styles.itemtitle}>财富影城</Text>
                      <View style={styles.scoreAndprice}>
                          <Text>评分4.7 </Text>
                          <Text style={styles.price}>&yen;32</Text>
                      </View>
                      <Text style={styles.type}>免费停车,提供饮料</Text>
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
       marginTop:5,
       flexDirection:"row",
       justifyContent:"space-around"
    },
    item:{
       flex:1,
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
      justifyContent:"flex-start"
    },
    price:{
        color:"red"
    },
    type:{
        fontSize:12,
        color:"#ccc"
    }
})
