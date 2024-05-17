import type { Resource } from '.';

export const zhTW: Resource = {
  // word: {};
  // components: {};
  components: {
    pageHeader: {
      aboutUs: '關於我們',
      allProducts: '商品一覽',
    },
    productHeader: {
      allProducts: '商品一覽',
      category1:"分類1",
      category2:"分類2",
    },
    pageFooter: {
      allProducts: '商品一覽',
    },
  },
  pages: {
    index: {
      title: '公司名',
      introduction: '公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介',
    },
    product: {
      index: {
        title: '商品一覽',
      },
      categoryId: {
        category1:"分類1",
        category2:"分類2",
        categoryDoNotExist:"該分類不存在",
      }
    },
    notFound: {
      word: '頁面未找到',
    },
  },
};
