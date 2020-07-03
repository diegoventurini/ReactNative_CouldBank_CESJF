import React from 'react';
import firebase from '../database/Firebase'
import { View, Text, TextInput, Button, Alert } from 'react-native';

import { ScrollVieW } from "../styles/styles";

import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';
//import { TextInput } from 'react-native-gesture-handler';

class ContentDetailScreen extends React.Component {

    constructor() {
        super();   
        
        this.state = {
            id: '',
            name: '',
            desc: '', 
            prof: '', 
            curso: '',
            facu: '',
            img: ''
        
        }

    }

    componentDidMount() {
        const { id, name, desc, prof, curso, facu, img } = this.props.route.params;

        this.setState({id: id});
        this.setState({name: name});
        this.setState({desc: desc });
        this.setState({prof: prof});
        this.setState({curso: curso});
        this.setState({facu: facu});
        this.setState({img: img });

    }


    updateContent() {
        const { id } = this.props.route.params;
        const { navigation } = this.props;


        
        console.log("id a ser atualizado", id);

        firebase.firestore().collection('contents').doc(id).set(
            {   
                id: this.state.id,
                name: this.state.name,
                desc: this.state.desc,
                prof: this.state.prof,
                curso: this.state.curso,
                facu: this.state.facu,
                img:  this.state.img 
            }
        )
        
        .then(()=>{
            console.log("documento atualizado com sucesso ", id);    
            navigation.navigate('ContentScreen');
        })

        .catch((error) =>{
            console.log("Erro ao atualizar o documento ", id, error);  
            Alert.alert('Não foi possível atualizar o documento','',[{text:'OK'}]);
        })
    }


    deleteContent() {
        const { id } = this.props.route.params;

        const { navigation } = this.props;


        
        console.log("id a ser apagado", id);

        firebase.firestore().collection('contents').doc(id).delete()
 
        .then(()=>{
            console.log("documento apagado com sucesso ", id);    
            navigation.navigate('ContentScreen');
        })

        .catch((error) =>{
            console.log("Erro ao apagar o documento ", id, error);  
            Alert.alert('Não foi possível apagar o documento','',[{text:'OK'}]);
  

        })
    }


    onChangeTextInput(value, field) {
        const state = this.state;
        state[field] = value;
        this.setState(state);   


    }

    render() {

         

        return (
         /*   <View>
                <Text><b>ID da matéria: </b> {this.props.route.params.id}</Text>
                <Text><b>Nome da matéria:</b> {this.props.route.params.name}</Text>
                <Text><b>Descrição: </b> {this.props.route.params.desc}</Text>
                <Text><b>Professor: </b> {this.props.route.params.prof}</Text>
                <Text><b>Curso: </b> {this.props.route.params.curso}</Text>
                <Text><b>Faculdade: </b> {this.props.route.params.facu}</Text>
        */
       
            
            <View>
                <Text><b>ID da matéria: </b></Text> 
                    <TextInput value={this.state.id} 
                        onChangeText={(value) => this.onChangeTextInput(value, 'id')}/>
                <br />

                <Text><b>Nome da matéria:</b></Text>
                    <TextInput value={this.state.name} 
                        onChangeText={(value) => this.onChangeTextInput(value, 'name')}/>
                <br />

                <Text><b>Descrição: </b></Text>
                    <TextInput value={this.state.desc}
                        onChangeText={(value) => this.onChangeTextInput(value, 'desc')}/>

                <br />       
                
                <Text><b>Professor: </b></Text>
                    <TextInput value={this.state.prof}
                        onChangeText={(value) => this.onChangeTextInput(value, 'prof')}/>
                
                <br />

                <Text><b>Curso: </b> </Text>
                    <TextInput value={this.state.curso}
                        onChangeText={(value) => this.onChangeTextInput(value, 'curso')}/>
               
               <br />

                <Text><b>Faculdade: </b></Text>
                    <TextInput value={this.state.facu}
                        onChangeText={(value) => this.onChangeTextInput(value, 'facu')}/>
                 
                <br />

                <Text><b>Imagem: </b></Text>
                    <TextInput value={this.state.img}
                        onChangeText={(value) => this.onChangeTextInput(value, 'img')}/>
                       
            <ScrollVieW>
            <Button
                    color="#4437ba"  
                    title="Salvar"
                    onPress={()=>this.updateContent()} />    
            </ScrollVieW>

            <ScrollVieW>
            <Button
                    color="#4437ba"  
                    title="Apagar"
                    onPress={()=>this.deleteContent()} />
            </ScrollVieW>

            </View>    

        )    
    }
}

export default function(props) {
    const route = useRoute();


    const navigation = useNavigation(); 

    return <ContentDetailScreen {...props} route={route} navigation={navigation} />;


}