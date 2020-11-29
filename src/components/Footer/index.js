import React from 'react'
import { Flex } from 'rebass'
import styled from '@emotion/styled'
import { getProduct } from '../../api'

const Button = styled.button`
  width: 260px;
  height: 45px;
  display: flex;
  justify-content: center;
  margin: 3px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-family: Aeonik;
  font-size: 15px;
  text-align: center;
  line-height: 45px;
  background-color: ${props => props.disabled
    ? props.theme.colors.bgSearch
    : props.theme.colors.primary
  };
  border-radius: 50px;
  transition: all 0.4s;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.disabled
    ? '' : props.theme.colors.primaryDark};
  }
`

const Footer = ({ handleRestart, disabled, handleDisabled, handleReset }) => {
  const restart = () => {
    const get = async () => {
      const theProduct = await getProduct()
      if (typeof theProduct === 'object') {
        handleRestart(theProduct)
        handleDisabled(true)
        handleReset('')
      } else {
        handleRestart('No hemos podido reinicar la busqueda')
      }
    }
    get()
  }

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      sx={{
        width: '100%'
      }}
    >
      <Button onClick={() => restart()} disabled={disabled}>
        Reiniciar para nueva busqueda
      </Button>
    </Flex>
  )
}

export default Footer
