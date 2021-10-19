const peso1 = 1
const peso2 = Number('2.0') // Number com letra maiuscula é uma Function do JS

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //fixando o resultado em duas casas decimais
console.log(media.toString()) 
