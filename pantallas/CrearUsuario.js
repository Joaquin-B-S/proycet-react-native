import React, {useState} from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet, Text} from 'react-native'

const CrearUsuario = (props) => {

    const [state, setState] = useState({
        nombre: '',
        apellido: '',
        cargo: '',
        email: '',
        telefono: '',
        horaInicio: '',
        horaFinal: '',
    })

    const guardarUsuario = () => {
        if (state.nombre === '' || state.apellido === '' || state.email === '' || state.telefono === '' || state.cargo === '' || state.horaInicio === '' || state.horaFinal === '') {
            alert('Todos los campos son obligatorios')
        } else {
            fetch('https://jsoza.ilab.cl/joaquin.baeza/insertar.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'no-cors',
                body: JSON.stringify({
                    nombre: state.nombre,
                    apellido: state.apellido,
                    cargo: state.cargo,
                    email: state.email,
                    telefono: state.telefono,
                    horaInicio: state.horaInicio,
                    horaFinal: state.horaFinal,
                })
            })
            // .then(respuesta => respuesta.json())
            // .then(respuestaJson => alert(respuestaJson))
            // .catch(error => console.log(error));
            alert('Funcionario ingresado con exito');
            props.navigation.navigate('ListaUsuarios');
        }
    }

    return (
        <ScrollView style={estilos.contenedor}>
            <View style={estilos.inputGroup}>
                <Text>Nombre:</Text>
                <TextInput onChangeText={(value) => setState({...state, nombre: value})}/>
            </View>
            <View style={estilos.inputGroup}>
                <Text>Apellido:</Text>
                <TextInput onChangeText={(value) => setState({...state, apellido: value})} />
            </View>
            <View style={estilos.inputGroup}>
                <Text>Correo:</Text>
                <TextInput onChangeText={(value) => setState({...state, email: value})} />
            </View>
            <View style={estilos.inputGroup}>
                <Text>Teléfono:</Text>
                <TextInput onChangeText={(value) => setState({...state, telefono: value})} />
            </View>
            <View style={estilos.inputGroup}>
                <Text>Cargo:</Text>
                <TextInput onChangeText={(value) => setState({...state, cargo: value})} />
            </View>
            <View style={estilos.inputGroup}>
                <Text>Hora de entrada:</Text>
                <TextInput onChangeText={(value) => setState({...state, horaInicio: value})} />
            </View>
            <View style={estilos.inputGroup}>
                <Text>Hora de salida:</Text>
                <TextInput onChangeText={(value) => setState({...state, horaFinal: value})} />
            </View>
            <View>
                <Button title="Guardar" onPress={() => guardarUsuario()}/>
            </View>
        </ScrollView>
    )
}



const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CrearUsuario
