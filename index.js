const {program} = require('commander');
const fs = require('fs');


program
    .name('reader')
    .description('this counts to number of words and alphabets in a file');

program.command('count')
    .argument('<filepath>','file to count')
    .action((filepath)=>{
        fs.readFile(filepath,'utf8',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                const lines = data.split(' ').length;
                const alpha = data.split('').filter(char => /[a-zA-Z]/.test(char)).length;
                console.log(`number of words: ${lines}`);
                console.log(`number of alphabets: ${alpha}`);
            }
        })
    });
 
    program.parse();
