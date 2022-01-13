import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import style from "./App.css";

const App = () => {
	const [value, setValue] = React.useState("");
	const [todos, setTodos] = React.useState([
		{
			name: "buy milk",
			isChecked: false,
			id: uuid(),
		},
	]);

	return (
		<div className="todo_list">
			<h1>To-Do List</h1>
			<form
				onSubmit={event_ => {
					event_.preventDefault();
					setTodos([...todos, { name: value, isChecked: false, id: uuid() }]);
					setValue("");
				}}
			>
				<input
					type="text"
					value={value}
					onChange={event_ => {
						setValue(event_.target.value);
					}}
				/>
				<button disabled={!value} type="submit">
					Add
				</button>
			</form>
			<ul>
				{todos.map((todo, index) => {
					return (
						<li key={todo.id} style={{ userSelect: "none" }}>
							<label>
								<input
									type="checkbox"
									checked={todo.isChecked}
									onChange={() => {
										console.log(`Item: ${index + 1}`);
										const update = [...todos];
										update[index].isChecked = !update[index].isChecked;
										setTodos(update);
									}}
								/>
								<span
									style={{
										textDecoration: todo.isChecked ? "line-through" : "none",
									}}
								>
									{" "}
									{todo.name}
								</span>
							</label>
							<button
								onClick={() => {
									const update = [...todos];
									update.splice(index, 1);
									setTodos(update);
								}}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default App;
