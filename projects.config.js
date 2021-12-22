import rateMyLease from "./public/RateMyLease_JChoe.png";
import biasML from "./public/BiasML_by_SSerafin.png";
import workoutApp from "./public/WorkoutApp_icon.png";
import novellyMarket from "./public/novellylogo1.png";
import ucsdLogo from "./public/UCSD_logo.jpeg";

const projects = [
    {
        "name": "BiasML",
        "image": biasML,
        "description": "BiasML is a full stack web app. It uses React as a frontend and Google Firebase backend as a service. My team and I implemented webscraping and natural language machine learning to analyze the political bias of web articles.",
        "link": "https://devpost.com/software/bias-ml"
    },
    {
        "name": "Rate My Lease",
        "image": rateMyLease,
        "description": "RateMyLease is a fullstack web app. It assists UC Davis students with finding leases especially after the Covid-19 Lockdown. My team and I use a React frontend, an Express backend, and a MongoDB database.",
        "link": "https://github.com/jiuchoe4/rate-my-lease"
    },
    {
        "name": "Workout App",
        "image": workoutApp,
        "description": "A personal passion project: to create a mobile app to log my workouts. I used Swift and iOS Cocoapods Libraries to create an iOS app that I use daily top log my workout routines. This app is a work-in-progress.",
        "link": "https://github.com/eal001/Workout-App"
    }, 
    {
        "name": "Novelly Marketing Website",
        "image": novellyMarket,
        "description": "I built Novelly's marketing website using Webflow and the professional advice of designer Nicole Davenport and product manager Shantelle Serafin. It describes Novelly's mission to empower young writers.",
        "link": "https://www.novelly.org/"
    }, 
    {
        "name": "Data Science in Practice",
        "image": ucsdLogo,
        "description": "My team and I took large scale, real world data and used pandas, sklearn, and nltk to answer the question \"Is stock trading volume affected by Twitter?\" Professor Jason Fleischer supervised this class project.",
        "link": "https://github.com/COGS108/Group002-Fa21"
    }
]

export default projects;