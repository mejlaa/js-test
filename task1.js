const array1 = [
  { id: "333222111", name: "Sulejman", age: "22" },
  { id: "321123432", name: "Stefan", age: "25" },
  { id: "222312543", name: "Semir", age: "32" },
];

function getObject(array, key, value) {
  let obj = array.filter((val) => {
    if (val[key] === value) {
      return true;
    }
    return false;
  });
  return obj;
}
console.log(getObject(array1, "name", "Semir"));
