import fetch from 'isomorphic-fetch'

export const getProduct = async () => {
  const res = await fetch('https://api.mocki.io/v1/56e929d8/')
  const product = await res.json()
  return product
}
