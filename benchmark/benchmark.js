// Paste your iterative and recursive solutions in this file
// And then calculate their average run times to compare them.


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

console.log(benchmark(selectionSort))




function benchmark(callback) {
  const x = []
  for (let i = 0; i <1000; ++i){
    x.push(Math.floor(Math.random()* (10000) - 10000))
  }
  const startTime = performance.now();

  for (let i = 0; i < 1000; ++i) {
    callback(x);
  }
  const y = performance.now()
  return (y - startTime) ;
}
