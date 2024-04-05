interface Project {
    title: string;
    imgUrl: string;
    stack: string[];
    link: string;
}

const portfolio: Project[] = [
    {
        title: 'Unity Game',
        imgUrl: "public/2024-04-04.png",
        stack: ['C#', 'Github', 'Animation'],
        link: 'https://github.com/victorgloria/Final-Project'
    },
    {
        title: 'API RESTful APP',
        imgUrl: "public/2024-04-04 (2).png",
        stack: ['PHP', 'HTML', 'SQLite'],
        link: 'https://github.com/victorgloria/API-Project'
    },
    {
        title: 'About Me Website',
        imgUrl: "public/2024-04-04 (1).png",
        stack: ['Javascript', 'CSS', 'HTML'],
        link: 'https://github.com/victorgloria/Web-Technologies-project'
    },
];

export default portfolio;