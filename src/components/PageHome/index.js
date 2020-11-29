import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Box, Flex } from 'rebass'
import { getProduct } from '../../api'
import { useTheme } from 'emotion-theming'
import Header from '../Header'
import Footer from '../Footer'
import Product from '../Product'

const resetState = {} // estado global

const PageHome = (props) => {
  const theme = useTheme()
  const [product, setProduct] = useState({})
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    const get = async () => {
      const theProduct = await getProduct()
      if (typeof theProduct === 'object') {
        setProduct(theProduct)
      } else {
        setProduct(product)
      }
    }
    get()
  }, [])

  const reset = (state) => {
    Object.assign(resetState, { state })
  }

  return (
    <Flex
      width={1}
      justifyContent={['none', 'none', 'center']}
      alignItems='center'
      flexDirection='column'
      sx={{
        height: '100vh'
      }}
    >
      <Head>
        <title> Inicio </title>
      </Head>

      <Flex
        bg={theme.colors.background}
        width={1}
        height={['auto', 'auto', 80]}
        justifyContent='center'
        alignItems='center'
        flex='none'
        flexGrow='0'
        py={[4, 4, 0]}
        px={[20, 60, 120]}
        sx={{
          borderBottom: `solid 1px ${theme.colors.border}`,
          boxSizing: 'border-box'
        }}
      >
        <Box bg='' width={1} maxWidth={1200}>
          <Header
            handleFilter={(productFilter) => setProduct(productFilter)}
            product={product}
            disabled={disabled}
            handleDisabled={setDisabled}
            handleReset={reset}
          />
        </Box>
      </Flex>

      <Flex
        as='main'
        width={1}
        height={['auto', 'auto', 'auto']}
        justifyContent='center'
        alignItems='flex-start'
        flex='auto'
        flexGrow='1'
        bg=''
        py={[4, 4, 4]}
        px={[20, 60, 120]}
        sx={{
          boxSizing: 'border-box',
          overflowY: 'auto',
          overflowX: 'none',
          '::-webkit-scrollbar': {
            display: 'block',
            background: '#F6F6F6',
            width: '10px'
          },
          '::-webkit-scrollbar-thumb': {
            background: '#D6DBDF',
            borderRadius: '10px'
          },

          '::-webkit-scrollbar-thumb:hover': {
            background: '#aabbf2'
          }
        }}
      >
        <Box width={1} maxWidth={1200}>
          <Product product={product} />
        </Box>
      </Flex>

      <Flex
        as='footer'
        width={1}
        justifyContent='center'
        alignItems='center'
        flex='none'
        bg=''
        py={[3, 2, 2]}
        px={[20, 60, 120]}
        sx={{
          borderTop: `solid 1px ${theme.colors.border}`,
          boxSizing: 'border-box'
        }}
      >
        <Box bg='' width={1} maxWidth={1200}>
          <Footer
            handleRestart={setProduct}
            disabled={disabled}
            handleDisabled={setDisabled}
            handleReset={resetState.state}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default PageHome
