import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug:'manti',
        title:'Turkish Manti',
        description:'Manti is an extraordinary dish from Turkey: tiny lamb-stuffed dumplings topped with three sauces: caramelized tomato sauce, brown butter sauce, and garlicky yogurt sauce.',
        ingredients:[
        '2 cups all-purpose flour, plus more for dusting',
        '½ teaspoon salt',
        '2 large eggs',
        '½ teaspoon water, or as needed',
        '2 onions, peeled',
        '½ pound ground beef',
        'salt and pepper to taste',
        '3 tablespoons vegetable oil',
        '1 tablespoon red pepper flakes',
        '1 (8 ounce) container plain yogurt',
        '1 tablespoon minced garlic'
        ],
        method: [
          'Make dough: Combine flour and salt in a large bowl. Add eggs and water, mixing well with your hands. Add more water, if needed, to form a soft dough. Cover and set aside for at least 30 minutes.',
          'Make filling: Shred onions and place them in a colander or sieve set over a bowl; drain and discard juice. Combine drained onion, ground beef, salt, and pepper in a medium bowl; mix well with a spoon until mashed. Set filling aside.',
          'Lightly flour a work surface and a large plate.',
          'Divide dough in half. Working with one piece at a time, roll dough on the floured surface into a rectangle as thin as possible. Cut into 2-inch squares using a knife or pastry wheel.',
          'Place about 2 teaspoons filling in the center of each square. Gather the edges of dough and pinch them together at the top to form a bundle. Transfer manti to the prepared plate; sprinkle more flour on top to prevent sticking.',
          'Make oil: Heat oil and red pepper flakes in a small skillet over low heat just until pepper flakes begin to color oil. Remove from heat and keep warm.',
          'Make sauce: Stir together yogurt and garlic in a small bowl; set aside. ',
          'Bring a large pot of salted water to a boil over medium-high heat. Cook manti in boiling water until filling is no longer pink and dough is tender, 20 to 25 minutes. Drain well.',
          'Divide manti onto 4 plates. Spoon yogurt sauce over manti and drizzle with pepper oil.'        

        ]
        


      },
      {
        slug:'leaf wrapping',
        title:'Turkish leaf wrapping',
        description:'"Sarma" means wrapped. So, meat dolma in grape leaves are technically also sarma, because they are wrapped in leaves. A cabbage roll would work the same way. ',
        ingredients:[
        '1 package of vine leaves (see notes)',
        ' 3/4 cups white rice',
        '2 tablespoons tomato paste, divided',
        '1 tablespoon pepper paste or additional tablespoon of tomato paste (see notes)',
        '1 lemon, sliced',
        'Fresh parsley',
        'Paprika powder',
        'Dried mint',
        'Pepper and salt',
        '1 vegetable stock cube',
        ],
        method: [
          'Rinse the rice well.',
          'Heat some olive oil in a pan. Add the rice and fry shortly. Add the tomato and pepper paste and stir everything together well. Fry for about a minute.',
          'Add parsley, paprika powder, mint, pepper, and salt. Use a bit more than you would usually do because in the boiling process, part of the flavor will evaporate. Stir well and take the pan off the heat. You are going to fill the vine leaves with uncooked rice. The rice will be cooked later with the vine leaves. Leave the mixture to cool down.',
          'In the meantime, take the vine leaves from the package and carefully take them apart. Rinse them one by one.',
          'Put all the leaves in a pan with boiled water (not on the stove) and leave them for five minutes. Drain.',
          'Take a large pan and put some olive oil on the bottom. Put a few broken vine leaves on the bottom of the pan. This will stop the yaprak sarma from sticking to the pan.',
          'Now you can start rolling the vine leaves. Use a cutting board to put the vine leaves on. On one side of the board, put the pan with the rice mixture and put a plate with vine leaves and on the other side to put the yaprak sarma in.',
          'Take a vine leave and put it on the cutting board with the veins up. Cut or break the stem off carefully. Put a little bit of the rice mixture onto the bottom of the leaf. Make sure you leave some space between the rice and the end of the leaf. Take the two lowest ends of the leaf and fold them over the rice. Do the same for the left and the right end of the leaf. Then roll up the leaf tightly from the bottom to the top. The first ones will be a bit difficult, but after a few you will know how to do it.',
          'Put the sarma into the pan and repeat the same steps for the other vine leaves. Make sure that you put the yaprak sarma close to each other in the pan. If they are too loose, the rolls can open while cooking. If the bottom of the pan has been filled, you can put the next sarma on top of the others.',
          'When you have finished all the sarmas, cut a lemon into slices. Put the slices on top of the sarmas and put a plate, turned upside-down on top of that. This will prevent the sarmas from opening while boiling.',
          'Mix boiling water with a tablespoon of tomato paste and a stock cube. Pour the water into the pan until the plate is just under water. Put the pan on the stove and bring to boil.',
          'Leave the sarmas to simmer for 45 minutes on low heat. It is important that you use a pan that is big enough because the sarmas will get bigger while boiling. The rice increases in volume when it is cooked.',
          'Turn off the heat after 45 minutes and leave the sarmas in the pan with a lid on (without draining the water) for at least 30 more minutes.'
        ],
        


      }
    ]
  },
  mutations: {
    ADD_RECIPE (state,recipe) {
      state.recipes.push(recipe)
    }
  }
  
})
