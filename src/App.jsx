import React from "react";
import Button from "../src/components/Button";

const App = () => {
	const [value, setValue] = React.useState("");
	const [todos, setTodos] = React.useState([
		{
			name: "buy milk",
			isChecked: false,
		},
	]);
	return (
		<div>
			<h1>{value}</h1>
			<div>
				<input
					type="text"
					value={value}
					onChange={event_ => {
						setValue(event_.target.value);
					}}
				/>
				<button
					disabled={!value}
					onClick={() => {
						setTodos([...todos, { name: value, isChecked: false }]);
						setValue("");
					}}
				>
					Add
				</button>
			</div>
			<ul>
				{todos.map((todo, index) => {
					return (
						<li key={index} style={{ userSelect: "none" }}>
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
