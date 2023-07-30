import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...product, quantity: 1 })
      }

      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload
      state.items = state.items.filter((item) => item.id !== itemId)

      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload
      const item = state.items.find((item) => item.id === itemId)
      if (item) {
        item.quantity += 1
      }

      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload
      const item = state.items.find((item) => item.id === itemId)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }

      localStorage.setItem('cartItems', JSON.stringify(state.items))
    }
  }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions
export default cartSlice.reducer
