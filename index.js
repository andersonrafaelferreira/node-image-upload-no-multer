const express = require('express');

const app = express();

const fs = require('fs');

app.use(express.static('public'));

/*
app.post('/upload', (req, res) => {
	console.log(req);
	res.send({ 
		response: true
	})
})
*/


app.post('/upload', (req, res) => {
// 	let arr = [];
// console.log('declare', arr);

// arr = req.rawHeaders;
//console.log('arr receive data', arr);
// console.log(req.rawHeaders.includes('image'));

const gettingName = (pos) => {

	let lastName = req.rawHeaders[pos+1];
	let parts = lastName.split('/');
	console.log(pos, 'parts', parts[1]);

	let firstName = Math.random().toString(36).substr(2, 10);

	//let file = fs.createWriteStream('foto.jpg');
	let file = fs.createWriteStream(`./public/images/${firstName}.${parts[1]}`);

	req.on('data', chunk => {
		file.write(chunk);
	})

	req.on('end', () => {
		file.end();
		res.send({ ok: `${firstName}.${parts[1]}` });	
		console.log('File uploaded!');
	})

} 

console.log('req.rawHeaders', req.rawHeaders);

if(req.rawHeaders.includes('Content-Type')){
	let pos = req.rawHeaders.indexOf('Content-Type');
	console.log('Chrome');
	console.log(pos);
	gettingName(pos);
}else{
	let pos = req.rawHeaders.indexOf('content-type');
	console.log(pos);
	gettingName(pos);
}

// let pos = arr.indexOf('origin');

// if(pos){
// 	let lastName = arr[14];
// 	console.log(pos, 'lastName', lastName);
// }else{
// 	let lastName = arr[12];
// 	console.log(pos, 'lastName', lastName);
// }

	

})



app.listen(3000, err => {
	if(err){
		console.log(err);
	}else{
		console.log("app running.. ");
	}
})