import type { Resource } from '.';

export const ko: Resource = {
  // word: {};
  // components: {};
  components: {
    pageHeader: {
      aboutUs: '회사 소개',
      allProducts: '모든 제품',
    },
    productHeader: {
      allProducts: '모든 제품',
      category1:"분류1",
      category2:"분류2",
    },
    pageFooter: {
      allProducts: '모든 제품',
    },
  },
  pages: {
    index: {
      title: '회사 이름',
      introduction: '회사 프로필회사 프로필회사 프로필회사 프로필회사 프로필회사 프로필회사 프로필회사 프로필회사 프로필회사 프로필',
    },
    product: {
      index: {
        title: '모든 제품',
      },
      categoryId: {
        category1:"분류1",
        category2:"분류2",
        categoryDoNotExist:"분류가 존재하지 않음",
      }
    },
    notFound: {
      word: '페이지를 찾을 수 없습니다',
    },
  },
};
