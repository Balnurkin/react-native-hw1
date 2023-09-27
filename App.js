import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import logo from './assets/Zeronet_logo.png'

export default function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState({})
  const [hasData, setHasData] = useState(false)

  const sendData = () => {
    if(name && number && email){
      const data = {
        name,
        number,
        email
      }
      setData(data)
      setHasData(true)
      setName('')
      setNumber('')
      setEmail('')
    }else{
      setHasData(false)
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={{width:150, height:150}} source={logo} />
        <Text style={{fontWeight:700, fontSize:28 }} >ZeroNet</Text>
      </View>
      <View style={styles.registBlock}>
        <Text style={{fontSize:20, textAlign:'center'}}>Форма регистрации</Text>
        <TextInput style={styles.input} placeholder='Имя' value={name} onChangeText={text=>setName(text)} />
        <TextInput style={styles.input} placeholder='Телефон' value={number} onChangeText={text=>setNumber(text)} />
        <TextInput style={styles.input} placeholder='Почта' value={email} onChangeText={text=>setEmail(text)} />
        <TouchableOpacity onPress={sendData}>
          <View style={styles.opacity}>
            <Text style={{fontSize:20}}>Отправить</Text>
          </View>
        </TouchableOpacity>
      </View>
      {hasData && <>
        <View style={styles.data}>
          <Text style={{fontSize:20, color:'white', textAlign:'center'}} >Ваши данные</Text>
          <Text style={styles.text}>Имя: {data.name}</Text>
          <Text style={styles.text}>Телефон: {data.number}</Text>
          <Text style={styles.text}>Почта: {data.email}</Text>
        </View>
      </>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor:'#FFE4D6'
  },
  logo:{
    flex:0.3,
    justifyContent:'center',
    alignItems:'center'
  },
  registBlock:{
    flex:0.3,
    width:280,
    gap:10,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:12,
    paddingVertical:12,
    backgroundColor:'#FACBEA',
    borderWidth:1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  input:{
    width:250,
    height:40,
    fontSize:18,
    borderWidth:1,
    paddingHorizontal:6
  },
  opacity:{
    width:100,
    height:40,
    backgroundColor:'#D988B9',
    justifyContent:'center',
    alignItems:'center',
  },
  data:{
    flex:0.2,
    backgroundColor:'#B0578D',
    width:280,
    borderWidth:1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text:{
    fontSize:16,
    color:'white'
  }
});
