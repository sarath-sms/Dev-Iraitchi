import fishImage from '../../assets/temp/fishImage.jpg'
import muttonImage from '../../assets/temp/muttonImage.jpg'

export const fishes = [
    // in backend remove the node|object if available is false
    {
        id: '1',
        name: "Vanjaram | All Fields",
        category: "fish",
        subCategory: 'sea food',
        description: "good for eye, lungs",
        image: fishImage,
        available: true,
        price: [
            {
                type: "Small",
                price: 700,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            },
            {
                type: "Medium",
                price: 800,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            },
            {
                type: "Large",
                price: 900,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            }
        ],
        cutTypes: [
            {
                type: "Slice",
                price: 25 // mention per kg
            },
            {
                type: "Curry Cut",
                price: 25 // mention per kg
            }
        ]
    },
    {
        id: '2',
        name: "Vanjaram | Unavailable",
        category: "fish",
        subCategory: 'sea food',
        description: "good for eye, lungs",
        image: fishImage,
        available: false,
        price: [
            {
                type: "Small",
                price: 700,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            },
            {
                type: "Medium",
                price: 800,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            },
            {
                type: "Large",
                price: 900,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            }
        ],
        cutTypes: [
            {
                type: "Slice",
                price: 25 // mention per kg
            },
            {
                type: "Curry Cut",
                price: 25 // mention per kg
            }
        ]
    },
    {
        id: '3',
        name: "Seer Fish | only small",
        category: "fish",
        subCategory: 'sea food',
        description: "good for eye, lungs",
        image: fishImage,
        available: true,
        price: [
            {
                type: "Small",
                price: 700,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            }
        ],
        cutTypes: [
            {
                type: "Slice",
                price: 25 // mention per kg
            },
            {
                type: "Curry Cut",
                price: 25 // mention per kg
            }
        ]
    },
    {
        id: '4',
        name: "Vanjaram | S and M",
        category: "fish",
        subCategory: 'sea food',
        description: "good for eye, lungs",
        image: fishImage,
        available: true,
        price: [
            {
                type: "Small",
                price: 700,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            },
            {
                type: "Medium",
                price: 800,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            },
        ],
        cutTypes: [
            {
                type: "Slice",
                price: 25 // mention per kg
            },
            {
                type: "Curry Cut",
                price: 25 // mention per kg
            }
        ]
    },
    {
        id: '5',
        name: "Seer Fish / S and L",
        category: "fish",
        subCategory: 'sea food',
        discription: "good for eye, lungs",
        image: fishImage,
        available: true,
        price: [
            {
                type: "Small",
                price: 700,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            },
            {
                type: "Large",
                price: 900,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            }
        ],
        cutTypes: [
            {
                type: "Slice",
                price: 25 // mention per kg
            }
        ]
    },
    {
        id: '6',
        name: "Seer Fish / Vanjaram",
        category: "fish",
        subCategory: 'sea food',
        discription: "good for eye, lungs",
        image: fishImage,
        available: true,
        price: [
            {
                type: "Small",
                price: 700,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            },
            {
                type: "Medium",
                price: 800,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            },
            {
                type: "Large",
                price: 900,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            }
        ],
        cutTypes: [
            {
                type: "Slice",
                price: 25 // mention per kg
            }
        ]
    },
    {
        id: '7',
        name: "Seer Fish / Vanjaram",
        category: "fish",
        subCategory: 'sea food',
        discription: "good for eye, lungs",
        image: fishImage,
        available: true,
        price: [
            {
                type: "Small",
                price: 700,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            },
            {
                type: "Medium",
                price: 800,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            },
            {
                type: "Large",
                price: 900,
                // grossWeight: "1kg - 1.15kg",
                // netWeight: '0.7kg - 0.8kg',
                available: true,
            }
        ],
        cutTypes: [
            {
                type: "Slice",
                price: 25 // mention per kg
            }
        ]
    },
]

export const meat = [
    {
        id: 'm1',
        name: 'Goat | Mutton',
        category: 'meat',
        subCategory: 'black goat',
        description: '',
        image: muttonImage,
        available: true,
        netWeight: '1kg',
        price: 920,
    }
]