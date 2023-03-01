import React, { Component } from 'react';
import { View,Text,Image,StyleSheet,Dimensions} from 'react-native';

const {width,height}=Dimensions.get('window')
export default class Launcher extends Component{    //定义Launcher组件并导出
    render() {//满屏的效果
        return (  //访问变量的值
            <View> 
               <Image
                source={{uri:"bg1"}}
                style={styles.img}
               />
            </View>   
        );
      }
    
}
const styles=StyleSheet.create({
    img:{
        width,
        height
    }
})