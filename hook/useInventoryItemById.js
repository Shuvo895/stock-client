import { useEffect, useState } from "react"

const useInventoryItemById = (id) =>{
	const [item, setItem] = useState({});

	useEffect(()=> {
		fetch(`https://morning-refuge-91739.herokuapp.com/inventoryItem/${id}`)
		.then(res => res.json())
		.then(data => setItem(data));
	},[]);

	return [item];
}

export default useInventoryItemById;