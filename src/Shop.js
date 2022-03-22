import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [items, setItems] = useState ([
        {itemName: 'item 1', quantity: 1, isSelected: false},
        {itemName: 'item 2', quantity: 3, isSelected: true},
        {itemName: 'item 3', quantity: 2, isSelected: false}
    ]);

    const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(6);

    const handleAddbuttonClick = () => {
        const newItem = {
            itemName : inputValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...items, newItem];

        setItems(newItems);
        console.log(items)
        setInputValue('');
        calculateTotal();
    }

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

    const toggleComplete = (index) => {
        const newItems = [...items];

        newItems[index].isSelected = !newItems[index].isSelected;
        setItems(newItems);
    }

    const handleQuantityDecrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity--;

        setItems(newItems);
        calculateTotal();
    }
    const handleQuantityIncrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity++;

        setItems(newItems);
        calculateTotal();
    }
    return (
        <div className='app-background'>
            <div className='main-container'>
                <div className='add-item-box'>
					<input type="text" placeholder='Add an item'  />
                    <span onClick={() => handleAddbuttonClick()}>+</span>
				</div>
            </div>
            <div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container' key={index}>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.isSelected ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className='completed'>{item.itemName}</span>
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faCircle} />
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className='quantity'>
								<button>
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='total'>Total: {totalItemCount}</div>
        </div>
    )
}

export default Shop;