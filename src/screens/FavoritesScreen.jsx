import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import MyTouchableopacity from '../components/MyTouchableopacity';

export default function FavoritesScreen({ navigation, route }) {
  const [favorites, setFavorites] = useState([]);

  // Listen for favorite recipe passed from the detail screen
  useEffect(() => {
    if (route.params?.favoriteRecipe) {
      setFavorites(prevFavorites => [...prevFavorites, route.params.favoriteRecipe]);
    }
  }, [route.params?.favoriteRecipe]);

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>No favorite recipes yet!</Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <RecipeCard
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              onPress={() => navigation.navigate('RecipeDetailScreen', { recipe: item })}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
      <MyTouchableopacity
        title="Back to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  noFavoritesText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 50,
  },
});