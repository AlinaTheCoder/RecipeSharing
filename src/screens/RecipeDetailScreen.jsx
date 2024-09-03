import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import MyTouchableopacity from '../components/MyTouchableopacity'

function RecipeDetailScreen({ navigation, route }) {
  const { recipe } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image source={recipe.imageUrl} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.description}>{recipe.description}</Text>

      <Text style={styles.sectionTitle}>Ingredients</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.text}>
          • {ingredient}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Instructions</Text>
      {recipe.instructions.map((instruction, index) => (
        <Text key={index} style={styles.text}>
          {instruction}
        </Text>
      ))}

      <MyTouchableopacity
        title="Add Favourite"
        onPress={() => navigation.navigate('FavoritesScreen', { favoriteRecipe: recipe })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },

});

export default RecipeDetailScreen