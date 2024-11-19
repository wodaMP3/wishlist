import { RootState } from "@reduxjs/toolkit/query"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../../redux/wishlist-slice";



const WishlistCard = () => {
    const items = useSelector((state: RootState) => state.wishlist.items);
    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <div key={item.id} className="p-4 bg-white shadow-md rounded-md">
          <img src={item.image} alt={item.description} className="w-full h-40 object-cover" />
          <h3 className="mt-2">{item.description}</h3>
          <p className="text-lg font-bold">{`$${item.price}`}</p>
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="mt-2 p-2 bg-red-500 text-white"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default WishlistCard;