import SearchInput from "./SearchInput";
import SearchResultRow from "./SearchResultRow";
import { Dispatch, Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const SearchModal: React.FC<{
  toggleModal: Dispatch<React.SetStateAction<boolean>>;
  isOpen?: boolean;
}> = ({ toggleModal, isOpen }) => {
  const cancelButtonRef = useRef(null);
  const [searchFocused, toggleSearchFocused] = useState(false);
  
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={() => toggleModal(false)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-lg bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div
                className={`bg-white  ${
                  searchFocused ? "animate-expand" : ""
                } max-w-4xl rounded-lg w-full border-[1px] overflow-hidden`}
              >
                <SearchInput
                  focusEvent={(e) => {
                    toggleSearchFocused(e);
                  }}
                  toggleModal={(val) => toggleModal(val)}
                />
                <div>
                  <SearchResultRow title="Search Results" header={true} />
                  <SearchResultRow title="Install Tailwind CSS with Next.js" />
                  <SearchResultRow title="Install Tailwind CSS with Next.js" />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SearchModal;
