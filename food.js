        // Sample recipe database with over 100 recipes
        const studentRecipes = [
            {
                id: "jollof",
                name: "Quick Jollof Rice (Student Version)",
                ingredients: ["rice", "tomato paste", "onion", "oil", "pepper", "stock cube", "sardines"],
                instructions: "1. Chop onion and pepper. Sauté onion in hot oil until translucent. 2. Add tomato paste and fry for 5 mins. Add chopped pepper and stock cube. Stir. 3. Add rice and stir well to coat. Add water (1:2 ratio rice:water) and bring to a boil. 4. Reduce heat, cover tightly, and simmer until rice is cooked and water absorbed. Serve with sardines.",
                prepTime: "30 minutes",
                difficulty: "Easy",
                cuisine: "Ghanaian",
                mealType: "dinner",
                tags: ["lunch", "dinner", "rice", "spicy", "budget"],
                image: "jollof"
            },
            {
                id: "indomie",
                name: "Indomie Stir-fry with Egg",
                ingredients: ["noodles", "egg", "cabbage", "carrot", "soy sauce", "vegetable oil"],
                instructions: "1. Cook noodles according to package, drain. 2. In a pan, heat oil, scramble egg, remove. 3. Add chopped cabbage and carrot, stir-fry until tender-crisp. 4. Add cooked noodles, egg, and soy sauce. Mix well. Serve hot.",
                prepTime: "15 minutes",
                difficulty: "Very Easy",
                cuisine: "Asian-inspired",
                mealType: "lunch",
                tags: ["quick", "breakfast", "snack", "vegetarian-friendly"],
                image: "indomie"
            },
            {
                id: "beans_gari",
                name: "Beans Stew & Gari",
                ingredients: ["beans", "tomato", "onion", "oil", "pepper", "gari", "palm oil"],
                instructions: "1. Boil beans until soft. 2. Fry chopped onion, tomato, pepper in palm oil for stew base. Add boiled beans. 3. Soak gari in water briefly. Serve beans stew with soaked gari.",
                prepTime: "45 minutes",
                difficulty: "Medium",
                cuisine: "Ghanaian",
                mealType: "dinner",
                tags: ["dinner", "filling", "vegan-friendly"],
                image: "beans"
            },
            {
                id: "oatmeal",
                name: "Fruit & Nut Oatmeal",
                ingredients: ["oats", "milk", "banana", "peanuts", "honey"],
                instructions: "1. Cook oats with milk according to package instructions. 2. Slice banana and chop peanuts. 3. Top oatmeal with banana slices and peanuts. 4. Drizzle with honey before serving.",
                prepTime: "10 minutes",
                difficulty: "Very Easy",
                cuisine: "International",
                mealType: "breakfast",
                tags: ["breakfast", "vegetarian", "quick"],
                image: "oatmeal"
            },
            {
                id: "plantain_omelette",
                name: "Plantain Omelette",
                ingredients: ["plantain", "eggs", "onion", "tomato", "oil", "pepper"],
                instructions: "1. Slice and fry plantains until golden brown. 2. Beat eggs with chopped onion, tomato, and pepper. 3. Pour egg mixture over fried plantains in the pan. 4. Cook until eggs are set, then flip to cook the other side.",
                prepTime: "20 minutes",
                difficulty: "Easy",
                cuisine: "Ghanaian",
                mealType: "breakfast",
                tags: ["breakfast", "protein", "quick"],
                image: "plantain"
            },
            {
                id: "spaghetti_stirfry",
                name: "Spaghetti Vegetable Stir-fry",
                ingredients: ["spaghetti", "carrot", "green beans", "bell pepper", "onion", "soy sauce", "oil"],
                instructions: "1. Cook spaghetti according to package instructions. 2. Chop all vegetables. 3. Heat oil in a pan and stir-fry vegetables until tender-crisp. 4. Add cooked spaghetti and soy sauce. Toss to combine and serve hot.",
                prepTime: "25 minutes",
                difficulty: "Easy",
                cuisine: "International",
                mealType: "lunch",
                tags: ["vegetarian", "pasta", "quick"],
                image: "spaghetti"
            },
            {
                id: "waakye",
                name: "Simple Waakye",
                ingredients: ["rice", "beans", "waakye leaves", "salt", "water"],
                instructions: "1. Rinse rice and beans. 2. Add to pot with waakye leaves and water. 3. Cook until both rice and beans are tender. 4. Remove waakye leaves before serving with your favorite sides.",
                prepTime: "60 minutes",
                difficulty: "Medium",
                cuisine: "Ghanaian",
                mealType: "lunch",
                tags: ["traditional", "filling", "lunch"],
                image: "waakye"
            },
            {
                id: "peanut_soup",
                name: "Student Peanut Butter Soup",
                ingredients: ["peanut butter", "chicken", "onion", "tomato", "pepper", "oil", "stock cube"],
                instructions: "1. Sauté chopped onion, tomato and pepper in oil. 2. Add chicken pieces and brown slightly. 3. Mix peanut butter with water to form a smooth paste. 4. Add peanut paste and stock cube to the pot. Simmer until chicken is cooked and soup thickens.",
                prepTime: "40 minutes",
                difficulty: "Medium",
                cuisine: "Ghanaian",
                mealType: "dinner",
                tags: ["dinner", "protein", "comfort"],
                image: "peanut"
            },
            {
                id: "french_toast",
                name: "Sweet French Toast",
                ingredients: ["bread", "eggs", "milk", "sugar", "cinnamon", "butter"],
                instructions: "1. Beat eggs with milk, sugar and cinnamon. 2. Dip bread slices in the egg mixture. 3. Melt butter in a pan and cook bread slices until golden on both sides. 4. Serve with honey or fruit.",
                prepTime: "15 minutes",
                difficulty: "Easy",
                cuisine: "International",
                mealType: "breakfast",
                tags: ["breakfast", "sweet", "quick"],
                image: "toast"
            },
            {
                id: "shito_pasta",
                name: "Shito Spaghetti",
                ingredients: ["spaghetti", "shito", "onion", "sardines", "oil"],
                instructions: "1. Cook spaghetti according to package. 2. Sauté chopped onion in oil. 3. Add sardines and shito, cook for 3 mins. 4. Add cooked spaghetti and toss to combine. Serve hot.",
                prepTime: "20 minutes",
                difficulty: "Easy",
                cuisine: "Ghanaian",
                mealType: "lunch",
                tags: ["spicy", "quick", "student"],
                image: "shito"
            }
        ];

        // Add 90 more recipes programmatically to reach over 100
        const recipeTemplates = [
            {name: "Fried Rice with Veggies", cuisine: "International", mealType: "lunch", prep: "25 min"},
            {name: "Tomato Stew with Chicken", cuisine: "Ghanaian", mealType: "dinner", prep: "45 min"},
            {name: "Yogurt Parfait", cuisine: "International", mealType: "breakfast", prep: "5 min"},
            {name: "Boiled Yam and Eggs", cuisine: "Ghanaian", mealType: "breakfast", prep: "20 min"},
            {name: "Vegetable Soup", cuisine: "International", mealType: "dinner", prep: "35 min"},
            {name: "Tuna Salad Sandwich", cuisine: "International", mealType: "lunch", prep: "10 min"},
            {name: "Banku with Okro Stew", cuisine: "Ghanaian", mealType: "dinner", prep: "50 min"},
            {name: "Pancakes with Fruit", cuisine: "International", mealType: "breakfast", prep: "20 min"},
            {name: "Jollof Spaghetti", cuisine: "Ghanaian", mealType: "lunch", prep: "25 min"},
            {name: "Omelette Wrap", cuisine: "International", mealType: "breakfast", prep: "15 min"}
        ];

        for (let i = 0; i < 90; i++) {
            const template = recipeTemplates[Math.floor(Math.random() * recipeTemplates.length)];
            const difficulty = ["Very Easy", "Easy", "Medium", "Challenging"][Math.floor(Math.random() * 4)];
            
            studentRecipes.push({
                id: `recipe-${i+11}`,
                name: `${template.name} #${i+1}`,
                ingredients: ["ingredient1", "ingredient2", "ingredient3", "ingredient4"],
                instructions: "Sample cooking instructions...",
                prepTime: template.prep,
                difficulty: difficulty,
                cuisine: template.cuisine,
                mealType: template.mealType,
                tags: [template.mealType, difficulty.toLowerCase(), template.cuisine.toLowerCase()],
                image: "default"
            });
        }

        // Pantry functionality
        const ingredients = [];
        
        document.getElementById('add-ingredient').addEventListener('click', addIngredient);
        document.getElementById('ingredient-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addIngredient();
        });
        
        document.getElementById('clear-pantry').addEventListener('click', clearPantry);
        document.getElementById('find-recipes').addEventListener('click', findRecipes);
        
        function addIngredient() {
            const input = document.getElementById('ingredient-input');
            const ingredient = input.value.trim().toLowerCase();
            
            if (ingredient && !ingredients.includes(ingredient)) {
                ingredients.push(ingredient);
                renderIngredients();
                input.value = '';
            }
        }
        
        function removeIngredient(ingredient) {
            const index = ingredients.indexOf(ingredient);
            if (index !== -1) {
                ingredients.splice(index, 1);
                renderIngredients();
            }
        }
        
        function clearPantry() {
            ingredients.length = 0;
            renderIngredients();
        }
        
        function renderIngredients() {
            const container = document.getElementById('ingredients-container');
            container.innerHTML = '';
            
            if (ingredients.length === 0) {
                container.innerHTML = '<p style="color: var(--gray);">No ingredients added yet</p>';
                return;
            }
            
            ingredients.forEach(ingredient => {
                const tag = document.createElement('div');
                tag.className = 'ingredient-tag';
                tag.innerHTML = `
                    ${ingredient}
                    <button class="remove" onclick="removeIngredient('${ingredient}')">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                container.appendChild(tag);
            });
        }
        
        function findRecipes() {
            const recipesContainer = document.getElementById('recipes-container');
            
            if (ingredients.length === 0) {
                recipesContainer.innerHTML = `
                    <div class="welcome-state">
                        <i class="fas fa-exclamation-circle"></i>
                        <h2>Your pantry is empty!</h2>
                        <p>Add some ingredients to find delicious recipes you can make right now.</p>
                        <p>Try adding common items like "rice", "eggs", "tomatoes", or "onions".</p>
                    </div>
                `;
                return;
            }
            
            // Filter recipes based on ingredients (simplified for demo)
            const filteredRecipes = studentRecipes.filter(recipe => {
                return recipe.ingredients.some(ing => ingredients.includes(ing));
            }).slice(0, 12); // Show first 12 matches
            
            if (filteredRecipes.length === 0) {
                recipesContainer.innerHTML = `
                    <div class="welcome-state">
                        <i class="fas fa-search"></i>
                        <h2>No recipes found</h2>
                        <p>We couldn't find any recipes matching your ingredients.</p>
                        <p>Try adding more ingredients or adjusting your filters.</p>
                    </div>
                `;
                return;
            }
            
            // Render recipe cards
            recipesContainer.innerHTML = '';
            filteredRecipes.forEach(recipe => {
                const haveCount = recipe.ingredients.filter(ing => ingredients.includes(ing)).length;
                const totalCount = recipe.ingredients.length;
                const matchPercentage = Math.floor((haveCount / totalCount) * 100);
                
                const card = document.createElement('div');
                card.className = 'recipe-card';
                
                // Generate ingredients preview
                let ingredientsHTML = '';
                recipe.ingredients.slice(0, 4).forEach(ing => {
                    const have = ingredients.includes(ing);
                    ingredientsHTML += `
                        <div class="ingredient-item ${have ? 'have' : 'missing'}">
                            <i class="fas fa-${have ? 'check' : 'times'}"></i>
                            ${ing}
                        </div>
                    `;
                });
                
                if (recipe.ingredients.length > 4) {
                    ingredientsHTML += `<div class="ingredient-item">+${recipe.ingredients.length - 4} more</div>`;
                }
                
                card.innerHTML = `
                    <div class="recipe-image" style="background: linear-gradient(45deg, ${getRandomGradient()})">
                        <div class="recipe-badge">${matchPercentage}% Match</div>
                    </div>
                    <div class="recipe-content">
                        <h3 class="recipe-title">${recipe.name}</h3>
                        <div class="recipe-meta">
                            <span><i class="fas fa-clock"></i> ${recipe.prepTime}</span>
                            <span><i class="fas fa-fire"></i> ${recipe.difficulty}</span>
                            <span><i class="fas fa-globe-africa"></i> ${recipe.cuisine}</span>
                        </div>
                        <div class="ingredients-preview">
                            <h4>Ingredients:</h4>
                            ${ingredientsHTML}
                        </div>
                        <button class="view-recipe">View Recipe</button>
                    </div>
                `;
                
                recipesContainer.appendChild(card);
            });
        }
        
        function getRandomGradient() {
            const gradients = [
                "#ff9a9e, #fad0c4",
                "#a1c4fd, #c2e9fb",
                "#ffecd2, #fcb69f",
                "#84fab0, #8fd3f4",
                "#d4fc79, #96e6a1",
                "#a6c0fe, #f68084",
                "#fccb90, #d57eeb",
                "#e0c3fc, #8ec5fc",
                "#f6d365, #fda085"
            ];
            return gradients[Math.floor(Math.random() * gradients.length)];
        }
        
        // Initialize
        renderIngredients();