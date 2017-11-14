import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let reviews = [{
        id: 1,
        reviews: [{
            user: 'USER1',
            stars: 4,
            review: 'This place is amazing. I loved the staff, they really cared about the service and food. The food was amazing.'
        },{
            user: 'USER2',
            stars: 4,
            review: 'This place is amazing. I loved the staff, they really cared about the service and food. The food was amazing.'
        },{
            user: 'USER3',
            stars: 4,
            review: 'This place is amazing. I loved the staff, they really cared about the service and food. The food was amazing.'
        },{
            user: 'USER4',
            stars: 4,
            review: 'This place is amazing. I loved the staff, they really cared about the service and food. The food was amazing.'
        }]
    }];
    let takeaway = [{
            id: 1,
                ta: [ {
                category: "Appetizers",
                    items: [{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        }
                    ]
                },
                {
                category: "Main Course",
                    items: [{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        }
                    ]
                },
                {
                category: "Breads",
                    items: [{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        }
                    ]
                },
                {
                category: "Rice",
                    items: [{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        }
                    ]
                },
                {
                category: "Sides",
                    items: [{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        }
                    ]
                },
                {
                category: "Drinks",
                    items: [{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        },{
                            name: "Chicken 65",
                            price: 7.99
                        }
                    ]
                }
            ]
    }];
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
        }],
        specialCategories: [ 
            {
                name: 'Drinks Menu',
                desc: 'Our wide range of drinks.'
            }, {
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
        drinks: {
            categories: [ {
                name: "Sparkling Wines",
                type: "w",
                items: [ {
                        name: "Henkell Trocken Piccolo",
                        bottlePrice: 10,
                        description: 'A pleasant fruit, rich & lively full-bodied',
                        origin: 'Germany'
                    },{
                        name: "Veuve Ambal Vin Mousseux Rose",
                        bottlePrice: 38,
                        description: 'Fresh red berry fruits with touch of sweet spice',
                        origin: 'France'
                    },{
                        name: "Bay of Fires Curvee",
                        bottlePrice: 60,
                        description: 'Layers of oysters, truffle & cherry with sea brine and yogurt characters',
                        origin: 'Tas'
                    }
                ]
            },{
                name: "White Wines",
                type: "w",
                items: [ {
                        name: "Rosemount Estate Moscato",
                        bottlePrice: 34,
                        glassPrice: 7,
                        description: 'Sweet & luscious palate with crisp lemon & lime flavours',
                        origin: 'SA'
                    },{
                        name: "Coolwoods Chardonnay",
                        bottlePrice: 35,
                        glassPrice: 7.5,
                        description: 'Dominant peach aromas with hint of pineapple characters',
                        origin: 'SA'
                    },{
                        name: "Fat Bastard Chardonnay",
                        bottlePrice: 38,
                        description: 'Soft, appealing stone fruit along with touch of hazelnut & lemon blossom',
                        origin: 'USA'
                    },{
                        name: "Black Cottage Chardonnay",
                        bottlePrice: 40,
                        description: 'Juicy peach, lemon & white flower aromas with toasty mineral notes',
                        origin: 'NZ'
                    },{
                        name: "Kendall Jackson Pinot Gris",
                        bottlePrice: 55,
                        description: 'Contains ripe, crisp citrus flavours with aromas of mango, melon & pear',
                        origin: 'USA'
                    },{
                        name: "Black Cottage Sauvignon Blanc",
                        bottlePrice: 38,
                        glassPrice: 8,
                        description: 'Packed full of grapefruits, pith honey dew with touch of crushed herbs',
                        origin: 'NZ'
                    },{
                        name: "Ninth Island Sauvignon blanc",
                        bottlePrice: 40,
                        description: 'Tones of fresh passion fruit with a hint of sweet grassy aromas of dill',
                        origin: 'TAS'
                    },{
                        name: "Domaine Christian Salmon Sancerre",
                        bottlePrice: 60,
                        description: 'Balanced palate of ripe citrus fruits, quartz & minerals',
                        origin: 'France'
                    },{
                        name: "Aquilani Pinot Grigio",
                        bottlePrice: 38,
                        glassPrice: 8,
                        description: 'Intense notes of acacia flowers with crisp & refreshing finish',
                        origin: 'Italy'
                    },{
                        name: "Pipers Brooks Gewurztraminer",
                        bottlePrice: 50,
                        description: 'Aromatic rose petals & musk stick aromas with lychee',
                        origin: 'TAS'
                    },{
                        name: "Reichsgraf Von Kesselstatt Riesling",
                        bottlePrice: 45,
                        description: 'Refreshing with components of green & red apples overlaid by citrus notes',
                        origin: 'Germany'
                    }
                ]
            },{
                name: "Red Wines",
                type: "w",
                items: [ {
                        name: "Matua Merlot",
                        bottlePrice: 38,
                        glassPrice: 8,
                        description: 'Filled with black & red fruit flavours with oak characters',
                        origin: 'NZ'
                    },{
                        name: "Robert Stein Merlot",
                        bottlePrice: 42,
                        description: 'Forest fruits, plum & dark chocolate characters',
                        origin: 'NSW'
                    },{
                        name: "Azahara Shiraz",
                        bottlePrice: 35,
                        glassPrice: 7.5,
                        description: 'Ripe plum & cherry with hint of spicy french oak',
                        origin: 'VIC'
                    },{
                        name: "Courabyra Shiraz",
                        bottlePrice: 42,
                        description: 'Flavours of whole bunch spice, red licorice & white pepper',
                        origin: 'NSW'
                    },{
                        name: "Lavau Cotes de Rhone Village Blend",
                        bottlePrice: 50,
                        description: 'Notes of berry fruits with spicy hints of smokiness & roasted meat',
                        origin: 'France'
                    },{
                        name: "Black Cottage Pinot Noir",
                        bottlePrice: 40,
                        description: 'Aromas of cherry cola, violets, star anise & pink peppercorns',
                        origin: 'NZ'
                    },{
                        name: "Fat Bastard Pinot Noir",
                        bottlePrice: 38,
                        glassPrice: 8,
                        description: 'Rose petals & violets coupled with earthy red fruits of cherry & strawberry',
                        origin: 'France'
                    },{
                        name: "Yal Yal Pinot Noir",
                        bottlePrice: 48,
                        description: 'Aromatic, bright & complex raspberry, strawberry & red cherries flavours',
                        origin: 'VIC'
                    },{
                        name: "Coolwoods Cab-Sauv",
                        bottlePrice: 38,
                        glassPrice: 8,
                        description: 'Raspberry & black currant combine with subtle spice and oak characters',
                        origin: 'SA'
                    },{
                        name: "Dourthe Beau Mayne Cab-Merlot",
                        bottlePrice: 40,
                        description: 'Boasts a bouquet of red fruit aromas',
                        origin: 'France'
                    }
                ]
            },{
                name: "Beers & Ciders",
                items: [ {
                        name: "Kingfisher",
                        glassPrice: 9
                    },{
                        name: "James Boags premium Lager",
                        glassPrice: 9
                    },{
                        name: "Crown Lager",
                        glassPrice: 8
                    },{
                        name: "Pure Blonde",
                        glassPrice: 8
                    },{
                        name: "Corona",
                        glassPrice: 8
                    },{
                        name: "Boags Draught",
                        glassPrice: 8
                    },{
                        name: "James Boags Premium Light",
                        glassPrice: 7.5
                    },{
                        name: "Heineken Light",
                        glassPrice: 7.5
                    },{
                        name: "Pressman’s Apple Cider",
                        glassPrice: 8
                    },{
                        name: "Sydney Brewery Apple Cider",
                        glassPrice: 9
                    },{
                        name: "Willie Smith Organic Apple Cider",
                        glassPrice: 11
                    }
                ]
            },{
                name: "Spirits & Liquor",
                items: [ {
                        name: "Scotch",
                        glassPrice: 8
                    },{
                        name: "Gin",
                        glassPrice: 8
                    },{
                        name: "Bacardi",
                        glassPrice: 8
                    },{
                        name: "Rum",
                        glassPrice: 8
                    },{
                        name: "Vodka",
                        glassPrice: 8
                    },{
                        name: "Whisky",
                        glassPrice: 8
                    },{
                        name: "Bourbon",
                        glassPrice: 8
                    },{
                        name: "Midori",
                        glassPrice: 8
                    },{
                        name: "Baileys",
                        glassPrice: 8
                    },{
                        name: "Kahlua",
                        glassPrice: 8
                    },{
                        name: "Cointreau",
                        glassPrice: 8
                    },{
                        name: "Malibu",
                        glassPrice: 8
                    }
                ]
            },{
                name: "Premium Spirits",
                items: [ {
                        name: "Johnnie Walker Gold Label",
                        glassPrice: 10
                    },{
                        name: "Bombay Sapphire",
                        glassPrice: 10
                    },{
                        name: "Jameson Caskmates Edition",
                        glassPrice: 11
                    },{
                        name: "Armut Single Malt",
                        glassPrice: 12
                    },{
                        name: "Johnnie walker XR 21yrs old",
                        glassPrice: 18
                    }
                ]
            },{
                name: "Non Alcoholic",
                "items": [
                    {
                    "name": "Coke",
                    "glassPrice": 4.0
                    },{
                    "name": "Coke Zero",
                    "glassPrice": 4.0
                    },{
                    "name": "Lemonade",
                    "glassPrice": 4.0
                    },{
                    "name": "LLB",
                    "glassPrice": 4.0
                    },{
                    "name": "Lemon Squash",
                    "glassPrice": 4.0
                    },{
                    "name": "Raspberry",
                    "glassPrice": 4.0
                    },{
                    "name": "Tonic Water",
                    "glassPrice": 4.0
                    },{
                    "name": "Ginger Ale",
                    "glassPrice": 4.0
                    },{
                    "name": "Sparkling Mineral Water",
                    "glassPrice": 4.0
                    },{
                    "name": "Soda Water",
                    "glassPrice": 4.0
                    },{
                    "name": "Orange Juice",
                    "glassPrice": 4.0
                    },{
                    "name": "Apple Juice",
                    "glassPrice": 4.0
                    },{
                    "name": "Pineapple Juice",
                    "glassPrice": 4.0
                    },{
                    "name": "Cranberry Juice",
                    "glassPrice": 4.0
                    }, {
                    "name": "Mango Lassi",
                    "glassPrice": 5.0
                    }
                ]
            }
          ]
        },
        items: [{
                id: 1,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 1,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",hasNuts: false
            }, {
                id: 2,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 2,
                badges: ['GF', 'V'],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 3,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                badges: ['GF', 'V'],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 4,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 4,
                badges: ['GF'],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 5,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                badges: ['V'],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 6,
                name: "Chicken 65",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },
            {
                id: 7,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            }, {
                id: 8,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 9,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 10,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 11,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 12,
                name: "Paneer Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },
            {
                id: 13,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            }, {
                id: 14,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 15,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 16,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 17,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            },{
                id: 18,
                name: "Chicken Tikka Masala",
                price: 7.99,
                spicelevel: 3,
                badges: [],
                description: "Tender boneless fish pieces peppered with carom seeds marinated in ginger & garlic and roasted in the tandoor",
                hasNuts: false
            }
          ]
    }];

    return {menus, reviews, takeaway};

  }
};