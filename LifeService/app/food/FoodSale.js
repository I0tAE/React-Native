import React,{Component} from 'react';
import { View,Text,StyleSheet,Dimensions,Image} from 'react-native';

const {width}=Dimensions.get('window')
export default class FoodSale extends Component {

    render() {
      return (
       <View style={styles.container}>
          <View style={styles.warp}>
             <Image source={{uri:"ms1"}}  style={styles.img} />
             <Text style={styles.title}>红烧肘子拌饭</Text>
             <View style={styles.sale}>
               <Text style={styles.nowsale}>&yen;125元</Text>
               <Text style={styles.oldsale}>&yen;160元</Text>
             </View>
          </View>
          <View style={styles.warp}>
             <Image source={{uri:"ms2"}}  style={styles.img} />
             <Text style={styles.title}>精品蔬菜披萨</Text>
             <View style={styles.sale}>
               <Text style={styles.nowsale}>&yen;98元</Text>
               <Text style={styles.oldsale}>&yen;120元</Text>
             </View>
          </View>
          <View style={styles.warp}>
             <Image source={{uri:"ms4"}}  style={styles.img} />
             <Text style={styles.title}>精品羊肉粉丝汤</Text>
             <View style={styles.sale}>
               <Text style={styles.nowsale}>&yen;88元</Text>
               <Text style={styles.oldsale}>&yen;115元</Text>
             </View>
          </View>
       </View>
      );
    }
  }
    const styles = StyleSheet.create({
      container:{
        width,
        height:120,
        backgroundColor:"#fff",
        marginTop:5,
        flexDirection:"row"
      },
      warp:{
          flexDirection:"column",
          width:width/3,
          height:100,
          alignItems:"center",
          marginBottom:5
      },
      img:{
         marginTop:5,
         height:80,
         width:(width/3)-10,
      },
      sale:{
          flexDirection:"row",
          alignItems:"baseline"
      },
      nowsale:{
          fontSize:14,
          color:"red"
      },
      oldsale:{
        fontSize:10,
        color:"#000",
        textDecorationLine:"line-through"
      },
      title:{
        fontSize:12
      }
  }); 