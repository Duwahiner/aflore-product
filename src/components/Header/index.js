import React from 'react'
import { Flex, Box } from 'rebass'
import SearchID from '../SearchID'
import Logo from '../Logo'

const Header = ({ product, handleFilter, handleDisabled, handleReset }) => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      flexDirection={['column', 'column', 'row']}
      sx={{
        width: '100%'
      }}
    >
      <Box mr={[0, 0, 40]} flex='none'>
        <Logo />
      </Box>

      <Flex flex='auto' width={1} justifyContent='center'>
        <SearchID
          product={product}
          handleFilter={handleFilter}
          handleDisabled={handleDisabled}
          handleReset={handleReset}
        />
      </Flex>
    </Flex>
  )
}

export default Header
