function sum(...iteam){
    
//     let sumtotal=0;
//    // sumtotal=a+b;
//     for(let i=0;i<arguments.length;i++){
//         sumtotal+=arguments[i];
//     }
//     console.log(sumtotal);
     return iteam.reduce((a,b)=>a+b);

}
console.log(sum([1,2,3,4,5]));
console.log(sum(1,2,3,4,5));