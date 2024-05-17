import { getCollection } from 'astro:content';

export const usePages = async () => {
  const pages = await getCollection('pages');
  return pages;
};
