import readLineSync from 'readline-sync'
import ck from 'chalk'
import { ReadableStreamDefaultController } from 'stream/web';

const valores = []
let input = ""
console.log("")
while(input != "sair")
{
    valores.push(input)
    input = readLineSync.question(ck.blue(""))
    .toLocaleLowerCase()

}
console.log(ck.red.italic(valores.sort().join("\n")))

