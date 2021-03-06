export default function ItemDisplay(props) {
    const showItem = (item) => {
        return (
            <div>
                <p>Id: { item.id }</p>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Brand: {item.brand}</p>
                <p>Type: { item.type}</p>
            </div>
        )
    }
    return <div>{ props.items.map(showItem)}</div>
}