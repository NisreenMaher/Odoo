import { Disclosure } from "@headlessui/react";

export default function Example() {
  return (
    <>
      <div>
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="">
                <div className="flex items-center justify-between h-20">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="./logo.svg"
                        alt="Workflow"
                      />
                    </div>
                  </div>
                  <div className=" md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <a
                        href="#"
                        className=" p-1 m-14 rounded-full font-Inter
                    text-gray hover:text-white text-base font-medium "
                      >
                        Documentation
                      </a>
                      <button
                        className="rounded-sm mr-4 h-9 px-6 font-semibold text-base bg-primary font-Inter 
                    text-white hover:text-white focus:outline-none 
                    hover:bg-primary-dark
                   "
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
