import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import d1 from "../../assets/images/man1.jpg";
import d2 from "../../assets/images/women1.jpg";
import d3 from "../../assets/images/man2.jpg";
import d4 from "../../assets/images/women2.jpg";


const testimonials = [
  {
    id: 1,
    imgSrc: d1,
    name: "John Doe",
    designation: "Senior Executive Officer",
    rating: 4.5,
    icon: "bi-chat-quote",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    id: 2,
    imgSrc: d2,
    name: "Jeannie A. Frink",
    designation: "Executive Officer",
    rating: 4,
    icon: "bi-chat-quote",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    imgSrc: d3,
    name: "Robert G. Johnson",
    designation: "Executive Officer",
    rating: 3.5,
    icon: "bi-chat-quote",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    imgSrc: d4,
    name: "Yolanda J. Wright",
    designation: "Executive Officer",
    rating: 5,
    icon: "bi-chat-quote",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default testimonials;
