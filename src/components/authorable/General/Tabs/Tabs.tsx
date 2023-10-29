// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  text: Field<string>;
}

export type TabsProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const Tabs = ({ fields }: TabsProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div data-component="authorable/general/Tabs" data-testid="Tabs">
      <p className="font-bold">Tabs</p>

      <ul className="flex flex-wrap border-b border-gray-200">
        <li className="mr-2">
          <a
            href="#"
            aria-current="page"
            className="inline-block bg-gray-100 text-blue-600 rounded-t-lg py-4 px-4 text-sm font-medium text-center active"
          >
            Profile
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
          >
            Dashboard
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
          >
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<TabsProps>(Tabs);
export default Tabs;
