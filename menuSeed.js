const mongoose = require('mongoose');
const MenuItem = require('./models/icecreams')

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/martinsmalts', {});
}

main().then(() => {
    console.log("Connection Open!!");
}).catch( err => {
    console.log("Whoops...");
    console.log(err);
});

const seedMenu = [
    {
        itemName: 'Vanilla',
        category: 'icecream',
        price: 50
    },
    {
        itemName: 'Chocolate',
        category: 'icecream',
        price: 50
    },
]

const items = MenuItem.insertMany(seedMenu)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log('Fudge!');
    console.log(err);
})


