import React from 'react'
import {Text,View,Button,SafeAreaView,StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

Separator = () =>{
    return <View style={styles.separator}/>

   }
export default class VerseDetailsScreen extends React.Component{

    _onPressButtonHome = () =>{
    
        this.props.navigation.navigate("Home")
    }
  
    _onPressButton = () =>{
       // console.log(this.props.route.params.chapter_number)
       this.props.navigation.push("Sloka Details",{chapter_summary:this.props.route.params.json.chapter_summary,chapter_number:this.props.route.params.json.chapter_number})

    }

    _onNextPressButton = () =>{
        // console.log(this.props.route.params.chapter_number)
        this.props.navigation.push("Sloka Details",{chapter_summary:this.props.route.params.json.chapter_summary,chapter_number:this.props.route.params.json.chapter_number})
 
     }

    _onPressItem = (index,chapter_summary,chapter_number) =>{
        console.log(index)
        // this.props.navigation.navigate("Sloka Details",{chapter_summary:chapter_summary,chapter_number:chapter_number})
    }
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.titleHeader}>
                Chapter: 
                {this.props.route.params.json.chapter_number}
                </Text>
                <Text style={styles.title}>
                    {this.props.route.params.json.text}
                </Text>
                <Text style={styles.titleHeader}>
                 Transliteration
                </Text>
                <Text style={styles.title}>
                    {this.props.route.params.json.transliteration}
                </Text>
                <Text style={styles.titleHeader}>
                Word Meanings
                </Text>
                <Text style={styles.title}>
                    {this.props.route.params.json.word_meanings}
                </Text>
                <Text style={styles.titleHeader}>
                Translation
                </Text>
                <Text style={styles.title}>
                    {this.props.route.params.json.meaning}
                </Text>
                <Separator />
                {/* <Button
                title="Go to Next Verse"
                color="#f194ff"
                onPress={this.this.props.route.params.onPressNext}
                />  */}
                <Button
                title="Go Back"
                color="#f194ff"
                onPress={this._onPressButton}
                />    
                <Button
                title="Go Home"
                color="#f194ff"
                onPress={this._onPressButtonHome}
                />
            </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      marginHorizontal: 16,
    },
    title: {
        textAlign: 'left',
        marginVertical: 8,
      },
      titleHeader: {
        textAlign: 'center',
        marginVertical: 5,
        fontSize:20 
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})