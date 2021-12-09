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
                    <div class="min-h-screen flex flex-row items-center justify-center bg-gray-100">
                        <div class="flex flex-col bg-gray-100 shadow-md sm:px-6 md:px-8 lg:px-10 border-2 max-w-md">
                            <h2 className="flex justify-center text-xl font-bold -pt-8">Location</h2>
                            <div>
                                <iframe className="rounded rounded-lg" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d893.029056620538!2d30.093349203704836!3d-1.9623039421907786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a557abbdf820e7e!2sCreativity%20Lab!5e1!3m2!1sen!2srw!4v1638434989225!5m2!1sen!2srw" width="500" height="540" loading="lazy"></iframe>
                            </div>
                        </div>
                        <div class="flex flex-col bg-blue-100 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-6 w-50 ml-32 max-w-md ">
                            <h2 className="flex justify-center text-xl font-bold">About Us</h2>
                            <ul class="py-12 space-y-3">
                                <li class="flex items-center space-x-2 text-lg font-medium">                                    
                                    <span>we are entreprenueurs tech, we passionated
                                        in helping children to be educated through
                                        technology.</span>
                                </li>
                                <li class="flex space-x-2 text-lg font-medium">                                   
                                    <span>we provide information technology training
                                        for children from 7 to 15 years old.</span>
                                </li>
                                <li class="space-x-2 text-xl text-center font-bold">
                                    <span> Contact us</span>
                                </li>
                                <li class="flex  space-x-2 text-lg font-medium">
                                    <span>Telephone: +250785262657</span>
                                </li>
                                <li class="flex  space-x-2 text-lg font-medium">
                                    <span>Email: igiginixy10@gmail.com</span>
                                </li>
                                <li class="space-x-2 text-xl text-center font-bold">
                                    <span> Address:</span>
                                </li>
                                <li class="flex space-x-2 text-lg font-medium">
                                    <span>Kigali city, Gasabo District, Kimihurura-Rugando</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About