import React from 'react';
const Display = (props) => {

    const list = props.list;
    
    return (
        <React.Fragment>
            <div>
                <ul>
                    {list.map((item) => {
                        return <li key={item.id}>{item.price}-{item.name}
                                <button type='delete' onClick={() => props.deleteProduct(item.id)}>Delete</button></li>
                    })}
                </ul>
            </div>
            
        </React.Fragment>
    );
}

export default Display;
