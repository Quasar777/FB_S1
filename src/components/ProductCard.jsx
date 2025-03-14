import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: "100%" }}
    >
      <Card
        sx={{
          width: 300,
          height: 400,
          margin: 2,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'space-between'}}>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2" style={{height: 50}}>{product.description}</Typography>
            <Typography variant="h5">{product.price}₽</Typography>
            <Typography variant="h6">Рейтинг: {product.rating}⭐️</Typography>
          </div>
          <Button
            variant="contained"
            onClick={() => dispatch(addToCart(product))}
            sx={{ mt: 2 }}
          >
            Добавить в корзину
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
