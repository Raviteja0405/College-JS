let emps = [
  {
    eno: 100,
    name: "ravi",
    basic: 100000,
    skills: ["js", "node"],
    city: "hyd",
  },
  {
    eno: 200,
    name: "bhanu",
    basic: 20000,
    skills: ["java", "html"],
    city: "chen",
  },
  {
    eno: 300,
    name: "vikas",
    basic: 15000,
    skills: ["next", "css"],
    city: "hyd",
  },
  {
    eno: 400,
    name: "manasa",
    basic: 25000,
    skills: ["react", "css"],
    city: "chen",
  },
];

//get emps of hyd
let hydEmployees = emps.filter((element) => element.city === "hyd");
// console.log(hydEmployees);
//doubt: what to do to get only names of the hydEmployees? chota doubt

//find emp with higest basic
let highestBasic = emps.reduce((x, y) => (x.basic > y.basic ? x : y));
// console.log("the higest basic are: ", highestBasic);

//give hike 2000 for the emps of hyd and 5000 for emps of chennai
let res2 = emps.map((element) => {
  if (element.city === "hyd") {
    element.basic += 2000;
    return element;
  } else if (element.city === "chen") {
    element.basic += 5000;
    return element;
  } else {
    return element;
  }
});
console.log(res2);
