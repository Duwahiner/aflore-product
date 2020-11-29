import React from 'react'
import { Box, Flex } from 'rebass'
import styled from '@emotion/styled'
import { ReactSVG } from 'react-svg'

const Title = styled.h1`
  font-family: AeonikBlack;
  font-size: 20px;
  color: ${props => props.offer
    ? props.theme.colors.colorItems
    : props.theme.colors.title};
  text-align: center;
`
const SubTitle = styled.h1`
  font-family: Aeonik;
  font-size: 16px;
  color: ${props => props.offer
    ? props.theme.colors.colorItems
    : props.theme.colors.title};
  text-align: center;
`

const Description = styled.span`
  font-family: ${(props) => props.fontFamily
    ? props.fontFamily : 'Aeonik'};
  font-size: ${(props) => props.textSize
    ? props.textSize : '12px'};
  color: ${props => props.theme.colors.title};
  text-align: center;
`

const ProductItems = ({ product }) => {
  const items = typeof product === 'object' &&
    Object.keys(product).length > 0 ? [product] : product

  return (
    <Flex
      width={[1]}
      justifyContent='center'
    >
      {
        Array.isArray(items) && items.length > 0 ? (
          items.map((children) => {
            const { id, name, offer } = children
            return (
              <Flex width={[1, 1, 1 / 2]} key={children.id} flexDirection='column'>
                {
                  <Flex width={1} alignItems='center' py={2}>
                    <Box mr={2} width={15} height={15}>
                      <ReactSVG src='svg/icon-items.svg' />
                    </Box>
                    <Title offer={offer}> {`${id} ${name}`} </Title>
                  </Flex>
                }

                {
                  children.children.map((children2) => {
                    const { id, name, offer } = children2
                    return (
                      <Flex key={children2.id} flexDirection='column'>
                        {
                          <Flex pl={30} py={2}>
                            <Box mr='10px' width={10} height={10}>
                              <ReactSVG src='svg/icon-items.svg' />
                            </Box>
                            <SubTitle offer={offer}> {`${id} ${name}`} </SubTitle>
                          </Flex>
                        }

                        {
                          children2.children.map((children3) => {
                            const { id, name, offer } = children3
                            return (
                              <Flex key={children3.id} flexDirection='column'>
                                {
                                  <Flex pl={30} py='4px'>
                                    <Box ml='40px' mr={2} width={10} height={10}>
                                      <ReactSVG src='svg/icon-items.svg' />
                                    </Box>
                                    <SubTitle offer={offer}> {`${id} ${name}`} </SubTitle>
                                  </Flex>
                                }

                                {
                                  children3.children.map((children4) => {
                                    const { id, name, offer } = children4
                                    return (
                                      <Flex key={children4.id} flexDirection='column'>
                                        {
                                          <Flex pl={30} py='4px'>
                                            <Box ml='80px' mr={2} width={10} height={10}>
                                              <ReactSVG src='svg/icon-items.svg' />
                                            </Box>
                                            <SubTitle offer={offer}> {`${id} ${name}`} </SubTitle>
                                          </Flex>
                                        }

                                        {
                                          children4.children.map((children5) => {
                                            const { id, name, offer } = children5
                                            return (
                                              <Flex key={children5.id} flexDirection='column'>
                                                {
                                                  <Flex pl={30} py='4px'>
                                                    <Box ml='120px' mr={2} width={10} height={10}>
                                                      <ReactSVG src='svg/icon-items.svg' />
                                                    </Box>
                                                    <SubTitle offer={offer}> {`${id} ${name}`} </SubTitle>
                                                  </Flex>
                                                }

                                                {
                                                  children5.children.map((children6) => {
                                                    const { id, name, offer } = children6
                                                    return (
                                                      <Flex key={children6.id} flexDirection='column'>
                                                        {
                                                          <Flex pl={30} py='4px'>
                                                            <Box ml='160px' mr={2} width={10} height={10}>
                                                              <ReactSVG src='svg/icon-items.svg' />
                                                            </Box>
                                                            <SubTitle offer={offer}> {`${id} ${name}`} </SubTitle>
                                                          </Flex>
                                                        }
                                                      </Flex>
                                                    )
                                                  })
                                                }
                                              </Flex>
                                            )
                                          })
                                        }
                                      </Flex>
                                    )
                                  })
                                }
                              </Flex>
                            )
                          })
                        }
                      </Flex>
                    )
                  })
                }
              </Flex>
            )
          })
        ) : (
          <Flex width={1} justifyContent='center'>
            <Description fontFamily='AeonikBold' textSize='25px' key={0}>
              {
                Array.isArray(items) && items.length < 1
                  ? 'Lo sentimos ahora mismo no hay datos. Espere...'
                  : typeof items === 'string'
                    ? product : 'Lo sentimos ahora mismo no hay datos. Espere...'
              }
            </Description>
          </Flex>
        )
      }
    </Flex>
  )
}
export default ProductItems
