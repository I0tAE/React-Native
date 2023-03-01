import React,{Component} from 'react';
import { View,Text,StyleSheet,ScrollView} from 'react-native';
import FoodTop from './FoodTop';
import FoodMenu from './FoodMenu';
import FoodSale from './FoodSale';
import FoodPos from './FoodPos';

export default class Food extends Component {
    static navigationOptions = {
      tabBarLabel: '美食',
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
            <FoodTop />
            <FoodMenu />
            <FoodSale />
            <FoodPos />
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