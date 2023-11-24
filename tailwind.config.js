/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: {
          500: '#4361EE',
        },
      },
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontSize: {
      xs: [
        '8px',
        {
          letterSpacing: '2%',
          fontWeight: 'normal',
          lineHeight: '1rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          letterSpacing: '2%',
          fontWeight: 'normal',
          lineHeight: '1.25rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      xxl: [
        '1.5rem',
        {
          lineHeight: '2rem',
        },
      ],
      buttonText: [
        '14px',
        {
          letterSpacing: '2%',
          fontWeight: 'semi-bold',
        },
      ],
      labels: [
        '12px',
        {
          fontWeight: 'medium',
        },
      ],
      'xxx-small': [
        '6px',
        {
          fontWeight: 'medium',
        },
      ],
      'xx-small': [
        '8px',
        {
          fontWeight: 'medium',
        },
      ],
      'x-small': [
        '10px',
        {
          fontWeight: 'medium',
        },
      ],
      small: [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: 'medium',
        },
      ],
      'sm-regular': [
        '14px',
        {
          fontWeight: 'normal',
          lineHeight: '140%',
        },
      ],
      'md-regular': [
        '15px',
        {
          fontWeight: 'normal',
          lineHeight: '140%',
        },
      ],
      'sm-headline': ['16px', { lineHeight: '140%' }],
      'x-sm-headline': ['18px', { lineHeight: '140%' }],
      'md-headline': ['20px', { lineHeight: '140%' }],
      headline: ['24px', { fontWeight: 'medium' }],
      'l-headline': [
        '30px',
        {
          letterSpacing: '-2%',
        },
      ],
      'xl-heading': [
        '40px',
        {
          letterSpacing: '-2%',
        },
      ],
    },
    boxShadow: {
      none: 'none',
      error: '0px 0px 1px 3px rgba(212, 87, 87, 0.1)',
      active: '0px 0px 1px 3px rgba(168, 204, 255, 0.35)',
      gray: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      'gray-100': '0px 0px 3px rgba(0, 0, 0, 0.12)',
      'gray-200': '0px 0px 4px rgba(0, 0, 0, 0.13)',
    },
  },
  plugins: [require('daisyui')],
};
