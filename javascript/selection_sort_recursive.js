function selectionSortRecursive(arr) {
  if (arr.length <= 1) {
    return arr
  } 
  let min = Math.min(...arr)
  let index = arr.indexOf(min)
  arr.splice(index, 1)
  const res = selectionSortRecursive(arr)
  res.unshift(min)
  return res
  //my original solution was
  // return [min, ...selectionSortRecursive(arr)]
  //but i think this may be slow because of the extra spread operator on arr?
}
function selectionSort(arr) {
  const sorted = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);
  }

  return sorted;
}
let a = performance.now()

selectionSortRecursive([15,32,34,5,35425,5412432134,-2132131,154351345,124321042342,-213123,123412341234,-3141234,412341234,1234123,-12342341,3,-6,13,4,-3,-7,39,-34324,-10,32,4,8,9,12312312,123123123,123123141234234,1234123412341234,123412341234,12342341234235134635647,675467456435,5643567454356,456434535,53456346346,21341234234,-13412342314,-1342344413241243,342134])   // <---- measured code goes between startTime and endTime
    
let ae = performance.now()
console.log(`Call to 1 took ${ae - a} milliseconds`)
let startTime = performance.now()

selectionSort([15,32,34,5,35425,5412432134,-2132131,154351345,124321042342,-213123,123412341234,-3141234,412341234,1234123,-12342341,3,-6,13,4,-3,-7,39,-34324,-10,32,4,8,9,12312312,123123123,123123141234234,1234123412341234,123412341234,12342341234235134635647,675467456435,5643567454356,456434535,53456346346,21341234234,-13412342314,-1342344413241243,342134])  // <---- measured code goes between startTime and endTime
    
let endTime = performance.now()

console.log(`Call to 2 took ${endTime - startTime} milliseconds`)

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
