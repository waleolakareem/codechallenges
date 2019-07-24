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
      smallest = sentenceArray[i].length
    }
  }
   return smallest;
}
//Convert Number to a String
//numberToString(456) ----> `456`

function numberToString(num) {
  // Return a string of the number here!
}
