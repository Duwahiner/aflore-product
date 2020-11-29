import React from 'react'
import { Box } from 'rebass'
import { ReactSVG } from 'react-svg'

const Logo = (props) => {
  return (
    <Box width={[160, 180, 150]} height='auto'>
      <ReactSVG src='svg/logo-aflore.svg' />
    </Box>
  )
}

export default Logo
