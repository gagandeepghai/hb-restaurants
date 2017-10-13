import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let menus = [{
        id: 1,
        categories:[ {
          name: 'Appetizers', 
          count: 8
        }, {
          name: 'Main course', 
          count: 15
        }, {
          name: 'Breads', 
          count: 8
        }, {
          name: 'Rice', 
          count: 6
        }, {
          name: 'Sides', 
          count: 7
        }, {
          name: 'Drinks', 
          count: 8
        }],
        specialCategories: ['Banquet', 'Takeout', 'Funfacts'],
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