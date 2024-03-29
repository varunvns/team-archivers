//import { CarouselProps } from './Carousel';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: any = {
  rendering: { componentName: 'Carousel' },
  params: {},
  fields: {
    text: {
      value:
        '<p>This is <em>richtext</em> content to show the <strong>simplest</strong> possible example of a implementaiton possible.</p>',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
