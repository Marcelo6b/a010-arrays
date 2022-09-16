let arrayprimeiro = [20, 30, 40]
let arraysegundo = ["maria", "josé", "joão"]
let arrayterceiro = [15, 15 > 10, "Paris"]

let copiaarrayprimeiro = arrayprimeiro.slice()
let copiaarraysegundo = arraysegundo.slice()
let copiaarrayterceiro = arrayterceiro.slice()

arrayprimeiro.push(0)
arraysegundo.pop()
arrayterceiro.splice(1,1)

console.log(arrayprimeiro)
console.log(copiaarrayprimeiro)
console.log(arraysegundo)
console.log(copiaarraysegundo)
console.log(arrayterceiro)
console.log(copiaarrayterceiro)