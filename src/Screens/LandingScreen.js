import React ,{useState,useEffect}from 'react';
import { View, Text ,FlatList, Touchable, TouchableOpacity} from 'react-native';
import {cityList} from '../MockData'

function LandingScreen({ navigation }) {
    
    const rowData = ({item}) => <TouchableOpacity style={{flex:1,flexDirection:'column',justifyContent:"space-around",height:40}} 
    onPress={()=>navigation.push('Map',{...item})}>
        <Text style={{color:"#903846",paddingLeft:10}}>{item.name}</Text>
        <Text style={{padding:1,paddingLeft:10}}>{item.state}</Text>
        <View style={{height:1,backgroundColor:"gray"}}></View>
    </TouchableOpacity>

    
  return (
    <FlatList
        data = {cityList}
        renderItem ={rowData}
        keyExtractor={(item) => item.lat+item.lon}
        >
    </FlatList>
  );
}



export default LandingScreen;