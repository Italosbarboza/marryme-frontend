import Modal from '@mui/material/Modal';
import * as Yup from 'yup';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RHFEditor, RHFTextField } from 'src/components/hook-form'; // Ajuste o caminho conforme necessário
import { Typography, styled } from '@mui/material';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  '@media (max-width: 620px)': {
    width: 500,
  },
  '@media (max-width: 520px)': {
    width: 400,
  },
  '@media (max-width: 450px)': {
    width: 340,
  },
};

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(2), // Adiciona margem superior
}));

type FormValuesProps = {
  guest_name: string;
  message: string;
};

type DonateModalProps = {
  open: boolean;
  onClose: () => void;
  product: { id: number; name: string; description: string; images: string[] } | null;
};

export function ModalConfirmPayment({ open, onClose, product }: DonateModalProps) {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    guest_name: Yup.string().required('O nome é obrigatório'),
    message: Yup.string().required('A mensagem é obrigatória'),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      guest_name: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log("Dados enviados:", Object.assign(data, {product_id: product?.id || 1}));
      // Realize a solicitação POST com axios
      await axios.post('https://api.listaperfeita.com/guest-guifts', Object.assign(data, {product_id: product?.id || 1}));
      console.log("Presente confirmado com sucesso:", data);
      onClose();
    } catch (error) {
      console.error("Erro ao confirmar o presente:", error);
      // Trate o erro conforme necessário
    }
  };

  if (!product) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <RHFTextField 
            name="guest_name" 
            label="Nome do Convidado."
            fullWidth
            margin="normal"
          />
          <LabelStyle>Deixe uma mensagem para os noivos 🧡</LabelStyle>
          <RHFEditor simple name="message" />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button 
              type="button" 
              onClick={onClose} 
              sx={{ mr: 1, color: 'grey.600', '&:hover': { backgroundColor: 'grey.200' } }} // Altera a cor de fundo para um cinza claro, e um pouco mais escuro ao passar o mouse
            >
              Fechar
            </Button>
            <Button type="submit">
              Enviar
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Modal>
  );
}
