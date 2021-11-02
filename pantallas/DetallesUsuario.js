import React, {useEffect, useState} from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet, Text} from 'react-native'

const DetallesUsuario = (props) => {

    const [state, setState] = useState({
        nombre: '',
        apellido: '',
        cargo: '',
        email: '',
        telefono: '',
        horaInicio: '',
        horaFinal: ''
    })
    
    const obtenerUsuario = id => {
        fetch('https://jsoza.ilab.cl/joaquin.baeza/consultar.php')
            .then(respuesta => respuesta.json())
            .then(data => {
                const funcionario = data.filter(funcionario => funcionario.id == id);
                funcionario.forEach(user => {
                    setState({
                        ...user
                    })
                });
            })
    }

    const eliminarUsuario = () => {
        const id = props.route.params.funcionarioId
        fetch('https://jsoza.ilab.cl/joaquin.baeza/eliminar.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            body: JSON.stringify({
                id: id
            })
        })
        // .then(respuesta => respuesta.json())
        // .then(respuestaJson => alert(respuestaJson))
        // .catch(error => console.log(error));
        alert('Funcionario eliminado con exito');
        props.navigation.navigate('ListaUsuarios');
    }

    const actualizarUsuario = () => {
        const id = props.route.params.funcionarioId
        fetch('https://jsoza.ilab.cl/joaquin.baeza/actualizar.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            body: JSON.stringify({
                id: id,
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
        alert('Funcionario actualizado con exito');
        props.navigation.navigate('ListaUsuarios');
    }

    useEffect(() => {
        obtenerUsuario(props.route.params.funcionarioId)
    }, [])

    return (
        <ScrollView style={estilos.contenedor}>
        <View style={estilos.inputGroup}>
            <Text>Nombre:</Text>
            <TextInput value={state.nombre} onChangeText={(value) => setState({...state, nombre: value})}/>
        </View>
        <View style={estilos.inputGroup}>
            <Text>Apellido:</Text>
            <TextInput value={state.apellido} onChangeText={(value) => setState({...state, apellido: value})} />
        </View>
        <View style={estilos.inputGroup}>
            <Text>Correo:</Text>
            <TextInput value={state.email} onChangeText={(value) => setState({...state, email: value})} />
        </View>
        <View style={estilos.inputGroup}>
            <Text>Teléfono:</Text>
            <TextInput value={state.telefono} onChangeText={(value) => setState({...state, telefono: value})} />
        </View>
        <View style={estilos.inputGroup}>
            <Text>Cargo:</Text>
            <TextInput value={state.cargo} onChangeText={(value) => setState({...state, cargo: value})} />
        </View>
        <View style={estilos.inputGroup}>
            <Text>Hora de entrada:</Text>
            <TextInput value={state.horaInicio} onChangeText={(value) => setState({...state, horaInicio: value})} />
        </View>
        <View style={estilos.inputGroup}>
            <Text>Hora de salida:</Text>
            <TextInput value={state.horaFinal} onChangeText={(value) => setState({...state, horaFinal: value})} />
        </View>
        <View style={estilos.boton}>
            <Button color="#19AC52" title="Actualizar información" onPress={() => actualizarUsuario()}/>
        </View>
        <View>
            <Button color="#E37399" title="Eliminar funcionario" onPress={() => eliminarUsuario()}/>
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
    },
    boton: {
        marginBottom: 10,
    }
})

export default DetallesUsuario