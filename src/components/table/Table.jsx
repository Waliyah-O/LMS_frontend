import data from '../pagination/mock-data.json';

const Table = () => {
  const tableHead = [{ id: 'ID' }, { id: 'FIRST NAME' }, { id: 'LAST NAME' }, { id: 'EMAIL' }, { id: 'PHONE' }];

  // const tableData = []
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            {tableHead.map((th, index) => {
              <th key={index}>{th.id}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => {
            return (
              <tr key={id}>
                <td className="flex items-center gap-3">{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
