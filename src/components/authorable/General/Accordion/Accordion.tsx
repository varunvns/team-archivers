// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { useState } from 'react';

import { NextImage, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

// Local
import { ProjectArchive } from 'models/Feature.ProjectArchive.Model';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

export type AccordionProps =
  ProjectArchive.DatasourceTemplates.Global.Accordion.Fields.AccordionComponent & {
    rendering: { componentName: string };
    params: { [key: string]: string };
    fields: ProjectArchive.DatasourceTemplates.Global.Accordion.Fields.AccordionComponent;
  };

const Accordion = ({ fields }: AccordionProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSetIndex = (index: number) => {
    console.log(index);
    activeIndex !== index ? setActiveIndex(index) : setActiveIndex(-1);
  };

  return (
    <div>
      <div className="flex flex-col text-center">
        <Text tag="h1" className="text-4xl" field={fields?.Title} />
        <RichText field={fields?.Description} className="text-xl" />
      </div>

      <div className="grid grid-cols-6 gap-4">
        {fields?.Content?.map((item: any, index: number) => (
          <div key={item?.id} className="col-start-2 col-span-4">
            <div
              onClick={() => handleSetIndex(index)}
              className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 mt-2"
            >
              <div className="flex justify-between p-4">
                <div className="text-white font-bold">
                  <Text field={item?.fields?.Name} />
                </div>

                <div className="flex items-right justify-right">
                  {activeIndex === index ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </div>
              </div>
            </div>

            {activeIndex === index && (
              <div className="shadow-3xl rounded-b-lg shadow-cyan-500/50 p-4 mb-6 bg-gray-700 flex">
                <div className="mr-5">
                  <NextImage field={item?.fields?.Thumbnail} className="max-h-40" />
                </div>
                <div>
                  <Text
                    tag="p"
                    className="text-2xl"
                    field={item?.fields?.JobTitle?.fields?.Title}
                  />
                  <RichText field={item?.fields?.Description} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
