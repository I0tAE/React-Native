import React,{Component} from 'react';
import { View,Text,StyleSheet,Dimensions,FlatList,Image} from 'react-native';

const {width}=Dimensions.get('window')
const img_data=[
    {name:"movie4",des:"灾难片"},{name:"movie4",des:"战争片"},{name:"movie4",des:"爱情片"},{name:"movie4",des:"喜剧片"},{name:"movie4",des:"动作片"},
    {name:"movie2",des:"伦理片"},{name:"movie2",des:"动画片"},{name:"movie2",des:"剧情片"},{name:"movie2",des:"纪录片"},{name:"movie2",des:"其他"},
]

export default class MovieMenu extends Component {
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
        backgroundColor:"#fff",
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
