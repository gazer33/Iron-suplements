const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1636px', 
    },
    extend: {
      boxShadow: {
        'custom-purple': '0px 7px 0px 0px #321F73', // Color definido directamente
        'label-home': '0px 6px 34px 0px rgba(60, 34, 147, 0.15)',
        'input': '0px 0px 72px 0px rgba(133, 170, 255, 0.7)',
        'input-cards': '0px 10px 39px 0px rgba(133, 170, 255, 0.7)',
        'laterales': '4px 0 8px -4px rgba(0, 0, 0, 0.1), -4px 0 8px -4px rgba(0, 0, 0, 0.1)'
      },
      textShadow: {
        'text-dental': '0px 4px 14px rgba(0, 0, 0, 0.10), 0px 2px 12px rgba(0, 0, 0, 0.03), 0px 2px 5px rgba(0, 0, 0, 0.15)',

      },
      backgroundImage: {
        'bg-pain-free': `
          linear-gradient(180deg, rgba(50, 31, 115, 0) 40%, rgba(50, 31, 115, 0.75) 100%), 
          url('https://pub-3c78cd3111844170b1febd4fc7d1ed19.r2.dev/pain-free-bg.png')`,

        'bg-top-notch': `
          linear-gradient(180deg, rgba(50, 31, 115, 0) 40%, rgba(50, 31, 115, 0.75) 100%), 
          url('https://pub-3c78cd3111844170b1febd4fc7d1ed19.r2.dev/top-notch-dental.png')`,
        'bg-affordable-durable': `
          linear-gradient(180deg, rgba(50, 31, 115, 0) 40%, rgba(50, 31, 115, 0.75) 100%), 
          url('https://pub-3c78cd3111844170b1febd4fc7d1ed19.r2.dev/affordabl-durable-crowns.png')`,
        'bg-wisdom-tooth': `
          linear-gradient(180deg, rgba(50, 31, 115, 0) 40%, rgba(50, 31, 115, 0.75) 100%), 
          url('https://pub-3c78cd3111844170b1febd4fc7d1ed19.r2.dev/wisdom-tooth.png')`,
        'bg-premium-composite': `
          linear-gradient(180deg, rgba(50, 31, 115, 0) 40%, rgba(50, 31, 115, 0.75) 100%), 
          url('https://pub-3c78cd3111844170b1febd4fc7d1ed19.r2.dev/premium-composite-dental.png')`,
        'bg-comfy-removable': `
          linear-gradient(180deg, rgba(50, 31, 115, 0) 40%, rgba(50, 31, 115, 0.75) 100%), 
          url('https://pub-3c78cd3111844170b1febd4fc7d1ed19.r2.dev/comfy-removable.png')`,
          'bg-gradient-home': `
          linear-gradient(180deg, #E3E0FF 0%, #C9F1FF 100%)
          `,
          'linear-gradient-peach-pin':
           `linear-gradient(180deg, #FFF3DA 0%, #FFE4ED 100%)`,
           'linear-gradient-tooth-home':
           `linear-gradient(180deg, #DAFAFF 0%, #EDEDFF 100%)`,
           'gradiente-purple': 'linear-gradient(180deg, #362FB3 0%, #4017CB 100%)',
           'gradient-blue-lila': 'linear-gradient(268deg, #83AAFF 13.66%, #AD8AFF 51.84%)',
            'gradient-blue-card-calculator': 'linear-gradient(180deg, #F5F4FF 0%, #DEF 100%)',
            'cards-gradient': 'linear-gradient(180deg, #FEF0F7 0%, #E7EBFF 100%)',
            'cards-root': 'linear-gradient(180deg, #F5F4FF 0%, #DEF 100%)',
            'terms-container': 'linear-gradient(180deg, #F5F4FF 0%, #DEF 100%)',

      },
      
    
      colors: {
        Primitive:{
        purple: {
          100: '#e8e7ff',
          200: '#dfddff',
          300: '#d3cfff',
          400: '#b4aeff',
          500: '#9289ff',
          600: '#6f64ee',
          700: '#4c3fe5',
          800: '#321f73',
          900: '#4c41ce',
          950: '#4D2FB3',
          1000: '#452B9E',
          1100: '#7249FF'
        },
        yellow: {
          100: '#fff8df',
          200: '#ffefb6',
          300: '#ffe27c',
          400: '#ffd647',
          500: '#ffb813',
          600: '#eb9501',
          700: '#c07000',
          800: '#4f2c01',
        },
        blue: {
          100: '#ecf7fa',
          200: '#ddf3f9',
          300: '#d0edf5',
          400: '#ade6f7',
          500: '#87d7f4',
          600: '#60c2ec',
          700: '#33a4ea',
          800: '#104786',
        },
        green: {
          100: '#f1f8f0',
          200: '#dff3dc',
          300: '#c5eabf',
          400: '#ace6a3',
          500: '#7fd172',
          600: '#42ae4e',
          700: '#207958',
          800: '#0d3a3f',
        },
        magenta: {
          100: '#fff3f7',
          200: '#ffe8ef',
          300: '#fad6e1',
          400: '#f0b3c6',
          500: '#e495ad',
          600: '#c56481',
          700: '#943b55',
          800: '#5d162b',
        },
        neutral: {
          100: '#ffffff',
          200: '#ebe7f7',
          300: '#c6bde2',
          400: '#9587c3',
          500: '#62519e',
          600: '#463483',
          700: '#321f73',
          800: '#241557',
          900: '#0e0338',
        },
        brown: {
          100: '#fbf6f1',
          200: '#f3e6da',
          300: '#e1cebc',
          400: '#ccb299',
        },
      },
    },
      fontFamily: {
        recoleta: ['Recoleta', 'sans-serif'],
        aeonik: ['Aeonik', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'] 
      },
      fontWeight: {
        light: '400',
        regular: '500',
        mid: '600',
        strong: '700',
      },
      fontSize:{
        'display-12': '5rem',
        'display-11': '3.75rem',
        'display-10': '2.625rem',
        'display-9': '2.125rem',
        'display-8': '1.75rem',
        'display-7': '1.375rem',
        'display-6': '1.25rem',
        'display-5': '1.125rem',
        'display-4': '1rem',
        'display-3': '0.875rem',
        'display-2': '0.75rem',
        'display-1': '0.625rem',
        'display-mobile-12': '2.75rem',
        'display-mobile-11': '2.5rem',
        'display-mobile-10': '2rem',
        'display-mobile-9': '1.5rem',
        'display-mobile-8': '1.25',
        'display-mobile-6': '1.125rem',
        'display-mobile-5': '0.875',
        'display-mobile-4': '0.75rem',
        'display-mobile-3': '0.625',
        'display-mobile-2': '0.5',
        'display-mobile-1': '0.5',

        'paragraph-large': '30px',
        'paragraph-medium': '24px',
        'paragraph-default': '20px',
        'paragraph-small': '18px',
        'paragraph-extra-small': '12px',
        'paragraph-large-mobile': '28px',
        'paragraph-medium-mobile': '16px',
        'paragraph-default-mobile': '20px',
        'paragraph-default-mobile': '20px',
        'paragraph-small-mobile': '16px',
        'paragraph-extra-small-mobile': '12px',

        'marquee-coming': '171.963px',
      },
      height:{
  'svg-instagram': '31px',
  'svg-instagram-mobile': '20px',
  'svg-tiktok': '35px',
  'svg-tiktok-mobile': '23px',
  'svg-youtube': '41px',
  'svg-youtube-mobile': '27px',
  'svg-facebook': '35px',
  'svg-facebook-mobile': '23px',



      },
      width:{
        'container-home-hero': '610px',
      'container-mobile-default': '1352px',


        'container-default': '1352px',
        'container-default-mobile': '1352px',
        'container-section-treatment-hero': '1900px',

        'svg-instagram': '51px',
        'svg-instagram-mobile': '20px',
        'svg-tiktok': '44px',
        'svg-tiktok-mmobile': '44px',
        'svg-youtube': '41px',
        'svg-youtube-mobile': '27px',

        'svg-facebook': '34px',
        'svg-facebook-mobile': '23px',

          'semi-full': '95%',
      'container-badge': '538px',
      'container-badge-mobile': '360px',
      'icon-btn': '75px',

      },
      maxWidth:{
        'container-home-hero': '610px',
        'container-default': '1352px',
        'blog-container': '540px',
        'input-container': '540px',
      'container-coming': '900px',
      'container-treatments': '1520px',
      
          'span-cards': '440px',
          'section-treatments-magenta': '840px',
      },
      minWidth: {
        'cards-min-size' : '544px',
      'icon-btn': '75px',

      },
      minHeight: {
        'cards-image-container' : '348px',
      'icon-btn': '75px',

      },
      padding:{
        'container': '24px',
        'container-mobile': '20px',
        'container-coming-soon': '70px',

        'space-0': '0px',
        'space-1': '4px',
        'space-2': '6px',
        'space-2.5': '8px',
        'space-2.5': '10px',
        'space-3': '12px',
        'space-3.5': '14px',
        'space-4': '16px',
        'space-4.5': '18px',
        'space-5': '20px',
        'space-6': '24px',
        'space-6.5': '26px',
        'space-7': '28px',
        'space-7.2': '29px',
        'space-7.5': '30px',
        'space-8': '32px',
        'space-9': '36px',
        'space-9.5': '38px',
        'space-10': '40px',
        'space-11': '44px',
        'space-12': '48px',
        'space-14': '50px',
        'space-15': '56px',
        'space-15.5': '60px',
        'space-16': '64px',
        'space-20': '80px',
        'space-24': '96px',
        'space-26': '112px',
        'space-32': '128px',
        'space-36': '144px',
        'space-0_5': '2px',
        'space-1_5': '6px',
        'space-2_5': '10px',
        'space-3_5': '14px',

        'space-mobile-11': '36px',


        'sections-xxs': '80px',
        'sections-xs': '120px',
        'sections-small': '164px',
        'sections-default': '240px',
        'sections-treatment': '270px',

        'section-2xl': '10%',

        'sections-mobile-small': '80px',
        'sections-mobile-default': '100px',
        'sections-mobile-xs': '60px',

        'container-images-home': '100%',

      },
      
      borderRadius:{
        'radius-xxs': '4px',
        'radius-xs': '8px',
        'radius-sm': '18px',
        'radius-md': '22px',
        'radius-lg': '32px',
        'radius-xl': '40px',
        'radius-xxl': '48px',
        'radius-3xl': '64px',
        'radius-full': '999999px',
        

        'radius-xxs-mobile': '0px',
        'radius-xs-mobile': '8px',
        'radius-sm-mobile': '18px',
        'radius-md-mobile': '22px',
        'radius-lg-mobile': '32px',
        'radius-xl-mobile': '40px',
        'radius-xxl-mobile': '48px',
        'radius-3xl-mobile': '64px',
        'radius-full-mobile': '999999px',

          'radius-button-Coming': '20px',
          'radius-container-badge': '90px',

      },
      stroke: {
        'md': '3rem',
        'df':  '1.5rem',
        'mobile-df': '1.5rem',
        'mobile-md': '2.5rem'
        
      },
      gap: {
        'space-0': '0px',
        'space-1': '4px',
        'space-2': '8px',
        'space-2.5': '10px',
        'space-3': '12px',
        'space-4': '16px',
        'space-5': '20px',
        'space-6': '24px',
        'space-7': '28px',
        'space-8': '32px',
        'space-9': '36px',
        'space-10': '40px',
        'space-11': '44px',
        'space-12': '48px',
        'space-14': '50px',
        'space-15': '56px',
        'space-16': '64px',
        'space-20': '80px',
        'space-24': '96px',
        'space-26': '112px',
        'space-32': '128px',
        'space-0_5': '2px',
        'space-1_5': '6px',
        'space-2_5': '10px',
        'space-3_5': '14px',
        'sections-xxs': '80px',
        'sections-xs': '120px',
        'sections-small': '164px',
        'sections-default': '240px',
        'sections-treatment': '270px',

        'mobile-space-0': '0px',
        'mobile-space-1': '4px',
        'mobile-space-2': '6px',
        'mobile-space-3': '8px',
        'mobile-space-3.5': '10px',
        'mobile-space-4': '12px',
        'mobile-space-5': '14px',
        'mobile-space-6': '16px',
        'mobile-space-7': '18px',
        'mobile-space-8': '20px',
        'mobile-space-9': '28px',
        'mobile-space-10': '32px',
        'mobile-space-11': '36px',
        'mobile-space-12': '38px',
        'mobile-space-14': '42px',
        'mobile-space-16': '48px',
        'mobile-space-20': '62px',
        'mobile-space-24': '78px',
        'mobile-space-26': '94px',
        'mobile-space-32': '104px',
        'mobile-space-36': '124px',
        'mobile-space-32': '104px',
        'mobile-space-0_5': '2px',
        'mobile-space-1_5': '4px',
        'mobile-space-2_5': '8px',
        'mobile-space-3_5': '10px',

        'mobile-sections-xxs': '40px',
        'mobile-sections-xs': '60px',
        'mobile-sections-small': '80px',
        'mobile-sections-default': '100px',
        
        'social-media-buttons': '-14px',

        'social-media-buttons-footer': '10px',

      },
      lineHeight:{
        '94': '94%',
        '97': '97%',
        '98': '98%',
        '100': '221.519px',
        '150': '150%',
        '116': '116%',
        '106': '106%',
        '135': '135%',
      },
      animation: {
        'marquee-right': 'marquee-right 25s linear infinite',
        'marquee-right2': 'marquee-right2 25s linear infinite',
        'marquee-left': 'marquee-left 25s linear infinite',
        'marquee-left2': 'marquee-left2 25s linear infinite',
      },
      keyframes: {
        'marquee-right': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'marquee-right2': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        'marquee-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        'marquee-left2': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      margin: {
      'svg-coming-container': '100px',

      'space-0': '0px',
      'space-1': '4px',
      'space-2': '6px',
      'space-2.5': '8px',
      'space-2.5': '10px',
      'space-3': '12px',
      'space-4': '16px',
      'space-5': '20px',
      'space-6': '24px',
      'space-7': '28px',
      'space-8': '32px',
      'space-9': '36px',
      'space-10': '40px',
      'space-11': '44px',
      'space-12': '48px',
      'space-14': '50px',
      'space-16': '64px',
      'space-20': '80px',
      'space-24': '96px',
      'space-26': '112px',
      'space-32': '128px',
      'space-0_5': '2px',
      'space-1_5': '6px',
      'space-2_5': '10px',
      'space-3_5': '14px',
      'sections-xxs': '80px',
      'sections-xs': '120px',
      'sections-small': '164px',
      'sections-default': '240px',
      'sections-treatment': '270px',
    
      'section-treatments-dark':'12%',
      'section-treatments-white':'16%',
      'section-treatments-green':'23%',
    },
    
    
     
    },
    borderWidth:{
      'container-badge': '3px',
      'btn-contact-us': '1.5px',
    }
  },


  

  plugins: [
    plugin(function({ addComponents, theme }) {
      const newUtilities = {
        '.text-shadow-profunda': {
          'text-shadow': '0px 4px 14px rgba(0, 0, 0, 0.10), 0px 2px 12px rgba(0, 0, 0, 0.03), 0px 2px 5px rgba(0, 0, 0, 0.15)',
        }
      }
      const semanticColors = {
        '.surface-accent-1100': {
          backgroundColor: theme('colors.Primitive.purple.1100'),
          color: theme('colors.Primitive.purple.1100'),
          borderColor: theme('colors.Primitive.purple.1100'),
        },
        '.surface-accent-1000': {
          backgroundColor: theme('colors.Primitive.purple.1000'),
          color: theme('colors.Primitive.purple.1000'),
          borderColor: theme('colors.Primitive.purple.1000'),
        },
        '.surface-accent-950': {
          backgroundColor: theme('colors.Primitive.purple.950'),
          color: theme('colors.Primitive.purple.950'),
          borderColor: theme('colors.Primitive.purple.950'),
        },
        '.surface-accent': {
          backgroundColor: theme('colors.Primitive.purple.600'),
          color: theme('colors.Primitive.purple.600'),
          borderColor: theme('colors.Primitive.purple.600'),
        },
        '.surface-accent-medium': {
          backgroundColor: theme('colors.Primitive.purple.500'),
          color: theme('colors.Primitive.purple.500'),
          borderColor: theme('colors.Primitive.purple.500'),

        },
        '.surface-accent-medium-light': {
          backgroundColor: theme('colors.Primitive.purple.400'),
          color: theme('colors.Primitive.purple.400'),
          borderColor: theme('colors.Primitive.purple.400')

        },
        '.surface-accent-light': {
          backgroundColor: theme('colors.Primitive.purple.200'),
          color: theme('colors.Primitive.purple.200'),          
        },
        '.surface-level-1': {
          backgroundColor: theme('colors.Primitive.brown.100'),
          color: theme('colors.Primitive.brown.100'),
          borderColor: theme('colors.Primitive.brown.100')
        },
        '.surface-level-2': {
          backgroundColor: theme('colors.Primitive.neutral.700'),
          color: theme('colors.Primitive.neutral.700'),
          borderColor : theme('colors.Primitive.neutral.700'),

        },
        '.surface-level-3': {
          backgroundColor: theme('colors.Primitive.green.800'),
          color: theme('colors.Primitive.green.800'),
          borderColor: theme('colors.Primitive.green.800'),
          
        },
        '.surface-level-4': {
          backgroundColor: theme('colors.Primitive.neutral.600'),
          color: theme('colors.Primitive.neutral.600'),
          borderColor: theme('colors.Primitive.neutral.600'),

        },
        '.surface-level-5': {
          backgroundColor: theme('colors.Primitive.green.400'),
          color: theme('colors.Primitive.green.400'),
          borderColor: theme('colors.Primitive.green.400'),
        },
        '.surface-level-6': {
          backgroundColor: theme('colors.Primitive.yellow.200'),
          color: theme('colors.Primitive.yellow.200'),
          borderColor: theme('colors.Primitive.yellow.200'),
          
        },
        '.surface-level-7': {
          backgroundColor: theme('colors.Primitive.blue.700'),
          color: theme('colors.Primitive.blue.700'),
          borderColor: theme('colors.Primitive.blue.700'),

        },
        '.surface-level-8': {
          backgroundColor: theme('colors.Primitive.neutral.100'),
          color: theme('colors.Primitive.neutral.100'),
          borderColor: theme('colors.Primitive.neutral.100'),

        },
        '.surface-level-9': {
          backgroundColor: theme('colors.Primitive.brown.300'),
          color: theme('colors.Primitive.brown.300'),
          borderColor: theme('colors.Primitive.brown.300'),
          
        },
        '.surface-level-10': {
          backgroundColor: theme('colors.Primitive.yellow.200'),
          color: theme('colors.Primitive.yellow.200'),
          borderColor: theme('colors.Primitive.yellow.200'),
        },
        '.surface-level-11': {
          backgroundColor: theme('colors.Primitive.blue.400'),
          color: theme('colors.Primitive.blue.400'),
          borderColor: theme('colors.Primitive.blue.400'),
        },
        '.surface-level-12': {
          backgroundColor: theme('colors.Primitive.magenta.700'),
          color: theme('colors.Primitive.magenta.700'),
          borderColor: theme('colors.Primitive.magenta.700'),

        },
        '.surface-level-13': {
          backgroundColor: theme('colors.Primitive.blue.800'),
          color: theme('colors.Primitive.blue.800'),
          borderColor: theme('colors.Primitive.blue.800'),

        },
        
      }
      const componentStyles = {
        '.section-bg-light': {
          backgroundColor: semanticColors['.surface-level-1'].backgroundColor 
        },
        '.section-bg-purple-dark': {
          backgroundColor: semanticColors['.surface-level-2'].backgroundColor
        },
        '.section-bg-green-dark': {
          backgroundColor: semanticColors['.surface-level-3'].backgroundColor
        },
        '.section-bg-accent-light': {
          backgroundColor: semanticColors['.surface-accent-medium'].backgroundColor
        },
        '.section-bg-dark-magenta': {
          backgroundColor:  semanticColors['.surface-level-12'].backgroundColor
        },
        '.section-bg-blue-dark': {
          backgroundColor:  semanticColors['.surface-level-13'].backgroundColor
        },
        '.btn-secondary':{
          '&-text-purple-dark':{
            color: semanticColors['.surface-level-2'].color
          },
          '&-border-purple-medium-dark':{
            borderColor: semanticColors['.surface-level-2'].borderColor
          },
          '&-text-light':{
            color: semanticColors['.surface-level-1'].color
          },
          '&-border-light':{
            borderColor: semanticColors['.surface-level-1'].borderColor
          },
          '&-layout':{
            display: 'flex',
            padding: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            borderWidth: '2px',
            borderRadius: '10px',
            fontFamily: 'aeonik',
            fontSize: theme('fontSize.paragraph.medium-mobile'),
            fontWeight: theme('fontWeight.regular'),
            lineHeight: theme('lineHeight.116'),
            cursor: 'pointer',
            zIndex: '10', 

            '@screen lg': {
              padding: '28px 30px',
              borderRadius: theme('borderRadius.radius-md'),
              fontSize: '20px',

            }

          },
        },
        '.btn-primary':{
        '&-bg-accent':{
          backgroundColor: semanticColors['.surface-accent'].backgroundColor
        },
        '&-bg-accent-medium-light':{
          backgroundColor: semanticColors['.surface-accent-medium-light'].backgroundColor
        },
        '&-bg-purple-dark':{
          backgroundColor: semanticColors['.surface-level-2'].backgroundColor
        },
        '&-bg-green':{
          backgroundColor: semanticColors['.surface-level-5'].backgroundColor
        },
        '&-bg-white':{
          backgroundColor: semanticColors['.surface-level-8'].backgroundColor
        },
        '&-text-light':{
          color: semanticColors['.surface-level-1'].color
        },
        '&-text-purple-dark':{
          color: semanticColors['.surface-level-2'].color
        },
        '&-layout':{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          zIndex: '10',
          fontWeight: theme('fontWeight.strong'),
          fontFamily: theme('fontFamily.aeonik'),
          padding: '12px',
          borderRadius: '12px',
          lineHeight: theme('lineHeight.116'),

          '@screen lg': {
            padding: '1.75rem 30px',
            borderRadius: theme('borderRadius.radius-md'),
            fontSize: theme('fontSize.display-6'),
            
          }
        },
        '&-layout-icon':{
          display: 'flex',
          padding: '12px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          borderRadius: '12px' ,
          cursor: 'pointer',
          zIndex: '10',
          gap: '10px',

          '@screen lg': {
            width: '75px',
            minWidth: '75px',
            padding: '29px 30px',
            borderRadius: theme('borderRadius.radius-md'),

          }
        }

        },
        '.link':{
          '&-text-purple-dark':{
            color: semanticColors['.surface-level-2'].color
          }
        },
        '.icon':{
         '&-border-accent':{
          borderColor: semanticColors['.surface-accent'].borderColor
         },
         '&-border-purple-dark':{
          borderColor: semanticColors['.surface-level-2'].borderColor
         },
         '&-bg-white':{
          backgroundColor: semanticColors['.surface-level-8'].backgroundColor
         }
        },
        '.text':{
          '&-text-white':{
            color: semanticColors['.surface-level-8'].color
          },
          '&-subtitle':{
          '&-accent':{
            color: semanticColors['.surface-accent'].color
          },
          '&-yellow':{
            color: semanticColors['.surface-level-6'].color
          },
          '&-blue': {
            color: semanticColors['.surface-level-7'].color
          },
          '&-green':{
            color: semanticColors['.surface-level-5'].color
          },
          '&-white':{
            color: semanticColors['.surface-level-8'].color
          }
        },
        '&-heading': {
          '&-purple':{
            color: semanticColors['.surface-accent-950'].color
          },  
          '&-purple-1000':{
            color: semanticColors['.surface-accent-1000'].color
          },
          '&-purple-1100':{
            color: semanticColors['.surface-accent-1100'].color
          },
          '&-purple-dark':{
            color: semanticColors['.surface-level-2'].color
          },
          '&-purple-light':{
            color: semanticColors['.surface-accent-light'].color
          },
          '&-white': {
            color: semanticColors['.surface-level-8'].color
          },
          '&-yellow':{
            color: semanticColors['.surface-level-6'].color
          }
        },
        '&-paragraph':{
          '&-purple-medium-dark': {
            color: semanticColors['.surface-level-4'].color
          },
         '&-purple-medium-light': {
          color: semanticColors['.surface-accent-medium-light'].color
         },
         '&-purple-light':{
          color: semanticColors['.surface-accent-light'].color
         },
         
        },

        },
        '.topbar-items': {
          color: theme('colors.Primitive.brown.100'),
          fontSize: '14px',
          fontWeight: theme('fontWeight.mid'),
        },
        '.header-nav': {
          display: 'none',

          '@screen lg': {
            display: 'block'
            
          }
        },
        '.header-nav-items': {
          display: 'flex',
          alignItems: 'center',
          color: theme('colors.Primitive.purple.800'),
          fontSize: theme('fontSize.display-5'),
          fontWeight: theme('fontWeight.mid'),
          gap: '4px',
          
        },
        '.ul-header': {
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
         
        },
        '.image-treatment':{
          top: '95px',
          width: '100%',
          maxWidth: '425px',
          
          minHeight: '407px',
          height: '407px',
          borderRadius: '348px 348px 48px 48px',
          '@screen lg':{
            position: 'absolute',
            height: '704px',
          maxWidth: '625px',
          width: '625px',

          }
        },
        '.swoosh':{
          '&-bg':{
            '&-yellow':{
              backgroundColor: theme('colors.Primitive.yellow.200')
            },
            '&-green':{
              backgroundColor: semanticColors['.surface-level-5'].backgroundColor
            },
            '&-blue':{
              backgroundColor: semanticColors['.surface-level-11'].backgroundColor
            },

          }
        },
        '.card':{
        '&-bg':{
          '&-brown-light':{
            backgroundColor: semanticColors['.surface-level-1'].backgroundColor
          },
          '&-white':{
            backgroundColor: semanticColors['.surface-level-8'].backgroundColor
          },
          '&-yellow-light':{
             backgroundColor: semanticColors['.surface-level-10'].backgroundColor
            }
        }
        },
        '.border':{
          '&-purple-light':{
            borderColor: semanticColors['.surface-accent-medium'].borderColor
          },
          '&-brown-medium-light':{
            borderColor: semanticColors['.surface-level-9'].borderColor
          },
          '&-white':{
            borderColor: semanticColors['.surface-level-8'].borderColor
          },
          '&-dark':{
            borderColor: semanticColors['.surface-level-2'].borderColor
          }
          
        },
        '.accordion':{
          '&-title':{
            color: semanticColors['.surface-level-2'].color
          },
          '&-paragraph':{
            color: semanticColors['.surface-level-4'].color
          },
          '&-bg-open':{
            backgroundColor: semanticColors['.surface-accent-light'].backgroundColor
          },
          '&-bg-closed':{
            backgroundColor: semanticColors['.surface-level-8'].backgroundColor
          }
        },
        '.input':{

          '&-bg':{
          '&-brown-light':{
            backgroundColor: semanticColors['.surface-level-1'].backgroundColor
          }},
          '&-placeholder-dark':{
           '&::placeholder':{
            color: semanticColors['.surface-accent-light'].color
           }
          },
          '&-placeholder-dark-950':{
           '&::placeholder':{
            color: semanticColors['.surface-accent-950'].color
           }
          },
          '&-placeholder-purple-dark':{
            color: semanticColors['.surface-level-2'].color
          },
          '&-border-purple-light':{
            borderColor: semanticColors['.surface-accent-medium'].borderColor
          },
          '&-label-dark':{
            color: semanticColors['.surface-level-8'].color
          },
          
        },
        '.btn-social-media-footer-first': {
        display: 'flex',
        backgroundColor: theme('colors.Primitive.neutral.100'),
        borderRadius: '13px',
        maxWidth: '70.477px',
        maxHeight: '60.477px',
        rotate: '-18deg',
        padding: '20px',
        justifyContent: 'center',
        gap: '8.893px',
        alignItems: 'center',
        transition: 'all 200ms ease-in-out',

      '&:hover': {
       borderRadius: '18.883px',
       maxWidth: '58.365px',
       maxHeight: '58.365px',
       gap: '6.787px',
       backgroundColor: semanticColors['.surface-level-2'].backgroundColor,



      },
      '&:active': {
        transform: 'rotate(-18deg) translateY(-2px)',
        transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    


        '@screen lg': {
        borderRadius: '22px',
        maxWidth: '76px',
        maxHeight: '76px',
        padding: '23px',
        gap: '10px',

        },

       },
       '.btn-social-media-footer-secondary': {
        display: 'flex',
        backgroundColor: theme('colors.Primitive.neutral.100'),
        borderRadius: '13px',
        maxWidth: '76.477px',
        maxHeight: '60.477px',
        rotate: '4deg',
        padding: '20px',
        justifyContent: 'center',
        gap: '8.893.11px',
        alignItems: 'center',
        transition: 'all 200ms ease-in-out',



      '&:hover': {
       borderRadius: '18.883px',
       maxWidth: '52.365px',
       maxHeight: '48.365px',
       gap: '6.787px',
       backgroundColor: semanticColors['.surface-level-2'].backgroundColor,



      },
      '&:active': {
        transform: 'rotate(4deg) translateY(-2px)',
        transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },


        '@screen lg': {
        borderRadius: '22px',
        maxWidth: '76px',
        maxHeight: '76px',
        padding: '23px',
        gap: '10px',
          '&:hover ': {
            maxWidth: '58.365px',
       maxHeight: '58.365px',
          }

        },

       },
       'gap-social-media-footer':{
          gap: '10px',

          '@screen lg':{
            gap: '-14px',
          }
       },
       '.btn-social-media-comming-soon-first': {
        display: 'flex',
        backgroundColor: semanticColors['.surface-accent'].backgroundColor,
        borderRadius: '8px',
        maxWidth: '44px',
        maxHeight: '44px',
        rotate: '-18deg',
        padding: '11.767px',
        justifyContent: 'center',
        gap: '5.11px',
        alignItems: 'center',
        transition: 'all 200ms ease-in-out',

      '&:hover': {
       borderRadius: '18.883px',
       maxWidth: '58.365px',
       maxHeight: '58.365px',
       gap: '6.787px',
       backgroundColor: semanticColors['.surface-level-2'].backgroundColor,



      },
      '&:active': {
        transform: 'rotate(-18deg) translateY(-2px)',
        transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    


        '@screen lg': {
        borderRadius: '22px',
        maxWidth: '70px',
        maxHeight: '68px',
        padding: '18.186px',
        gap: '7.907px',

        },

       },
       '.btn-social-media-comming-soon-first-new-design': {
        display: 'flex',
        borderRadius: '8px',
        maxWidth: '44px',
        maxHeight: '44px',
        rotate: '-18deg',
        padding: '11.767px',
        justifyContent: 'center',
        
        alignItems: 'center',
        transition: 'all 200ms ease-in-out',

      '&:hover': {
       borderRadius: '18.883px',
       maxWidth: '58.365px',
       maxHeight: '58.365px',
       gap: '6.787px',
       backgroundColor: semanticColors['.surface-level-2'].backgroundColor,



      },
      '&:active': {
        transform: 'rotate(-18deg) translateY(-2px)',
        transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    


        '@screen lg': {
        borderRadius: '22px',
        maxWidth: '70px',
        maxHeight: '68px',
        padding: '18.186px',
        gap: '7.907px',

        },

       },
       '.btn-social-media-comming-soon-secondary': {
        display: 'flex',
        backgroundColor: semanticColors['.surface-accent'].backgroundColor,
        borderRadius: '8px',
        maxWidth: '44px',
        maxHeight: '44px',
        rotate: '4deg',
        padding: '11.767px',
        justifyContent: 'center',
        gap: '5.11px',
        alignItems: 'center',
        transition: 'all 200ms ease-in-out',



      '&:hover': {
       borderRadius: '18.883px',
       maxWidth: '52.365px',
       maxHeight: '48.365px',
       gap: '6.787px',
       backgroundColor: semanticColors['.surface-level-2'].backgroundColor,



      },
      '&:active': {
        transform: 'rotate(4deg) translateY(-2px)',
        transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },


        '@screen lg': {
        borderRadius: '22px',
        maxWidth: '70px',
        maxHeight: '68px',
        padding: '18.186px',
        gap: '7.907px',
          '&:hover ': {
            maxWidth: '58.365px',
       maxHeight: '58.365px',
          }

        },

       },
       '.btn-social-media-comming-soon-secondary-new-design': {
        display: 'flex',
        borderRadius: '8px',
        maxWidth: '44px',
        maxHeight: '44px',
        rotate: '4deg',
        padding: '11.767px',
        justifyContent: 'center',
        gap: '5.11px',
        alignItems: 'center',
        transition: 'all 200ms ease-in-out',



      '&:hover': {
       borderRadius: '18.883px',
       maxWidth: '52.365px',
       maxHeight: '48.365px',
       gap: '6.787px',
       backgroundColor: semanticColors['.surface-level-2'].backgroundColor,



      },
      '&:active': {
        transform: 'rotate(4deg) translateY(-2px)',
        transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },


        '@screen lg': {
        borderRadius: '22px',
        maxWidth: '70px',
        maxHeight: '68px',
        padding: '18.186px',
        gap: '7.907px',
          '&:hover ': {
            maxWidth: '58.365px',
       maxHeight: '58.365px',
          }

        },

       },
       '.radial-gradient': {
        background: 'radial-gradient(circle at center, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.3) 75%, transparent 100%)',
        filter: `blur(${theme('blur.custom-40')})`,
        borderRadius: theme('borderRadius.custom-100'),
      },
      '.radial-gradient-intense': {
        background: 'radial-gradient(circle at center, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.95) 30%, rgba(255, 255, 255, 0.8) 60%, rgba(255, 255, 255, 0.2) 80%, transparent 100%)',
        filter: `blur(${theme('blur.custom-40')})`,
        borderRadius: theme('borderRadius.custom-100'),
      },
      '.radial-gradient-purple': {
        background: 'radial-gradient(circle at center, rgb(255, 255, 255) 0%, rgba(250, 245, 255, 0.95) 30%, rgba(245, 240, 255, 0.8) 60%, rgba(240, 235, 255, 0.2) 80%, transparent 100%)',
        filter: `blur(${theme('blur.custom-40')})`,
        borderRadius: theme('borderRadius.custom-100'),
      },
      '.treatments-cards': {
        borderRadius: '22px',
        padding: '16px',
        width: '416px',
        height: '541px',
        maxWidth: '416px',
      },
      '.backdrop-custom-blur': {
        backdropFilter: 'blur(99.85px)',
      },
      '.dental-office-cards':{
        width: '574px',
        height: '349px',
        borderWidth: '8px',
        borderColor: '#fff',
        borderRadius: '48px',
        alignItems: 'center',
        justifyContent: 'center',

      '@screen lg':{
        height: '538px'
        
      }
      },
      '.discount-badge': {
        width: '285px',
        paddingTop: '18px',
        paddingBottom: '18px',
        paddingLeft: '32px',
        paddingRight: '32px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '90px',
        borderWidth: '3px',

      },
      '.buttons-group-btn-class':{
        borderRadius: '18px',
        display: 'flex',
        padding: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        fontFamily: 'aeonik',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '116%',
        '@screen lg':{
        borderRadius: '22px',
        paddingTop: '26px',
        paddingBottom: '26px',
        paddingLeft: '36px',
        paddingRight: '36px',
        fontSize: '20px',
        }
      },
      '.buttons-group-icon-class': {
        borderRadius: '19px',
        display: 'flex',
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        alignSelf: 'stretch',

        '@screen lg':{
          width: '75px',
          minHeight: '75px',
          minWidth: '75px',
          paddingTop: '30px',
          paddingBottom: '30px',

        },
      },
      '.buttons-group-icon-class-section-questions': {
        borderRadius: '19px',
        display: 'flex',
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        alignSelf: 'stretch',
      
        '@screen lg':{
          width: '48px',
          minHeight: '48px',
          minWidth: '48px',
          paddingTop: '10px',
          paddingBottom: '10px',

        },
      },
      '.buttons-group-secondary-class': {
        display: 'flex',
        padding: '16px',
        borderRadius: '18px',
        fontFamily: 'aeonik',
        fontWeight: '500',
        lineHeight: '116%',
        fontSize: '16px',

         '@screen lg': {
          paddingTop: '26px',
          paddingBottom: '26px',
          paddingLeft: '36px',
          paddingRight: '36px',
          borderRadius: '22px',
          fontSize: '20px'
         },
      },
        '.input-help': {
          transition: 'padding-left 400ms ease-in-out', // Transición normal
          display: 'flex',
          minHeight: '58px',
          paddingTop: '10px',
          paddingBottom: '10px',
          paddingLeft: '24px',
          paddingRight: '14px',
          backgroundColor: '#f5f5ff',
          color: '#321f73',
          fontFamily: 'aeonik',
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '116%',
          alignItems: 'center', 
          gap: '38px',
          borderRadius: '22px',
          
          '&:hover':{
            paddingLeft: '30px',
            backgroundColor: '#dfddff',

          },
          '&::placeholder':{
            color: '#4d2fb3',

          },
          '@screen lg':{
            minHeight: '62px',
            paddingTop: '12px',
            paddingBottom: '12px',
            fontSize: '22px',
           
          },
         

        },
        '.image-circule-container': {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderRadius: '80px',
          borderWidth: '4px',
          borderColor: 'white',
     

        
      },
      }
      
      addComponents(semanticColors)
      addComponents(newUtilities)
      addComponents(componentStyles)

    })
  ],
}