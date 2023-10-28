import { useState } from 'react';
import { ProjectArchive } from '../../../../../models/Feature.ProjectArchive.Model';
import { faClose, faHamburger } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon from '@/components/helpers/FontAwesomeIcon/FontAwesomeIcon';
import Text from '@/components/helpers/Text/Text';
import Link from 'next/link';
export type HeaderType = ProjectArchive.DatasourceTemplates.Global.Header.Fields.HeaderTemplate & {
  fields: ProjectArchive.DatasourceTemplates.Global.Header.Fields.HeaderTemplate;
};
const Header = ({ fields }: HeaderType): JSX.Element => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* <Image src={fields?.Logo?.value?.src || ''} alt="Logo" height={30} width={70} /> */}
          <Text
            tag={'p'}
            text={fields?.TagLine?.value}
            className="text-xs italic text-white mt-1"
          />
        </div>
        <nav className="hidden md:flex space-x-4">
          {fields?.HeaderLinks?.map((link, index) => {
            return (
              <Link href={link?.url} className="text-white" key={index}>
                {link?.name}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white p-2 focus:outline-none">
            <FontAwesomeIcon icon={isMenuOpen ? faClose : faHamburger} className={`w-6 h-6`} />
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="text-white p-4">
          {fields?.HeaderLinks?.map((link, index) => {
            return (
              <Link href={link?.url} className="text-white" key={index}>
                {link?.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
