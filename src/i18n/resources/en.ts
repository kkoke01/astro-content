import type { Resource } from '.';

export const en: Resource = {
  // word: {};
  // components: {};
  components: {
    pageHeader: {
      aboutUs: 'About Us',
      allProducts: 'All Products',
    },
    productHeader: {
      allProducts: 'All Products',
      category1:"Category 1",
      category2:"Category 2",
    },
    pageFooter: {
      allProducts: 'All Products',
    },
  },
  pages: {
    index: {
      title: 'Company Name',
      introduction: 'Company Introduction Company Introduction Company Introduction Company Introduction Company Introduction ',
    },
    product: {
      index: {
        title: 'All Products',
      },
      categoryId: {
        category1:"Category 1",
        category2:"Category 2",
        categoryDoNotExist:"Category does not exist",
      }
    },
    notFound: {
      word: 'Page not found',
    },
  },
};
