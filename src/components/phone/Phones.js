import React from "react";
import { useState } from "react";
import EditPhone from "./EditPhone";
import { PhoneContext } from "../../data/phonesContext/PhonesContext";
import DeletePhone from "./DeletePhone";
import AddPhone from "./AddPhone";
const Phones = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openAddPhone, setOpenAddPhone] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [idPhone, setIdPhones] = useState("");
  const [query,setQuery] = useState("")
  const { phones } = React.useContext(PhoneContext);
  //methode de recherche 
  const keys = ["name","adress"]
  const searchPhone=(data)=>{
    return data.filter((item)=>
        keys.some((key)=>item[key].toLowerCase().includes(query))
    )
  }
 
  return (
    <div className="transition-all ease-in-out duration-500 bg-white p-8 rounded-md w-full py-24 dark:bg-gray-700">
      <div className=" flex items-center justify-between pb-6">
        <div className="flex items-center justify-between">
          <div className="flex bg-gray-100 items-center p-2 rounded-md dark:bg-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 dark:text-gray-50"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              onChange={(e)=>setQuery(e.target.value)}
              className="bg-gray-100 text-black outline-none ml-1 block dark:bg-gray-500 dark:text-gray-50"
              type="text"
              name=""
              id=""
              placeholder="search..."
            />
          </div>
        </div>
        <div className="lg:ml-40 ml-10 space-x-8">
          <button 
          onClick={()=>{setOpenAddPhone(true)}}
          className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-blue-500 focus:bg-blue-400 text-white font-semibold tracking-wide cursor-pointer">
            ADD NEW PHONE
          </button>
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            {phones ? (
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider
                  dark:bg-gray-800 dark:border-gray-900 dark:text-gray-50 "
                    >
                      Name
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider
                  dark:bg-gray-800 dark:border-gray-900 dark:text-gray-50"
                    >
                      Phone
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider
                  dark:bg-gray-800 dark:border-gray-900 dark:text-gray-50"
                    >
                      Adress
                    </th>

                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider
                  dark:bg-gray-800 dark:border-gray-900 dark:text-gray-50"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {searchPhone(phones).map((phone) => (
                    <tr key={phone.id}>
                      <td className="px-5 py-5 bg-white text-sm dark:bg-gray-800">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap dark:text-gray-50">
                              {phone.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 bg-white text-sm dark:bg-gray-800">
                        <p className="text-gray-900 whitespace-no-wrap dark:text-gray-50">
                          {phone.phon}
                        </p>
                      </td>
                      <td className="px-5 py-5 bg-white text-sm dark:bg-gray-800">
                        <p className="text-gray-900 whitespace-no-wrap dark:text-gray-50">
                          {phone.adress}
                        </p>
                      </td>
                      <td className=" bg-white text-sm dark:bg-gray-800">
                        <button
                          onClick={() => {
                            setOpenEdit(true);
                            setIdPhones(phone.id);
                          }}
                          className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                        >
                          edit
                        </button>
                        &nbsp; &nbsp;
                        <button
                          onClick={() => {
                            setOpenDelete(true);
                            setIdPhones(phone.id);
                          }}
                          className="bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between   dark:bg-gray-600 ">
              <span className="text-xs xs:text-sm text-gray-900 dark:text-gray-50">
                Showing 1 to 4 of 50 Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <div>
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                </div>
                &nbsp; &nbsp;
                <div>
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <AddPhone
      openAddPhone={openAddPhone}
      onClose={()=>setOpenAddPhone(false)}
     />
      <EditPhone
        openEdit={openEdit}
        idPhone={idPhone}
        onClose={() => setOpenEdit(false)}
      />
       <DeletePhone
        openDelete={openDelete}
          onClose={() => {
          setOpenDelete(false);
        }}
        idPhone={idPhone}
      />
    </div>
  );
};

export default Phones;
