import React,{Component} from "react";
import { Text,View,Image,StyleSheet ,TextInput, TouchableOpacity} from "react-native";

class Cat extends Component{
    getpassword=()=>{
        alert('请输入账号，密码')
    }
    render(){
        return(
            <View style={styles.container}> 
                <Image
                source={{uri:"bg1"}}
                style={styles.img}
                />
                <TextInput
                placeholder="请输入用户名"
                placeholderTextColor="gray"
                underlineColorAndroid="transparent"
                style={styles.textinput1}
                />
                <TextInput
                 placeholder="请输入密码"
                 placeholderTextColor="gray"
                 underlineColorAndroid="transparent"
                 style={styles.textinput}
                />
                <TouchableOpacity style={styles.btn} onPress={this.getpassword}><Text>登录</Text></TouchableOpacity>
                <View style={styles.warp_btn}>
                    <TouchableOpacity style={styles.mbtn}><Text style={styles.txt}>注册新用户</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.mbtn}><Text style={styles.txt}>忘记密码</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        height:"100%",
        backgroundColor:"#fff"
    },
    img:{
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:1,
        marginTop:50
    },
    textinput1:{
        marginTop:50,
        width:"100%",
        borderRadius:15,
        backgroundColor:"#e6e6fa"

    },
    textinput:{
        marginTop:2,
        width:"100%",
        borderRadius:15,
        backgroundColor:"#e6e6fa"

    },
    btn:{
        marginTop:50,
        backgroundColor:"#ff9900",
        width:160,
        height:50,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
        
    },
    warp_btn:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    txt:{
        fontSize:15,
        color:"red"
    },
    mbtn:{
        flex:2,
        backgroundColor:"durk",
        width:160,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:70
    }
})
export default Cat;