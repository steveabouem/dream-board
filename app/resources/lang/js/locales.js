import Lang from 'lang.js';

export const locales = {
    'en.welcome': require('../en/welcome.php'),
    'fr.welcome': require('../fr/welcome.php'),
};

/**
 * Translations
 */
window.lang = new Lang({ messages: locales, fallback: 'en' });
window.trans = (key, replace = [], locale = 'en') => window.lang.get(key, replace, locale);