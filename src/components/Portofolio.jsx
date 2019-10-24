import React from 'react'

const Portofolio = () => {
    const line1 = [
        { image: '', url: 'image', title: 'Final Project.', desc: 'On progress' },
        { image: '../images/stackoverflow', url: 'http://toooverflow.guntoroyk.site/', title: 'TooOverflow', desc: 'Build with Vuex, Node.js, Express, and Mongoose' },
        { image: '', url: 'https://kanban-210eb.firebaseapp.com/', title: 'Realtime Draggable Kanban', desc: 'Build with Vue.js and Firebase' },
        { image: '', url: 'http://mindlee.guntoroyk.site/', title: 'Mini Wordpress', desc: 'Build with Vue.js, Node.js, Express, and Mongoose' },
        { image: '', url: 'http://grabah.guntoroyk.site/', title: 'eCommerce', desc: 'There are 2 roles, customer and admin'},
    ]
    const line2 = [
        { image: '', url: 'https://restoque.guntoroyk.site/', title: 'RestoQue', desc: 'Build with React Native, Redux, and data from 3rd party API' },
        { image: '', url: 'https://firstpass-5d751.firebaseapp.com/', title: 'FirstPass', desc: 'Build with...' },
        { image: '', url: '', title: 'Movie and Tv Show v1', desc: '' },
        { image: '', url: '', title: 'Movie and TV Show v2', desc: '' },
        { image: '', url: '', title: 'Todo App', desc: 'Build with jQeury, Node.js, Express, and Mongoose' },
    ]

    return (
        <div className="mt-10">
            <div className="lg:flex">
                {line1.map(porto => (
                    <div className="lg:w-1/5 px-2 py-2 lg:py-0">
                        <a href={porto.url} target="_blank">
                            <div className="h-32 w-full rounded-lg bg-red-500">
                                <img src={`${porto.image}`}></img>
                            </div>
                        </a>
                        <p className="text-xs font-semibold">{porto.title}</p>
                        <p className="text-xs">{porto.desc}</p>
                    </div>
                ))}
            </div>
            <div className="lg:flex mt-6">
                {line2.map(porto => (
                    <div className="lg:w-1/5 px-2 py-2 lg:py-0">
                        <a href={porto.url} target="_blank">
                            <div className="h-32 w-full rounded-lg bg-red-500"></div>
                        </a>
                        <p className="text-xs font-semibold">{porto.title}</p>
                        <p className="text-xs">{porto.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portofolio