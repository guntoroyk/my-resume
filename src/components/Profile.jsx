import React from 'react'

const Profile = () => {
    return(
        <div className="mt-10">
            <p>Full stack developer with strong passion in both backend and frontend stack. Passionate in solving problem through clean and maintainable code.</p>
            <div class="mt-6">
                <div class="md:flex">
                    <p class="md:w-2/12 font-bold">Date of birth</p>
                    <p class="w-9/12 mb-2 md:mb-0">June 3, 1999</p>
                </div>
                <div class="md:flex">
                    <p class="md:w-2/12 font-bold">Status</p>
                    <p class="w-9/12 mb-2 md:mb-0">Single</p>
                </div>
                <div class="md:flex">
                    <p class="md:w-2/12 font-bold">Address</p>
                    <p class="w-9/12 mb-2 md:mb-0">Jl. Pandanaran, Paseban, Bayat, Klaten, Jawa Tengah, 57462</p>
                </div>
                <div class="md:flex">
                    <p class="md:w-2/12 font-bold">LinkedIn</p>
                    <p class="w-9/12 mb-2 md:mb-0">
                        <a
                            href="https://www.linkedin.com/in/guntoroyk"
                            target="_blank"
                            class="hover:text-blue-500 text-blue-700">
                            https://www.linkedin.com/in/guntoroyk</a>
                    </p>
                </div>
                <div class="md:flex">
                    <p class="md:w-2/12 font-bold">Github</p>
                    <p class="w-9/12 mb-2 md:mb-0">
                        <a
                            href="https://www.github.com/guntoroyk"
                            target="_blank"
                            class="hover:text-blue-500 text-blue-700">
                            https://www.github.com/guntoroyk</a>
                    </p>
                </div>
                <div class="md:flex">
                    <p class="md:w-2/12 font-bold">Area of Interest</p>
                    <p class="w-9/12 mb-2 md:mb-0">
                        Mobile App Development, Web App Development, and Cloud Computing
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile