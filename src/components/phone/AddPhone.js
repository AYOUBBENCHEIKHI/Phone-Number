import React, { useState } from 'react'
import PhoneService from '../service/Phone-service';

const AddPhone = ({openAddPhone, onClose}) => {
    const [name, setName] = useState("");
    const [phon, setPhon] = useState("");
    const [adress, setAdress] = useState("");
    const user =JSON.parse(localStorage.getItem("user"))
    const addNewPhone=(e)=> {
      e.preventDefault();
      PhoneService.AddPhone(name,phon,adress,user.id_user)
      .then(()=>{
          window.location.reload()
      });
    }
    if(!openAddPhone) return null
    return (
      <div  className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div
          onClick={onClose}
          
          className="overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full flex"
          aria-modal="true"
          role="dialog"
        >
          <div onClick={(e) => {
              e.stopPropagation();
            }} className="relative w-full max-w-2xl h-full md:h-auto">
            <form
              onSubmit={addNewPhone}
              className="relative bg-white rounded-lg shadow dark:bg-gray-700"
            >
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit Phone
                </h3>
                <button onClick={onClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="editUserModal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                     
                      htmlFor="first-name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Name
                    </label>
                    <input
                     onChange={(e)=>setName(e.target.value)}
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bonnie"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone-number"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                       onChange={(e)=>setPhon(e.target.value)}
                      type="number"
                      name="phone-number"
                      id="phone-number"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="e.g. +(12)3456 789"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="adress"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Adress
                    </label>
                    <input
                      onChange={(e)=>setAdress(e.target.value)}
                      type="text"
                      name="adress"
                      id="adress"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="adress"
                      required=""
                    />
                  </div>
                  
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Add New Phone
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

export default AddPhone