import React from 'react';
import { View, TextInput, Button, Alert } from 'react-native'; 
import firebase from '../database/Firebase'
//import Sqlite from '../database/Sqlite';

import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

class SecondScreen extends React.Component {

  constructor(){
    super();
    this.state = {
      name:'',
      desc:'',
      prof:'',
      curso:'',
      facu:'',
      img:'',
    }
  }


  onChangeTextInput(value, field) {
    const state = this.state;
    state[field] = value;
    this.setState(state);
  }

  saveContent(){


    const { navigation } = this.props;
  
    firebase.firestore().collection('contents').add(
      {
        name:this.state.name,
        desc:this.state.desc,
        prof:this.state.prof,
        curso:this.state.curso,
        facu:this.state.facu,
        img:this.state.img,
      }
    )
    .then(()=>{
      console.log("Salvou");
      navigation.navigate("ContentScreen");
    })
    .catch((error)=>{
      console.log("Erro ao salvar o conteudo", error);
      Alert.alert('Não foi possível salvar o documento','',[{text:'OK'}]);      
    })

     
  }


  render(){
    return (
      <View>
                <TextInput placeholder="Nome da matéria"
                           value={this.state.name}
                           onChangeText={(value)=>this.onChangeTextInput(value, 'name')}
                           
                           />
                <TextInput placeholder="Descrição"
                          multiline={true}
                          numberOfLines={4}
                            value={this.state.desc}
                            onChangeText={(value)=>this.onChangeTextInput(value, 'desc')}
                                />

                <TextInput placeholder="Professor"
                          value={this.state.prof}
                          onChangeText={(value)=>this.onChangeTextInput(value, 'prof')}
                                          
                          />

                <TextInput placeholder="Curso"
                           value={this.state.curso}
                           onChangeText={(value)=>this.onChangeTextInput(value, 'curso')}
                           
                           />
                <TextInput placeholder="Faculdade"
                           value={this.state.facu}
                           onChangeText={(value)=>this.onChangeTextInput(value, 'facu')}
                           
                           />           

                <TextInput placeholder="Imagem"
                            value={this.state.img}
                            onChangeText={(value)=>this.onChangeTextInput(value, 'img')}
                                />                
                  <Button 
                   color="#4473ba" 
                   title="Salvar" 
                   onPress={()=>this.saveContent()}/>

            </View>    
    );
  }  
}

export default function(props) {
  const navigation = useNavigation();
 // const route = useRoute();

  return <SecondScreen {...props}  navigation={navigation} />;

}