import LogoBullets from '../../../assets/svg/LogoBullets.svg';

const ListComponent = ({ plist = [] }) => {
  return (
    <div>
      <ul className="font-inter text-sm leading-[3.3rem] text-white list-none">
        {plist.map((item) => (
          <li key={item.id} className="flex items-center mb-2">
            <div className="w-6 h-6 mr-2 bg-cover bg-center" style={{ backgroundImage: `url(${LogoBullets})` }} />
            {item.element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
