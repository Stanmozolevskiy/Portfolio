export class data{
   constructor(
        name: string,
        id:string,
        secondTitle: string,
        tags: string[],
        date:string,
        link: string,
        techSpecifications: string[],
        responsibilities: string[],
        boolet: string[],
        chalanges: string[],
        images: string[]
        ){}
}

export function getData(): data[] {
    return [
        {
            id: "groomsmith",
            name: "The Groomsmith",
            secondTitle: "Local barbershop website",
            tags: ["Wordpress", "HTML5", "WooComerce", "Design", "CSS3", 
            "Sass", "JavaScript", "UX", "Google Maps API", "PayPal integration"],
            date:"2019",
            link: "https://www.thegroomsmith.us/",
            techSpecifications: ["Solar Massasje is a Norwegian professional maseur marketing website. The site runs on WordPress CMS and utilizes modern design with good user experience."],
            responsibilities: ["I was responsible for both design and development of complete website including logo design, page structure and web development."],
            boolet: ["Layout, UI and UX design", "Front End Development", "Integration with WordPress", "Responsive Design"],
            chalanges: ["Being a web developer, UI/UX design is not something I specialize in but still able to handle when required. Solar Massasje is another example that confirms that.", "The move from WordPress to Gatsby resulted in major performance boost (over 3 times faster load time),PWA (Progressive Web Application) support and huge maintenace cost reduce (it is way cheaper to host a static site compared to a WordPress theme)."],
            images: ["../../../assets/images/TheGroomsmith/Contact.jpg", "../../../assets/images/TheGroomsmith/HomePage.jpg", "../../../assets/images/TheGroomsmith/Services.jpg", "../../../assets/images/TheGroomsmith/Store.jpg", "../../../assets/images/TheGroomsmith/Team.jpg"]
        }
    ] 
}
