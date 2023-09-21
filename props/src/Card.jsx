import React from 'react'
import { Image } from './Image'

const Card = ({ name, destination }) => {
    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 flex-none w-96dark:bg-slate-800">
                
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg" alt width={384} height={512} />

                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {name}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {destination}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>

    )
}

export default Card