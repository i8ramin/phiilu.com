const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  mode: 'jit',
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/helpers/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': 'Open Sans, sans-serif',
        'source-sans-pro': 'Source Sans pro, sans-serif'
      },
      lineHeight: {
        14: '3rem'
      },
      colors: {
        amber: colors.amber,
        fuchsia: colors.fuchsia,
        prose: '#374151',
        time: '#6B7280',
        openvpn: {
          100: '#FFF4E6',
          200: '#FFE4BF',
          300: '#FFD399',
          400: '#FFB24D',
          500: '#FF9100',
          600: '#E68300',
          700: '#995700',
          800: '#734100',
          900: '#4D2C00'
        },
        raspberrypi: {
          100: '#F9E8ED',
          200: '#F0C6D2',
          300: '#E7A4B7',
          400: '#D56080',
          500: '#C31C4A',
          600: '#B01943',
          700: '#75112C',
          800: '#580D21',
          900: '#3B0816'
        },
        vscode: {
          100: '#ECF6FE',
          200: '#CFE9FC',
          300: '#B2DCFA',
          400: '#79C2F6',
          500: '#3FA8F2',
          600: '#3997DA',
          700: '#266591',
          800: '#1C4C6D',
          900: '#133249'
        },
        vultr: {
          100: '#E6F2FF',
          200: '#BFDEFE',
          300: '#99CAFE',
          400: '#4DA3FD',
          500: '#007BFC',
          600: '#006FE3',
          700: '#004A97',
          800: '#003771',
          900: '#00254C'
        },
        ubuntu: {
          100: '#FDEEE9',
          200: '#FAD4C7',
          300: '#F6BBA6',
          400: '#F08763',
          500: '#E95420',
          600: '#D24C1D',
          700: '#8C3213',
          800: '#69260E',
          900: '#46190A'
        },
        twitter: {
          100: '#E8F6FE',
          200: '#C7E8FC',
          300: '#A5D9FA',
          400: '#61BDF6',
          500: '#1DA1F2',
          600: '#1A91DA',
          700: '#116191',
          800: '#0D486D',
          900: '#093049'
        },
        github: {
          100: '#E9EAEA',
          200: '#C9CACB',
          300: '#A8AAAB',
          400: '#666A6D',
          500: '#252A2E',
          600: '#212629',
          700: '#16191C',
          800: '#111315',
          900: '#0B0D0E'
        },
        rss: {
          100: '#FEF4ED',
          200: '#FEE3D1',
          300: '#FDD2B6',
          400: '#FBB17F',
          500: '#F98F48',
          600: '#E08141',
          700: '#95562B',
          800: '#704020',
          900: '#4B2B16'
        },
        linkedin: {
          100: '#E6F1F8',
          200: '#BFDDED',
          300: '#99C9E1',
          400: '#4DA0CB',
          500: '#0077B5',
          600: '#006BA3',
          700: '#00476D',
          800: '#003651',
          900: '#002436'
        },
        hackernews: {
          100: '#FFEEE6',
          200: '#FFD6BF',
          300: '#FFBD99',
          400: '#FE8B4D',
          500: '#FE5900',
          600: '#E55000',
          700: '#983500',
          800: '#722800',
          900: '#4C1B00'
        },
        netlify: {
          100: '#f0fffe',
          200: '#9ffef6',
          300: '#53fef0',
          400: '#01fee9',
          500: '#01ac9e',
          600: '#018e82',
          700: '#017066',
          800: '#00514a',
          900: '#00332f'
        },
        serverless: {
          100: '#fff0f0',
          200: '#fec9c8',
          300: '#fea29f',
          400: '#fd7b77',
          500: '#fd544f',
          600: '#fc1008',
          700: '#c00902',
          800: '#790501',
          900: '#320201'
        },
        html: {
          100: '#fdf5f1',
          200: '#f8d0bf',
          300: '#f2ab8c',
          400: '#ec865a',
          500: '#e7642c',
          600: '#c54b16',
          700: '#933811',
          800: '#60240b',
          900: '#2e1105'
        },
        'react-gray': {
          100: '#f6f7f8',
          200: '#bdc2cc',
          300: '#868fa2',
          400: '#545d6d',
          500: '#282c34',
          600: '#23272e',
          700: '#1f2228',
          800: '#1b1d23',
          900: '#16181d'
        },
        react: {
          100: '#f5fdff',
          200: '#d7f6fe',
          300: '#b4edfd',
          400: '#92e5fc',
          500: '#65dbfb',
          600: '#0bc5f9',
          700: '#05addb',
          800: '#048db3',
          900: '#03627c'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              maxWidth: '100vw',
              borderRadius: 0
            },
            'pre code': {
              'word-break': 'normal'
            },
            'pre code::after': {
              content: 'none'
            },
            code: {
              'word-break': 'break-word'
            },
            a: {
              'word-break': 'break-word',
              textDecoration: 'none',
              color: theme('colors.indigo.500'),
              '&:hover': {
                color: theme('colors.indigo.600')
              },
              '&:visited': {
                color: theme('colors.indigo.800')
              }
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            strong: {
              color: theme('colors.gray.100')
            },
            blockquote: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
              paddingTop: theme('spacing.4'),
              paddingBottom: theme('spacing.4'),
              borderTopRightRadius: theme('borderRadius.md'),
              borderBottomRightRadius: theme('borderRadius.md'),
              '> p': {
                margin: 0
              }
            },
            h1: {
              color: theme('colors.gray.100')
            },
            h2: {
              color: theme('colors.gray.100')
            },
            h3: {
              color: theme('colors.gray.100')
            },
            h4: {
              color: theme('colors.gray.100')
            },
            h5: {
              color: theme('colors.gray.100')
            },
            h6: {
              color: theme('colors.gray.100')
            },
            a: {
              color: theme('colors.indigo.500'),
              '&:hover': {
                color: theme('colors.indigo.600')
              },
              '&:visited': {
                color: theme('colors.indigo.700')
              }
            },
            code: {
              color: theme('colors.gray.200')
            },
            hr: {
              borderColor: theme('colors.gray.800')
            }
          }
        }
      })
    }
  },
  variants: {
    extend: { typography: ['dark'], translate: ['group-hover'] }
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')]
};
