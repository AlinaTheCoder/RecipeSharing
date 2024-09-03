import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React,{useState} from 'react'
import MyTextInput from '../components/MyTextInput'
import MyTouchableopacity from '../components/MyTouchableopacity';
import { launchImageLibrary } from 'react-native-image-picker';
import { Image } from 'react-native';


function AddRecipeScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageUri, setImageUri] = useState(null);

  // Function to handle image selection
  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image Picker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          setImageUri(uri);
          console.log('Selected Image URI:', uri);
        } else {
          console.log('No valid image URI returned');
        }
      }
    });
  };

  const handleAddRecipe = () => {
    if (title && description && imageUri) {
      const newRecipe = {
        id: (Math.random() * 1000).toString(),
        title,
        description,
        imageUrl: imageUri,
        ingredients: ingredients.split(','),
        instructions: instructions.split('\n'),
      };
      navigation.navigate('HomeScreen', { newRecipe });
    } else {
      console.log('Please fill all fields and pick an image');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Recipe Image</Text>
      <View style={styles.imagePickerContainer}>
        <MyTouchableopacity title="Pick an image" onPress={pickImage} />
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.placeholder}>No image selected</Text>
        )}
      </View>

      <Text style={styles.label}>Title</Text>
      <MyTextInput
        placeholder="Enter the title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <MyTextInput
        placeholder="Enter the description"
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Ingredients</Text>
      <MyTextInput
        placeholder="Enter ingredients, separated by commas"
        value={ingredients}
        onChangeText={setIngredients}
        multiline
        numberOfLines={3}
        style={styles.largeInput}
      />

      <Text style={styles.label}>Instructions</Text>
      <MyTextInput
        placeholder="Enter steps, each on a new line"
        value={instructions}
        onChangeText={setInstructions}
        multiline
        numberOfLines={6}
        style={styles.largeInput}
      />

      <MyTouchableopacity title="Add Recipe" onPress={handleAddRecipe} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imagePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 15,
    borderRadius: 10,
  },
  placeholder: {
    marginLeft: 15,
    color: '#888',
    fontSize: 16,
  },
  largeInput: {
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
});

export default AddRecipeScreen