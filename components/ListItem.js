import React from 'react'
import {TouchableHighlight,View,Image,Text,StyleSheet} from 'react-native'

export default class ListItem extends React.Component{

    _Press = () =>{
        this.props.onPressItem(this.props.index,this.props.chapter_summary,this.props.chapter_number);
    }

    render(){
        const chapter_number = this.props.chapter_number;
        const verses_count = this.props.verses_count;
        const chapter_summary = this.props.chapter_summary;

        return(
            <TouchableHighlight
            onPress={this._Press}
            underlayColor='#dddddd'>
                <View>
                    <View style={styles.rowContainer}>
                        <View styles={styles.textContainer}>
                            <Text styles={styles.price}>{}
                                CHAPTER: {chapter_number}
                            </Text>
                            <Text styles={styles.price}>{}
                                VERSES   : {verses_count}
                            </Text>
                            <Text styles={styles.title} numberOfLines={1}>
                                SUMMARY: {chapter_summary}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
      },
      textContainer: {
        flex: 1
      },
      separator: {
        height: 1,
        backgroundColor: '#dddddd'
      },
      price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'
      },
      title: {
        fontSize: 20,
        color: '#656565'
      },
      rowContainer: {
        flexDirection: 'row',
        padding: 10
      },
})