import { StatusBar } from "expo-status-bar";
import {useState, useEffect, useCallback} from "react";
import { View, Text ,SafeAreaView, StyleSheet, TouchableOpacity,TextInput} from "react-native";

export default function App(){
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const onButtonPress = (value) =>{
    if(value === '='){
      try{
        setResult(eval(input));
      } catch(error){
        setResult('error')
      }
    }else if(value ==='C'){
      setInput('');
      setResult('')
    }else{
      setInput(input + value)
    }

  }
  return(
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto"/> */}
        <View style={styles.headerView} >
          <Text style={styles.appname}>Calculator App</Text> 
        </View>
        <View style={styles.displayView}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        </View>
        <View style={styles.displayView} >
          <View style={styles.inputContainer}>
              <TextInput
              style={styles.inputText}
              value={input}
              onChangeText={setInput}
              keyboardType="numeric"
              />
          </View>
        </View>
        <View style={styles.middleView}>
        <View style={styles.buttonContainer}>
          {['7','8','9','/','4','5','6','*','1','2','3','-','0','C','=','+'].map(
            (item,index)=>(
              <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={()=>onButtonPress(item)}>
                <Text style={styles.buttonText}>{item}</Text>

              </TouchableOpacity>
            )
          )}

        </View>
       </View>
       <View style={styles.bottomTabView}></View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:30,
    backgroundColor:"gray"
  },
  headerView:{
    flex:0.15,
    backgroundColor:"#ebf1f5",
    alignItems:"center",
    justifyContent:"center",
  },
  appname:{
    fontSize:25,
    fontWeight:"bold",
    color:"#000",
    },
    displayView:{
      flex:0.1,
      backgroundColor:"#ebf1f5",
      margin:5,
      borderRadius:5,    
      },
  resultContainer:{
    justifyContent:'center',
    alignItems:'flex-end',
  },
  resultText:{
    fontSize:40,
  },
  inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end'
  },
  inputText:{
    fontSize:30,
  },
  middleView:{
    flex:0.68,
    backgroundColor:"#ecdedd ",
    marginTop:5,
  },
  buttonContainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  button:{
    fontSize:24,
    width:'25%',
    height:'25%',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#ccc'
  },
  buttonText:{
    fontSize:24,
  },
  bottomTabView:{
    flex:0.07,
    backgroundColor:"#ebf1f5",
   },
})



