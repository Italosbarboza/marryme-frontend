// form
import { Controller, useFormContext } from 'react-hook-form';
// @mui
import {
  Box,
  Button,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
// config
import { NAVBAR } from '../../../config';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { ColorManyPicker } from '../../../components/color-utils';
import { RHFMultiCheckbox, RHFRadioGroup } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export const SORT_BY_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];

export const FILTER_GENDER_OPTIONS = [
  { label: 'Noivo Alegre', value: 'Noivo Alegre' },
  { label: 'Noiva Alegre', value: 'Noiva Alegre' },
  { label: 'Todos Alegres', value: 'Todos Alegres' },
];

export const FILTER_CATEGORY_OPTIONS = [
  { label: 'Todas', value: 'Todas' },
  { label: 'Cozinha', value: 'Cozinha' },
  { label: 'Quarto', value: 'Quarto' },
  { label: 'Sala', value: 'Sala' },
];

export const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];

export const FILTER_PRICE_OPTIONS = [
  { value: 'below', label: 'Lua de Mel' },
  { value: 'between', label: 'Festa de Casamento' },
];

export const FILTER_COLOR_OPTIONS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

// ----------------------------------------------------------------------

const onSelected = (selected: string[], item: string) =>
  selected.includes(item) ? selected.filter((value) => value !== item) : [...selected, item];

type Props = {
  isOpen: boolean;
  onOpen: VoidFunction;
  onResetAll: VoidFunction;
  onClose: VoidFunction;
};

export default function ShopFilterSidebar({ isOpen, onResetAll, onOpen, onClose }: Props) {
  const { control } = useFormContext();

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon={'ic:round-filter-list'} />}
        onClick={onOpen}
      >
        Filtros
      </Button>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
        PaperProps={{
          sx: { width: NAVBAR.BASE_WIDTH },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Filtros
          </Typography>
          <IconButton onClick={onClose}>
            <Iconify icon={'eva:close-fill'} width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">Noivos</Typography>
              <RHFMultiCheckbox name="gender" options={FILTER_GENDER_OPTIONS} sx={{ width: 1 }} />
            </Stack>

            <Stack spacing={1}>
              <Typography variant="subtitle1">Categorias</Typography>
              <RHFRadioGroup name="category" options={FILTER_CATEGORY_OPTIONS} row={false} />
            </Stack>

            {/* <Stack spacing={1}>
              <Typography variant="subtitle1">Colour</Typography>

              <Controller
                name="colors"
                control={control}
                render={({ field }) => (
                  <ColorManyPicker
                    colors={FILTER_COLOR_OPTIONS}
                    onChangeColor={(color) => field.onChange(onSelected(field.value, color))}
                    sx={{ maxWidth: 36 * 4 }}
                  />
                )}
              />
            </Stack> */}

            <Stack spacing={1}>
              <Typography variant="subtitle1">Presente Rateado</Typography>
              <RHFRadioGroup name="priceRange" options={FILTER_PRICE_OPTIONS} />
            </Stack>

            {/* <Stack spacing={1}>
              <Typography variant="subtitle1">Rating</Typography>

              <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                  <RadioGroup {...field}>
                    {FILTER_RATING_OPTIONS.map((item, index) => (
                      <FormControlLabel
                        key={item}
                        value={item}
                        control={
                          <Radio
                            disableRipple
                            color="default"
                            icon={<Rating readOnly value={4 - index} />}
                            checkedIcon={<Rating readOnly value={4 - index} />}
                            sx={{
                              '&:hover': { bgcolor: 'transparent' },
                            }}
                          />
                        }
                        label="& Up"
                        sx={{
                          my: 0.5,
                          borderRadius: 1,
                          '&:hover': { opacity: 0.48 },
                          ...(field.value.includes(item) && {
                            bgcolor: 'action.selected',
                          }),
                        }}
                      />
                    ))}
                  </RadioGroup>
                )}
              />
            </Stack> */}
          </Stack>
        </Scrollbar>

        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="outlined"
            onClick={onResetAll}
            startIcon={<Iconify icon={'ic:round-clear-all'} />}
          >
            Limpar Filtros
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
