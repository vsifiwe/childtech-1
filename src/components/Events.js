import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Link } from 'react-router-dom'
import eventimage from '../assets/online.png'
import eventimag from '../assets/classroom.png'

function Events() {
    return (
        <div>
            <Header />
            <div className="flex w-full min-h-full justify-center items-center" style={{ backgroundColor: '#F5F4F9' }}>
                <div className="p-4 min-w-full max-w-4xl mt-16" style={{ backgroundColor: '#F5F4F9' }}>
                    <h2 className="flex justify-center -mb-8 text-xl font-bold text-center ml-80 mr-80">You can check the past events and upcoming events, if you are interested in past event
                        let us know through our communication channel in about us</h2>
                    <div className="flex justify-center font-bold p-8 mt-8">
                        <h1 className="text-3xl text-center font-bold text-blue-500">Past Events</h1>
                    </div>
                    <div class="min-h-full flex flex-row justify-center bg-gray-100">
                        <div class="flex flex-row bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-16 border-2  w-50 max-w-md">
                            <div id="whoobe-3fery" class="w-full md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col mr-6">
                                <img src={eventimage} alt="img" title="img" class="w-full h-auto object-cover rounded-t-lg" id="whoobe-ixxe5" />
                                <div id="whoobe-1okdg" class="w-full p-4 justify-start flex flex-col">
                                    <p class="my-4 text-center" id="whoobe-950fw">Basic understanding about
                                        technology of robotics
                                        in early age.</p>
                                    <button value="button" class="my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500 rounded" id="whoobe-jkkr2">View</button>
                                </div>
                            </div>
                            
                            <div id="whoobe-3fery" class="w-full md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
                                <img src={eventimag} alt="img" title="img" class="w-full h-auto object-cover rounded-t-lg" id="whoobe-ixxe5" />
                                <div id="whoobe-1okdg" class="w-full p-2 justify-start flex flex-col">
                                    <p class="my-4 text-center" id="whoobe-950fw">How to connect all components within a robots</p>
                                    <button value="button" class="my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500 rounded" id="whoobe-jkkr2">View</button>
                                </div>
                            </div>
                            <div id="whoobe-3fery" class="w-full md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col mr-6">
                                <img src={eventimage} alt="img" title="img" class="w-full h-auto object-cover rounded-t-lg" id="whoobe-ixxe5" />
                                <div id="whoobe-1okdg" class="w-full p-4 justify-start flex flex-col">
                                    <p class="my-4 text-center" id="whoobe-950fw">Basic understanding about
                                        technology of robotics
                                        in early age.</p>
                                    <button value="button" class="my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500 rounded" id="whoobe-jkkr2">View</button>
                                </div>
                            </div>
                            <div id="whoobe-3fery" class="w-full md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col mr-6">
                                <img src={eventimage} alt="img" title="img" class="w-full h-auto object-cover rounded-t-lg" id="whoobe-ixxe5" />
                                <div id="whoobe-1okdg" class="w-full p-4 justify-start flex flex-col">
                                    <p class="my-4 text-center" id="whoobe-950fw">Basic understanding about
                                        technology of robotics
                                        in early age.</p>
                                    <button value="button" class="my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500 rounded" id="whoobe-jkkr2">View</button>
                                </div>
                            </div>
                            <div id="whoobe-3fery" class="w-full md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
                                <img src={eventimag} alt="img" title="img" class="w-full h-auto object-cover rounded-t-lg" id="whoobe-ixxe5" />
                                <div id="whoobe-1okdg" class="w-full p-2 justify-start flex flex-col">
                                    <p class="my-4 text-center" id="whoobe-950fw">How to connect all components within a robots</p>
                                    <button value="button" class="my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500 rounded" id="whoobe-jkkr2">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-7/12 lg:2/3 mx-auto relative py-20 ">
                        <h1 class="text-3xl text-center font-bold text-blue-500">Upcomming Events</h1>
                        <div class="border-l-2 mt-4">
                            {/* <!-- Card 1 --> */}
                            <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-500 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                {/* <!-- Dot Follwing the Left Vertical Line --> */}
                                <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                {/* <!-- Line that connecting the box with the vertical line --> */}
                                <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                                {/* <!-- Content that showing in the box --> */}
                                <div class="flex-auto">
                                    <h1 class="text-lg">Event 1</h1>
                                    <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                                    <h3>Leapr Lab Rugando</h3>
                                    <h3>10 December 2021</h3>
                                </div>
                                <Link to="/booking" class="text-center ring-white p-2 rounded ring-2 text-white hover:text-gray-300">Book for Event</Link>
                            </div>

                            {/* <!-- Card 2 --> */}
                            <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-500 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                {/* <!-- Dot Follwing the Left Vertical Line --> */}
                                <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                {/* <!-- Line that connecting the box with the vertical line --> */}
                                <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                                {/* <!-- Content that showing in the box --> */}
                                <div class="flex-auto">
                                    <h1 class="text-lg">Event 2</h1>
                                    <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                                    <h3>Creativity Lab kimihurura</h3>
                                    <h3>14 December 2021</h3>
                                </div>
                                <Link to="/booking" class="text-center ring-white p-2 rounded ring-2 text-white hover:text-gray-300">Book for Event</Link>
                            </div>

                            {/* <!-- Card 3 --> */}
                            <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-500 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                {/* <!-- Dot Follwing the Left Vertical Line --> */}
                                <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                {/* <!-- Line that connecting the box with the vertical line --> */}
                                <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                                {/* <!-- Content that showing in the box --> */}
                                <div class="flex-auto">
                                    <h1 class="text-lg">Event 3</h1>
                                    <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                                    <h3>FAB Lab kacyiru</h3>
                                    <h3>17 December 2021</h3>
                                </div>
                                <Link to="/booking" class="text-center ring-white p-2 rounded ring-2 text-white hover:text-gray-300">Book for Event</Link>
                            </div>

                            {/* <!-- Card 4 --> */}
                            <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-500 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                {/* <!-- Dot Follwing the Left Vertical Line --> */}
                                <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                {/* <!-- Line that connecting the box with the vertical line --> */}
                                <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                                {/* <!-- Content that showing in the box --> */}
                                <div class="flex-auto">
                                    <h1 class="text-lg">Event 4</h1>
                                    <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                                    <h3>KLAB kacyiru</h3>
                                    <h3>22 December 2021</h3>
                                </div>
                                <Link to="/booking" class="text-center ring-white p-2 rounded ring-2 text-white hover:text-gray-300">Book for Event</Link>
                            </div>

                            {/* <!-- Card 5 --> */}
                            <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-500 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                {/* <!-- Dot Follwing the Left Vertical Line --> */}
                                <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                                {/* <!-- Line that connecting the box with the vertical line --> */}
                                <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                                {/* <!-- Content that showing in the box --> */}
                                <div class="flex-auto">
                                    <h1 class="text-lg">Event 5</h1>
                                    <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                                    <h3>Online</h3>
                                    <h3>25 January 2022</h3>
                                </div>
                                <Link to="/booking" class="text-center ring-white p-2 rounded ring-2 text-white hover:text-gray-300">Book for Event</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Events