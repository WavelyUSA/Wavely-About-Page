import React from "react";
import "./Profiles.css";
import ProfileCard from "./ProfileCard/ProfileCard";

const imgURLs = [
  {
    path: require("../images/Profile/Danie.png"),
    id: 1,
    name: "Danie Li",
    quote:
      "“Blazing new trails requires grit, resilience, and most importantly trusting yourself. When you believe in yourself, you’ll realize your greatest dreams - and inspire others to do the same.”",
    linkedinURL: "https://www.linkedin.com/in/danie-l-008a4313a/",
    position: "Chief Executive Officer"
  },
  {
    path: require("../images/Profile/Amber.png"),
    id: 2,
    name: "Amber Srivastava",
    quote:
      "“Tomorrow is too late & yesterday is already over. Right now is the only right moment- so start now!“",
    linkedinURL: "https://www.linkedin.com/in/amber-srivastava-2479198/",
    position: "Business Development Director"
  },
  {
    path: require("../images/Profile/Matei.png"),
    id: 3,
    name: "Matei Andrei",
    quote:
      "”You can do not just twice as much but 200 times as much when you have great teammates.”",
    linkedinURL: "https://www.linkedin.com/in/matei-andrei/",
    position: "Business Development Manager"
  },
  {
    path: require("../images/Profile/Vince.png"),
    id: 4,
    name: "Vincent Bi",
    linkedinURL: "https://www.linkedin.com/in/han-vincent-bi-7305618b/",
    position: "Product Manager"
  },
  {
    path: require("../images/Profile/Elif.png"),
    id: 5,
    name: "Elif Ayca Afsar",
    quote:
      "”Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.”",
    linkedinURL: "https://www.linkedin.com/in/elif-ayca-afsar-44594a9b/",
    position: "Product Manager"
  },
  {
    path: require("../images/Profile/Tingting.png"),
    id: 6,
    name: "Tingting Lin",
    quote:
      "”If you are doing what you like, you will see yourself being passionate, energetic, and curious about your surroundings. You won't be able to stop thinking even when you are resting. This will motivate you to grow rapidly with the company you work for.”",
    linkedinURL: "https://www.linkedin.com/in/tingting-lin-19737130/",
    position: "Human Resources Manager"
  },
  {
    path: require("../images/Profile/Sophie.png"),
    id: 7,
    name: "Sophie Eden",
    linkedinURL: "https://www.linkedin.com/in/sophie-eden-silicon-valley/",
    position: "Marketing Specialist"
  },
  {
    path: require("../images/Profile/Greg.png"),
    id: 8,
    name: "Greg Tang",
    quote:
      "“Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication. Remember all things are possible for those who believe.“",
    linkedinURL: "https://www.linkedin.com/in/gregory-tang-041127153",
    position: "Software Engineer"
  },
  // {
  //   path: require("../images/Profile/Daniela.png"),
  //   id: 9,
  //   name: "Daniela Zhang",
  // linkedinURL: "https://www.linkedin.com/in/daniela-zhang-60235527/",
  //   position: "BD Intern"
  // },
  {
    path: require("../images/Profile/Alexa.png"),
    id: 10,
    name: "Alexa Zhao",
    quote:
      "“Don’t Be Too Timid And Squeamish About Your Actions. All Life Is An Experiment. The More Experiments You Make The Better.”",
    linkedinURL: "https://www.linkedin.com/in/alexazhao/",
    position: "Senior Marketing Specialist"
  },
  {
    path: require("../images/Profile/Cindy.png"),
    id: 11,
    name: "Cindy Chen",
    quote:
      "“What makes life interesting is the possibility of having your dreams come true.“",
    linkedinURL: "https://www.linkedin.com/in/qiyue-chen-080206/",
    position: "Marketing Specialist"
  },
  {
    path: require("../images/Profile/William.png"),
    id: 12,
    name: "William Wu",
    quote:
      "“Stay Hungry. Stay Foolish. Push yourself. Stay eager to learn, take risks, and keep trying to do what others say can’t be done.“",
    linkedinURL: "https://www.linkedin.com/in/jingwei940704/",
    position: "Business Development Associate"
  },
  {
    path: require("../images/Profile/Summer.png"),
    id: 13,
    name: "Summer Xue",
    linkedinURL: "https://www.linkedin.com/in/chun-xue-9b4088150/",
    position: "Marketing Specialist"
  },
  {
    path: require("../images/Profile/Kavya.png"),
    id: 14,
    name: "Kavya Sreedhar",
    linkedinURL: "https://www.linkedin.com/in/kavyasreedhar/",
    position: "Business Development Manager"
  },
  {
    path: require("../images/Profile/Leonard.png"),
    id: 15,
    name: "Leonard Zhang",
    linkedinURL: "https://www.linkedin.com/in/zhuofanzhang1996/",
    position: "Business Data Analyst"
  },
  {
    path: require("../images/Profile/Amannda.png"),
    id: 16,
    name: "Amannda Armanini",
    linkedinURL: "https://www.linkedin.com/in/amanndaarmanini/",
    position: "Marketing Specialist"
  }
];

class Carousel extends React.Component {
  state = {
    imgURLs: imgURLs
  };
  render() {
    const mappedProfiles = this.state.imgURLs.map(profile => (
      <ProfileCard
        url={profile.path}
        name={profile.name}
        position={profile.position}
        id={profile.id}
        linkedinURL={profile.linkedinURL}
      />
    ));

    return (
      <div className="carousel-giant-container">
        <div className="our-team-text">Our Team</div>
        <div className="carousel-component-container">
          <div className="carousel-picture-info-container">
            {mappedProfiles}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
