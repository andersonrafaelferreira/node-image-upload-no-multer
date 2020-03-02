const express = require('express')
const app = express()

app.use(express.static('public'))


app.post('/upload', (req, res) => {
	res.send({ data: 'user created in db' })
})

app.listen(3000, err => {
	if(err){
		console.log(err)
	}else{
		console.log("server running.. ")
	}
})