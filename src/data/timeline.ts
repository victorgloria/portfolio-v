interface Items {
    year: number;
    title: string;
    duration: string;
    details: string;
}

const timeline: Items[] = [
    {
        year: 2023,
        title: "Graduated from university",
        duration: "4 Years",
        details: "Got my Bachelor's of Science from the University of Texas at San Antonio. I specialized in Software Engineering.",
    },
    {
        year: 2023,
        title: "Built an API with PHP",
        duration: "5 Months",
        details: "Successfully made a RESTful API that applies the CRUD fundamentals with PHP. Which was connected to a MySql database, with a search capability.",
    },
    {
        year: 2023,
        title: "Over The Limit",
        duration: "4 months",
        details: "Over the limit is a top-down roguelike shooter that I made with Unity. With basic movement and shooting capabilities and a rudamentary enemy AI",
    },
    {
        year: 2022,
        title: "About Me Website",
        duration: "4 months",
        details: "A Webpage that I built to learn the fundamentals of web design. Using HTML, Bootstrap CSS, Javascript, PHP, and Jquery.",
    },
]

export default timeline