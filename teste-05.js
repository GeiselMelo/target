

function reverseString(string) {
   let novaString = '';
    for(let i = string.length -1; i >= 0; i--) {
        
        novaString += string[i];
    }
   return novaString;
}
const exampleString = "Gorila";
const novaString = reverseString(exampleString);

console.log(novaString);


  

