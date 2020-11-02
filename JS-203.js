let velicina = 9;
let red = '';
for(let i=1; i<velicina; i++){ 

  for(let j=1; j<velicina; j++){ 
    if(i % 2 == 0){
      if(j % 2 ==0){
        red += '#'
      }
      else{
        red += ' '
      }
    }
    else{
      if(j % 2 ==0){
        red += ' '
      }
      else{
        red += '#'
      }
    }
  }
  console.log(red);
  red = '';
}
