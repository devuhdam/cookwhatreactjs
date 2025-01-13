import React, { useState } from 'react';
import axios from 'axios';


function Home() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  /*const baseURL = "https://www.epicurious.com/recipes/food/views/";*/
  const imageUrl="https://cheery-syrniki-27f786.netlify.app/";
  const extension=".jpg";
  // Function to handle the form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setRecipes([]);

    if (!ingredients.trim()) {
      setError('Please enter some ingredients.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/recommend', {
        ingredients,
      });
      setRecipes(response.data);
    } catch (err) {
      setError('Failed to fetch recommendations. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
        <img className="h-36 w-46" src="CookWhatever.jpeg" alt="Logo"></img>
        </div>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-0 text-center text-3xl font-extrabold text-gray-200">
            Recipe Recommendation System
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              
              <input
                id="ingredients"
                name="ingredients"
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-gray-500 placeholder-gray-800 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter ingredients (comma separated)"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Recommendations
            </button>
          </div>
        </form>

        {/* Recipe Results */}
        {recipes.length > 0 && (
          <div>
          <div className="mt-2 space-y-4">
            <h3 className="flex justify-center text-2xl font-semibold text-gray-500">
              Recommended Recipes:
            </h3>
            <ul className="space-y-4">
              {recipes.map((recipe, index) => (
                <li key={index} className="bg-white shadow-lg rounded-lg p-4">
                  <h4 className="flex justify-center text-xl font-bold text-gray-800">{recipe.name}</h4>
                  <div className="flex justify-center" >
                  <img class="rounded-t-lg" src={`${imageUrl}${recipe.url}${extension}`} alt="" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Ingredients:</strong> {recipe.ingredients}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Instructions:</strong> {recipe.instructions}
                  </p>
                  
                </li>
              ))}
            </ul>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home