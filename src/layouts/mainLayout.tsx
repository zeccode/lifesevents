import React, { Fragment } from 'react'
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { GlobalStyle } from './globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ComponenteEnvolvente } from './mainLayout.styled';

type ComponentProps = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: ComponentProps) => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ComponenteEnvolvente>
          <Header />
          <div>{children}</div>
          <Footer />
        </ComponenteEnvolvente>
      </ThemeProvider>
    </Fragment>
  )
}

export default MainLayout
