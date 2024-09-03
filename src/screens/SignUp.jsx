import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// required components
import MyTextInput from '../components/MyTextInput'
import MyTouchableopacity from '../components/MyTouchableopacity'

function SignUp({ navigation }) {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')

    function handleSignUp() {
        console.error('Apply Sign Up logic Kindly!')
        navigation.navigate('HomeScreen')
    }
    function handleCancel() {
        console.error('Apply Cancel logic Kindly!')
    }
    return (
        <View>
            <Text style={styles.txt}>Sign Up</Text>
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
            <MyTextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
            />
            <View style={styles.btnContainer}>
                <MyTouchableopacity
                    title="Cancel"
                    onPress={handleCancel}
                />
                <MyTouchableopacity
                    title="Sign Up"
                    onPress={handleSignUp}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Already have an account? Log in!</Text>
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
        loginText: {
            color: '#007BFF',
            textAlign: 'center',
            marginTop: 20,
            textDecorationLine: 'underline',
        }
    })
    export default SignUp