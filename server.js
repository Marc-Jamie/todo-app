import express from "express";
import { readFile, writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";

const app = express();
const port = 3005;
const DATABASE_URI = "./database/database.json";
app.use(express.json());

app.get("/", (request, response) => {
	response.send("Hello World!");
});

app.get("/api/todos", async (request, response) => {
	const data = await readFile("./database/database.json", "utf-8");
	const json = JSON.parse(data);
	response.json(json.todos);
});

app.post("/api/todos", async (request, response) => {
	const data = await readFile(DATABASE_URI, "utf-8");
	const json = JSON.parse(data);

	console.log(request.body);
	const todo = {
		...request.body,
		id: uuid(),
	};
	json.todos.push(todo);
	await writeFile(DATABASE_URI, JSON.stringify(json, null, 4));
	response.status(201);
	response.json(todo);
});

app.delete("/api/todos", async (request, response) => {
	const { id } = request.body;
	const db = await readFile(DATABASE_URI, "utf-8");
	const data = JSON.parse(db);
	const index = data.todos.findIndex(user => user.id === id);
	data.todos.splice(index, 1);
	await writeFile(DATABASE_URI, JSON.stringify(data, null, 4));
	response.status(204);
	response.send();
});

app.listen(port, () => {
	console.log(`Server läuft unter: ${port}`);
});
