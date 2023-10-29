// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text, Image, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import Slider from 'react-slick';
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

    <div className="bg-teal-600 text-center p-10">
      {fields?.Heading?.value && <h2> {fields?.Heading?.value} </h2>}
      {fields?.Description?.value && <Text tag="p" field={fields?.Description} />}
      <Slider {...settings}>
        {fields?.Cards?.map((crd, index) => (
          <div key={index}>
            {crd?.fields?.BannerImage?.value && <Image field={crd?.fields?.BannerImage} />}
            {crd?.fields?.Name?.value && (
              <Text tag="h1" className="text-7xl pb-3" field={crd.fields.Name} />
            )}
            {crd?.fields?.Description?.value && (
              <RichText tag="p" className="pr-20 pl-20" field={crd.fields.Description} />
            )}
            {/* {crd?.fields?.CTA?.value?.href && <Link field={crd?.fields?.CTA}></Link>} */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<CarouselProps>(Carousel);
export default Carousel;
