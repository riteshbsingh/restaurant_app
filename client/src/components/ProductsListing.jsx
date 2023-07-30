import React from 'react'
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { addToCart } from './reducer/CartReducer'
import { useDispatch } from 'react-redux'

const ProductsListing = ({ products }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    navigate('/cart')
  }

  const buttonStyles = {
    backgroundColor: '#fb6d6a',
    color: '#fff',
    borderRadius: '4px'
  }

  const buttonText = 'Add to Cart'

  return (
    <Box>
      <Grid container spacing={3}>
        {products &&
          products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: '100%',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
                    transform: 'translateY(-4px)'
                  }
                }}
                elevation={0}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product?.img}
                    alt="Product thumbnail"
                  />
                  <CardContent sx={{ minHeight: 100, height: 100 }} >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {product?.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        height: 48,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {product?.dsc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  disableSpacing
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    fontSize={18}
                  >
                    ₹ {product?.price}
                  </Typography>
                  <Button
                    variant="contained"
                    style={buttonStyles}
                    size="small"
                    onClick={() => handleAddToCart(product)}
                  >
                    {buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}

export default ProductsListing
