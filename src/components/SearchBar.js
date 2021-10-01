 import { Divider, Input } from 'antd';
import React from 'react';





function Search({ searchInput, searchProductFilter }) {
	
	
	
	
	
	
	
	return (
		<div className="parentDivSearch">
			
			<Input type="text" placeholder="Search food..." value={searchInput} onInput={(e) => searchProductFilter(e.target.value)} />
		</div>
		
	);
}

export default Search;
