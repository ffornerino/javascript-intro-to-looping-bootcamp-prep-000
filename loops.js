var strangeloop = [];
strangeloop.length = 25;

 function forLoop(strangeloop){
  for (var i = 0; i < 25; i++){
    if (i === 0) { 
      strangeloop.push(`I am ${i} strange loops.`);
    } else if (i === 1) { 
       strangeloop.push(`I am 1 strange loop.`);
      } else {
         strangeloop.push(`I am ${i} strange loops.`);
      }
  }  return strangeloop;
}
 

 
 function whileLoop(n){
   while (n > 0){
     console.log(--n);
    //  if (--n === 0){
       //   console.log("done");}
     } return console.log("done");
 }