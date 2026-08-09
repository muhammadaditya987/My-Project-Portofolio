import ecommerceImage from "../assets/images/projects/Screenshot (343).png";
import expenseImage from "../assets/images/projects/Screenshot (344).png";
import portfolioImage from "../assets/images/projects/Screenshot (345).png";

const projectsData = [
    {
        id: 1,
        title: "E-Commerce Cart",
        description:
            "Website e-commerce dengan product listing, category filtering, cart management, dan REST API.",
        image: ecommerceImage,
        technologies: [
            "React",
            "Redux Toolkit",
            "Tailwind CSS",
            "REST API",
        ],
        category: "React",
    },

    {
        id: 2,
        title: "Expense Tracker",
        description:
            "Aplikasi pencatat pemasukan dan pengeluaran dengan CRUD, search, filter, sorting, dan localStorage.",
        image: expenseImage,
        technologies: [
            "React",
            "Redux Toolkit",
            "Tailwind CSS",
            "LocalStorage",
        ],
        category: "React",
    },

    {
        id: 3,
        title: "Portfolio Website",
        description:
            "Portfolio website modern dengan responsive layout, animation, smooth scrolling, dan interactive UI.",
        image: portfolioImage,
        technologies: [
            "React",
            "Tailwind CSS",
            "GSAP",
            "Motion",
        ],
        category: "Frontend",
    },

    {
        id: 4,
        title: "Movie Search App",
        description:
            "Aplikasi pencarian film dengan integrasi API, responsive design, dan user-friendly interface.",
        image: portfolioImage,
        technologies: [
            "React",
            "Tailwind CSS",
            "LocalStorage",
            "REST API",
        ],
        category: "React",
    },

    {
        id: 5,
        title: "Todo List App",
        description:
            "Aplikasi pencatatan tugas dengan fitur CRUD, search, dan filter.",
        image: portfolioImage,
        technologies: [
            "React",
            "Tailwind CSS",
            "LocalStorage",
            "Redux Toolkit",
        ],
        category: "React",
    },
];

export default projectsData;