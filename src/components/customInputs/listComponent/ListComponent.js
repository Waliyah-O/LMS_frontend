import LogoBullets from '../../../assets/svg/LogoBullets.svg';

const ListComponent = ({ listItems = [] }) => {
  return (
    <div>
      <ul className="font-inter text-md leading-[3.3rem] text-white list-none">
        {listItems.map((item) => (
          <li key={item.id} className="flex items-center gap-3 my-1">
            <div className="w-8 h-8 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${LogoBullets})` }} />
            {item.element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
