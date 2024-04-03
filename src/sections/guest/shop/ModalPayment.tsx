import React, { CSSProperties } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  borderRadius: '4px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const pixStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    alignItems: 'start',
    borderRadius: '8px',
    background: '#f0f0f0',
    color: '#000',
    textDecoration: 'none',
    padding: '30px',
    paddingLeft: '40px',
    gap: '20px',
    transition: 'background-color 0.3s ease',
};

const pixTitle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

type DonateModalProps = {
  open: boolean;
  onClose: () => void;
  product: { id: number; name: string; description: string; images: string[] } | null;
};



export function ModalPayment({ open, onClose, product }: DonateModalProps) {
  const navigate = useNavigate();
  const theme = useTheme();

  if (!product) return null;

  function handlePixClick() {
    navigate('/payment/pix', { state: { product } });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Selecione como deseja pagar o produto <span style={{ color: theme.palette.primary.main }}>{product.name}</span>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div
                style={pixStyle} 
                className="pix" 
                onClick={handlePixClick}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#e0e0e0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#f0f0f0')}
            >                     
                <img src="https://user-images.githubusercontent.com/741969/99538099-3b7a5d00-298b-11eb-9f4f-c3d0cd4a5280.png" 
                        alt="PIX" style={{ width: '40px', marginBottom: '10px' }} 
                        height={'40px'}/>
                <div style={pixTitle}>
                    <Typography variant="h6">Pagar com PIX ou Cartão de Crédito</Typography>
                    <Typography variant="body1" >Pagamento à vista ou cartão de crédito</Typography>
                </div>
            </div>
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <a
                 href="https://www.amazon.com.br/hz/wishlist/ls/2E3R7TD2M5VAE?ref_=wl_share"
                 style={pixStyle} 
                 className="pix" 
                 target="_blank"
                 rel="noopener noreferrer"
                 onMouseEnter={(e) => (e.currentTarget.style.background = '#e0e0e0')}
                 onMouseLeave={(e) => (e.currentTarget.style.background = '#f0f0f0')}
             >                     
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" 
                        alt="PIX" style={{ width: '40px', marginBottom: '10px' }} 
                        height={'40px'}/>
                <div style={pixTitle}>
                    <Typography variant="h6">Comprar na Amazon</Typography>
                    <Typography variant="body1" >Compre o produto na lista de presentes da Amazon</Typography>
                </div>
            </a>
        </Typography>
        <Button onClick={onClose} sx={{ mt: 2, alignSelf: 'end' }}>Fechar</Button>
      </Box>
    </Modal>
  );
}
