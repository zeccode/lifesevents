import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        primary: '#004B6B', // Azul Petróleo
        secondary: '#4E6345', // Verde Musgo
        black: '#2E2E2E', // Preto Carvão
        gray: '#707070', // Cinza Médio
        beige: '#E5D4C0', // Bege Claro
        white: '#ffffff', // Bege Claro
    },
    fonts: {
        primary: 'Montserrat, sans-serif',
        secondary: 'Raleway, sans-serif',
    },
    status: {
        Warning: '#E0A800',
        Danger: '#C0392B',
        Success: '#2ECC71',
        Info: '#3498DB',
    },
    fontSize: {
        small: '0.875rem', // 14px
        medium: '1rem', // 16px
        large: '1.25rem', // 20px
        xlarge: '1.5rem', // 24px
    },
}