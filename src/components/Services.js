import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Robot from '../assets/robot.png'

function Services() {
    return (
        <div>
            <Header />
            <div className="flex w-full min-h-full justify-center items-center" style={{ backgroundColor: '#F5F4F9' }}>
                <div className="p-4 min-w-full max-w-4xl" style={{ backgroundColor: '#F5F4F9' }}>
                    {/* <h2 className="flex justify-center -mb-8 text-xl font-bold mt-16">Services</h2> */}
                    <div class="min-h-screen flex flex-row items-center justify-center bg-gray-100 border border-1">
                        <div class="flex flex-col mr-8 bg-blue-100 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-20 border-2 w-50 max-w-md py-28">
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
                        </div>
                        <div class="flex flex-col bg-blue-100 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-6 w-50 max-w-md">
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
                                <img  src={Robot} alt="robot" className="rounded rounded-lg h-56"/>
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