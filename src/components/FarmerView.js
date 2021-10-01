// import React, { useContext, useState, useEffect } from "react";
// import { LoggedUserConsumer } from "./context/loggedUser";
// import axios from "axios";

// function FarmerView() {
//     const loggedInUser = useContext(LoggedUserConsumer);
//     const [products, setProducts] = useState([]);
//     const [myProducts, setMyProducts] = useState([]); //

//     useEffect(() => {
//         async function getProducts() {
//             const response = await axios.get(
//                 `${process.env.REACT_APP_SERVER_HOSTNAME}/products`
//             );
//             setProducts(response.data);
//         }
//         getProducts();

//     },[])

//     useEffect(() => {
//         async function getMyProducts() {
//             const response = await products.filter(products.user === loggedInUser._id);
//             setMyProducts(response);
//         }
//         getMyProducts();

//     },[])
    


//     return (
//         <>
//         <ul>
//             {myProducts.map((product) => {
//                 return <li>{product.name}</li>
//             })}
//             <li></li>
//         </ul>
//         </>
//     );
// }

// export default FarmerView;