import { useState } from 'react';
import { ProjectArchive } from '../../../../../models/Feature.ProjectArchive.Model';
import { faClose, faHamburger } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon from '@/components/helpers/FontAwesomeIcon/FontAwesomeIcon';
export type HeaderType = ProjectArchive.DatasourceTemplates.Global.Header.Fields.HeaderTemplate & {
  fields: ProjectArchive.DatasourceTemplates.Global.Header.Fields.HeaderTemplate;
};
const Header = ({ fields }: HeaderType): JSX.Element => {
  console.log(fields);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={fields.Logo.value?.src} alt="Logo" />
          <p className="text-xs italic text-white mt-1">{fields.TagLine.value}</p>
        </div>
        <nav className="hidden md:flex space-x-4">
          {fields.HeaderLinks.map((link) => {
            return (
              <a href="#" className="text-white" key={link}>
                {link.displayName}
              </a>
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
          {fields.HeaderLinks.map((link) => {
            return (
              <a href="#" className="block" key={link}>
                {link.displayName}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
