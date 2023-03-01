import React,{Component} from 'react';
import { View,Text,StyleSheet,Image,ScrollView} from 'react-native';
import MovieTop from './MovieTop';
import MovieMenu from './MovieMenu';
import MoviePos from './MoviePos';
import MovieGg from './MovieGg';
export default class Movie extends Component {
    static navigationOptions = {
      tabBarLabel: '电影院',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
   /*     tabBarIcon: ({ thistle }) => (
        <Image
          //source={require('./notif-icon.png')}
          source={{uri:"movie"}}
          style={[styles.icon, {thistle: thistle}]}
        />
      ),  */



    };

    render() {
      return (
         <View style={styles.container}>
        <ScrollView>
           <MovieTop />
           <MovieMenu />
           <MovieGg/>
           <MoviePos />
          </ScrollView>
        </View>
      );
    }
  }
   const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });
