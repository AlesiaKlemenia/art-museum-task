const paths = {
  home: "/",
  detail: {
    info: {
      path: "/details/",
      route: "/details/:id",
    },
    url: "/details/",
  },
  favorites: "/favorites",
  notFound: "*",
} as const;

export default paths;
