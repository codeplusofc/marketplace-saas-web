// src/components/checkout/SitemarkIcon.tsx
import Typography from '@mui/material/Typography';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Stack from '@mui/material/Stack';

export default function SitemarkIcon() {
  return (
      <Stack direction="row" alignItems="center" gap={1}>
        <StorefrontIcon sx={{ color: 'primary.main', fontSize: 28 }} />
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
          Marketplace SaaS
        </Typography>
      </Stack>
  );
}