import React from 'react'
import {View,FlatList,Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import ListItem from './ListItem'


export default class SearchResults extends React.Component{

  //  const { itemId } = route.params;
   
  _onPressItem = (index,chapter_summary,chapter_number) =>{
      console.log(index)
      this.props.navigation.navigate("Sloka Details",{chapter_summary:chapter_summary,chapter_number:chapter_number})
  }

    _keyExtactor = (item,index) => index.toString()


    _renderItem = ({item,index}) => {
        console.log('listings'+item)

        return (
            <ListItem
            chapter_number={item.chapter_number}
            verses_count={item.verses_count}
            chapter_summary={item.chapter_summary}
            index={index}
            onPressItem={this._onPressItem}
            ></ListItem>
        )

    }
    

    render(){
        console.log('Response'+this.props.route.params.listings)
        const  listings  = this.props.route.params.listings;
        console.log('listings'+listings)
        return(
            <FlatList
            data={listings}
            keyExtractor={this._keyExtactor}
            renderItem={this._renderItem}
            >
            </FlatList>
        );
    }

}
