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
