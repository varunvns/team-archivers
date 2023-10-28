// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { RichText, Text, Link } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import { ProjectArchive } from 'models/Feature.ProjectArchive.Model';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

export type BannerProps = ProjectArchive.DatasourceTemplates.Global.Banner.Fields.Banner & {
  uid: string;
  componentName: string;
  dataSource: string;
  // params?:;
};

const Banner = ({ fields }: BannerProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  return (
    // bg-theme-bg border border-b-4 border-b-primary border-black dark:border-gray dark:border-b-primary max-w-lg p-2
    <div
      className="min-h-[500px] bg-black relative"
      // style={{ backgroundImage: `url(${fields?.BannerImage?.value?.src})` }}
      data-component="authorable/general/Banner"
      data-testid="Banner"
    >
      <div
        style={{ backgroundImage: `url(${fields?.BannerImage?.value?.src})` }}
        className="absolute w-full h-full opacity-20 bg-center
              bg-cover bg-no-repeat"
      ></div>
      <div className="flex flex-col justify-center items-center h-[500px] text-center text-white z-10 relative">
        {fields?.BannerHeading && (
          <Text field={fields?.BannerHeading} tag="p" className=" font-bold text-4xl" />
        )}
        {fields?.BannerDescription && (
          <RichText
            field={fields?.BannerDescription}
            className=" leading-[normal] text-base [&_p]:mt-5 px-[20px]"
          />
        )}
        {fields?.BannerCTA && (
          <Link
            field={fields?.BannerCTA}
            className="border border-white rounded-md px-[40px] py-[10px] mt-[30px] hover:bg-white hover:text-black"
          >
            {fields?.BannerCTA?.value?.text}
          </Link>
        )}
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<BannerProps>(Banner);
export default Banner;
