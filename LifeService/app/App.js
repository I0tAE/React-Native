import React, { Component } from 'react';
import { View,Text,StyleSheet} from 'react-native';
import Launcher from './launcher/Launcher';
import Nav from './nav/Nav';

export default class App extends Component{   //定义Nav组件并导出
     constructor(props){
        super(props)
        this.state={isShowLauncher:true}
    }
    componentDidMount(){
        setTimeout(()=>{this.setState({isShowLauncher:false})},2000)
    } 

    render() {//满屏的效果
        return (  //访问变量的值
           <View style={styles.container}>
                {
                    this.state.isShowLauncher?<Launcher />:<Nav />
                } 
                
            </View> 
           
        );
      }
    }

    const styles=StyleSheet.create({
        container:{
            flex:1
        }
    })