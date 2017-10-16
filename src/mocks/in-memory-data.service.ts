import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let menus = [{
        id: 1,
        categories:[ {
          name: 'Appetizers', 
          count: 8,
          minPrice: 10,
          maxPrice: 16,
          desc: 'Dish before main course meal.'
        }, {
          name: 'Main course', 
          count: 15,
          minPrice: 10,
          maxPrice: 16,
          desc: 'Main meal dishes.'
        }, {
          name: 'Breads', 
          count: 8,
          minPrice: 10,
          maxPrice: 16,
          desc: 'Tandoori flaky breads.'
        }, {
          name: 'Rice', 
          count: 6,
          minPrice: 10,
          maxPrice: 16,
          desc: 'Exotic Rice dishes.'
        }, {
          name: 'Sides', 
          count: 7,
          minPrice: 10,
          maxPrice: 16,
          desc: 'Side order or Side item.'
        }, {
          name: 'Drinks', 
          count: 8,
          minPrice: 10,
          maxPrice: 16,
          desc: 'Alcohlic and non alcohlic drinks.'
        }],
        specialCategories: [ 
            {
                name: 'Banquet',
                desc: '3 course meal feast',
                restriction: 'Minimum 3 people'
            },{
                name: 'Take Away',
                desc: 'To go menu.',
                restriction: 'Not valid for delivery'
            },{
                name: 'Food Facts',
                desc: 'Interesting facts about our food.'
            }
        ],
        items: [{
                id: 1,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",hasNuts: false
            }, {
                id: 2,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 3,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 4,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 5,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 6,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },
            {
                id: 7,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            }, {
                id: 8,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 9,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 10,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 11,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 12,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },
            {
                id: 13,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            }, {
                id: 14,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 15,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 16,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 17,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 18,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            }
          ]
    }];

    return {menus};

  }
};