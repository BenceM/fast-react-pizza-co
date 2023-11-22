import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!query) return;
		navigate(`/order/${query}`);
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
