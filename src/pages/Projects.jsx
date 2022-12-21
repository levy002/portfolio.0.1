/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import LineGradient from '../components/lineGradient';

const projects = [
  {
    title: 'Doctors',
    src: '../assets/doctors.png',
    description: [
      'Doctor Appointment is a full stack application for book an appointment with doctor. This applications is responsive and users can load, create, and delete doctors and appointments. Users need to sign up or sign in to access application. They can sign up or sign in using the sign up and login forms.',
    ],
    technologies: ['React', 'Rails', 'Redux', 'CSS'],
    seeLiveLink: 'https://appointment-app-frontend.netlify.app/',
    seeSourceLink: 'https://github.com/ridaarif98/doctors_appointment_front_end',
  },
  {
    title: 'Awesome-Books',
    src: '../assets/awesomeBooks.png',
    description:
      'Personal library which allow user to add name of the book and at the same time with the name of the author. User is able to Add new book and Delete book. This app allows user to store all changes in Local storage so user can be able to see his/her stored data anytime.',
    technologies: ['Javascript', 'Html', 'css', 'Webpack'],
    seeLiveLink: 'https://awesome-book-202.netlify.app/',
    seeSourceLink: 'https://github.com/levy002/Awesome-books-ES6',
  },
  {
    title: 'TRAnzKT',
    src: '../assets/TRanzakt.png',
    description: [
      'TRAnzKT App is a mobile web application that allows the user to manage his/her budget: they have a list of transactions associated with a category, so that the user can see how much money they spend and on a particular category.',
    ],
    technologies: ['Rails', 'Tailwind', 'Rspec'],
    seeLiveLink: 'dry-bastion-60998.herokuapp.com/',
    seeSourceLink: 'https://github.com/levy002/budget-app',
  },
  {
    title: 'ShowTime',
    src: '../assets/showtime.png',
    description: [
      'ShowTime is a web application based on an external TV Maze API. The API provides data about TV Shows. We then built the webapp around it. The webapp has 2 user interfaces (pages): The Homepage and the Comment modal. On the Homepage, each Show can be liked and commented on.',
    ],
    technologies: ['JavaScript', 'CSS', 'Jest', 'Webpack'],
    seeLiveLink: 'https://show-time-202.netlify.app/',
    seeSourceLink: 'https://github.com/levy002/ShowTime',
  },
  {
    title: 'Bookstore',
    src: '../assets/bookstore.png',
    description: [
      'Bookstore-CMS is an SPA made for all the book lovers. It enables users to track the book progress, add new book and delete book.',
    ],
    technologies: ['React.js', 'Redux', 'Tailwind', ''],
    seeLiveLink: 'https://bookstore-cms-202.netlify.app/',
    seeSourceLink: 'https://github.com/levy002/BookStore--CMS',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({
  title, src, stack, sourceCode, liveDemo,
}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="ss:text-3xl text-2xl font-playfair text-blue font-bold">{title}</p>
        <div className="flex gap-2 mt-4">
          {
            stack.map((s) => (
              <p key={s} className=" text-deep-blue font-semifold text-xl">{s}</p>
            ))
          }
        </div>
        <div className="flex gap-5 mt-5 items-center">
          <a
            href={sourceCode}
            className="border-1 rounded-full bg-red p-2"
            target="_blank"
            rel="nonreferrer noreferrer"
          >
            <AiFillGithub size={24} />
          </a>
          <a
            href={liveDemo}
            className="border-1 rounded-full bg-red p-2"
            target="_blank"
            rel="nonreferrer noreferrer"
          >
            <AiFillEye size={22} />
          </a>
        </div>
      </div>
      <img src={src} alt={title} className="h-[220px] w-full" />
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="py-48">
    {/* HEADINGS */}
    <motion.div
      className="md:w-2/5 mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div>
        <p className="font-playfair font-semibold text-4xl">
          <span className="text-blue">PRO</span>
          JECTS
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-2/3" />
        </div>
      </div>
      <p className="mt-10 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
        repudiandae dolore at ratione nulla vero.
      </p>
    </motion.div>

    {/* PROJECTS */}
    <div className="flex justify-center">
      <motion.div
        className="sm:grid sm:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {
            projects.map((project) => (
              <Project
                key={project.title}
                title={project.title}
                src={project.src}
                stack={project.technologies}
                sourceCode={project.seeSourceLink}
                liveDemo={project.seeLiveLink}
              />
            ))
        }
      </motion.div>
    </div>
  </section>
);

export default Projects;
