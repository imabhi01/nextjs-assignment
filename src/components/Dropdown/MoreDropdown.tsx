import {useState} from 'react'

export default function MoreDropdown(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md"
                id="dropdown-button"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                More
                <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                >
                <path
                    fillRule="evenodd"
                    d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                />
                </svg>
            </button>
            <div
                className={`${
                isOpen ? 'z-50' : 'hidden'
                } origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                id="dropdown-menu"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-button"
            >
                <div className="py-1" role="none">
                <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    role="menuitem"
                >
                    Item 1
                </a>
                <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    role="menuitem"
                >
                    Item 2
                </a>
                <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    role="menuitem"
                >
                    Item 3
                </a>
                </div>
            </div>
        </div>
    )
}