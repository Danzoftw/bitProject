import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';

const ShoppingItems = () => {

    const [items, setItems] = useState([
        { itemName: 'item 1', quantity: 1, isSelected: false },
        { itemName: 'item 2', quantity: 3, isSelected: true },
        { itemName: 'item 3', quantity: 3, isSelected: false }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleQuantityIncrease = (index) => {
        const newItems = [...items];
        newItems[index].quantity++;
        setItems(newItems);
        localStorage.setItem('product', JSON.stringify(newItems));
    };

    const handleQuantityDecrease = (index) => {
        const newItems = [...items];
        newItems[index].quantity--;
        if(newItems[index].quantity <= 0) {
            newItems[index].quantity=0;
        }
        setItems(newItems);
        localStorage.setItem('product', JSON.stringify(newItems));
    };

    function handleAddButtonClick () {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        };
        
        const newItems = [...items, newItem]
        setItems(newItems);
        setInputValue('');
        localStorage.setItem('product', JSON.stringify(newItems));
    }
    useEffect(()=> {
        const gotItems = localStorage.getItem('product');
        console.log(JSON.parse(gotItems));
        if(gotItems){  
            setItems(JSON.parse(gotItems));
        }
    }, []);

    return (
        <>
            <div className="item-list">
                <Box sx={{pb: 4, display: "flex", m: 3}} className='add-item-box'>
                    <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} className='add-item-input' placeholder='Add an item...' />
                    <Box sx={{p: 1, backgroundColor: "black", color: "white", cursor: "pointer"}} onClick={handleAddButtonClick}>+</Box>
                </Box>
                {items.map((item, index) => (
                    <div className="item-container" key={index}>
                        <Box sx={{display: "flex", pb: 2}}>
                            
                            <div className="item-name">
                                {item.isSelected ? (
                                    <Box sx={{pr: 3}}>{item.itemName}</Box>
                                ) : (
                                    <Box sx={{pr: 3}}>{item.itemName}</Box>
                                )}
                            </div>
                            <Box sx={{display: 'flex'}} className="quantity">
                                <button onClick={()=>handleQuantityDecrease(index)}>-</button>
                                    <Box sx={{px: 3}}>{item.quantity}</Box>
                                <button onClick={()=>handleQuantityIncrease(index)}>+</button>
                            </Box>
                        </Box>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ShoppingItems;