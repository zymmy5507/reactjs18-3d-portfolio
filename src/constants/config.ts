type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Varun",
    fullName: "Varun Sharma",
    email: "vsharma5507@gmail.com",
  },
  hero: {
    name: "Varun Sharma",
    p: ["Motivated and versatile, I thrive on challenges and continuous learning. With a growth mindset, I'm driven to deliver impactful results."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Hi, I'm a passionate full stack developer skilled in JavaScript, TypeScript, Node.js, Express, MongoDB, and PostgreSQL. I love building scalable web applications and RESTful APIs. I’ve also worked with AWS services to deploy and manage cloud-based solutions. Always eager to learn, adapt, and deliver high-impact tech solutions.

`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    // feedbacks: {
    //   p: "What others say",
    //   h2: "Testimonials.",
    // },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
