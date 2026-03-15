// src/pages/Login.tsx
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';

const Card = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    maxWidth: '450px',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.background.paper,
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
}));

const LoginContainer = styled(Stack)(({ theme }) => ({
    minHeight: '100vh',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // TODO: integrar com API Java
        console.log({ email, senha });
    }

    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
            <Box sx={{ position: 'fixed', top: '1rem', right: '1rem' }}>
                <ColorModeIconDropdown />
            </Box>
            <LoginContainer
                direction="column"
                justifyContent="center"
            >
                <Card>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        sx={{ fontWeight: 700, color: 'primary.main' }}
                    >
                        Marketplace SaaS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Entre na sua conta para continuar
                    </Typography>

                    <Divider />

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <OutlinedInput
                                id="email"
                                type="email"
                                name="email"
                                placeholder="seu@email.com"
                                autoComplete="email"
                                required
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="senha">Senha</FormLabel>
                            <OutlinedInput
                                id="senha"
                                type="password"
                                name="senha"
                                placeholder="••••••••"
                                autoComplete="current-password"
                                required
                                fullWidth
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                        >
                            Entrar
                        </Button>
                    </Box>

                    <Divider />

                    <Typography align="center" variant="body2" color="text.secondary">
                        Não tem conta?{' '}
                        <Link
                            to="/cadastro"
                            style={{ color: 'inherit', fontWeight: 600 }}
                        >
                            Cadastre-se
                        </Link>
                    </Typography>
                </Card>
            </LoginContainer>
        </AppTheme>
    );
}