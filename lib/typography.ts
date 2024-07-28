import plugin from 'tailwindcss/plugin'
import { PluginAPI } from 'tailwindcss/types/config'

export default plugin(function ({ addUtilities }: PluginAPI) {
  addUtilities({
    '.heading-1': {
      fontSize: '38px',
      lineHeight: '54px',
      fontWeight: '700',
    },
    '.heading-2': {
      fontSize: '32px',
      lineHeight: '48px',
      fontWeight: '700',
    },
    '.heading-3': {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: '700',
    },
    '.medium-1': {
      fontSize: '18px',
      lineHeight: '27px',
      fontWeight: '500',
    },
    '.regular-1': {
      fontSize: '18px',
      lineHeight: '27px',
      fontWeight: '400',
    },
  })
})
