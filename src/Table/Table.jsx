import { TableRow } from "./TableRow/TableRow";

//Describe Table to be rendered with data from API
export default function Table({ headers, dogs, onDeleteHandler }) {
  return (
      <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-50">
                  <tr>
                    {headers.map((heading) => {
                      return (
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          key={heading}
                        >
                          {heading}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dogs.map((dog) => {
                    return (
                      <TableRow dog={dog} headers={headers} onDeleteHandler={onDeleteHandler} key={dog._id} />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}
