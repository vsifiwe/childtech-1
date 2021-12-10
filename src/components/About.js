import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Robot from '../assets/robotone.PNG'

function About() {
    return (
        <div>
            <Header />
            <div className="flex w-full min-h-full justify-center items-center" style={{ backgroundColor: '#F5F4F9' }}>
                <div className="p-4 min-w-full max-w-4xl" style={{ backgroundColor: '#F5F4F9' }}>
                    <h1 className="flex justify-center text-xl font-bold ">About ChildTech</h1>

                    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 pt-96 ">
                        <div class="bg-blue-400 w-full justify-center shadow rounded p-8 sm:p-12 -mt-72">

                            <h1 className='text-center text-white font-semibold text-3xl p-8'>ChildTech</h1>
                            <ul>
                                <li class="flex items-center space-x-2">
                                    <span> <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> </span>
                                    <span className='p-2 text-lg text-white'>ChildTech is a STEM program that is going to teach children about technology.</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <span> <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> </span>
                                    <span className='p-2 text-lg text-white'>This program will be having children from 7 years to 14 years, through ChildTech,
                                        children will be able to improve their computation skills, problem solving skills,
                                        sharpen their minds and increase their level of observation thus being creative.</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <span>   <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> </span>
                                    <span className='p-2 text-lg text-white'>ChildTech will be having several courses including the coding part,
                                        the practical science part and the engineering part, through different
                                        programs</span>
                                </li>
                            </ul>
                            <div class="flex flex-col space-y-6">
                                <div class="inline-flex space-x-2 items-center">
                                    <ion-icon name="call" class="text-white text-xl"></ion-icon>
                                    <span>+(250) 783 579 339</span>
                                </div>
                                <div class="inline-flex space-x-2 items-center">
                                    <ion-icon name="mail" class="text-white text-xl"></ion-icon>
                                    <span>bdidiye1@gmail.com</span>
                                </div>
                                <div class="inline-flex space-x-2 items-center">
                                    <ion-icon name="pin" class="text-teal-300 text-xl"></ion-icon>
                                    <span>Kigali city, Gasabo, street KG 281 St</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*Start  Contact US */}

                    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 pt-96 ">
                        <div class="bg-gray-600 w-full shadow rounded p-8 sm:p-12 -mt-72">
                            <p class="text-3xl font-bold leading-7 text-center text-white">Let's get in touch</p>
                            <form action="" method="post">
                                <div class="md:flex items-center mt-12">
                                    <div class="w-full md:w-1/2 flex flex-col">
                                        <label class="font-semibold leading-none text-white">Name</label>
                                        <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                    </div>
                                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                        <label class="font-semibold leading-none text-white">Phone</label>
                                        <input type="email" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                    </div>
                                </div>
                                <div class="md:flex items-center mt-8">
                                    <div class="w-full flex flex-col">
                                        <label class="font-semibold leading-none text-white">Subject</label>
                                        <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                    </div>

                                </div>
                                <div>
                                    <div class="w-full flex flex-col mt-8">
                                        <label class="font-semibold leading-none text-white">Message</label>
                                        <textarea type="text" class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center w-full">
                                    <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        Send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* End Contact us */}
                </div>
                <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
            </div>
            <Footer />
        </div>
    )
}
export default About