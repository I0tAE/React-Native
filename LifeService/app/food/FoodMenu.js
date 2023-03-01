import React,{Component} from 'react';
import { View,Text,StyleSheet,Dimensions,FlatList,Image} from 'react-native';

const {width}=Dimensions.get('window')
const img_data=[
    {name:"ms",des:"精品美食"},{name:"ktv",des:"KTV"},{name:"zzc",des:"自助餐"},{name:"wm",des:"外卖"},{name:"xiaochi",des:"小吃"},
    {name:"zlam",des:"健身"},{name:"lv",des:"旅游"},{name:"gw",des:"购物"},{name:"zby",des:"周边游"},{name:"qbfl",des:"全部分类"},         
]

export default class FoodMenu extends Component {
      //构造方法
  constructor(props){
    super(props);
    this.state={
        img_data
    }
}
renderData({item}){
    return(
     <View style={styles.warp}>          
        <Image source={{uri:item.name}}
               style={styles.imageStyle}/>
        <Text style={styles.txt}>{item.des}</Text>
     </View>       
    )      
}

   render() {
      return (
       <View style={styles.container}>
        <FlatList
            numColumns={5}    //每行展示几项
            data={this.state.img_data}  //数据源
            renderItem={this.renderData}  //渲染方式
            />         
       </View>
      );
    }
  }
    const styles = StyleSheet.create({
      container:{
        width,
        height:150,
        backgroundColor:"#FFD306",
        marginTop:5
      },
      warp:{
        marginTop:10,
        width:width/5,
        flexDirection:"column",
        height:60,
        alignItems:"center"
      },
      imageStyle:{
        width:40,
        height:40
      },
      txt:{
        fontSize:16
      }
  }); 