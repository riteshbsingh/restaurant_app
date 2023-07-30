import { Box, Typography, Button, IconButton } from '@mui/material'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from './reducer/CartReducer'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId))
  }

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId))
  }

  const calculateSubTotal = (price, quantity) => {
    return price * quantity
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubTotal(item.price, item.quantity),
      0
    )
  }

  const estimatedDeliveryTime = '30-45 minutes'

  return (
    <>
      <Navbar />
      <Box
        sx={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#f5f5f5'
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          Shopping Cart
        </Typography>
        {cartItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px',
              display: 'grid',
              gridTemplateColumns: '0.7fr 2fr 1fr',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Box>
              <img
                src={item.img}
                alt={item.name}
                style={{ width: '100%', maxWidth: '100px', height: 'auto' }}
              />
            </Box>
            <Box>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="subtitle1">{item.dsc}</Typography>
              <Typography variant="subtitle2" sx={{ color: '#888' }}>
                Price: ₹ {item.price}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <IconButton
                  size="medium"
                  onClick={() => handleDecreaseQuantity(item.id)}
                  sx={{ color: '#888', p: '0.4rem 0.8rem' }}
                >
                  -
                </IconButton>
                <Typography
                  sx={{
                    padding: '0 8px',
                    fontWeight: 'bold',
                    minWidth: '32px',
                    textAlign: 'center'
                  }}
                >
                  {item.quantity}
                </Typography>
                <IconButton
                  size="medium"
                  onClick={() => handleIncreaseQuantity(item.id)}
                  sx={{ color: '#888', p: '0.4rem 0.8rem' }}
                >
                  +
                </IconButton>
              </Box>
              <Typography variant="subtitle2" sx={{ color: '#888' }}>
                Sub-Total: ₹ {calculateSubTotal(item.price, item.quantity)}
              </Typography>
            </Box>
            <Box>
              <Button
                variant="outlined"
                onClick={() => handleRemoveFromCart(item.id)}
                sx={{ borderColor: '#f44336', color: '#f44336' }}
              >
                Remove
              </Button>
            </Box>
          </Box>
        ))}
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Total Price: ₹ {calculateTotalPrice()}
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 1, color: '#888' }}>
            Estimated Delivery Time: {estimatedDeliveryTime}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Cart
