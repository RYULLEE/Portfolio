import React,{Component, useLayoutEffect} from 'react';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text,StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import { useState, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { TabView, SceneMap } from 'react-native-tab-view';


const FirstRoute = () => (
  <ScrollView style={{  backgroundColor: '#ff4081', height : 1000, width : wp('100%') }} >
      <Text>111111</Text>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={{  backgroundColor: '#673ab7',height : 1000 , width : wp('100%') }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});


const Home = () => {


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
    
      return (
        
              
        <ScrollView>
         <View style={styles.top_bar} >
          <TouchableOpacity>
          <Text style={styles.logo_text}>
              RYUL's Portfolio1111111111111111111
          </Text>
          </TouchableOpacity>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />

      <View style={{width : wp('100%'), height : 400,}}>
      <SwiperFlatList  showPagination>
          <View style={ { backgroundColor: 'red', width : wp('100%') }}>
              <Text >1</Text>
          </View>
          <View style={ { backgroundColor: 'blue',width : wp('100%') }}>
              <Text >1</Text>
          </View>
          <View style={ { backgroundColor: 'green',width : wp('100%') }}>
              <Text >1</Text>
          </View>
      </SwiperFlatList>
      </View>

      <View style={styles.box_2}>
          <View style={styles.box_2_title}>
              <Text style={styles.box_2_title_text}>
                  ABOUT ME
              </Text>
          </View>
          <Image
              style={{height:wp('100%')/8 , width: wp('100%')/8/10*7.78,}}
              source={require('../image/self_image.png')}
        />


      </View>

      <TouchableOpacity  >
          <Text>맨 위로 이동</Text>
      </TouchableOpacity>

        </ScrollView>
        
      );
    
};

const styles = StyleSheet.create({
  
  top_bar : {
    backgroundColor : 'gray',
    //alignItems : 'center',
    justifyContent : 'center',
    width : wp('100%'),
    height : 70,
  },
  logo_text : {
    fontFamily: 'NotoSansKR_700Bold',
    includeFontPadding: false,
    lineHeight: 20,
    fontSize: 20,
    marginLeft: 100,
    //marginTop: 20,
  },
  box_1 : {
    backgroundColor : '#FFBF00',
    alignItems : 'center',
    justifyContent : 'center',
    width : wp('100%'),
    height : 300,
  },
  box_2 : {
    backgroundColor : '#fff',
    alignItems : 'center',
    //justifyContent : 'center',
    width : wp('100%'),
    height : 500,
  },
  box_2_title:{
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center',
    width : wp('100%'),
    height : 100,
  },

  box_2_title_text : {
    fontFamily: 'NotoSansKR_700Bold',
    //backgroundColor : 'red',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 40,
    //marginLeft: 100,
    //marginTop: 20,
  },

});

  export default Home;
