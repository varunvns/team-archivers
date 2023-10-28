// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  data: {
    item: {
      displayName: string;
      // url: {
      //   path: string;
      // };
      ancestors: [
        {
          displayName: string;
          url: {
            path: string;
          };
        }
      ];
    };
  };
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
    <>
      {fields?.data?.item !== null && (
        <nav className="container">
          <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
            {fields?.data?.item.ancestors !== null &&
              fields?.data?.item.ancestors.reverse().map((anc, index) => (
                <>
                  <li className="px-2" key={index}>
                    <a href={anc.url?.path} className="no-underline text-indigo">
                      {anc.displayName}
                    </a>
                  </li>
                  <li>/</li>
                </>
              ))}
            {fields?.data?.item.displayName && (
              <li className="px-2">{fields?.data?.item.displayName}</li>
            )}
          </ol>
        </nav>
      )}
    </>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<BreadcrumbProps>(Breadcrumb);
export default Breadcrumb;
