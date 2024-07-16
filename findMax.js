let findMax = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let max = arr[0];

  for (const i in arr) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

let m = [1,2,55,6,9,8];
let ans = findMax(m);
console.log(ans); // 9990
