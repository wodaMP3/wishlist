
import './App.css'
import WishlistForm from './components/wishlistForm/wishlistForm'
import Wishlistcard from './components/wishlistCard/wishlistCard'
import './index.css'

function App() {

  return (
    <>
      <div className='container mx-auto p-4'>
        <h1 className='text-4xl font-bold mb-4'>WishList</h1>
        <WishlistForm />
        <Wishlistcard />
      </div>
    </>
  )
}

export default App
