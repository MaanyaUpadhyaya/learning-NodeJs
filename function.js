function calcRectArea(width, height) {
    return width * height;
  }
  console.log(`the calculated area is :${calcRectArea(5, 6)}`);

  //conditional functions
  var hoisted = "foo" in this;
console.log(`'foo' name ${hoisted ? "is" : "is not"} hoisted. typeof foo is ${typeof foo}`);
if (false) {
  function foo()
  { return 1; }
}

//using generator
function* powers(n) {
    for (let current = n; ; current *= n) {
      yield current;
    }
  }
  for (const power of powers(2)) {
    if (power > 256) {
      break;
    }
    console.log(`the value of powers are:${power}`);
  }

  //return function
  function counter() {
    for (let count = 1; ; count++) {  
      console.log(`the counter value is :${count + 'A'}`); 
      if (count === 5) {
        return;
      }
      console.log(`the counter value is :${count + 'B'}`);  
    }
    console.log(`the counter value is :${count + 'C'}`);  
  }
  counter();

  //arguements
  function myConcat(separator) {
    const args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
  }
const string1 = myConcat(', ', 'red', 'orange', 'blue');
const string2 = myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');
const string3 = myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
console.log(`the concated stringis:${string1}`);
console.log(`the concated stringis:${string2}`);
console.log(`the concated stringis:${string3}`);

//arrow function
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  console.log(`the materials mapped are:${materials.map(material => material.length)}`);

  
  //default parametres
  function go() {
    return ':P'
  }
  function withDefaults(a, b = 5, c = b, d = go(), e = this,f = arguments, g = this.value) {
    return [a, b, c, d, e, f, g]
  }
  function withoutDefaults(a, b, c, d, e, f, g) {
    switch (arguments.length) {
      case 0:
        a;
      case 1:
        b = 5;
      case 2:
        c = b;
      case 3:
        d = go();
      case 4:
        e = this;
      case 5:
        f = arguments;
      case 6:
        g = this.value;
      default:
    }
    return [a, b, c, d, e, f, g];
  }
  withDefaults.call({value: '10'});
  withoutDefaults.call({value: '11'});

  //getter
  const obj = {
    log: ['example','test'],
    get latest() {
      if (this.log.length === 0) 
      return undefined;
      return this.log[this.log.length - 2];
    }
  }
  console.log(`the output of the gget function us :${obj.latest}`);

  //method definitions
  const obj2 = {
    * g() {
      let index = 0
      while (true) {
        yield index++
      }
    }
  };
  const it = obj2.g();
  for (const item in it){
    console.log(`the method definition valuue is :${item.value}`) ; 
    }
  
  //rest parametres
  function myFun(a,  b, ...manyMoreArgs) {
    console.log("the output for a is :", a)
    console.log("the output for b is:", b)
    console.log("the output for manyMoreArgs is :", manyMoreArgs)
  }
   myFun("one", "two", "three", "four", "five", "six");


   //setter
   const language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  }
  language.current = 'maa';
  console.log(`the output is :${language.log}`); 
  language.current = 'nya';
  console.log(`the output is :${language.log}`); 
  