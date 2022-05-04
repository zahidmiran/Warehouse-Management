import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import useInventories from '../Hooks/useInventories';

const AllInventories = (props) => {
    const{_id, name, price, imageURL, quantity} = props.item;
    // console.log(_id)
    const [inventoriesItem, setInventoriesItem] = useInventories()
    
    const handleDelet = id => {

        const proceed = window.confirm('Are you sure??')
        if (proceed) {
            const url = `https://sleepy-peak-49552.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // const remaining = inventoriesItem.filter(service => service._id !== id);
                    // setInventoriesItem(remaining);
                })
        }
    }

    return (
        <div className='text-center align-center'>
        
             <div className="m-1 mb-4 col-md-3">
            <ul className="list-group">
                <img src={imageURL} alt="" />
                <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark"> Name : {name} </span></li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Price : $-{price} </span> </li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Available Stocks :{quantity} </span> </li>
                <li onClick={() => handleDelet(_id)} className="list-group-item "><span className="btn btn-outline-danger fw-bolder text-dark"><FontAwesomeIcon icon={faTrashAlt} />  Delete Inventories</span></li>

            </ul>
        </div>
        </div>
    );
};

export default AllInventories;