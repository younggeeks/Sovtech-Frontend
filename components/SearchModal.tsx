import SearchInput from "./SearchInput";
import SearchResultRow from "./SearchResultRow";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useDebounce from "../hooks/useDebounce";
import { fetcher } from "../utils/fetcher";
import { getFilmSearchUrl } from "../utils/constants";
import AppContext from "./AppContext";
import { Film } from "./MovieCard";

const SearchModal: React.FC<{}> = () => {
  const { toggleModal, showModal } = useContext(AppContext);
  const cancelButtonRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedSearchText = useDebounce<string>(searchText, 500);
  const [results, setResults] = useState<Film[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetcher(getFilmSearchUrl(debouncedSearchText));
      setResults(data.results);
      setLoading(false);
    };
    if (debouncedSearchText != "") {
      fetchData();
    }
  }, [debouncedSearchText]);

  return (
    <Transition.Root show={showModal} as={Fragment}>
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
            <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-[3px] bg-opacity-85 transition-opacity bg-black/20" />
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
                className={`bg-white   max-w-4xl rounded-lg w-full border-[1px] overflow-hidden`}
              >
                <SearchInput
                  searchText={searchText}
                  setSearchText={setSearchText}
                  loading={loading}
                />
                {results.length > 0 && (
                  <div className={"animation-expand"}>
                    <SearchResultRow title="Search Results" header={true} />
                    {results.map((result) => (
                      <SearchResultRow
                        title={result.title}
                        url={result.url}
                        key={result.title}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SearchModal;
