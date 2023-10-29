// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import Iframe from 'react-iframe';
// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  text?: Field<string>;
  url: LinkField;
}

export type IframeProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const IframeComponent = ({ fields }: IframeProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div>
      <Iframe
        url={fields?.url?.value?.href ? fields?.url?.value?.href : ''}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<IframeProps>(Iframe);
export default IframeComponent;
