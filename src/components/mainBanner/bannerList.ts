type BannerListType = {
  url: string;
  descripton: string;
  link?: string;
  target?: string;
};

const bannerList: BannerListType[] = [
  {
    url: `/assets/imgs/peoplemotivated.webp`,
    descripton: `Multidão de pessoas felizes participando do CV Summit`,
    link: "https://www.google.com/",
    target: "_blank",
  },
  {
    url: `/assets/imgs/cvsummit03.webp`,
    descripton: `Multidão de pessoas felizes participando do CV Summit`,
    link: "https://www.google.com/",
    target: "_blank",
  },
  {
    url: `/assets/imgs/feiradeempregos05.webp`,
    descripton: `Multidão de pessoas felizes participando do CV Summit`,
    link: "https://www.google.com/",
    target: "_blank",
  },
];

export default bannerList;
