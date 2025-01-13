import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 mt-36 text-gray-800 min-h-screen">
      

      {/* About Section */}
      <section className="container mx-auto my-12 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600">About CookWhatever</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover recipes tailored to your preferences and dietary needs with CookWhatever, the ultimate tool for food enthusiasts!
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Purpose Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Our Purpose</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              CookWhatever is designed to simplify your cooking experience by helping you find recipes that match your taste, available ingredients, and dietary restrictions. 
              Whether you're a home cook, a fitness enthusiast, or simply curious about new cuisines, our platform has something for everyone.
            </p>
          </div>

          {/* How It Works Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">How It Works</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Using advanced algorithms, CookWhatever takes the ingredients you have, your preferred cuisine type, and any dietary preferences into account to suggest recipes tailored to you.
              Our system combines user data with recipe databases to ensure accurate and diverse recommendations every time.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Key Features</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-4 border rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-600">Ingredient-Based Suggestions</h3>
              <p className="mt-2 text-gray-600">
                Input the ingredients you have at home, and our system will suggest recipes you can make right now.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-4 border rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-600">Cuisine Preferences</h3>
              <p className="mt-2 text-gray-600">
                Explore recipes from different cuisines like Italian, Indian, Chinese, and more based on your preferences.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-4 border rounded-lg shadow">
              <h3 className="text-lg font-semibold text-green-600">Health-Conscious Filters</h3>
              <p className="mt-2 text-gray-600">
                Find recipes that align with your dietary needs, such as vegan, gluten-free, or low-carb options.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Our Vision</h2>
          <p className="mt-4 text-center text-gray-600 leading-relaxed">
            At CookWhatever, we aim to make cooking easy, enjoyable, and accessible to everyone. 
            By bridging technology with culinary art, we strive to help people create memorable dining experiences every day.
          </p>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default About;
