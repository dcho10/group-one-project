const ItemsList = ({ items }) => {
    if (!items.length) {
      return <h3>No Items Yet</h3>;
    }
  
    return (
      <div>
        <div className="flex-row justify-space-between my-4">
          {items &&
            items.map((item) => (
              <div key={item.itemName}>
                <div>
                  <h4>
                    {item} <br />
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default ItemsList;
  