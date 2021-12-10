import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Robot from '../assets/robot.png'
import learner from '../assets/leaner.png'

function Services() {
    return (
        <div>
            <Header />
            <div className="flex w-full min-h-full justify-center items-center" style={{ backgroundColor: '#F5F4F9' }}>
                <div className="p-4 min-w-full max-w-4xl" style={{ backgroundColor: '#F5F4F9' }}>

                    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 pt-96">
                        <div class="bg-blue-400 w-full shadow rounded p-8 sm:p-12 -mt-72">
                                    <h1 className='text-center text-white text-2xl font-semibold' >We have different teaching services, different programs which will help children
                                        to understand well technology and grow with better practice.
                                    </h1>
                            <div className="flex flex-wrap">
                                <div className="lg:pt-12 pt-6 w-full md:w-2/4 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-award"></i>
                                            </div>
                                            <h6 className="text-xl font-semibold p-6">Coding/Programming</h6>
                                            <p className="mt-2 mb-8 mt-6 text-gray-900 pb-6">
                                                We teach children how to deal with coding to create their own interactive stories,
                                                games and animations to prepare them for a better future in Tech careers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:pt-12 pt-6 w-full md:w-2/4 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            {/* <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-retweet"></i>
                                            </div> */}
                                            <h6 className="text-xl font-semibold p-4">
                                            Coding/Programming
                                            </h6>
                                            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHByb2dyYW1taW5nJTIwZm9yJTIwYWZyaWNhbiUyMGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                            {/* <p className="mt-2 mb-4 text-gray-900">
                                                Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
                                            </p> */}
                                        </div>
                                    </div>
                                </div>
                               
                                
                                <div className="lg:pt-12 pt-6 w-full md:w-2/4 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            {/* <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-retweet"></i>
                                            </div> */}
                                            <h6 className="text-xl font-semibold p-4">
                                                Engineering/Robotics
                                            </h6>
                                            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaWxkJTIwaW4lMjBpbmZvcm1hdGlvbiUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                            {/* <p className="mt-2 mb-4 text-gray-900">
                                                Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
                                            </p> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:pt-12 pt-6 w-full md:w-2/4 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-fingerprint"></i>
                                            </div>
                                            <h6 className="text-xl font-semibold p-4">
                                                Engineering/Robotics
                                            </h6>
                                            <p className="mt-2 mb-4 text-gray-600 pb-3">
                                                We teach children to deal with the engineering part this allowing them
                                                to build different components including robots, to increase their creativity level,
                                                problem solving  and decision making skills.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:pt-12 pt-6 w-full md:w-2/4 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-retweet"></i>
                                            </div>
                                            <h6 className="text-xl font-semibold p-8">
                                            Science
                                            </h6>                                            
                                            <p className="mt-2 text-gray-900 pb-8">
                                            We teach children how to deal with science practically 
                                            which helps them develop their observation level and improve 
                                            their critical thinking level.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:pt-12 pt-6 w-full md:w-2/4 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            {/* <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-retweet"></i>
                                            </div> */}
                                            <h6 className="text-xl font-semibold">
                                            Science
                                            </h6>
                                            <img src={learner} alt="" />
                                            {/* <p className="mt-2 mb-4 text-gray-900">
                                                Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
                                            </p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="min-h-screen flex flex-row items-center justify-center bg-gray-100">
                        {/* <div class="flex flex-col mr-8 bg-blue-100 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-20 border-2 w-50 max-w-md py-28">
                            <h2 className="flex justify-center text-xl font-bold -mt-8">Services we provide for childreen</h2>
                            <ul class="py-12 space-y-3">
                                <li class="flex items-center space-x-2 text-sm font-medium">
                                    <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span>Training how to use robotics</span>
                                </li>
                                <li class="flex items-center space-x-2 text-sm font-medium">
                                    <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span>Help children to get basic skills on AI-ML</span>
                                </li>
                                <li class="flex items-center space-x-2 text-sm font-medium">
                                    <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span>Teach basic skills on automation technology</span>
                                </li>
                                <li class="flex items-center space-x-2 text-sm font-medium">
                                    <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span>hands on practice with physical robots</span>
                                </li>
                                <li class="flex items-center space-x-2 text-sm font-medium">
                                    <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span>Help children to build their own robots</span>
                                </li>
                            </ul>
                            <h2 className="flex justify-center text-xl">We offer Training for individual and group!</h2>
                        </div> */}

                        <div class="bg-blue-400 w-full shadow rounded p-8 sm:p-12 -mt-72 max-w-5xl mx-auto mb-12 mt-96 ">
                            <h2 className="flex justify-center text-xl font-bold">Programs</h2>
                            <ul class="py-12 space-y-3">
                                <li class="flex items-center space-x-2 text-sm font-medium">
                                    <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span>Holiday program</span>
                                </li>
                                <li class="flex items-center space-x-2 text-sm font-medium">
                                    <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span>weekend program</span>
                                </li>
                                <li class="flex items-center space-x-2 text-sm font-medium">
                                    <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span>School program</span>
                                </li>
                                <li class="flex items-center space-x-2 text-sm font-medium">
                                    <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span>online program</span>
                                </li>
                            </ul>
                            <div>
                                <img src={Robot} alt="robot" className="rounded rounded-lg h-56" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Services