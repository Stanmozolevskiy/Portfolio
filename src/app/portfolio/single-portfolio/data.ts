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
        },
        {
            id: "b2winform",
            name: "B2W Inform",
            secondTitle: "Paperless data capture and reporting tool",
            tags: ["Angular", ".NET", "MobileApp", "SQL", "TypeScript", 
            "Sass", "Node.js", "AWS S3", "API", "IIS"],
            date:"2016",
            link: "https://www.b2wsoftware.com/products/construction-safety-software/",
            techSpecifications: ["B2W Inform is a tool for capturing data with ease across dozens of heavy construction workflows and using it to drive safety, compliance, performance and profitability. Inform built with the latest frameworks .NET 5 Angular 12 and SQL server. B2W Inform hosted in Azure cloud server using SQL availability groups and load balancer for the IIS. "],
            responsibilities: ["I was responsible for migrating the application to the .NET 5 and Angular 12 front end using an opportunity to rewrite the code for the new platform to make it more suitable and keep the best performance possible."],
            boolet: ["Front End Development (Angular, TypeScript, Bootstrap)", "Admin panel development and integration with REST API", "AWS deployment (Bean Stalk and CloudFront + S3)", "Server side rendering and Lazy loading with Angular"],
            chalanges: ["The biggest challenges were in implantation of some old logic into a new environment which is .NET 5 but it gave us incredible scalability increase. We used built in .NET 5 dependency injection and Lazy loading for the Angular 12. During the migration process we completely changed the token operations from custom to JWT mechanism."],
            images: ["../../../assets/images/Inform/inform-mobile.jpg", "../../../assets/images/Inform/inform-mobile_1.jpg", "../../../assets/images/Inform/inform-mobile_2.jpg", "../../../assets/images/Inform/inform-mobile_3.jpg"]
        },
        {
            id: "movieapes",
            name: "Movieapes",
            secondTitle: "Movie rating aplications",
            tags: ["Angular", "TMDB", "MobileApp", "FrontEnd", "TypeScript", 
            "Sass", "Node.js", "Design", "API", "UX", "DNS"],
            date:"2018",
            link: "https://movieapes.com/movie",
            techSpecifications: ["The Movieapes is the source of entertainment information, with features designed to help fans explore the world of movies and shows and decide what to watch. You can also easily find the place where you can rent the movies you like."],
            responsibilities: ["I was responsible for the entire project and implemented it using the Angular 12 framework along with static HTML templates that I purchased from https://preview.themeforest.net . For the data provider I chose The Movie Database API, They have the biggest collection of the data available at the moment."],
            boolet: ["Front End Development (Angular, TypeScript, Bootstrap)", "Work with REST API provider", "DNS C Recorsd binding", "Server side rendering and Lazy loading with Angular"],
            chalanges: ["I run this project using the Trello boards so you can see entire progress and challenges along with solutions here: https://trello.com/b/rvGjvRIp/kanban-template.", "Some of the challenges of this specific project were implementing the YouTube modal popup to play automatically since it is prohibited by most of the browsers. I also had to convert all of the Static HTML 5 template tender data dynamically that was supplied by the API."],
            images: ["../../../assets/images/MovieApes/Movie-Apes.jpg", "../../../assets/images/MovieApes/Movie-Apes_1.jpg", "../../../assets/images/MovieApes/Movie-Apes_2.jpg", "../../../assets/images/MovieApes/Movie-Apes_3.jpg",  "../../../assets/images/MovieApes/Movie-Apes_4.jpg",  "../../../assets/images/MovieApes/Movie-Apes_5.jpg",  "../../../assets/images/MovieApes/Movie-Apes_6.jpg"]
        }
    ] 
}
