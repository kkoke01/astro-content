import type { Resource } from '.';

export const ja: Resource = {
  // word: {};
  // components: {};
  components: {
    pageHeader: {
      aboutUs: '概要',
      allProducts: 'すべての商品',
    },
    productHeader: {
      allProducts: 'すべての商品',
      category1:"分類１",
      category2:"分類２",
    },
    pageFooter: {
      allProducts: 'すべての商品',
    },
  },
  pages: {
    index: {
      title: '会社名',
      introduction: '会社紹介会社紹介会社紹介会社紹介会社紹介会社紹介会社紹介会社紹介会社紹介会社紹介会社紹介会社紹介会社紹介会社紹介',
    },
    product: {
      index: {
        title: '商品一覧',
      },
      categoryId: {
        category1:"分類１",
        category2:"分類２",
        categoryDoNotExist:"この分類は存在しません",
      }
    },
    notFound : {
      word: 'ページが見つかりません',
    },
  },
}