import React from "react";

const Education = () => {
  return (
    <>
      <div class="mt-10">
        <div class="md:flex">
          <h2 class="font-bold text-lg">Hacktiv8 Indonesia</h2>
          <p class="ml-auto text-base">Jakarta, ID</p>
        </div>
        <div class="md:flex">
          <h2 class="italic text-base">Full Stack Javascript Immersive</h2>
          <p class="ml-auto text-base">Jun - Oct 2019</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="md:flex">
          <h2 class="font-bold text-lg">Universitas Gadjah Mada</h2>
          <p class="ml-auto text-base">Yogyakarta, ID</p>
        </div>
        <div class="md:flex">
          <h2 class="italic text-base">
            Bachelor of Applied Science, Internet Engineering
          </h2>
          <p class="ml-auto text-base">2018 - now</p>
        </div>
        <h2 class="italic text-base flex items-start">
          On going (5<span className="text-xs">th</span>-term of 8 term)
        </h2>
      </div>
      <div class="mt-10">
        <div class="md:flex">
          <h2 class="font-bold text-lg">SMK Negeri 2 Klaten</h2>
          <p class="ml-auto text-base">Klaten, ID</p>
        </div>
        <div class="md:flex">
          <h2 class="italic text-base">
            Vocational High School, Computer and Network Engineering
          </h2>
          <p class="ml-auto text-base">2014 - 2018</p>
        </div>
      </div>
    </>
  );
};

export default Education;
