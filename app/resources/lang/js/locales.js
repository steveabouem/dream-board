import Lang from 'lang.js';

export const locales = {
    // EN
    'en.welcome': require('../en/welcome.php'),
    'en.menus': require('../en/menus.php'),

    // FR
    'fr.welcome': require('../fr/welcome.php'),
};

/**
 * Translations
 */
window.lang = new Lang({ messages: locales, fallback: 'en' });
window.trans = (key, replace = [], locale = 'en') => window.lang.get(key, replace, locale);