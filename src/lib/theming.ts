import classNames from 'classnames';
export type ThemeOptions = 'themeBlue' | 'themeBlack';

const themes = {
  themeWhite: classNames('themeWhite', 'bg-theme-bg', 'text-theme-text'),
  themeBlack: classNames('themeBlack', 'bg-theme-bg', 'text-theme-text'),
  themeBlue: classNames('themeBlue', 'bg-theme-bg', 'text-theme-text'),
};

/**
 * Return relevant classes for the selected theme, or return null
 * if no additional theme classes need to be applied
 * @param {ThemeOptions | 'inherit' | undefined} theme The theme option to get classes for
 * @returns {TTailwindString | null} The relevant tailwind-classnames TArg
 */

const getThemeClasses = (theme: ThemeOptions | 'theme-inherit' | undefined): string | null => {
  return typeof theme === 'undefined' || theme === 'theme-inherit' ? null : themes[theme];
};

export default getThemeClasses;
