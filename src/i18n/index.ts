import type { Resource } from './resources';
import { en } from './resources/en';
import { ja } from './resources/ja';
import { ko } from './resources/ko';
import { zhCN } from './resources/zh-cn';
import { zhTW } from './resources/zh-tw';

export const fallbackRule: Record<string, string[]> = { 'zh-cn': ['zh-CN', 'zh-Hans'], 'zh-tw': ['zh-TW', 'zh-Hant'] };
export const defaultLanguage = 'ja';
export const defaultLanguageResource = ja;
export const allowedLanguageString = ['en', 'ja', 'zh-cn', 'zh-tw', 'ko'] as const;

export const categories = ['category1', 'category2'] as const;

export type AllowedLanguage = (typeof allowedLanguageString)[number];
export class Language {
  constructor(
    public code: AllowedLanguage,
    public flag: string,
    public label: string,
    public resource: Resource
  ) {}
}

export const allowedLanguage = [
  new Language('en', '🇬🇧', 'English', en),
  new Language('ja', '🇯🇵', '日本語', ja),
  new Language('zh-cn', '🇨🇳', '简体中文', zhCN),
  new Language('zh-tw', '🇹🇼', '繁体中文', zhTW),
  new Language('ko', '🇰🇷', '한국어', ko),
];
