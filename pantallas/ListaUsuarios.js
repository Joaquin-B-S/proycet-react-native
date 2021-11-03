import React, {useEffect, useState} from 'react'
import {ScrollView, Button, StyleSheet,Text, TouchableOpacity, View} from 'react-native'
import {ListItem} from 'react-native-elements'

const listaUsuarios = (props) => {

    const [funcionarios, setFuncionario] = useState([])

    useEffect(() => {
        const usuarios = [];
        fetch('https://jsoza.ilab.cl/joaquin.baeza/consultar.php')
            .then(respuesta => respuesta.json())
            .then(data => {
                data.forEach(funcionario => {
                    const {id, nombre, apellido, cargo} = funcionario
                    usuarios.push({
                        id,
                        nombre,
                        apellido,
                        cargo
                    });
                });
                setFuncionario(usuarios)
            })
    }, []);

    return (
        <ScrollView>
            {
                funcionarios.map(funcionario => {
                    return (
                        <ListItem style={estilos.list} key={funcionario.id} bottomDivider onPress={() => props.navigation.navigate('DetallesUsuario', {
                            funcionarioId: funcionario.id
                        })}>
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{funcionario.nombre} {funcionario.apellido}</ListItem.Title>
                                <ListItem.Subtitle>{funcionario.cargo}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }


            <TouchableOpacity style= {estilos.fabLocation}
            onPress={() => props.navigation.navigate('CrearUsuario')} 
            
            >
            
                <View style= {estilos.fab} >
                    <Text style={estilos.fabText}>+</Text>
                </View>
            </TouchableOpacity>
           
        
            
        
        
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    list: {
        marginVertical: 15,
        marginHorizontal: 30,
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,  
        elevation: 5
    },
    fabLocation :{

        position: 'absolute',
        bottom: 8,
        right:8



    },
    fab :{
        backgroundColor:'blue',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent: 'center'


    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight:'bold',
        alignSelf: 'center'




    }

})

export default listaUsuarios
