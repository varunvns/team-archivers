// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  text: Field<string>;
}

export type BreadcrumbProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const Breadcrumb = ({ fields }: BreadcrumbProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      className="bg-theme-bg border border-b-4 border-b-primary border-black dark:border-gray dark:border-b-primary max-w-lg p-2 rounded"
      data-component="authorable/general/Breadcrumb"
      data-testid="Breadcrumb"
    >
      <p className="font-bold">Breadcrumb</p>
      <RichTextA11yWrapper data-testid="Breadcrumb" field={fields.text} editable />
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<BreadcrumbProps>(Breadcrumb);
export default Breadcrumb;