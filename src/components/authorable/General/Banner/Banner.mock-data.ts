import { BannerProps } from './Banner';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: BannerProps = {
  uid: '5bff2ebc-f89e-4e21-8ce7-e416c541f2bc',
  componentName: 'Banner',
  dataSource: '{13B449AF-DF82-4A95-9D01-BCE28211E493}',
  // "params": {

  // },
  fields: {
    BannerImage: {
      value: {
        src: '/-/media/Default-Website/sc_logo.png?h=51&iar=0&w=204&hash=70185A6C46DD94DC14708A2FDC1539D0',
        alt: '',
        width: '204',
        height: '51',
      },
    },
    BannerHeading: {
      value: 'Banner Heading',
    },
    BannerDescription: {
      value:
        '\u003Cp\u003ELorem ipsum dolor sit amet consectetur adipisicing elit. Non quas saepe nesciunt praesentium illo minima, animi quos voluptatem odit debitis?\u003C/p\u003E',
    },
    BannerCTA: {
      value: {
        text: 'Test',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        querystring: '',
        id: '{15CC85F3-AD65-4568-A0AA-5EAB1AFE3D09}',
        href: '/test',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
