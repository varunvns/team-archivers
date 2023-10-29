import { ProjectArchive } from 'models/Feature.ProjectArchive.Model';
import { Text, RichText, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

export type CardProps =
  ProjectArchive.DatasourceTemplates.Global.CardListCarousel.Fields.CardList & {
    rendering: { componentName: string };
    params: { [key: string]: string };
    fields: ProjectArchive.DatasourceTemplates.Global.CardListCarousel.Fields.CardList;
  };

const Card = ({ fields }: CardProps): JSX.Element => {
  // // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  return (
    <div>
      <div className="container mx-auto my-[80px]">
        <div className="w-full text-center font-bold text-[46px] uppercase pb-[80px]">
          <Text field={fields?.Heading} />
        </div>
        <div className="mb-5 text-base text-gray-500 text-[20px] dark:text-gray-400">
          <RichText field={fields?.Description} />
        </div>
        <div className="flex flex-col md:flex-row justify-center ">
          {fields?.Cards?.map((Card: any, index: number) => {
            return (
              <div key={index} className="px-4 w-full md:w-[33.33%] ">
                <div className="py-6 px-4 mt-11 bg-white mx-auto text-center">
                  <div className="h-[350px]">
                    <NextImage className="block object-cover" field={Card?.fields?.Thumbnail} />
                  </div>
                  <div className="mb-5 font-bold text-[20px] uppercase mt-6">
                    <Text field={Card?.fields?.Name} />
                  </div>
                  <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                    <RichText field={Card?.fields?.Description} />
                  </div>

                  <div className="my-[30px]">
                    <Link
                      href={Card?.url}
                      className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                    >
                      Click here
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
