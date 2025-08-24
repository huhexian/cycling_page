interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Cycling Page',
  siteUrl: 'https://cycling.yinji.org',
  logo: 'https://img.yinji.org/site_icon.png',
  description: 'my cycling page',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://yinji.org',
    },
    {
      name: 'Thanks',
      url: 'https://github.com/yihong0618/running_page/',
    },
  ],
};

export default data;
