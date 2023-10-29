// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ProjectArchive } from '../../../../../models/Feature.ProjectArchive.Model';
import { useState, useEffect } from 'react';

export type TabsProps = ProjectArchive.DatasourceTemplates.Global.Tabs.Fields.TabList & {
  rendering: { componentName: string };
  params: { [key: string]: string };
  uid: string;
  componentName: string;
  dataSource: string;
  fields: ProjectArchive.DatasourceTemplates.Global.Tabs.Fields.TabList;
};

const Tabs = ({ fields }: TabsProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState('');
  useEffect(() => {
    setActiveIndex(fields?.Tabs[0]?.id);
  }, []);
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  const handleSetIndex = (index: string) => {
    activeIndex !== index ? setActiveIndex(index) : setActiveIndex('');
  };

  return (
    <div data-component="authorable/general/Tabs" data-testid="Tabs">
      <p className="font-bold">Tabs</p>
      <p className="font-bold">{fields?.Title.value}</p>
      <div className="flex flex-wrap border-b border-gray-200">
        {fields?.Tabs?.map((tabls: any, index: number) => (
          <>
            <div className="mr-2" key={index} onClick={() => handleSetIndex(tabls.id)}>
              <a
                href="#"
                aria-current="page"
                className="inline-block bg-gray-100 text-blue-600 rounded-t-lg py-4 px-4 text-sm font-medium text-center active"
              >
                {tabls.displayName}
              </a>
            </div>
          </>
        ))}
        {fields?.Tabs?.map((tabls: any) => (
          <>
            {activeIndex === tabls.id && (
              <div className="">
                <Text tag="p" className="text-1xl" field={tabls?.fields?.Description} />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<TabsProps>(Tabs);
export default Tabs;
