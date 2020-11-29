import React, { useState } from 'react'
import { Flex, Box } from 'rebass'
import styled from '@emotion/styled'

const Button = styled.button`
  width: 150px;
  height: 45px;
  display: flex;
  justify-content: center;
  margin: 3px;
  outline: none;
  border: none;
  font-family: Aeonik;
  font-size: 18px;
  text-align: center;
  line-height: 45px;
  background-color: ${props => props.theme.colors.bgSearch};
  border-top-right-radius: 25px;
 border-bottom-right-radius: 23px;
  transition: all 0.4s;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`
const InputText = styled.input`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  margin: 10px 3px;
  outline: none;
  border: none;
  font-family: AeonikBold;
  font-size: 14px;
  padding: 20px;
  text-align: left;
  line-height: 45px;
  background-color: ${props => props.theme.colors.background};
  border: solid 1px #E6E6E6;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 23px;
  transition: all 0.4s;
  color: ${props => props.theme.colors.primary};
  &:focus {
    border: solid 1px ${props => props.theme.colors.primary};
  }
  &::placeholder {
    color: ${props => props.theme.colors.border};
    font-family: Aeonik;
    font-size: 16px;
  }
  box-sizing: border-box;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const SearchID = ({ product, handleFilter, handleDisabled, handleReset }) => {
  const items = typeof product === 'object' &&
    Object.keys(product).length > 0 ? [product] : product

  const [filterId, setFilterId] = useState('')

  const handleOnChange = (event) => {
    const id = event.target.value
    const regexp = new RegExp('^[0-9]{0,6}$', 'gi')
    if (regexp.test(id)) {
      setFilterId(id)
    }
  }

  const ActiveSearch = () => {
    if (filterId) {
      filterProduct(filterId)
      handleReset(setFilterId)
    }
  }

  const filterProduct = (id) => {
    const valueItem = []
    if (items.length > 0) {
      items.filter((item) => {
        if (item.id.toString() === id) {
          valueItem.push(item)
        }
        item.children.filter((item2) => {
          if (item2.id.toString() === id) {
            valueItem.push(item2)
          }
          item2.children.filter((item3) => {
            if (item3.id.toString() === id) {
              valueItem.push(item3)
            }
            item3.children.filter((item4) => {
              if (item4.id.toString() === id) {
                valueItem.push(item4)
              }
              item4.children.filter((item5) => {
                if (item5.id.toString() === id) {
                  valueItem.push(item5)
                }
                item5.children.filter((item6) => {
                  if (item6.id.toString() === id) {
                    valueItem.push(item6)
                  }
                })
              })
            })
          })
        })
      })
    }
    if (valueItem.length > 0) {
      handleFilter(...valueItem)
      handleDisabled(false)
    } else {
      handleFilter('No hemos encontrado producto con ese id')
    }
  }

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      bg=''
      my={[3, 3, 0]}
      mx={[3, 0, 0]}
      sx={{
        width: '100%',
        maxWidth: ['100%', '100%', '550px'],
        minWidth: '250px'
      }}
    >
      <Box width={1} bg=''>
        <InputText
          type='text'
          name='search'
          placeholder='Buscar producto por el id'
          onChange={(event) => handleOnChange(event)}
          autoComplete='off'
          value={filterId || ''}
        />
      </Box>
      <Button onClick={() => ActiveSearch()}>
        <Box mr='6px'> Buscar </Box>
      </Button>
    </Flex>
  )
}

export default SearchID
