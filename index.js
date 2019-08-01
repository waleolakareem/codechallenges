//Find the shortest word in the sentence and print it out
function findShort(arr){
  //split the sence
  var sentenceArray = arr.split(" ");
  //set smallest length value to compare with
  var smallest = sentenceArray[0].length
  //loop over the split array
  for (var i= 0; i < sentenceArray.length; i++) {
    //smallest value should be length of shortest word
    if (sentenceArray[i].length < smallest) {
      smallest = sentenceArray[i].length;
    }
  }
   return smallest;
};
//Convert Number to a String
//numberToString(456) ----> `456`
function numberToString(num) {
  //set up an empty string
  var newString = ""
  //add number to string
  newString += num
  return newString;
};

//add all the sum of a number if it is a multiple of 3 and divided by 5
function findSum(n) {
  var finalSum = 0;
  for (var i = 0;i <= n; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      finalSum += i;
    }
  }
  return finalSum;
};

//Jaden case: Capitalize all the first word in a given sentence
function jadenCase(sentence) {
 return sentence.split(" ").map(x => x[0].toUpperCase()+x.slice(1)).join(" ");
};



