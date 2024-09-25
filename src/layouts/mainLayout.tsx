import React, { Fragment } from 'react'
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { GlobalStyle } from './globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

type ComponentProps = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: ComponentProps) => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <div>{children}</div>
        <Footer />
      </ThemeProvider>
    </Fragment>
  )
}

export default MainLayout
