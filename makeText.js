/** Command-line tool to generate Markov text. */
const fs = require("fs");
const markov = require('./markov.js')
const axios= require('axios')


let path = process.argv[2]
console.log(path)

async function getWebText(url){
    try{
        const res = await axios.get(url)
        mark = new markov.MarkovMachine(res.data)
        mark.makeChains()
        text = mark.makeText(50)
        console.log(text)
    }
    catch(err){
        console.error(`Cannot read URL: ${url}: ${err}`);
        process.exit(1);
    }
}


function getText(path){
    fs.readFile(path,'utf8',(err,data)=>{
        if(err){
            console.log("ERROR", err)
            process.kill(1)
        }
        mark = new markov.MarkovMachine(data)
        mark.makeChains()
        text = mark.makeText(50)
        console.log(text)
    })
}

if(path.includes('http')){
    getWebText(path)
}
else{
    getText(path)
}
