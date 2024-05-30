import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import { ModalPayment } from './ModalPayment'; 
import GuestHeader from 'src/layouts/guests/GuestHeader';
import Logo from 'src/components/Logo';
import { useTheme } from '@mui/material/styles';

type Props = {
  products: any[];
  loading: boolean;
};

export default function ShopProductList({ products, loading }: Props) {
  const theme = useTheme();

  const priceStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: theme.palette.primary.main + 'A0', // Aplicando a cor primária com opacidade
    color: theme.palette.primary.contrastText,
    padding: '2px 8px',
  };

  const cardMediaStyle = {
    height: 142,
    maxWidth: '250px',
    backgroundSize: 'calc(100% - 100px) auto'
  };

  const [productsOptions, setProductsOptions] = useState<Array<{id: number, name: string, description: string, images: string[], price: number, isAvailable: boolean}>>([]);
  const [selectedProduct, setSelectedProduct] = useState<{id: number, name: string, description: string, images: string[]} | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.listaperfeita.com/products');
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
      <GuestHeader />
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
            <Box sx={{ position: 'relative', filter: product.isAvailable ? 'none' : 'grayscale(100%)' }}>
              <CardMedia
                sx={cardMediaStyle}
                image={`https://marryme-now.s3.amazonaws.com/${product.images[0]}`}
                title={product.name}
              />
              <Box sx={priceStyle}>
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
              </Box>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: product.description }}></Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto', justifyContent: 'flex-end' }}>
              <Button 
                size="small" 
                onClick={() => handleOpenModal(product)} 
                disabled={!product.isAvailable}
              >
                {product.isAvailable ? 'Presentear' : 'Presenteado'}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <ModalPayment open={isModalOpen} onClose={handleCloseModal} product={selectedProduct} />
      <Box
        sx={{
          py: 5,
          textAlign: 'center',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Container>
          <Logo sx={{ mb: 1, mx: 'auto' }} />
          <Typography variant="caption" component="p">
            © Todos os direitos reservados
            <br /> desenvolvido por Italo Barboza
          </Typography>
        </Container>
      </Box>
    </>
  );
}
