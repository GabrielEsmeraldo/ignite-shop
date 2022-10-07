import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  padding: '0 1rem',

  maxWidth: 1180,
  margin: '0 auto',

  '@sm': {
    display: 'flex',
    flexDirection: 'column',
  }
})

export const ImageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: 576,
  height: 'calc(656px - 0.5rem)',
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  img: {
    objectFit: 'cover'
  },

  '@sm': {
    maxWidth: '768px',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300'
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    lineHeight: 1.6,
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300'
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    borderRadius: 8,
    padding: '1.35rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    color: '$gray100',
    boder: 'none',
    outline: 'none',

    '&:not(:disabled):hover': {
      background: '$green300',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '@sm': {
      margin: '1rem 0'
    }
  }



})