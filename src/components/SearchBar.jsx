import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import MyTextInput from './MyTextInput';


 function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.container}>
 
      <MyTextInput
        placeholder="Search recipes..."
        value={value}
        onChangeText={onChangeText}
        style={styles.searchInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
});

export default SearchBar;