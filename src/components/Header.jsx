import React from 'react'

const Header = () => {
    return (
        <div className="md:flex mb-8">
            <div>
                <h1 className="font-bold md:text-6xl text-3xl">Guntoro Yudhy Kusuma</h1>
            </div>
            <div className="ml-auto mt-6 md:text-right">
                <p>Email : <a
                    href="mailto:guntoro.gyk@gmail.com"
                    className="hover:text-blue-500 text-blue-700">
                    guntoro.gyk@gmail.com</a>
                </p>
                <p>Mobile: (+62) 85 713 470 777</p>
            </div>
        </div>
    )
}

export default Header