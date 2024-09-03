import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

function MyTouchableopacity({ title, onPress }) {
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.btnTxt}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#e83317',
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        height:50,
        width:120,
        marginTop:5
    },
    btnTxt: {
        color: 'white',
        fontSize: 16,
    }

})
export default MyTouchableopacity