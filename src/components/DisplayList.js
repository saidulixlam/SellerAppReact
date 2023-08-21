import React from 'react';
const Display = (props) => {
    const list = props.list;
    
    return (
        <React.Fragment>
                <ul>
                    {list.map((item) => {
                        return <div> 
                        <li key={item.id}>{item.price}-{item.name} {item.category}
                                <button type='delete' onClick={() => props.deleteProduct(item.id)}>Delete</button></li></div>
                    })}
                </ul>
        </React.Fragment>
    );
}

export default Display;
