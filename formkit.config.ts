import { defineFormKitConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { nl } from '@formkit/i18n'
import formkitTheme from './formkit.theme'

export default defineFormKitConfig({
  locales: { nl },
  locale: 'nl',
  config: {
    classes: generateClasses(formkitTheme)
  }
})
