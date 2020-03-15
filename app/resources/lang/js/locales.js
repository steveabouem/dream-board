import Lang from 'lang.js';

export const locales = {
    // EN
    'en.welcome': require('../en/welcome.php'),
    'en.menus': require('../en/menus.php'),
    'en.lorem': require('../en/lorem.php'),
    'en.dashboard': require('../en/dashboard.php'),
    

    // FR
    'fr.welcome': require('../fr/welcome.php'),
    'fr.menus': require('../fr/menus.php'),
    'fr.lorem': require('../fr/lorem.php'),
    'fr.dashboard': require('../fr/dashboard.php'),
};

/**
 * Translations
 */
window.lang = new Lang({ messages: locales, fallback: 'en' });
window.trans = (key, replace = [], locale = 'en') => window.lang.get(key, replace, locale);