import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import {ListItem} from 'react-native-elements'

const listaUsuarios = (props) => {

    const [funcionarios, setFuncionario] = useState([])

    useEffect(() => {
        const usurarios = [];
        fetch('https://jsoza.ilab.cl/joaquin.baeza/')
            .then(respuesta => respuesta.json())
            .then(data => {
                data.forEach(funcionario => {
                    const {id, nombre, apellido, cargo} = funcionario
                    usurarios.push({
                        id,
                        nombre,
                        apellido,
                        cargo
                    });
                });
                setFuncionario(usurarios)
            })
    }, []);

    return (
        <ScrollView>
            {
                funcionarios.map(funcionario => {
                    return (
                        <ListItem key={funcionario.id} bottomDivider onPress={() => props.navigation.navigate('DetallesUsuario', {
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

            <Button title="Ingresar nuevo funcionario" onPress={() => props.navigation.navigate('CrearUsuario')}/>
        </ScrollView>
    )
}

export default listaUsuarios
