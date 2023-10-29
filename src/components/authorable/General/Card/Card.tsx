import { ProjectArchive } from 'models/Feature.ProjectArchive.Model';

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
    <>card component</>
    // <div>
    //   <div className="container mx-auto my-[80px]">
    //     <div className="w-full text-center font-bold text-[46px] uppercase pb-[80px]">
    //       <Text field={fields?.Heading} />
    //     </div>
    //     <div className="mb-5 text-base text-gray-500 text-[20px] dark:text-gray-400">
    //       <RichText field={fields?.Description}/>
    //     </div>
    //     <div className="flex justify-center">
    //       {fields?.Cards?.map((Card: any, index: number) => (
    //         <div key={index} className="px-4 w-[33.33%]">
    //           <div className="py-6 px-4 mt-11 bg-white mx-auto text-center">
    //             <div className="h-75 w-75">
    //               <NextImage className="mx-auto" field={Card?.fields?.Thumbnail} />
    //             </div>
    //             <div className=" mb-5 font-bold text-[20px] uppercase mt-6">
    //               <Text field={Card?.fields?.Name} tag='p'/>
    //             </div>
    //             <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //               <RichText field={Card?.fields?.Description} />
    //             </div>
    //             <Link
    //               href={Card?.url}
    //               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //             >
    //               Click here
    //             </Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
