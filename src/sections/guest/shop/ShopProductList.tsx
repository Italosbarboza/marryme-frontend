import React, { useCallback, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import axios from 'axios';
import { DonateModal } from './ModalPayment'; // Certifique-se de que o caminho está correto

// ----------------------------------------------------------------------

type Props = {
  products: any[];
  loading: boolean;
};

export default function ShopProductList({ products, loading }: Props) {
  const [productsOptions, setProductsOptions] = useState<Array<{id: number, name: string, description: string, images: string[]}>>([]);
  const [selectedProduct, setSelectedProduct] = useState<{id: number, name: string, description: string, images: string[]} | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3333/products');
        setProductsOptions(response.data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleOpenModal = (product: {id: number, name: string, description: string, images: string[]}) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
        }}
      >
        {productsOptions.map((product) => (
          <Card key={product.id} sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345, height: '100%' }}>
          <CardMedia
              sx={{ height: 140 }}
              image={`https://marryme-now.s3.amazonaws.com/${product.images[0]}`}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: product.description }}>
              </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto', justifyContent: 'flex-end' }}>

              <Button size="small">Detalhes</Button>
              <Button size="small" onClick={() => handleOpenModal(product)}>Doar</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <DonateModal open={isModalOpen} onClose={handleCloseModal} product={selectedProduct} />
    </>
  );
}
