/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button,Image,ActivityIndicator,TouchableOpacity,ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-gesture-handler';


export default class HomePage extends React.Component{

    componentDidMount(){
        this._getToken()
    }

    _getToken(){
        console.log('_getTokent')
        const formData = new FormData();
        formData.append('client_id', 'HrR5eq2EHXQyDz8puOUw3g8oKqjT4GRZVJdh5cGD');
        formData.append('client_secret', '8hRPQGvmqtMm2G7buevU4xhhroB5XwWd5KcQWyDTWbSib1f84z');
        formData.append('grant_type', 'client_credentials');
        // formData.append('scope', 'verse%20chapter');


        fetch("https://bhagavadgita.io/auth/oauth/token",
         {
            "method": "POST",
            body: formData
            })
            .then(response => response.json())
            .then(json => this._storeTokenData(json))
            .catch(error =>
                this.setState({
                isLoading: false,
                message: 'Something bad happened ' + error
            }));
    }


    _storeTokenData(json){
        console.log("Access token set to:"+json.access_token)
        global.access_token = json.access_token;
    }



    constructor(props){
        super(props);
        this.state ={
            searchString:'London',
            isLoading:false,
            message:'Welcome to Bhagvath Gita'
        }
    }

    _executeQuery = () => {
           // console.log(query)
            this.setState({
                isLoading:true
            })

            fetch("https://bhagavadgita.io/api/v1/chapters?access_token="+global.access_token, {
	        "method": "GET",
                }               )
                .then(response => response.json())
            .then(json => this._handleResponse(json))
            .catch(error =>
                this.setState({
                isLoading: false,
                message: 'Something bad happened ' + error
            }));
            // fetch(query)
            // .then(response => response.json())
            // .then(json => this._handleResponse(json))
            // .catch(error =>
            //     this.setState({
            //     isLoading: false,
            //     message: 'Something bad happened ' + error
            // }));
    }

    _handleResponse = (response) => {
        console.log('Response'+response)
        this.setState({ isLoading: false , message: ''});
       if (response.length > 1) {
         console.log('Properties found: ' + response.length);
         //this.setState({ message: response.length});
         this.props.navigation.navigate('Slokas',{listings:response})
       } else {
          this.setState({ message: response});
       }
      };

    _onSearchPressed = (event) =>{
        // const query = this.urlForQueryPage('place_name', this.state.searchString,1);
       // console.log(query)
        this._executeQuery();
    };

     urlForQueryPage = (key,value,pageNumber) => {
        const data = {
            country:'uk',
            pretty:'1',
            encoding:'json',
            listing_type:'buy',
            action:'search_listings',
            page:pageNumber,
        };
        data[key] = value;
        const queryString = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');
       // return 'https://api.nestoria.co.uk/api?' + queryString;
        return 'http://mcaindia.bananaapps.co.uk/api/Common/Categories?communityid=4';
    }

    static navigationOptions = {
        title: 'Bhagvath Gita',
      };

      _onSearchTextChanged = (events) => {
        this.setState({
            searchString: events.nativeEvent.text
            }
        );
        console.log(this.state.searchString)
      };

  render(){
    const spinner = this.state.isLoading?<ActivityIndicator size='large'/>:null
    return(
      <View>
        <View>
        {/* <Text style={styles.description}>
          Search for houses to buy!
        </Text> */}
        {/* <View style={styles.flowRight}> */}
        {/* <TextInput style={styles.searchInput}
        value= {this.state.searchString}
        onChange={this._onSearchTextChanged}
        placeholder='Search by place-name or postcode.'>
          
        </TextInput> */}
        {/* <Button
        
            color='#48BBEC'
            title='Go'
            onPress={this._onSearchPressed}
            /> */}
      {/* </View> */}
     
      
      <Text style={styles.description}>{this.state.message}</Text>
       
      </View>
      <View style={styles.categories}>
      <TouchableOpacity style={styles.button23}>
              <ImageBackground
                source={require("./../Resources/Home.jpg")}
                resizeMode="cover"
                style={styles.sliderimage}
                // imageStyle={styles.image_imageStyle}
              >
                {/* <View style={styles.rect8Filler}></View> */}
                {/* <View style={styles.rect8}>
                  <Text style={styles.text22}>bhagavadgita</Text>
                </View> */}
              </ImageBackground>
            </TouchableOpacity>
        <View style={styles.button2RowColumn}>
          <View style={styles.button2Row}>
            <TouchableOpacity style={styles.button21} onPress={this._onSearchPressed}>
              {/* <ImageBackground
                source={require("./../Resources/orange.jpg")}
                resizeMode="cover"
                style={styles.sliderimage}
                imageStyle={styles.image_imageStyle}
              > */}
                <View style={styles.rect8Filler}></View>
                <View style={styles.rect8}>
                  <Text style={styles.text22}>CHAPTERS</Text>
                </View>
              {/* </ImageBackground> */}
            </TouchableOpacity> 
            <View style={styles.button2Filler}></View> 
            {/* <TouchableOpacity style={styles.button3}>
              <View style={styles.image2Stack}>
                <Image
                  source={require("./../Resources/chips-circuit-circuit-board-343457.jpg")}
                  resizeMode="cover"
                  style={styles.image2}
                ></Image>
                <View style={styles.rect82}>
                  <Text style={styles.text23}>TECHNOLOGY</Text>
                </View>
              </View>
            </TouchableOpacity> */}
          </View>
          <View style={styles.button4Row}>
            {/* <TouchableOpacity style={styles.button4}>
              <ImageBackground
                source={require("./../Resources/accessories-accessory-boots-322207.jpg")}
                resizeMode="cover"
                style={styles.image3}
                imageStyle={styles.image3_imageStyle}
              >
                <View style={styles.rect83Filler}></View>
                <View style={styles.rect83}>
                  <Text style={styles.text24}>FASHION</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity> */}
            <View style={styles.button4Filler}></View>
            
          </View>
        </View>
          {/* <TouchableOpacity style={styles.button7}>
            <ImageBackground
              source={require("./../Resources/conifers-daylight-environment-1666021.jpg")}
              resizeMode="cover"
              style={styles.image22}
              imageStyle={styles.image22_imageStyle}
            >
              <View style={styles.rect85Filler}></View>
              <View style={styles.rect85}>
                <Text style={styles.text26}>ENVIRONMENT</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity> */}
          <View style={styles.button7Filler}></View>
          <TouchableOpacity style={styles.button6}>
            <ImageBackground
              source={require("./../Resources/orange.jpg")}
              resizeMode="cover"
              style={styles.image32}
              imageStyle={styles.image32_imageStyle}
            >
              <View style={styles.rect86Filler}></View>
              <View style={styles.rect86}>
                <Text style={styles.text27}>Verses</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {spinner}
        </View>
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
    heading:{
      fontSize:28,
      textAlign:'center',
      color:'#656565',
      marginTop:65
    },
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
      },
      container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
      },
      flowRight:{
          flexDirection:'row',
          alignItems:'center',
          alignSelf:'stretch'
      },
      searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
      },
      sliderimage: {
        width: 300,
        height: 200,
      },
      container: {
        width: 360,
        height: 660
      },
      tabs: {
        height: 80,
        backgroundColor: "rgba(31,178,204,1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        elevation: 0,
        shadowOffset: {
          height: 0,
          width: 0
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowRadius: 0
      },
      following: {
        width: 100,
        height: 38,
        backgroundColor: "rgba(247,247,247,0)",
        alignSelf: "center",
        opacity: 1,
        borderRadius: 5,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        justifyContent: "center"
      },
      text: {
        color: "rgba(255,255,255,1)",
        alignSelf: "center"
      },
      popular: {
        width: 100,
        height: 38,
        backgroundColor: "rgba(247,247,247,0)",
        alignSelf: "center",
        opacity: 1,
        borderRadius: 100,
        justifyContent: "center"
      },
      text2: {
        color: "rgba(255,255,255,1)",
        alignSelf: "center"
      },
      button: {
        width: 100,
        height: 38,
        backgroundColor: "rgba(247,247,247,0)",
        alignSelf: "center",
        opacity: 1,
        borderRadius: 100,
        justifyContent: "center"
      },
      text3: {
        color: "rgba(255,255,255,1)",
        alignSelf: "center"
      },
      categories: {
        backgroundColor: "rgba(255,255,255,1)",
        flex: 1
      },
      button2: {
        width: 300,
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        elevation: 18,
        borderRadius: 15,
        overflow: "hidden"
      },
      button23: {
        width: 300,
        height: 150,
        marginLeft:35,
        backgroundColor: "rgba(230, 230, 230,1)",
        elevation: 18,
        borderRadius: 15,
        overflow: "hidden"
      },

      button21: {
        width: 170,
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        elevation: 18,
        borderRadius: 5,
        overflow: "hidden"
      },
      image: {
        flex: 1
      },
      image_imageStyle: {
        //flex: 1
      },
      rect8Filler: {
        flex: 1
      },
      rect8: {
        height: 27,
        backgroundColor: "rgba(21,19,19,0.5)",
        justifyContent: "center"
      },
      text22: {
        color: "rgba(247,252,253,1)",
        fontSize: 14,
        alignSelf: "center"
      },
      button2Filler: {
        flex: 1,
        flexDirection: "row"
      },
      button3: {
        width: 150,
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        elevation: 18,
        borderRadius: 5,
        overflow: "hidden"
      },
      image2: {
        top: 0,
        left: 0,
        position: "absolute",
        right: 0,
        bottom: 1
      },
      rect82: {
        left: 0,
        height: 27,
        backgroundColor: "rgba(21,19,19,0.5)",
        position: "absolute",
        right: 0,
        bottom: 0,
        justifyContent: "center"
      },
      text23: {
        color: "rgba(247,252,253,1)",
        fontSize: 14,
        alignSelf: "center"
      },
      image2Stack: {
        flex: 1,
        marginBottom: -1
      },
      button2Row: {
        height: 150,
        width: 150,
        flexDirection: "row"
      },
      button4: {
        width: 150,
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        elevation: 18,
        borderRadius: 5,
        overflow: "hidden"
      },
      image3: {
        flex: 1
      },
      image3_imageStyle: {},
      rect83Filler: {
        flex: 1
      },
      rect83: {
        height: 27,
        backgroundColor: "rgba(21,19,19,0.5)",
        justifyContent: "center"
      },
      text24: {
        color: "rgba(247,252,253,1)",
        fontSize: 14,
        alignSelf: "center"
      },
      button4Filler: {
        flex: 1,
        flexDirection: "row"
      },
      button5: {
        width: 150,
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        elevation: 18,
        borderRadius: 5,
        overflow: "hidden"
      },
      image4: {
        flex: 1
      },
      image4_imageStyle: {},
      rect84Filler: {
        flex: 1
      },
      rect84: {
        height: 27,
        backgroundColor: "rgba(21,19,19,0.5)"
      },
      text25: {
        color: "rgba(247,252,253,1)",
        fontSize: 14,
        marginTop: 7,
        alignSelf: "center"
      },
      button4Row: {
        height: 150,
        flexDirection: "row",
        marginTop: 40
      },
      button2RowColumn: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15
      },
      button2RowColumnFiller: {
        flex: 1
      },
      button7: {
        width: 150,
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        elevation: 18,
        borderRadius: 5,
        overflow: "hidden",
        alignSelf: "flex-end"
      },
      image22: {
        flex: 1,
        marginBottom: -1,
        marginTop: 1
      },
      image22_imageStyle: {},
      rect85Filler: {
        flex: 1
      },
      rect85: {
        height: 27,
        backgroundColor: "rgba(21,19,19,0.5)",
        marginBottom: 1
      },
      text26: {
        color: "rgba(247,252,253,1)",
        fontSize: 14,
        marginTop: 7,
        alignSelf: "center"
      },
      button7Filler: {
        flex: 1,
        flexDirection: "row"
      },
        button6: {
        width: 175,
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        elevation: 18,
        borderRadius: 5,
        overflow: "hidden",
        alignSelf: "flex-end"
      },
      image32: {
        flex: 1,
        marginBottom: -1,
        marginTop: 1
      },
      image32_imageStyle: {},
      rect86Filler: {
        flex: 1
      },
      rect86: {
        height: 27,
        backgroundColor: "rgba(21,19,19,0.5)"
      },
      text27: {
        color: "rgba(247,252,253,1)",
        fontSize: 14,
        marginTop: 6,
        alignSelf: "center"
      },
      button7Row: {
        height: 150,
        flexDirection: "row",
        marginBottom: 30,
        marginLeft: 15,
        marginRight: 15
      }
})


