import { View, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import MyTouchableopacity from '../components/MyTouchableopacity';

function HomeScreen({ navigation, route }) {
  const [recipes, setRecipes] = useState([
    {
      id: '1',
      title: 'Biryani',
      description: 'Special Chicken Biryani',
      imageUrl: require('../tempImages/biryani.png'),
      ingredients: [
        'Chicken: 1 kg (cut into pieces)',
        'Basmati Rice: 1/2 kg (soaked for 30 mins)',
        'Onions: 2 large (thinly sliced)',
        'Tomatoes: 3 medium (chopped)',
        'Yogurt: 1 cup',
        'Ginger Garlic Paste: 2 tbsp',
        'Green Chilies: 4-5 (slit)',
        'Spices: Garam Masala, Salt, Red Chili Powder, Turmeric, Coriander Powder',
        'Mint Leaves: a handful',
        'Coriander Leaves: a handful',
        'Saffron: a pinch (optional)',
        'Ghee or Oil: as required',
      ],
      instructions: [
        '1. Heat oil in a large pot, add sliced onions, and fry until golden brown. Remove half of the fried onions and set them aside for garnishing.',
        '2. Add ginger-garlic paste and sauté for a minute.',
        '3. Add chicken pieces, green chilies, and all the spices. Cook until the chicken is done.',
        '4. Add chopped tomatoes and yogurt. Cook until the oil separates from the masala.',
        '5. In a separate pot, boil the soaked rice until it is 70% cooked. Drain the water.',
        '6. Layer the chicken masala, partially cooked rice, mint, and coriander leaves in the pot. Sprinkle saffron milk (optional) on top.',
        '7. Cover the pot with a tight lid and cook on low heat (dum) for 20-25 minutes.',
        '8. Garnish with fried onions and serve hot.'
      ],
    },
    {
      id: '2',
      title: 'Ras Malai',
      description: 'Special Ras Malai recipe of Gujrat',
      imageUrl: require('../tempImages/RasMalai.jpg'),
      ingredients: [
        'Milk: 1 liter',
        'Sugar: 1 cup',
        'Cardamom: 4-5 pods',
        'Saffron: a few strands',
        'Pistachios: 10-12 (sliced)',
        'Chhena (Paneer): 250 gms (crumbled)',
        'Cornflour: 1 tbsp',
        'Rose Water: 1 tsp'
      ],
      instructions: [
        '1. Heat milk in a large pan, add cardamom, and let it boil.',
        '2. Add saffron strands and reduce the milk to half its quantity.',
        '3. In a bowl, knead the chhena with cornflour until smooth.',
        '4. Make small flat balls from the chhena dough and gently drop them into the boiling milk.',
        '5. Cook on low heat until the ras malai balls double in size.',
        '6. Add sugar and rose water to the milk and let it simmer for 5 more minutes.',
        '7. Garnish with sliced pistachios and chill in the refrigerator before serving.'
      ]
    },
    {
      id: '3',
      title: 'Pizza',
      description: 'Special Pizza recipe cooked at home',
      imageUrl: require('../tempImages/Pizza.jpg'),
      ingredients: [
        'Pizza Dough: 1 base (homemade or store-bought)',
        'Tomato Sauce: 1/2 cup',
        'Mozzarella Cheese: 200 gms (grated)',
        'Pepperoni: 50 gms (sliced)',
        'Bell Peppers: 1/2 cup (sliced)',
        'Olives: 1/4 cup (sliced)',
        'Oregano: 1 tsp',
        'Basil: 1 tsp (optional)',
        'Olive Oil: 1 tbsp'
      ],
      instructions: [
        '1. Preheat your oven to 220°C (425°F).',
        '2. Roll out the pizza dough to your desired thickness and place it on a baking sheet.',
        '3. Spread a thin layer of tomato sauce on the base, leaving a small border around the edges.',
        '4. Sprinkle half of the grated mozzarella cheese over the sauce.',
        '5. Add pepperoni slices, bell peppers, olives, and other desired toppings.',
        '6. Top with the remaining mozzarella cheese and drizzle olive oil on top.',
        '7. Bake in the preheated oven for 12-15 minutes until the cheese is melted and the crust is golden.',
        '8. Sprinkle with oregano and basil before serving.'
      ]
    },
    {
      id: '4',
      title: 'Shahi Tukray',
      description: 'Special Shahi Tukray recipe of Gujrat',
      imageUrl: require('../tempImages/ShahiTukray.jpg'),
      ingredients: [
        'Bread Slices: 4 (cut into triangles)',
        'Milk: 1 liter',
        'Sugar: 1/2 cup',
        'Cardamom: 3-4 pods',
        'Saffron: a few strands (optional)',
        'Ghee: for frying',
        'Almonds: 10-12 (sliced)',
        'Pistachios: 10-12 (sliced)',
        'Silver Leaf: for garnishing (optional)'
      ],
      instructions: [
        '1. Heat ghee in a pan and fry the bread slices until they are golden and crispy. Drain and set aside.',
        '2. In a separate pan, boil the milk with cardamom and saffron until it reduces by half.',
        '3. Add sugar to the milk and stir until it dissolves completely.',
        '4. Arrange the fried bread slices in a serving dish and pour the thickened milk over them.',
        '5. Garnish with sliced almonds, pistachios, and silver leaf (optional).',
        '6. Let the Shahi Tukray soak in the milk for at least 1 hour before serving.'
      ]
    },
    {
      id: '5',
      title: 'Peshawri Mutton Karahi',
      description: 'Special Peshawri Mutton Karahi',
      imageUrl: require('../tempImages/PeshawriMutton.webp'),
      ingredients: [
        'Mutton: 1 kg (cut into pieces)',
        'Tomatoes: 1/2 kg (pureed)',
        'Green Chilies: 6-7 (sliced)',
        'Ginger: 2 tbsp (julienned)',
        'Garlic: 2 tbsp (chopped)',
        'Yogurt: 1/2 cup',
        'Ghee: 1/2 cup',
        'Spices: Garam Masala, Salt, Red Chili Powder, Coriander Powder',
        'Coriander Leaves: for garnishing',
        'Lemon Juice: 2 tbsp'
      ],
      instructions: [
        '1. Heat ghee in a karahi (wok) and sauté the garlic until golden.',
        '2. Add the mutton pieces and fry until they are browned on all sides.',
        '3. Add the pureed tomatoes and green chilies, and cook until the oil separates from the masala.',
        '4. Add the yogurt and all the spices. Stir well and cook on low heat until the mutton is tender.',
        '5. Garnish with coriander leaves, ginger, and lemon juice before serving hot.'
      ]
    },
    {
      id: '6',
      title: 'Salad',
      description: 'Special Home-made Salad',
      imageUrl: require('../tempImages/Salad.jpg'),
      ingredients: [
        'Lettuce: 1 head (chopped)',
        'Cucumber: 1 (sliced)',
        'Tomatoes: 2 (sliced)',
        'Onion: 1 small (sliced)',
        'Carrots: 2 (grated)',
        'Olives: 1/4 cup (sliced)',
        'Feta Cheese: 1/2 cup (crumbled)',
        'Olive Oil: 2 tbsp',
        'Lemon Juice: 1 tbsp',
        'Salt: to taste',
        'Black Pepper: to taste'
      ],
      instructions: [
        '1. In a large bowl, combine the lettuce, cucumber, tomatoes, onion, carrots, and olives.',
        '2. Drizzle olive oil and lemon juice over the salad and toss well.',
        '3. Season with salt and black pepper to taste.',
        '4. Top with crumbled feta cheese before serving.'
      ]
    },
    {
      id: '7',
      title: 'Burger',
      description: 'Special Home-made Burger',
      imageUrl: require('../tempImages/Burger.jpg'),
      ingredients: [
        'Beef Patties: 4 (grilled or fried)',
        'Burger Buns: 4 (toasted)',
        'Lettuce: 4 leaves',
        'Tomato: 1 large (sliced)',
        'Onion: 1 large (sliced)',
        'Cheese Slices: 4',
        'Mayonnaise: 4 tbsp',
        'Ketchup: 4 tbsp',
        'Pickles: 4 slices',
        'Salt and Pepper: to taste'
      ],
      instructions: [
        '1. Grill or fry the beef patties until cooked through and juicy.',
        '2. Toast the burger buns on a griddle or in a toaster.',
        '3. Spread mayonnaise and ketchup on the buns.',
        '4. Layer the lettuce, tomato, onion, pickles, and cheese slices on the bottom bun.',
        '5. Place the beef patty on top and cover with the top bun.',
        '6. Serve the burger hot with fries or a side salad.'
      ]
    },
  ]);

  // Handle the new recipe passed from AddRecipeScreen
  useEffect(() => {
    if (route.params?.newRecipe) {
      setRecipes(prevRecipes => [...prevRecipes, route.params.newRecipe]);
    }
  }, [route.params?.newRecipe]);

  return (
    <>
      <View style={styles.container}>
        <SearchBar />
        <FlatList
          data={recipes}
          renderItem={({ item }) => (
            <RecipeCard
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              onPress={() => navigation.navigate('RecipeDetailScreen', { recipe: item })}  // Pass the recipe data
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <MyTouchableopacity

        title='Add Recipe'
        onPress={() => {
          navigation.navigate('AddRecipeScreen');
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default HomeScreen;
