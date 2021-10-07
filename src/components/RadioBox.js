import React, { useState, useEffect } from "react";
import axios from "axios";


const RadioBox = ({ categories , handleFilters }) => {


    // const [checked, setChecked] = useState([]);

    // const handleToggle = category => () => {
    //     // return the first index or -1
    //     const currentCategory = checked.indexOf(category);
    //     const newCheckedCategory = [...checked];
    //     // if currently checked was not already in checked state > push
    //     // else pull/take off
    //     if (currentCategoryId === -1) {
    //         newCheckedCategoryId.push(c);
    //     } else {
    //         newCheckedCategoryId.splice(currentCategoryId, 1);
    //     }
    //     // console.log(newCheckedCategoryId);
    //     setChecked(newCheckedCategoryId);
    //     handleFilters(newCheckedCategoryId);
    // };
    
const [value, setValue] = useState(0);

    const handleChange = event => {
        handleFilters(event.target.value);
        setValue(event.target.value);
    };

    // return categories.map((category, index) => (
    //     <div key={index}>
    //         <input
    //             onChange={handleChange}
    //             value={category[index]}
    //             name={category}
    //             type="radio"
    //             className="mr-2 ml-4"
    //         />
    //         <label className="form-check-label">{category}</label>
    //     </div>
    // ));

    return categories.map((category, index) => (
        <div key={index}>
            <input
                onChange={handleChange}
                value = {`${category._id}`}
                name={category}
                type="radio"
                className="mr-2 ml-4 form-check-input"
            />
            <label className="form-check-label">{category.name}</label>
        </div>
    ));
};

export default RadioBox;