import React from 'react';
import {FaPlaneDeparture, FaChild, FaPlaneArrival} from "react-icons/fa";
import {GiPerson} from "react-icons/gi"
import { useForm } from "react-hook-form";

const FlightApp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("data - ", data);
    }
    console.log()


    return (
        <>
            <section className='max-w-xl mx-auto mt-10 mb-10 drop-shadow-xl shadow-blue-900'>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-white w-auto h-auto pb-10 mt-5 mx-5 px-5 rounded-lg">
                    {/*    header */}
                        <div>
                            <p className='uppercase font-bold text-4xl text-center'>flight book app</p>
                        </div>

                    {/*    body */}
                        <div className='flex flex-col space-y-5'>
                            <div>
                                <div className="flex space-x-8 mt-5">
                                    <div className='flex items-center space-x-2 '>
                                        <input
                                            type="radio"
                                            className={`w-6 h-6  ${errors.tripType && " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                            value="round trip"
                                            {...register("tripType", {
                                                    required: {
                                                        value: true,
                                                        message: "Trip type is require"
                                                    }}
                                            )}

                                        />
                                        <p className='text-xl font-bold'>Rounded Trip</p>
                                    </div>

                                    <div className='flex items-center space-x-2 '>
                                        <input
                                            type="radio"
                                            className={`w-6 h-6  ${errors.tripType && " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                            value="one way"
                                            {...register("tripType", {
                                                required: {
                                                    value: true,
                                                    message: "Trip type is require"
                                                }
                                            })}
                                        />
                                        <p className={`text-xl font-bold`}>One Way</p>
                                    </div>

                                    <div className='flex items-center space-x-2'>
                                        <input
                                            type="radio"
                                            className={`w-6 h-6  ${errors.tripType && " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                            value="multy-city"
                                            {...register("tripType", {
                                                required: {
                                                    value: true,
                                                    message: "Trip type is require"
                                                }
                                            })}
                                        />
                                        <p className='text-xl font-bold'>Multy-city</p>
                                    </div>
                                </div>
                                <div>
                                    {errors.tripType && <span className='text-sm text-red-500'>{errors.tripType.message}</span>}
                                </div>
                            </div>

                        {/*    departure */}
                            <div>
                                <div>
                                    <div className='relative '>
                                        <p className='font-bold text-xl uppercase ' >Flying form</p>
                                        <select
                                            className={`w-full h-16 rounded-lg text-2xl  pl-20 ${errors.departure && " focus:border-red-500 focus:ring-red-500 border-red-500"} `}
                                            {...register("departure", {
                                                required: {
                                                    value: true,
                                                    message: "Departure is require"
                                                }
                                            })}
                                        >
                                            <option value="" selected disabled hidden>--Select Airport--</option>
                                            <option value="ENIA">England Newcastle International Airport</option>
                                            <option value="INIA">Italy Naples International Airport</option>
                                            <option value="MMA">Malaysia Mulu Airport</option>
                                            <option value="KMA">Kenya Malindi Airport</option>
                                        </select>
                                        <FaPlaneDeparture  className='text-4xl absolute left-5 top-10 '/>
                                    </div>
                                    <div>{errors.departure && <span className='text-sm text-red-500'>{errors.departure.message}</span>}</div>
                                </div>
                            </div>

                            {/*    arrival */}
                            <div >
                                <div>
                                    <div className='relative '>
                                        <p className='font-bold text-xl uppercase ' >Flying to</p>
                                        <select
                                            {...register("arrival", {
                                                required: {
                                                    value: true,
                                                    message: "Arrival is require"
                                                }
                                            })}
                                            className={`w-full h-16 rounded-lg text-2xl  pl-20 
                                            ${errors.arrival && " focus:border-red-500 focus:ring-red-500 border-red-500"} `}
                                        >
                                            <option value="" selected disabled hidden>--Select Airport--</option>
                                            <option value="ENIA">England Newcastle International Airport</option>
                                            <option value="INIA">Italy Naples International Airport</option>
                                            <option value="MMA">Malaysia Mulu Airport</option>
                                            <option value="KMA">Kenya Malindi Airport</option>
                                        </select>
                                        <FaPlaneArrival  className='text-4xl absolute left-5 top-10 '/>
                                    </div>
                                    <div>{errors.arrival && <span className='text-sm text-red-500'>{errors.arrival.message}</span>}</div>
                                </div>
                            </div>


                        {/*    date */}
                            <div className='flex space-x-2'>
                                <div  className='w-full'>
                                    <div>
                                        <div className='relative '>
                                            <p className='font-bold text-xl uppercase ' >Departure Date</p>
                                            <input
                                                type="date"
                                                {...register("departureDate", {
                                                    required: {
                                                        value: true,
                                                        message: "Departure date is require"
                                                    }
                                                })}
                                                className={`w-full h-16 rounded-lg text-2xl 
                                                ${errors.departureDate && " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                            />
                                        </div>
                                        <div>{errors.departureDate && <span className='text-sm text-red-500'>{errors.departureDate.message}</span>}</div>
                                    </div>
                                </div>


                                <div  className='w-full'>
                                    <div>
                                        <div className='relative '>
                                            <p className='font-bold text-xl uppercase ' >Return Date</p>
                                            <input
                                                type="date"
                                                {...register("returnDate", {
                                                    required: {
                                                        value: true,
                                                        message: "Return date is require"
                                                    }
                                                })}
                                                className={`w-full h-16 rounded-lg text-2xl 
                                                ${errors.returnDate && " focus:border-red-500 focus:ring-red-500 border-red-500"}
                                                `}
                                            />
                                        </div>
                                        <div>{errors.returnDate && <span className='text-sm text-red-500'>{errors.departureDate.message}</span>}</div>
                                    </div>
                                </div>
                            </div>

                        {/*    Passenger */}
                            <div className="flex   space-x-2">
                                {/*     adult  */}
                                <div  className='w-full'>
                                    <div>
                                        <div className='relative '>
                                            <p className='font-bold text-xl uppercase ' >Adult (+18)</p>
                                            <select
                                                className='w-full h-16 rounded-lg text-2xl  pl-20'>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <GiPerson  className='text-4xl absolute left-5 top-10 '/>
                                        </div>
                                    </div>
                                </div>
                                {/* children */}
                                <div  className='w-full'>
                                    <div>
                                        <div className='relative '>
                                            <p className='font-bold text-xl uppercase ' >Children (0-17)</p>
                                            <select
                                                className='w-full h-16 rounded-lg text-2xl  pl-20'>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <FaChild  className='text-4xl absolute left-5 top-10 '/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        {/*    class and prices section */}
                            <div className='flex space-x-2'>
                                {/* class */}
                                <div  className='w-full'>
                                    <div>
                                        <div >
                                            <p className='font-bold text-xl uppercase ' >Class</p>
                                            <select
                                                className='w-full h-16 rounded-lg text-2xl  pl-20'>
                                                <option>Economy</option>
                                                <option>Business</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* price */}
                                <div  className='w-full'>
                                    <div>
                                        <div >
                                            <p className='font-bold text-xl uppercase ' >Price</p>
                                            <select
                                                className='w-full h-16 rounded-lg text-2xl  pl-20'>
                                                <option>All Prices</option>
                                                <option>$ 1000</option>
                                                <option>$ 2000</option>
                                                <option>$ 3000</option>
                                                <option>$ 4000</option>
                                                <option>$ 5000</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        {/*    btn  */}
                            <div>
                                <input
                                    disabled={Object.keys(errors).length > 0}
                                    type="submit"
                                    value="Find Flight"
                                    className={`w-full h-16 cursor-pointer font-bold text-3xl uppercase rounded-lg bg-green-100 hover:bg-white 
                                    ${Object.keys(errors).length > 0 && 'bg-gray-200'} `}
                                />
                            </div>


                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default FlightApp;