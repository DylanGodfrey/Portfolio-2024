// Icon imports
import flask from "../assets/flask.svg";
import react from "../assets/react.svg";
import sqlalchemy from "../assets/sqlalchemy.svg";
import graphQL from "../assets/graphql.svg";
import sui from "../assets/sui.svg";
import bulma from "../assets/bulma.svg";
import tailwind from "../assets/tailwind.svg";
import mongodb from "../assets/mongodb.svg";
import vapour from "../assets/vapour.png";
import gfr from "../assets/goodfoodreviews.jpg";

const userData = {
  githubUsername: "DylanGodfrey",
  name: "Dylan Godfrey",
  designation: "Full-Stack Developer",
  email: "dylangodfrey962@gmail.com",
  phone: "+1 6477829904",
  address: "Toronto, ON Canada",
  projects: [
    {
      id: "1",
      name: "Vapour",
      subtitle: "Catalog all of your favourite games",
      screenshot: vapour,
      techs: [
        {
          frontend: "React",
          fe_icon: react,
          css: "bulmaCSS",
          css_icon: bulma,
          backend: "GraphQL",
          be_icon: graphQL,
        },
      ],
      desc: [
        "Led a team of 3 in developing a single-page app for users to explore and catalog info about their favorite games",
        "Designed a mobile-friendly UI with Adobe XD and used the bulmaCSS framework to translate design into code",
        "Initiated a comprehensive project plan using a Kanban board that outlined individual responsibilities, milestones, and timelines, which led to effective issue resolution in triages",
        "Optimized API calls by narrowing platform support, resulting in a 40% reduction in server load from queries",
        "Deployed successful application on Heroku ahead of schedule, allowing 2 more days to optimize than expected",
      ],
      live: "",
      source: "https://github.com/MichaelSinn/vapour",
    },
    {
      id: "2",
      name: "GoodFood Reviews",
      subtitle: "Socialize with other foodies",
      screenshot: gfr,
      techs: [
        {
          frontend: "React",
          fe_icon: react,
          css: "Semantic UI",
          css_icon: sui,
          backend: "MongoDB",
          be_icon: mongodb,
        },
      ],
      desc: [
        "Developed a dynamic, WordPress-inspired food blog site to foster socialization and facilitate food reviews, emphasizing user empowerment through critical API routes",
        "Conducted thorough testing of API endpoints, proactively resolving edge cases to provide a predictable result",
        "Motivated anxious team members through empathetic leadership, fostering a positive work environment",
        "Delivered and deployed the project on Heroku, optimizing scalability for global accessibility and contributing to timely market entry with heightened customer satisfaction",
      ],
      live: "",
      source: "https://github.com/DianasJourney/GoodFoodReviews",
    },
    {
      id: "3",
      name: "Youth Health Clinic Locator",
      subtitle: "Help users in need find the closest health clinic",
      screenshot: "http://bulma.io/images/placeholders/1280x960.png",
      techs: [
        {
          frontend: "Flask",
          fe_icon: flask,
          css: "Tailwind",
          css_icon: tailwind,
          backend: "SQAlchemy",
          be_icon: sqlalchemy,
        },
      ],
      desc: [
        "Identified a critical gap in youth healthcare accessibility, as 76% of families in Ontario surveyed by Children’s Mental Health Ontario (CMHO) faced challenges locating sensitive youth health services during emergencies",
        "Developed a youth health clinic locator to facilitate emergency navigation based on the user's current location and specific medical needs, optimizing for a meaningful reduction in response time",
        "Implemented a data processing script for the City of Toronto's API, strategically filtering out incomplete information to enhance user guidance and enable quicker decision-making and action initiation",
        "Optimized response time significantly, improving youth emergency healthcare access by swiftly delivering critical data for users to make immediate, informed decisions",
      ],
      live: "",
      source: "#",
    },
  ],
  socialLinks: {
    github: "https://github.com/DylanGodfrey",
  },
};

export default userData;
