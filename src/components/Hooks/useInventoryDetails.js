import React, { useEffect, useState } from 'react';

const useInventoryDetails = (id) => {
    const [inventoriesItem, setInventoriesItem] = useState([]);
    useEffect(()=>{
        const url = `https://sleepy-peak-49552.herokuapp.com/inventories/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setInventoriesItem(data);
        })
        
    },[id])
    return [inventoriesItem, setInventoriesItem];
};

export default useInventoryDetails;