import React, { useEffect, useState } from 'react';
import classes from '../Style.module.css'
import Display from './DisplayList';
import SumDisplay from './Sum';
const getData = () => {
    const data = localStorage.getItem('user');
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}
const FormInput = () => {
    const [productList, setProductList] = useState(getData());
    const [productId, setProductId] = useState('');
    const [productPrice, setProductPrice] = useState();
    const [productCategory,setProductCategory]=useState();
    const [productName, setProductName] = useState('');

    const idHandler = (e) => {
        setProductId(e.target.value);
    }

    const priceHandler = (e) => {
        setProductPrice(e.target.value);
    }

    const nameHandler = (e) => {
        setProductName(e.target.value);
    }
    const categoryHandler = (e) => {
        setProductCategory(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newItem = {
            id: productId,
            price: productPrice,
            name: productName,
            category:productCategory,
            key: productId
        }
        setProductList([...productList, newItem])
        setProductId('');
        setProductName('');
        setProductPrice('');
    }
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(productList));
    }, [productList]);

    const deleteProduct = (key) => {
        const filterProduct = productList.filter((element) => {
            return element.id !== key;
        });
        setProductList(filterProduct)
    }

    return (
        <div >
            <form onSubmit={submitHandler} className={classes['form-input']}>
                <div>
                    <label htmlFor="">Product-id :</label>
                    <input type="number" value={productId} placeholder='Unique id always' required onChange={idHandler} />
                </div>
                <div>
                    <label htmlFor="">Product-price:</label>
                    <input type="number" value={productPrice} onChange={priceHandler} required />
                </div>
                <div>
                    <label htmlFor="">Product-name :</label>
                    <input type="text" value={productName} onChange={nameHandler} required />
                </div>
                <div>
                    <label htmlFor="">Choose a category :</label>
                    <select name="" onChange={categoryHandler}>
                        <option value="Food" selected>Food</option>
                        <option value="Gadget">Gadget</option>
                        <option value="Skincare">Skincare</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className={classes.button}>
                    <button type='submit'>Add product</button>
                </div>
            </form>
            <div>
                <h4>Product details :</h4>
                {productList.length < 1 && <p>No items</p>}
                {productList.length > 0 && <Display list={productList} deleteProduct={deleteProduct} />}

                <div className="total">
                    <h4>Total amount : </h4>
                    <SumDisplay list={productList} />
                </div>
            </div>
        </div>
    );
}

export default FormInput;