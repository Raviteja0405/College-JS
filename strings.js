let wish = 'good morning to all';//['g','o','o','d',' ',.....]
console.log(wish.length);

console.log(wish.slice(1,5)); //upto 5 i.e last value discarded
//same substring method also same

console.log(wish.replace('o','x'))//first o is repalced with x
console.log(wish.replaceAll('o','x'))//first o is repalced with x
console.log(wish.replaceAll('good','excellent'));
//toUpperCase() and toLowerCase()
console.log(wish+'hi');// or use wish.concat('hi')

console.log(wish.charAt(1)); 

console.log(wish.split(' ').length);// to get no. of words
