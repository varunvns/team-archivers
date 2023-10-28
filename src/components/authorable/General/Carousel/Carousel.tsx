// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text, Link, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { ProjectArchive } from '../../../../../models/Feature.ProjectArchive.Model';

export type CarouselProps =
  ProjectArchive.DatasourceTemplates.Global.CardListCarousel.Fields.CardList & {
    rendering: { componentName: string };
    params: { [key: string]: string };
    uid: string;
    componentName: string;
    dataSource: string;
    fields: ProjectArchive.DatasourceTemplates.Global.CardListCarousel.Fields.CardList;
  };

const Carousel = ({ fields }: CarouselProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {fields?.Cards?.map((crd, index) => (
          <div key={index}>
            {crd?.fields?.Thumbnail?.value && <Image field={crd?.fields?.Thumbnail} />}
            {crd?.fields?.Name?.value && <Text tag="div" field={crd?.fields?.Name} />}
            {crd?.fields?.Description?.value && <Text tag="p" field={crd?.fields?.Description} />}
            {crd?.fields?.CTA?.value?.href && <Link field={crd?.fields?.CTA}></Link>}
          </div>
        ))}
      </Slider>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<CarouselProps>(Carousel);
export default Carousel;
