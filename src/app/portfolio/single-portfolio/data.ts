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
            techSpecifications: ["The Groomsmith is a barbershop that is based in Portsmouth NH. The site runs on WordPress CMS and utilizes modern design with good user experience. The website contains the E-commerce and booking section along with easy check out using paypal."],
            responsibilities: ["I was responsible for design and development and hosting implementation of complete websites, page structure and web development."],
            boolet: ["Layout, UI and UX design", "Front End Development", "Integration with WordPress", "Responsive Design"],
            chalanges: ["Being a software developer, UI/UX design is not something I specialize in but still able to handle when required. The Groomsmith is another example that confirms that. During the implantation of this website I ran into some smaller insignificant challenges related to the migration. The customer already had an existing solution that they were using and the challenge for us was to replace the old site with the new one seamless for the end users which we were able to achieve."],
            images: ["../../../assets/images/TheGroomsmith/Contact.jpg", "../../../assets/images/TheGroomsmith/HomePage.jpg", "../../../assets/images/TheGroomsmith/Services.jpg", "../../../assets/images/TheGroomsmith/Store.jpg", "../../../assets/images/TheGroomsmith/Team.jpg"]
        },
        {
            id: "yorkriverlanding",
            name: "The York River Landing",
            secondTitle: "Seafood restaurant based in York Maine",
            tags: ["Wordpress", "HTML5", "WooComerce", "Design", "CSS3", 
            "Sass", "JavaScript", "UX", "Google Maps API", "PayPal integration"],
            date:"2019",
            link: "https://theyorkriverlanding.com/",
            techSpecifications: ["The York River Landing is a vital part of the community and always has been. The Restaurant is based in Your Maine. The site runs on WordPress CMS and utilizes modern design with good user experience. The website contains the booking section along with  Untapped beer menu integration."],
            responsibilities: ["I was responsible for design and development and hosting implementation of complete websites, page structure and web development."],
            boolet: ["Layout, UI and UX design", "Front End Development", "Integration with WordPress", "Responsive Design"],
            chalanges: ["Being a software developer, UI/UX design is not something I specialize in but still able to handle when required. The York River Landing is another example that confirms that. During the implantation of this website I ran into some smaller insignificant challenges related to the migration.", "The customer already had an existing solution that they were using and the challenge for us was to replace the old site with the new one seamless for the end users which we were able to achieve."],
            images: ["../../../assets/images/YourkRiverLanding/Contact.jpg", "../../../assets/images/YourkRiverLanding/Events.jpg", "../../../assets/images/YourkRiverLanding/FrontPage.jpg", "../../../assets/images/YourkRiverLanding/Lunch Page.jpg", "../../../assets/images/YourkRiverLanding/Vine.jpg"]
        },
        {
            id: "northwoodsbrewingcompany",
            name: "Northwoods Brewing Company",
            secondTitle: "Seafood restaurant based in York Maine",
            tags: ["Wordpress", "HTML5", "WooComerce", "Design", "CSS3", 
            "Sass", "JavaScript", "UX", "Google Maps API", "PayPal integration"],
            date:"2020",
            link: "https://northwoodsbrewingcompany.com/",
            techSpecifications: ["Northwoods Brewing Company is a brewery that produces a wide variety of craft brews using locally sourced ingredients whenever possible. The site runs on WordPress CMS and utilizes modern design with good user experience. The website contains the booking section along with  E-commerce."],
            responsibilities: ["I was responsible for design and development and hosting implementation of complete websites, page structure and web development."],
            boolet: ["Layout, UI and UX design", "Front End Development", "Integration with WordPress", "Responsive Design"],
            chalanges: ["Being a software developer, UI/UX design is not something I specialize in but still able to handle when required. Northwoods Brewing Company is another example that confirms that. During the implantation of this website I ran into some smaller insignificant challenges related to the migration.", "The customer already had an existing solution that they were using and the challenge for us was to replace the old site with the new one seamless for the end users which we were able to achieve."],
            images: ["../../../assets/images/Northwoods/Store.jpg", "../../../assets/images/Northwoods/Meetourteam.jpg", "../../../assets/images/Northwoods/Home.jpg", "../../../assets/images/Northwoods/Events.jpg"]
        }
    ] 
}
