import react from 'react';
import {
    View , 
    StyleSheets ,
     TouchableOpacity ,
      SafeAreaView ,
       Platform ,
        StatusBar ,
         Image , 
         TextInput ,
          Alert } from "react-native";
          import firebase from "firebase" ;
          import {RFValue} from "react-native-responsive-fontSize";
          import * as  Font from "expo-font";

          export default class LoginScreeen extends Component{
            constructor(props){
                super(props);
                this.state ={
                    email:"",
                    password: "",
                    fontsLoaded:false,
                    userSignedIn:false
                };
                }

                async_LoadFontsAsync(){
                    await Font.loadAsync(customFonts);
                    this.setState({ fontsLoaded: true }); 
                }

componentDidMount(){
    this.async_LoadFontsAsync();
}

signIn=async(email,password) =>{
    firebase 
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(() =>{
this.props.navigation.navigate("DashBoard")
    })

    .catch(error => {
        Alert.alert(error.message);
    });
};

render(){
    if(this.state.fontsLoaded){
        const{email,password} = this.state ;


      return(
        <View style={StyleSheets.container}>
<Text style={StyleSheets.appTitleText}>StoryTellingApp</Text>
<Image source= {AppIcon} style= {styles.AppIcon}/>

<TextInput 
     style = {styles.TextInput} 
     onChangeText = {text => this.setState({email:text})  }   
     PlaceHolder = {" enter email"}
     PlaceHolderTextColor={"#ffffff"}
     autofocus
     />

<TextInput
 style = {styles.TextInput} 
 onChangeText = {text => this.setState({password:text})  }   
 PlaceHolder = {" enter password"}
 PlaceHolderTextColor={"#ffffff"}
 secureTextEntry
 />

     
        </View>
      )  

    }
}

                
          }