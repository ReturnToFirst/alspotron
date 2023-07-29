import koKR from './translations/ko-KR.json';

import type { Resource } from 'i18next';

export const LangResource: Resource = {
  ko: {
    translation: koKR,
  },
};

export const getTranslation = (key: string, lang: string): string => {
  const translation: Record<string, string> = LangResource[lang].translation as Record<string, string>;
  return translation[key];
};