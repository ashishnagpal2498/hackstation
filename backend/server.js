const express = require('express');
const app = express();
const PORT = 2222;


app.listen(PORT, () => {
	console.log('Server has Started -> http://localhost:' + PORT);
})