import React from 'react'
import {Text,View,Button,SafeAreaView,StyleSheet,ActivityIndicator} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

Separator = () =>{
    return <View style={styles.separator}/>

   }
export default class DetailsScreen extends React.Component{

    flag = true;

    constructor(props){
        super(props)
        global.verse=1
        this.state = {
            loading:false
        }
    }


    _onPressButton = () =>{
        console.log(this.props.route.params.chapter_number)
        this.setState({
            loading:true
        })
        fetch("https://bhagavadgita.io/api/v1/chapters/"+this.props.route.params.chapter_number+"/verses/"+global.verse+"?access_token="+global.access_token, {
	        "method": "GET",
                }               )
                .then(response => response.json())
            .then(json => this._handleResponse(json))
            .catch(error =>
                this.setState({
                isLoading: false,
                message: 'Something bad happened ' + error
            }));
    }
    _handleResponse = (json) =>{
        console.log(json)
        this.props.navigation.navigate("Verse Details",{json:json})
    }

    _onPressButtonHome = () =>{
    
        this.props.navigation.navigate("Home")
    }

    render(){
        return this.state.loading?<ActivityIndicator size={'large'}/>:
        (
            <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.titleHeader}>
                    Chapter
                </Text>
                <Text style={styles.title}>
                Chapter Number: {this.props.route.params.chapter_number}
                </Text>
                <Text style={styles.title}>
                    {this.props.route.params.chapter_summary}
                </Text>
                <Separator />
                {/* <TextInput 
                value={'1'}
                style={borderBottomWidth=2}
                />       */}
                <Button
                title="Get Verse"
                color="#f194ff"
                onPress={this._onPressButton}
                />
                <Button
                title="Get Home"
                color="#f194ff"
                onPress={this._onPressButtonHome}
                />
            </View>
            {/* {spinner} */}
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      marginHorizontal: 16,
    },
    title: {
        textAlign: 'left',
        marginVertical: 8,
      },
      titleHeader: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize:30
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})