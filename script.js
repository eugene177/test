let num = 133
let perNum
for (perNum = 2; perNum < num; perNum++) {
  for (let i = 2; i < perNum; i++) {
    if (perNum % i === 0) {
      break
      
    }
    if (i === perNum - 1) {
      console.log(perNum)
    }
  }
}
