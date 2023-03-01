import React,{Component} from 'react';
import { View,Text,StyleSheet,ScrollView} from 'react-native';
import HotelTop from'./HotelTop';
import HotelMenu from './HotelMenu';
import HotelPos from './HotelPos';
import HotelSale from './HotelSale';
export default class Hotel extends Component {
    static navigationOptions = {
      tabBarLabel: '酒店',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
     /*  tabBarIcon: ({ tintColor }) => (
        <Image
         // source={require('./chats-icon.png')}
          source={{uri:"food"}}
          style={styles.icon}
        />
      ),  */
    };
  
    render() {
      return (
       <View style={styles.container}>
         <ScrollView>
            <HotelTop />
            <HotelMenu />
            <HotelSale />
            <HotelPos />
         </ScrollView>
      </View>
      );
    }
  }
    const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:"#eee"
      }
    
  }); 
/*   const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  }); */