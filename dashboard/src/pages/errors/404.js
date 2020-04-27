import React from 'react';
import Hero from '../../components/template/Hero';
import { Typography, Box } from '@material-ui/core';
import { Error as ErrorIcon } from '@material-ui/icons'

export default props => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <ErrorIcon />
      <Typography variant="h3">Erro 404</Typography>
      <Typography variant="body2">Página não encontrada.</Typography>
    </Box>
  )
}