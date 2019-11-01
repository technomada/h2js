#!/usr/bin/env node
const program = require('commander')
const fs = require('fs-extra')
const path = require('path')
const webpack = require('webpack');
// https://www.npmjs.com/package/commander

//
// h2js -- controler cli
//

program
	.command('build')
	.description('build application')
	.action(function(env,opts){
		console.log("BUILDING...")
		
		const base = path.resolve('.')
		const src = base+'/src'
		const dist = base+'/dist'
		const compiler = webpack({
  			entry: src+'/main.js',
  			output: {
    			filename: 'main.js',
    			//path: path.resolve(__dirname, 'dist')
  			path: dist
			},
			mode:'development' // upg: --dist (for distribution mode)
			});


		compiler.run((err, stats) => { // Stats Object
			if(err){ console.log(err)}
  			//console.log({err,stats})
			});

		fs.copy(src+'/index.html',dist+'/index.html')

		//upg: check from/dest and smart copy
		fs.copy(base+'/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',dist+'/webcomponents-bundle.js')
		})


program.parse(process.argv)
