import { persistentAtom } from '@nanostores/persistent';

import {
  type AllowedLanguage,
  allowedLanguage,
  allowedLanguageString,
  defaultLanguage,
  defaultLanguageResource,
  fallbackRule,
} from '~/i18n';

const PATHNAME_LANGUAGE_REGEX = /^\/([a-z]{2}-?[a-z]{0,2})(?:\/|$)/;

export function isLanguageSupport(str: string): str is AllowedLanguage {
  return allowedLanguageString.includes(str as AllowedLanguage);
}

function findFallback(language: string) {
  // 如果fallback中有对应的规则,则转换语言
  for (const key in fallbackRule) {
    if (fallbackRule[key]?.includes(language)) {
      return key;
    }
  }
  return language;
}

function detectLanguage(language?: string): AllowedLanguage {
  if (language === undefined) {
    return defaultLanguage;
  } else {
    const temp = findFallback(language);
    if (isLanguageSupport(temp)) {
      return temp;
    } else {
      return defaultLanguage;
    }
  }
}

function removeLanguageFromPathname(pathname: string): string {
  return pathname.replace(PATHNAME_LANGUAGE_REGEX, '');
}

function replaceLanguageFromPathname(pathname: string, newLanguage: AllowedLanguage): string {
  return pathname.replace(PATHNAME_LANGUAGE_REGEX, `/${newLanguage}`);
}

function detectLanguageFromPathname(pathname: string): AllowedLanguage | undefined {
  if (pathname !== undefined) {
    const languageFromPathname = pathname.match(PATHNAME_LANGUAGE_REGEX);
    if (languageFromPathname !== null) {
      return detectLanguage(languageFromPathname[1]);
    }
  }
  return undefined;
}

export function useI18n(pathname: string) {
  const pathLanguage = detectLanguageFromPathname(pathname);
  const pathnameWithoutLanguage = removeLanguageFromPathname(pathname);
  let browserLanguage = defaultLanguage;
  if (!import.meta.env.SSR) {
    browserLanguage = detectLanguage(navigator.language);
  }

  const $browserLanguage = persistentAtom('language', browserLanguage, {
    encode: (value) => {
      return value;
    },
    decode: (encoded) => {
      if (isLanguageSupport(encoded)) {
        return encoded;
      } else {
        return defaultLanguage;
      }
    },
  });
  const t = allowedLanguage.find((item) => item.code === pathLanguage)?.resource || defaultLanguageResource;

  return {
    t,
    pathLanguage,
    pathnameWithoutLanguage,
    browserLanguage,
    $browserLanguage,
    replaceLanguageFromPathname,
  };
}
