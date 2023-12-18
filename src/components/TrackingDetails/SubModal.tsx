import { GoArrowUpRight } from "react-icons/go";

const basicInfoTH = [
  "SL",
  "Booking Date",
  "CN Number",
  "From",
  "Destination",
  "Status",
  "Receiver Contact",
  "Item Description",
  "LOT",
];
const SubModal = ({ setCNDetailsModalOpen }) => {
  return (
    <>
      <div className="overflow-auto scroll-smooth">
        <div className="overflow-x-auto mb-5">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal ">
              <thead>
                <tr className="bg-slate-50 hover:bg-slate-200 w-full">
                  {basicInfoTH.map((th, index) => (
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-slate-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      key={index}
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>02-Aug-2023</td>
                  <td onClick={() => setCNDetailsModalOpen(true)}>
                    <span
                      className="ring-1 ring-primary-main pl-2 pr-5 py-2 rounded-lg border-slate-300 hover:bg-primary-dark hover:text-white hover:duration-200 hover:ring-0 transition-all duration-300 cursor-pointer items-center flex relative group "
                      title="View Details"
                    >
                      70159001086027
                      <GoArrowUpRight
                        size={24}
                        className="absolute right-0 top-1 group-hover:-top-2 group-hover:-right-2 group-hover:text-rose-600 duration-200 transition-all"
                      />
                    </span>
                  </td>
                  <td>Mirpur-10,Dhaka (M10)</td>
                  <td>Narsingdhi</td>
                  <td>Delivered</td>
                  <td>01710142370</td>
                  <td>01710142370</td>
                  <td>01710142370</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubModal;
