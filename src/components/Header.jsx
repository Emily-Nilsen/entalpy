import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';

import { GoodStrengthIcon } from './Logos';
import { SrongStrengthIcon } from './Logos';

const products = [
  {
    name: 'ELL50',
    description: 'Luft varmepumper med en effekt på 50 kW',
    href: '#',
    icon: (
      <GoodStrengthIcon className="w-6 h-6 fill-gray-600 group-hover:fill-green-600" />
    ),
  },
  {
    name: 'ELL90',
    description: 'Luft varmepumper med en effekt på 90 kW',
    href: '#',
    icon: (
      <SrongStrengthIcon className="w-6 h-6 fill-gray-600 group-hover:fill-green-600" />
    ),
  },
];

const callsToAction = [
  { name: 'Se demo', href: '#', icon: PlayCircleIcon },
  { name: 'Kontakt salg', href: '/kontakt', icon: PhoneIcon },
];
const company = [
  { name: 'Om oss', href: '/om-oss' },
  { name: 'Jobb hos oss', href: '/om-oss#jobb-med-oss' },
  { name: 'Blogg', href: '/om-oss#blogg' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <span className="sr-only">Entalpy AS</span>
            <Image
              className="w-auto h-8"
              width={100}
              height={100}
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/Logo_Entalpy_q4xaqn.png"
              alt="Entalpy AS logo"
            />
            <span>
              <h3 className="font-bold text-gray-950 group-hover:text-[#007e3f] transition duration-300 ease-in-out">
                Entalpy AS
              </h3>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1 [&:not(:focus-visible)]:focus:outline-none bg-white hover:bg-green-50 transition duration-300 ease-in-out  active:bg-green-100 focus:outline-none focus:ring-1 focus:ring-green-600 rounded-lg py-1.5 px-3 justify-center">
              Produkter
              <ChevronDownIcon
                className="flex-none w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="relative flex p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-center flex-none mt-1 rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                        {item.icon}
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="flex-none w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 [&:not(:focus-visible)]:focus:outline-none bg-white hover:bg-green-50 transition duration-300 ease-in-out  active:bg-green-100 focus:outline-none focus:ring-1 focus:ring-green-600 rounded-lg py-1.5 px-3 justify-center"
          >
            Kundeservice
          </Link>
          <Link
            href="/kontakt"
            className="text-sm font-semibold leading-6 text-gray-900 [&:not(:focus-visible)]:focus:outline-none bg-white hover:bg-green-50 transition duration-300 ease-in-out  active:bg-green-100 focus:outline-none focus:ring-1 focus:ring-green-600 rounded-lg py-1.5 px-3 justify-center"
          >
            Kontakt oss
          </Link>

          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1 [&:not(:focus-visible)]:focus:outline-none bg-white hover:bg-green-50 transition duration-300 ease-in-out  active:bg-green-100 focus:outline-none focus:ring-1 focus:ring-green-600 rounded-lg py-1.5 px-3 justify-center">
              Om oss
              <ChevronDownIcon
                className="flex-none w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-56 p-2 mt-3 bg-white shadow-lg -left-8 top-full rounded-xl ring-1 ring-gray-900/5">
                {company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 [&:not(:focus-visible)]:focus:outline-none bg-white hover:bg-green-50 transition duration-300 ease-in-out  active:bg-green-100 focus:outline-none focus:ring-1 focus:ring-green-600 rounded-lg py-1.5 px-3 justify-center"
          >
            Kundeportal <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">Entalpy AS</span>
              <Image
                className="w-auto h-8"
                width={100}
                height={100}
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/Logo_Entalpy_q4xaqn.png"
                alt="Entalpy AS logo"
              />
              <span>
                <h3 className="font-bold text-gray-950">Entalpy AS</h3>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-1.5 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Produkter
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-1.5 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  href="#"
                  className="block px-3 py-1.5 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Kundeservice
                </Link>
                <Link
                  href="/kontakt"
                  className="block px-3 py-1.5 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Kontakt oss
                </Link>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-1.5 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Om oss
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {company.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-1.5 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-1.5.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Kundeportal
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
