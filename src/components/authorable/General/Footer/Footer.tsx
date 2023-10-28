import { ProjectArchive } from '../../../../../models/Feature.ProjectArchive.Model';
import Text from '@/components/helpers/Text/Text';

export type FooterType = ProjectArchive.DatasourceTemplates.Global.Footer.Fields.FooterTemplate & {
  fields: ProjectArchive.DatasourceTemplates.Global.Footer.Fields.FooterTemplate;
};

const Footer = ({ fields }: FooterType): JSX.Element => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* <Image src={fields.Logo.value?.src} alt={'logo'} /> */}

        <Text tag={'h2'} text={fields?.Title?.value || ''} className="text-xl font-bold" />

        <Text
          tag={'p'}
          text={fields?.Description?.value || ''}
          className="text-sm text-center mb-4"
        />

        <div className="flex space-x-4">
          {fields?.SocialLinks?.map((sociallinks, index) => {
            return (
              <a
                href={sociallinks?.fields?.Link?.value?.href}
                className="text-white hover:text-gray-400"
                key={index}
              >
                {/* <Image src={sociallinks.fields.Icon.value.src} alt={'social link'} /> */}a
              </a>
            );
          })}
        </div>
        <Text tag={'p'} text={fields?.CopyrightText?.value || ''} className="text-sm mt-4" />
      </div>
    </footer>
  );
};

export default Footer;
