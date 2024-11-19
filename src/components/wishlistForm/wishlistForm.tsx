import { useState } from "react"
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../../redux/wishlist-slice";



const WishlistForm = ({ existingItem }: { existingItem?: Item}) => {
    const [image, setImage] = useState(existingItem?.image || '');
    const [description, setDescription] = useState(existingItem?.description || '');
    const [price, setPrice] = useState(existingItem?.price || 0);
    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        if (existingItem) {
            dispatch(updateItem({ ...existingItem, image, description, price }));
        } else {
            dispatch(addItem({ id: Date.now().toString(), image, description, price}));
        }
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="mb-2 p-2 border"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Price"
        className="mb-2 p-2 border"
      />
      <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white">
        {existingItem ? 'Update' : 'Add'} Item
      </button>
    </div>
  );
}

export default WishlistForm;