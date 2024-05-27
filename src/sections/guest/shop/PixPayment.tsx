import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
import Page from 'src/components/Page';
import useSettings from 'src/hooks/useSettings';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GuestHeader from 'src/layouts/guests/GuestHeader';
import { ModalConfirmPayment } from './ModalConfirmPayment'; 

import Logo from 'src/components/Logo';

export default function GuestShop() {
  const { themeStretch } = useSettings();
  initMercadoPago('APP_USR-32b598a6-bdf5-47e9-98bd-294eb7690024');
  const location = useLocation();
  const { product } = (location as any).state;

  const [productsOptions, setProductsOptions] = useState<Array<{id: number, name: string, description: string, images: string[], price: number}>>([]);
  const [selectedProduct, setSelectedProduct] = useState<{id: number, name: string, description: string, images: string[]} | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true); // Open modal on component mount

  const [idPreferense, setIdPreferense] = useState('2');

  const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(11),
    },
  }));

  const FlexBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    gap: '32px',
    alignItems: 'center',
  });

  const FlexBoxHeading = styled('h3')({
    fontSize: '1.7rem'
  });

  const StyledUl = styled('ul')({
    paddingLeft: '20px', 
    listStyleType: 'none', 
    marginTop: '60px'
  });

  const StyledLi = styled('li')({
    position: 'relative',
    marginBottom: '8px',
  });

  const StyledA = styled('a')({
    cursor: 'pointer'
  });

  const NumberMarker = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: '-20px',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  }));

  const Marker = styled('span')(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  }));

  const ValueMarker = styled('span')(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  }));

  const FlexQrcode = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    gap: '32px',
    alignItems: 'center',
    marginTop: '60px'
  });

  const CardPay = styled('p')({
    marginTop: '60px',
    fontSize: '1.6rem'
  });

  const createPreference = () => {
    axios.post('https://api.mercadopago.com/checkout/preferences', 
    {
      items: [
        {
          title: product.name,
          quantity: 1,
          currency_id: 'BRL',
          unit_price: product.price
        }
      ],
    }, 
    {
      headers: {
        'Authorization': `Bearer APP_USR-7564639532963669-031913-30746a5883dd12ef2b9dfbd3f48afb90-86739409`
      }
    })
    .then(response => {
      setIdPreferense(response.data.id)
    }).catch(error => {
      console.error(error);
    });
  };

  useEffect(() => {
    createPreference();
  }, []);

  useEffect(() => {
    if (product) {
      handleOpenModal(product);
    }
  }, [product]);

  const handleOpenModal = (product: {id: number, name: string, description: string, images: string[]}) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Page title="Vitrine de Sonhos">
      <GuestHeader />
      <RootStyle>
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <FlexBox>
            <img src='https://noivos.casar.com/img/layout/qr-code.png' alt='QR Code'></img>
            <FlexBoxHeading>Escaneie e pague o QR Code a seguir para efetuar a compra do presente</FlexBoxHeading>
          </FlexBox>
          <StyledUl>
            <StyledLi><NumberMarker>1.</NumberMarker> Acesse a opção Pix no seu Internet Banking ou app de pagamentos;</StyledLi>
            <StyledLi><NumberMarker>2.</NumberMarker> Escaneie o Qr Code a seguir ou copie o código de pagamento;</StyledLi>
            <StyledLi><NumberMarker>3.</NumberMarker> <Marker>Selecione o valor</Marker> do produto e realize o pagamento;</StyledLi>
            <StyledLi><NumberMarker>4.</NumberMarker> Clique em <Marker><StyledA onClick={() => handleOpenModal(product)}>Confirmar pagamento</StyledA></Marker></StyledLi>
          </StyledUl>
          <FlexQrcode>
            <img src='https://marryme-now.s3.amazonaws.com/qrcode.png' width={150} height={150} alt='Código de barras'></img>
            <FlexBoxHeading>Valor: <ValueMarker>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</ValueMarker></FlexBoxHeading>
          </FlexQrcode>
          <CardPay>Se preferir, pague pelo mercado pago com o cartão de crédito.</CardPay>

          { idPreferense !== '2' && <Wallet initialization={{ preferenceId: idPreferense, redirectMode: 'modal' }} customization={{ texts: { valueProp: 'smart_option', action: 'pay'} }} /> }
        </Container>
      </RootStyle>
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
        <ModalConfirmPayment open={isModalOpen} onClose={handleCloseModal} product={selectedProduct} />
    </Page>
  );
}
