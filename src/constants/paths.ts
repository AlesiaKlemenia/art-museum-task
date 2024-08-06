const paths = {
  home: "/",
  detailInfo: "",
  detail: {
    info: {
      path: "/details/",
      route: "/details/:id",
    },
    url: "/details/",
  },
  notFound: "*",
} as const;

export default paths;
