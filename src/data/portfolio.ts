interface Project {
    title: string;
    imgUrl: string;
    stack: string[];
    link: string;
}

const portfolio: Project[] = [
    {
        title: 'Unity Game',
        imgUrl: '/gameproject.png',
        stack: ['C#', 'Github', 'Animation'],
        link: 'https://github.com/victorgloria/Final-Project'
    },
    {
        title: 'API RESTful APP',
        imgUrl: '/apiproject.png',
        stack: ['PHP', 'HTML', 'SQLite'],
        link: 'https://github.com/victorgloria/API-Project'
    },
    {
        title: 'About Me Website',
        imgUrl: '/webproject.png',
        stack: ['Javascript', 'CSS', 'HTML'],
        link: 'https://github.com/victorgloria/Web-Technologies-project'
    },
];

export default portfolio;