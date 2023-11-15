import jyLogo from "../../public/images/jyLogo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className=" bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-lg text-gray-500 text-center dark:text-gray-400">
          jyar27@gmail.com | 540-449-9992
        </span>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="flex items-center justify-center">
          {/* <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul> */}
          <Image
            className="h-auto w-auto"
            src={jyLogo}
            width={50}
            height={50}
            alt="Jy Logo"
          />
          <div className="p-5"></div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Jordan Yarros
          </span>
        </div>
      </div>
    </div>
  );
};
