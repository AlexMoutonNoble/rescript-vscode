module A = {
  let makeX = () => (1, 2)

  let (xxx, yyy) = makeX()

  type t = {name:string, age:int}
  
  let makeT = () => {name:"", age:0}

  let {name, age} = makeT()

  let (a | a, b) = makeX()

}

let y = A.xxx
//        ^def

let z = A.yyy

let n = A.name
//         ^def

let n = A.a
//        ^def
