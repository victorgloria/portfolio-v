interface Project {
    title: string;
    imgUrl: string;
    stack: string[];
    link: string;
}

const portfolio: Project[] = [
    {
        title: 'Terminal Website',
        imgUrl: "",
        stack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://google.com'
    },
    {
        title: 'Developer Portfolio',
        imgUrl: "",
        stack: ['React', 'TailwindCSS', 'TypeScript'],
        link: 'https://google.com'
    },
    {
        title: 'Unity Game',
        imgUrl: "",
        stack: ['Unity', 'C#', 'Github'],
        link: 'https://google.com'
    }
];

export default portfolio;