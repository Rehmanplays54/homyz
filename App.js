import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name,setName]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [display,setdisplay]=useState(false);
  const restformdata=()=>{
    setdisplay(false);
    setName("");
    setemail("");
    setpassword("");
  }
  return (
  
    <View style={styles.container}>
      <Text style={{fontSize:30, marginTop:20}}>Open up App.js to start working on your app!</Text>
      
     <TextInput style={styles.TextInput}
     placeholder='Enter your name'
     onChangeText={(Text)=>setName(Text)}
     value={name}/> 
     <TextInput style={styles.TextInput}
     placeholder='Enter your email'
     onChangeText={(Text)=>setemail(Text)}
     value={email}/>
     <TextInput style={styles.TextInput}
     placeholder='Enter your password'onChangeText={(Text)=>setpassword(Text)}
     value={password}
     secureTextEntry={true}/>
      <View style={{marginTop: 20,marginBottom:10}}>
      <Button color={'green'} title='print details' onPress={()=>setdisplay(true)} />
      </View>
      <Button title='Clear' onPress={()=>restformdata()}/>

   {
    display?
    <View>
    <Text style={{fontSize: 10}}>Your name is: {name} </Text>
    <Text style={{fontSize: 10}}>Your password is: {password} </Text>
    <Text style={{fontSize: 10}}>Your email is: {email} </Text>
    </View>:null
   }
 
     
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput:
  {
    fontSize:18,
    color:'red',
    borderWidth:2,
     borderColor: 'red',
      marginTop:10
    },
});
