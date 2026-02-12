const numbers=[45,56,34,98,19];
// for(let i=0; i< numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }
for(const number of numbers){
    console.log(number);
}

const products=[
   {id:1, name:'xiaomi Phone one night',price: 19000},
   {id:2, name:'iphone',price: 19000},
   {id:3, name:'mac book air',price: 19000},
   {id:4, name:'lenevo yoga laptop 2025',price: 19000},
   {id:5, name:'Dell inspiton laptop',price: 19000},
   {id:6, name:'samsung Phone note 7',price: 19000},
   {id:7, name:'Nokia old age phone gone',price: 19000},
   {id:8, name:'M1 chip not cheap LapTop',price: 19000},
];
// for(const product of products){
//     console.log(product);
// }


function matchProducts (products, search){
    const matched= [];
    for(const product of products){
        //indexof r includes diyea object er property check kore ---->
       if(product.name.toLowerCase().includes(search.toLowerCase())){
         matched.push(product);
       }

    }
    return matched;
}
const result = matchProducts (products, 'laptop');
console.log(result);
