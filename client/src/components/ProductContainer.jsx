import { useEffect, useState } from 'react'
import ProductsListing from './ProductsListing'
import {
  Box,
  Grid,
  Typography,
} from '@mui/material'
import Navbar from './Navbar'

const ProductContainer = () => {
  const [menu, setMenu] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:5000/menu')
      .then((response) => response.json())
      .then((data) => {
        setMenu(data.data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    setIsLoading(false)
  }, [])

  console.log(menu)

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box p={'3rem 7rem'}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <Box>
                  {menu?.length > 0 ? (
                    <ProductsListing products={menu} />
                  ) : (
                    <Typography>Loading...</Typography>
                  )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  )
}

export default ProductContainer
