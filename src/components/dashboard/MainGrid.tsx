// src/components/dashboard/MainGrid.tsx
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../../internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid from './CustomizedDataGrid';
import HighlightedCard from './HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard from './StatCard';
import type { StatCardProps } from './StatCard';

const data: StatCardProps[] = [
  {
    title: 'Vendas Totais',
    value: '245',
    interval: 'Últimos 30 dias',
    trend: 'up',
    data: [
      5, 8, 12, 7, 15, 10, 18, 9, 14, 20, 11, 16, 8, 13, 17, 22, 14, 19, 12, 25,
      18, 21, 16, 23, 20, 27, 24, 30, 28, 35,
    ],
  },
  {
    title: 'Pedidos',
    value: '89',
    interval: 'Últimos 30 dias',
    trend: 'up',
    data: [
      2, 3, 5, 4, 6, 5, 8, 7, 9, 11, 8, 10, 7, 9, 11, 14, 12, 15, 10, 16, 14, 17,
      12, 18, 15, 20, 18, 22, 20, 25,
    ],
  },
  {
    title: 'Receita',
    value: 'R$ 12,5k',
    interval: 'Últimos 30 dias',
    trend: 'up',
    data: [
      200, 350, 450, 380, 520, 480, 620, 550, 680, 750, 620, 780, 650, 820, 900,
      980, 850, 1020, 920, 1150, 1050, 1200, 1100, 1350, 1250, 1480, 1350, 1600,
      1500, 1750,
    ],
  },
  {
    title: 'Taxa de Conversão',
    value: '3,2%',
    interval: 'Últimos 30 dias',
    trend: 'down',
    data: [
      4.2, 3.8, 4.5, 3.9, 4.1, 3.7, 4.0, 3.5, 3.9, 3.6, 3.4, 3.8, 3.2, 3.5,
      3.3, 3.1, 3.4, 3.0, 3.2, 2.9, 3.1, 2.8, 3.0, 2.7, 3.1, 2.8, 3.0, 2.6,
      2.8, 2.5,
    ],
  },
];

export default function MainGrid() {
  return (
      <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Visão Geral
        </Typography>
        <Grid
            container
            spacing={2}
            columns={12}
            sx={{ mb: (theme) => theme.spacing(2) }}
        >
          {data.map((card, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatCard {...card} />
              </Grid>
          ))}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <HighlightedCard />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SessionsChart />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <PageViewsBarChart />
          </Grid>
        </Grid>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Detalhes
        </Typography>
        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12, lg: 9 }}>
            <CustomizedDataGrid />
          </Grid>
          <Grid size={{ xs: 12, lg: 3 }}>
            <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
              <CustomizedTreeView />
              <ChartUserByCountry />
            </Stack>
          </Grid>
        </Grid>
        <Copyright sx={{ my: 4 }} />
      </Box>
  );
}