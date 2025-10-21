import chalk from "chalk";
import pokemon from 'pokemon'

console.log(chalk.green('Hello!')) 

let pk = pokemon.random()

console.log(chalk.blue(pk) + ' ' + chalk.green(pokemon.getId(pk)))

import fs from 'fs'

const data = fs.readFileSync('data.txt', 'utf-8' )

const secret = 'bananas are for monkeys'

const index = data.indexOf(secret)

if(index !== -1){
    console.log(`Phrase found at index: ${index}`)

} else{
    console.log('Phrase not found')
} 

console.log(data.length - data.replace(/\s+/g, '').length)

const ionWords = data.trim().match(/\b\w*ion+\b/g)

console.log(`Words ending with 'ion' : ${ionWords}`)

const reWords = data.trim().match(/\bre\w*\b/g)

console.log(`Words starting with 're' : ${reWords}`)