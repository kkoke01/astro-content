import type { Resource } from '.';

export const zhCN: Resource = {
  // word: {};
  // components: {};
  components: {
    pageHeader: {
      aboutUs: '关于我们',
      allProducts: '商品一览',
    },
    productHeader: {
      allProducts: '商品一览',
      category1:"分类1",
      category2:"分类2",
    },
    pageFooter: {
      allProducts: '商品一览',
    },
  },
  pages: {
    index: {
      title: '公司名',
      introduction: '公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介',
    },
    product: {
      index: {
        title: '商品一览',
      },
      categoryId: {
        category1:"分类1",
        category2:"分类2",
        categoryDoNotExist:"该分类不存在",
      }
    },
    notFound: {
      word: '页面未找到',
    },
    products: {
      categories: {
        1: '类别1',
        2: '类别2',
      },
    },
  },
};
