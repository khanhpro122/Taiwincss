import React from 'react'
import card from '../../access/desktop/isocard.svg'

export default function Slogan() {
    return (
        <section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
            <div className="text-center md:col-span-1 md:col-start-2">
                <p className="">
                    Earn <span className="text-purple-300">More</span>
                </p>
                <p className="">Pay Less</p>
                <button className="btn-start-slogan">
                    Start
                </button>
            </div>
            <div className="mt-[68px] md:absolute md:right-[-5rem]">
                <img src={card} alt="cards" />
            </div>
        </section>
    )
}
