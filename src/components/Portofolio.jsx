import React from 'react';

import kanban from '../images/kanban.png';
import restoque from '../images/restoque.png';
import stackoverflow from '../images/tooOverflow.png';
import firstpass from '../images/firstpass.png';
import yogassistant from '../images/yogassistant.png';
import movie_catalogue from '../images/movie_catalogue.png';
import entertainme from '../images/entertainme.png';
import word_matching from '../images/word_matching.png';
import grabah from '../images/grabah.png';
import miniwp from '../images/miniwp.png';
import revolto from '../images/revolto.png';
import dapurmami from '../images/dapurmami.png';
import dapurmami_admin from '../images/dapurmami-admin.png';
import gret_web from '../images/gret-web.png';
import gret_desktop from '../images/gret-desktop.png';

const Portofolio = () => {
  const line3 = [
    {
      image: dapurmami,
      url: 'http://157.230.38.226:5001/',
      title: 'Web App | Dapurmami',
      desc: `Web app version of Dapurmami android app. Built using NodeJS, NextJS and Fastify.`,
    },
    {
      image: dapurmami_admin,
      url: 'https://admin.dapurmami.id/',
      title: 'Admin Dashboard | Dapurmami',
      desc: `Admin dashboard for Dapurmami. Built using ExpressJS, ReactJS, and react-admin.`,
    },
    {
      image: revolto,
      url: 'https://beta.revolto.id/',
      title: 'Revolto',
      desc: `Revolto is a marketplace that provides parts for customizing motorcycle. It has a tagline "The World's Largest Fit Bike Parts". Build with NodeJS, MySQL, Nuxtjs, and Vuetify. This webapp featured with SSR and PWA to support offline mode.`,
    },
    {
      image: gret_web,
      url: 'https://dewi-gadget.herokuapp.com/',
      title: 'Gret Web',
      desc: `GRet Web is the webapp, PWA ready, and simplified version of GRet Software for Retail (Desktop App). GRet web was built using Node JS, MySQL, Sequelize, and React JS with react-admin dashboard.`,
    },
    {
      image: gret_desktop,
      url: '#',
      title: 'GRet Software for Retail',
      desc: `GRet Software for Retail is Windows desktop application which built using VB.Net and Microsoft SQL Server.`,
    },
  ];
  const line2 = [
    {
      image: yogassistant,
      url: 'https://yogasisstant.site/',
      title: 'Yoga Assisstant | Final Project Hacktiv8',
      desc: `A virtual friend who guide you to do self paced Yoga at home. This apps built with ML5, a friendly machine learning for the web. Also using some cut-edge technologies such Express, Redis, Mongoose, Firebase Auth, & AWS on backend stack. And React JS, Redux, & React Router on frontend stack.`,
    },
    {
      image: firstpass,
      url: 'https://firstpass-5d751.firebaseapp.com/',
      title: 'FirstPass',
      desc:
        'A web app that can help you remember your passwords. Built with React JS, Redux, and Firebase Firestore.',
    },
    {
      image: restoque,
      url: 'https://restoque.guntoroyk.site/',
      title: 'RestoQue',
      desc:
        'Simple web app built with React JS, Redux, and using data from Zomato API.',
    },
    {
      image: movie_catalogue,
      url: 'https://expo.io/@guntoroyk/movie-catalogue',
      title: 'Movie Catalogue',
      desc:
        'A mobile app that allow you discover Movies and Tv Shows from TMDB Api. You can also mark your favorite Movies and/or Tv Shows. Built with React Native, Redux, Expo-cli and Firebase Firestore.',
    },
    {
      image: entertainme,
      url: 'https://expo.io/@guntoroyk/entertainme',
      title: 'Entertainme',
      desc:
        'A mobile app that allow you save your favorite movies or tv shows on your own database. This app implement microservices so the movie and tv show server is separated. To access both servers,we created an Orchestrator that use GraphQL to deliver data to client. We also implement data caching with Redis on Orchestrator. On the client, instead using Redux for state management, we use Apollo Client.',
    },
  ];
  const line1 = [
    {
      image: word_matching,
      url: 'https://expo.io/@guntoroyk/word-mathing',
      title: 'Word Matching',
      desc:
        'Test your memory with this game. Tap one picture then look for the same letter behind the other picture. Build with love, React Native, and Expo-cli.',
    },

    {
      image: stackoverflow,
      url: 'https://toooverflow.guntoroyk.site/',
      title: 'TooOverflow',
      desc:
        'A mini clone of Stack Overflow that allow you to create questions and give answer to other question. Built with Vue JS, Vuex, Express Js, and Mongoose.',
    },
    {
      image: kanban,
      url: 'https://kanban-210eb.firebaseapp.com/',
      title: 'Realtime Draggable Kanban',
      desc:
        'You can manage your task with this app. This app was built with Vue JS, Vuex, and Firebase Firestore.',
    },
    {
      image: miniwp,
      url: 'https://mindlee.guntoroyk.site/',
      title: 'Mini Wordpress',
      desc: 'A mini CMS built with Vue JS, Vuex, Express JS, and Mongoose.',
    },
    {
      image: grabah,
      url: 'https://grabah.guntoroyk.site/',
      title: 'Grabah Store',
      desc:
        'An e-commerce built with Vue JS, Vuex, Express JS, and Mongoose. The images on this app was uploaded to Google Cloud Storage.',
    },
  ];

  return (
    <div className="mt-10">
      <div className="lg:flex">
        {line3.map((porto, i) => (
          <div className="lg:w-1/5 px-2 py-2 lg:py-0" key={i}>
            <a href={porto.url} target="_blank">
              <div className="h-24 w-full rounded-lg object-cover shadow">
                <img src={porto.image} className="h-full w-full"></img>
              </div>
              <p className="text-xs font-semibold mt-2">{porto.title}</p>
            </a>
            <p className="text-xs">{porto.desc}</p>
          </div>
        ))}
      </div>
      <div className="lg:flex">
        {line2.map((porto, i) => (
          <div className="lg:w-1/5 px-2 py-2 lg:py-0" key={i}>
            <a href={porto.url} target="_blank">
              <div className="h-24 w-full rounded-lg object-cover shadow">
                <img src={porto.image} className="h-full w-full"></img>
              </div>
              <p className="text-xs font-semibold mt-2">{porto.title}</p>
            </a>
            <p className="text-xs">{porto.desc}</p>
          </div>
        ))}
      </div>
      <div className="lg:flex mt-6">
        {line1.map((porto, i) => (
          <div className="lg:w-1/5 px-2 py-2 lg:py-0" key={i}>
            <a href={porto.url} target="_blank">
              <div className="h-24 w-full rounded-lg object-cover shadow">
                <img src={porto.image} className="h-full w-full"></img>
              </div>
              <p className="text-xs font-semibold mt-2">{porto.title}</p>
            </a>
            <p className="text-xs">{porto.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
