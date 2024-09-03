import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// required components
import MyTextInput from '../components/MyTextInput'
import MyTouchableopacity from '../components/MyTouchableopacity'

function Login({ navigation }) {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    function handleLogIn() {
        console.error('Apply Login logic Kindly!')
        navigation.navigate('HomeScreen')
    }
    function handleCancel() {
        console.error('Apply Cancel logic Kindly!')
    }
    return (
        <View>
            <Text style={styles.txt}>Login</Text>
            <MyTextInput
                placeholder="Enter your Email here"
                value={email}
                onChangeText={setEmail}
            />
            <MyTextInput
                placeholder="Enter your Password here"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <View style={styles.btnContainer}>
                <MyTouchableopacity
                    title="Cancel"
                    onPress={handleCancel}
                />
                <MyTouchableopacity
                    title="Login"
                    onPress={handleLogIn}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupText}>Don't have an account? Create account!</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    txt: {
        color: '#e83317',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        margin: 20
    },
    btnContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 30,
        marginLeft: 60

    },
    signupText: {
        color: '#007BFF',
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline',
    },
})

export default Login