import express from "express";

const app = express();
const port = 3005;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/api/todos", req, res => {
	res.json([{ id: 1, name: "clean" }]);
});

app.listen(port, () => {
	console.log(`Hello World! ${port}`);
});
