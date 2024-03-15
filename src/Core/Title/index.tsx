import { TextFieldVariants, Typography } from '@mui/material'
import React from 'react'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';

interface TitleInterface {
    title: string;
    varaiant?: TypographyVariant
    props?: any
}

export const ATitle = ({title, varaiant, ...props}: TitleInterface) => {
  return (
    <Typography variant={varaiant} {...props}>{title}</Typography>
  )
}
