export interface Resource {
  // word: {};
  components: {
    pageHeader: {
      aboutUs: string;
      allProducts: string;
    };
    productHeader: {
      allProducts: string;
      category1:string;
      category2:string;
    },
    pageFooter: {
      allProducts: string;
    };
  };
  pages: {
    index: {
      title: string;
      introduction: string;
    },
    product: {
      index: {
        title: string;
      },
      categoryId: {
        category1:string;
        category2:string;
        categoryDoNotExist:string;
      }
    }
    notFound: {
      word: string;
    }
  };
}
