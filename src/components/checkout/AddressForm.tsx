import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function AddressForm() {
    return (
        <Grid container spacing={3}>
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="first-name" required>Nome</FormLabel>
                <OutlinedInput id="first-name" name="first-name" type="text"
                               placeholder="João" autoComplete="given-name" required size="small" />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="last-name" required>Sobrenome</FormLabel>
                <OutlinedInput id="last-name" name="last-name" type="text"
                               placeholder="Silva" autoComplete="family-name" required size="small" />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
                <FormLabel htmlFor="address1" required>Endereço</FormLabel>
                <OutlinedInput id="address1" name="address1" type="text"
                               placeholder="Rua e número" autoComplete="shipping address-line1"
                               required size="small" />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
                <FormLabel htmlFor="address2">Complemento</FormLabel>
                <OutlinedInput id="address2" name="address2" type="text"
                               placeholder="Apartamento, bloco, etc. (opcional)"
                               autoComplete="shipping address-line2" size="small" />
            </FormGrid>
            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="city" required>Cidade</FormLabel>
                <OutlinedInput id="city" name="city" type="text"
                               placeholder="Fortaleza" autoComplete="address-level2"
                               required size="small" />
            </FormGrid>
            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="state" required>Estado</FormLabel>
                <OutlinedInput id="state" name="state" type="text"
                               placeholder="CE" autoComplete="address-level1"
                               required size="small" />
            </FormGrid>
            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="zip" required>CEP</FormLabel>
                <OutlinedInput id="zip" name="zip" type="text"
                               placeholder="60000-000" autoComplete="shipping postal-code"
                               required size="small" />
            </FormGrid>
            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="country" required>País</FormLabel>
                <OutlinedInput id="country" name="country" type="text"
                               placeholder="Brasil" autoComplete="shipping country"
                               required size="small" />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
                <FormControlLabel
                    control={<Checkbox name="saveAddress" value="yes" />}
                    label="Usar este endereço para os dados de pagamento"
                />
            </FormGrid>
        </Grid>
    );
}