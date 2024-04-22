function App() {
	const currentDate = new Date();
	console.log(currentDate);

	const days = Array(35);

	return (
		<div className='App'>
			<h1>Balance Predict</h1>
			<Calendar>
				{[...days.keys()].map(day => (
					<Day key={day} />
				))}
			</Calendar>
		</div>
	);
}

function Calendar({ children }) {
	return <div className='calendar'>{children}</div>;
}

function Day() {
	return (
		<div className='day'>
			<div className='headers'>
				<h2>Date</h2>
				<h3>Balance</h3>
			</div>
			<div className='transactions'>
				<p>Transaction 1</p>
				<p>Transaction 2</p>
			</div>
		</div>
	);
}

export default App;
