"use client"
import { useState } from "react"
export default function Contactpage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // Reset form fields
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    }

    return(
        <>
            <div className="p-4 md:p-20 flex flex-col justify-center items-center">
                <div className="max-w-4xl w-full bg-gradient-to-r from-orange-100 via-yellow-100 to-gray-100 p-8 rounded-lg shadow-lg">
                    <h2 className="font-bold text text-center ">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4"   >
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name" className="text">Name</label>
                                <input type="text" name="name" value={formData.name} id="" placeholder="Enter name" 
                                onChange={handleChange} className="text p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"/>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="text">Email</label>
                                <input type="text" name="email" value={formData.email} id="" placeholder="abc@gmail.com" 
                                onChange={handleChange} className="text p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"/>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="message" className="text">Message</label>
                            <textarea name="message" id="message" className="text p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500
                            " placeholder="Enter your message" rows={10} value={formData.message} onChange={handleChange}>
                            </textarea>
                        </div>

                        <button type="submit" className="btn text">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}