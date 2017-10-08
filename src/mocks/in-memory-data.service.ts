import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      let menus = [
      {
        id: 1,
        menuObject: {
          "Appetizers" :  [{
                id: 1,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken 65 is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            }, {
                id: 2,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken 65 is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 3,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken 65 is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 4,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken 65 is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 5,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken 65 is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 6,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken 65 is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            }
          ],
          "Vegeterian" :  [{
                id: 7,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Paneer Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            }, {
                id: 8,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Paneer Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 9,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Paneer Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 10,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Paneer Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 11,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Paneer Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 12,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Paneer Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            }
          ],
          "Non-Vegeterian" :  [{
                id: 13,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            }, {
                id: 14,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 15,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 16,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 17,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 18,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Chicken Tikka Masala is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            }
          ],
          "Breads/Rice" :  [{
                id: 19,
                name: "Butter Naan",
                price: 7.99,
                spicelevel: 3,
                description: "Butter Naan is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            }, {
                id: 20,
                name: "Butter Naan",
                price: 7.99,
                spicelevel: 3,
                description: "Butter Naan is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 21,
                name: "Butter Naan",
                price: 7.99,
                spicelevel: 3,
                description: "Butter Naan is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 22,
                name: "Butter Naan",
                price: 7.99,
                spicelevel: 3,
                description: "Butter Naan is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 23,
                name: "Butter Naan",
                price: 7.99,
                spicelevel: 3,
                description: "Butter Naan is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 24,
                name: "Butter Naan",
                price: 7.99,
                spicelevel: 3,
                description: "Butter Naan is a spicy, deep-fried chicken dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            }
          ],
          "Deserts" :  [{
                id: 25,
                name: "Malai Kulfi",
                price: 7.99,
                spicelevel: 3,
                description: "Malai Kulfi is a sweet dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            }, {
                id: 26,
                name: "Malai Kulfi",
                price: 7.99,
                spicelevel: 3,
                description: "Malai Kulfi is a sweet dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 27,
                name: "Malai Kulfi",
                price: 7.99,
                spicelevel: 3,
                description: "Malai Kulfi is a sweet dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 28,
                name: "Malai Kulfi",
                price: 7.99,
                spicelevel: 3,
                description: "Malai Kulfi is a sweet dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 29,
                name: "Malai Kulfi",
                price: 7.99,
                spicelevel: 3,
                description: "Malai Kulfi is a sweet dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            },{
                id: 30,
                name: "Malai Kulfi",
                price: 7.99,
                spicelevel: 3,
                description: "Malai Kulfi is a sweet dish originating from Chennai, India, as an entrée, or quick snack. The flavor of the dish can be attributed to red chillies but the exact set of ingredients for the recipe can vary.",
                hasNuts: false
            }
          ]
        }
      }
    ];

    return {menus};

  }
};