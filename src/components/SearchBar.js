 import { Input } from 'antd';
import React from 'react';





function Search({ searchInput, searchUserFilter }) {
	
	
	
	
	
	
	
	return (
		<div className="parentDivSearch">
			
			<Input type="text" placeholder="Search for a farm..." value={searchInput} onInput={(e) => searchUserFilter(e.target.value)} className="products-list-filter-farm"/>
		</div>
		
	);
}

export default Search;
