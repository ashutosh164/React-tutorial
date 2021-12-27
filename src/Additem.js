import { useState } from "react";


export default function AddItem(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');

    const addItemButtonPress = () => {
        props.AddItem({ name: name, price: price, type: type, brand: brand })
        
        setName('');
        setPrice(0);
        setType('');
        setBrand('');
    }


    return (
        <div>
            <h2>Add an Item</h2>
            <form>
                <label htmlFor='name_field'>Name: </label>
                <input type='text' id="name_field" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor='price-field'>Price: </label>
                <input type='number' id="price-field" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                <label htmlFor='type-field'>Type: </label>
                <input type='text' id="type-field" value={type} onChange={(e) => setType(e.target.value)}></input>
                <label htmlFor='brand-field'>Brand: </label>
                <input type='text' id="brand-field" value={brand} onChange={(e) => setBrand(e.target.value)}></input>
                <button type="button" onClick={addItemButtonPress}>AddItem</button>
            </form>

        </div>
    );
}
// export default searchBar;