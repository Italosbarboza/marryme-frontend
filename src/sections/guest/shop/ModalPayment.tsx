import React, { CSSProperties } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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

export function DonateModal({ open, onClose, product }: DonateModalProps) {
  if (!product) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Selecione como deseja pagar o produto {product.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link
                to="/payment/pix" 
                style={pixStyle} 
                className="pix" 
                onMouseEnter={(e) => (e.currentTarget.style.background = '#e0e0e0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#f0f0f0')}
            >                    
                <img src="https://user-images.githubusercontent.com/741969/99538099-3b7a5d00-298b-11eb-9f4f-c3d0cd4a5280.png" 
                        alt="PIX" style={{ width: '40px', marginBottom: '10px' }} 
                        height={'40px'}/>
                <div style={pixTitle}>
                    <Typography variant="h6">Pagar com PIX</Typography>
                    <Typography variant="body1" >Pagamento à vista</Typography>
                </div>
            </Link>
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link
                to="/boleto"
                style={pixStyle} 
                className="pix" 
                onMouseEnter={(e) => (e.currentTarget.style.background = '#e0e0e0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#f0f0f0')}
            >                    
                <img src="https://cdn.pixabay.com/photo/2014/04/02/16/19/barcode-306926_960_720.png" 
                        alt="PIX" style={{ width: '40px', marginBottom: '10px' }} 
                        height={'40px'}/>
                <div style={pixTitle}>
                    <Typography variant="h6">Pagar por Boleto</Typography>
                    <Typography variant="body1" >Boleto será gerado pelos noivos</Typography>
                </div>
            </Link >
        </Typography>
        <Button onClick={onClose} sx={{ mt: 2, alignSelf: 'end' }}>Fechar</Button>
      </Box>
    </Modal>
  );
}
