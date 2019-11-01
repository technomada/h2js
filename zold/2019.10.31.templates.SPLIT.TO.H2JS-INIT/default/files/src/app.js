//
// app.js
//

import ElementClass from 'h2js-element'

class App extends ElementClass {
	constructor(){
		let name = 'app' // <-- change
		let ns = name+'-class'
		let root = '.'+ns
		let C = `
			<style>
				${root} {}
			</style>
			<div class='${name}'>Hello!</div>
			`

		super(name,C)
	}
}

export default App
