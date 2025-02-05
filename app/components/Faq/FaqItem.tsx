import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => (
  <Disclosure as="div">
    {/* Needed "as div" for removing error from headlessui specific for next v.15 */}
    {({ open }) => (
      <>
        <DisclosureButton className="flex text-left description-text font-semibold w-full justify-between mt-2 md:mt-5 px-4 py-4 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800">
          <span>{question}</span>
          <ChevronDown
            className={clsx(
              " text-gray-500 transition-transform duration-200 dark:text-white",
              open && "rotate-180"
            )}
          />
        </DisclosureButton>
        <Transition
          show={open}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
        >
          <DisclosurePanel className="mt-0 md:mt-2 rounded-md p-4 description-text dark:text-white">
            {answer}
          </DisclosurePanel>
        </Transition>
      </>
    )}
  </Disclosure>
);

export default FAQItem;
