#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');
const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');

program.version('1.1.2', '-v, --version')
    .command('init <name>')
    .action((name) => {
        if(!fs.existsSync(name)){
            const spinner = ora('Downloading...');
                spinner.start();
                download('https://github.com/Vibing/react-cli#template', name, {clone: true}, (err) => {
                    if(err){
                        spinner.fail();
                        console.log(symbols.error, chalk.red(err));
                    }else{
                        spinner.succeed();
                        console.log(symbols.success, chalk.green('Success!'));
                    }
                })
        }else{
            // 错误提示项目已存在，避免覆盖原有项目
            console.log(symbols.error, chalk.red('The folder name has already existed'));
        }
    })
program.parse(process.argv);