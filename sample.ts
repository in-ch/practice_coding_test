function 솔루션() {
  let a = { name: "kim" };
  let b = a;

  a.name = "lee";

  console.log(a);
  console.log(a === b);
}

솔루션();
