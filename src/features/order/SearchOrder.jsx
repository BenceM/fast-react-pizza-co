import React, { useState } from "react";

function SearchOrder() {
	const [query, setQuery] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder="Search order number"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</form>
	);
}

export default SearchOrder;
