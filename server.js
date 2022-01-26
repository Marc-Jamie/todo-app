import fs from "fs/promises";
import express from "express";
import { parse } from "path";

const app = express();
const port = 3005;

app.get("/", (req, res) => {
	res.send("Hello World!");
	// .then(res => {
	// 	return JSON.parse.res;
	// });
});

app.listen(port, () => {
	console.log(`Hello World! ${port}`);
});

// app.put('/api/todos', function (req, res) {
// 	res.send('Got a PUT request at /user')
//   })
