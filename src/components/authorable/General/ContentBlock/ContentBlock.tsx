import { Field, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  data: {
    item: {
      title: Field<string>;
      content: RichTextField;
    };
  };
}

export type ContentBlockProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
  route: any;
};

const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => {
  // Fail out if fields aren't present
  console.log(fields);
  // if (fields === null || fields === undefined) return <></>;

  return (
    <div className="container mx-auto px-4 sm:px-8 xl:px-4 pt-14 pb-14 text-center">
      <Text
        className="text-4xl leading-10 mb-4 font-semibold"
        tag="h2"
        field={fields.data.item.title}
      />
      <RichText
        className="mb-4  text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto"
        field={fields.data.item.content}
      />
    </div>
  );
};

export default ContentBlock;
