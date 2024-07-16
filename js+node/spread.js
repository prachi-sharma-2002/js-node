const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]




const obj = { a: 1, b: 2 };
const arr = [3, 4, 5];
const combine = (obj, arr) => {
  const { a, b } = obj;
  const [x, y, z] = arr;
  
  return {
    a,
    b,
    x,
    y,
    z
  };
};

const result = combine(obj, arr);
console.log(result); // { a: 1, b: 2, x: 3, y: 4, z: 5 }
