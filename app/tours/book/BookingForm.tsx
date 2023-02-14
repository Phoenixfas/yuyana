'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useAppSelector } from '../../redux/hooks'

export default function BookingForm() {
    const tour = useAppSelector(state => state.activeTour)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    /// form data states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        setError('')
        
        if(firstName === "" || lastName === "" || email === "") {
            setLoading(false)
            setError("Please fill in all fields")
        }else{
            fetch("https://test.afriopia.com/payment/init", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: tour.price,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    tour: true,
                    tour_id: tour._id,
                }),
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data.data.checkout_url)
                setError('')
                setLoading(false)
                window.location = data.data.checkout_url
            })
            .catch((e) => {
                setError(e)
                setLoading(false)
                console.error(e);
            });

        }
    }


  return (
    <div className='pt-32 w-full flex flex-col items-center justify-center'>
        {loading && <div className='absolute w-full flex items-center justify-center'><div className="w-10 h-10 rounded-full border-4 border-[#04ac3c] border-t-[transparent] animate-spin"></div></div>}
        <div className="max-w-[800px] bg-white rounded-xl p-10 flex flex-col items-center ">
            <h1 className='text-5xl text-center font-bold text-[#FEA100]'>Book A Tour</h1>
            {error && <div className='text-red-500 text-center'>{error}</div>}
            <form className='flex flex-wrap mt-10 gap-10' onSubmit={onSubmit}>
                <div className="flex-[1] min-w-[200px] h-fit flex flex-col items-center justify-center rounded-xl bg-[#fff4db] overflow-hidden">
                    <div className='w-full mb-3 rounded-xl duration-300 cursor-pointer overflow-hidden relative'>
                        <Image className='w-full max-h-[500px] object-cover' src={tour.image} alt={tour.name} width={500} height={500} quality={100} />
                    </div>
                    <div className='w-full p-4 text-[#131316] text-xl text-center flex items-center'>{tour.name}</div>
                </div>
                <div className="flex-grow flex flex-col">
                    <div className="flex flex-col mb-5">
                        <label htmlFor="first_name">First Name</label>
                        <input required className='w-full text-lg p-2 rounded-lg bg-[#fff4db] outline-none border-b-2 border-[#131316]' type="text" name="first_name" id="first_name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="last_name">Last Name</label>
                        <input required className='w-full text-lg p-2 rounded-lg bg-[#fff4db] outline-none border-b-2 border-[#131316]' type="text" name="last_name" id="last_name" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="email">Email</label>
                        <input required className='w-full text-lg p-2 rounded-lg bg-[#fff4db] outline-none border-b-2 border-[#131316]' type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="amount">Amount</label>
                        <p className="w-full text-lg p-2 rounded-lg bg-[#fff4db] outline-none text-[#13131688]" >${tour.price}</p>
                    </div>
                    <div className="flex flex-col mb-5">
                        <button className='w-fit text-lg py-2 px-5 rounded-lg bg-[#FEA100] outline-none text-[#fff4db]' type="submit">Checkout to chapa</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
