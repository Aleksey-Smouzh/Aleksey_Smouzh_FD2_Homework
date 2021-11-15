function findVowels(str) {
  let count = 0;
  const vowels = ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё"];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
}

console.log(findVowels("ПодтвердитЕ повторнуЮ Отправку форМ"));


//  var str = 'привет мир!';
//  var count = 0;
//  var pos = str.indexOf('и');
//  while (pos !== -1) {
//    count++;
//    pos1 = str.indexOf('и', pos + 1);
//  }

// console.log(count); 

var anyString = 'Акапулько';

console.log( anyString.charAt(0));

console.log( anyString.charAt(2));

console.log( anyString.charAt(4));

console.log( anyString.charAt(8));


function vowelCount(str){
    let splitString=str.split('');
    let obj={};
    let vowels="ауоиэыяеё";
    splitString.forEach((letter)=>{
      if(vowels.indexOf(letter.toLowerCase())!==-1){
        if(letter in obj){
          obj[letter]++;
        }else{
          obj[letter]=1;
        }
      }   
  
   });
   return obj;    
  }
  console.log(vowelCount('ПодтвердитЕ повторнуЮ Отправку форМ '))
  