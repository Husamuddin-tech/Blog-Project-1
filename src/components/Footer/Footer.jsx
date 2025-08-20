import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-b from-black via-gray-900 to-black border-t border-yellow-500/40 shadow-[0_-2px_20px_rgba(255,215,0,0.15)]">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                  {/* Logo & Copyright */}
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; {new Date().getFullYear()} All Rights Reserved by <span className="text-yellow-400 font-semibold">DevUI</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Company */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-yellow-400">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-yellow-400">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-yellow-400">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer