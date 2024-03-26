import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Box, Container, Button } from '@mui/material';
import Page from 'src/components/Page';
import useSettings from 'src/hooks/useSettings';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useEffect, useState } from 'react';


export default function GuestShop() {
  const { themeStretch } = useSettings();
  initMercadoPago('APP_USR-32b598a6-bdf5-47e9-98bd-294eb7690024');
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

  // Criação da preferência de pagamento
  const preference = {
    items: [
      {
        title: 'Nome do Produto',
        quantity: 1,
        currency_id: 'BRL', // ou outra moeda conforme necessário
        unit_price: 3561.11 // Defina o valor do produto aqui
      }
    ],
    // Você pode adicionar mais configurações à preferência conforme necessário
  };

  const createPreference = () => {
    axios.post('https://api.mercadopago.com/checkout/preferences', 
    {
      items: [
        {
          title: 'Nome do Produto',
          quantity: 1,
          currency_id: 'BRL',
          unit_price: 1
        }
      ],
    }, 
    {
      headers: {
        'Authorization': `Bearer APP_USR-7564639532963669-031913-30746a5883dd12ef2b9dfbd3f48afb90-86739409`
      }
    })
    .then(response => {
      console.log(response.data);
      setIdPreferense(response.data.id)
    }).catch(error => {
      console.error(error);
    });
  };

  useEffect(() => {
    createPreference();
  }, []);

  return (
    <Page title="Vitrine de Sonhos">
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
            <StyledLi><NumberMarker>4.</NumberMarker> Assim que o noivo confirmar o recebimento, você receberá uma notificação no e-mail informado.</StyledLi>
          </StyledUl>
          <FlexQrcode>
            <img src='data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAKsAAACrAQAAAAAxk1G0AAADNUlEQVR4nO1XMW7cOBR9FAegG0tOGYCOBvAJ3NHAAJrO98geYEepUo2k3SaNNd4L5B7bcYAAnM4nGIATGkgZUW5oQKOfYssEWJDt7i8J4eG/9x/5vhjhF3XKfnUK/FeOPWP1xalh5xbP3cVy3LMsFgTkaaoJhXEDZEGSGfJkoxvcLwH+Va0K862+4C1Ym8byMO3WX3Z32N4i//evf6oFAFx+PD6L8wdMoxY4xIP8o4mxdbCNsTlkk6QJsQWwwtNqxOo3g/GVXcV3QkQUSgpoNHKQJ6LYTkBDhSbYxkhANmEqgmUpI3ZXT6A7QBhWiEGsNgl0DLbCMu165VrFveYJwo4os9vV7/fXzkg8vb1Sx3fxZqO74wz3TvGHiwXTXy7XyzEepAg8A/Od/DO8zq/Leic3CZ3cn0i7en1s7gDYEc+f40FeOp5h9Zd5LnYiE/wK1CZMR0tUKAzvIXNlt+BdvNlIlz64GXJbuaHinniCY0nLWtNQuUHRjLIzso4H8dqRcbvAiXhn+KBQJIAEyQiN5t4AAlApmsyKZiUh7EYQhURNfADgeiEBWQRsIBPoDKL0ppwVGj0xKjtCtLAZgHNT48VgFMvL9XE4lG28Y/Nb3n3aPzCbw7huAYXHeMcOADOWGQu4XtCAFDqFKQfIy7VEJUfF3hiX8J7g9fSwvmmVGLDIAVqfhxQ6fK5so1HrstNotE2wPYVpK/iAqTCyCK4XU7RPMvgLwf35jfl2qk37dP6qRJugiTh+X8st5KO4+/5R4jC9T4kM6oXcqKkxzms+q/gRg+bKFkS9Agu0I+rhoi9ghhHViT2/GP5wv/Tr606f2ySfXInreY/3sMUnO+ImGgQ0qLLFBEFekw92I1xCjOZiP6ubXl33wGfclP5ttO1BM4iM3KKcQUR8UEn7iZgaPTEChCxo2qBMyR2iQdmNQmOc12VHZbQmoAHYwhYGtXGzIG/iIyMDo+klSFrLHKs/cG5V/FYA8lrWoewrQLiO3ICUTgDk4uS7cvf3anMACzbhAnott4IGZVmY6sB3Jv49AXmaNqCOJoDPsJsqPgEzEFswvcgPN16//VDJx72M3tnY/z+SP9UPQV//Le7u7cQAAAAASUVORK5CYII=' alt='Código de barras'></img>
            <FlexBoxHeading>Valor: <ValueMarker>R$ 3.561,11</ValueMarker></FlexBoxHeading>
          </FlexQrcode>
          <CardPay>Se preferir, pague pelo mercado pago com o cartão de crédito.</CardPay>

          { idPreferense !== '2' && <Wallet initialization={{ preferenceId: idPreferense, redirectMode: 'modal' }} customization={{ texts: { valueProp: 'smart_option', action: 'pay'} }} /> }
        </Container>
      </RootStyle>
    </Page>
)}