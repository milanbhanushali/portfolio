console.log("Haale che")
// window.addEventListener("load",()=>{
//     document.querySelector(".main").classList.remove("hidden");
//     document.querySelector(".home-selection").classList.add("active");
//     /*------page loader--------*/
//     document.querySelector(".page-loader").classList.add("fade-out");
//     setTimeout(()=>{
//         document.querySelector(".page-loader").style.display = "none";
//     },600);
// });


// /*----toggle navbar-----*/
// const navToggler = document.querySelector(".nav-toggler");
// navToggler.addEventListener("click",()=>{
//     hideSection();
//     toggleNavbar();
//     document.body.classList.toggle("hide-scrolling");
// });

// function hideSection()
// {
//     console.querySelector("selection.active").classList.toggle("fade-out");
// }
// function toggleNavbar()
// {
//     document.querySelector(".header").classList.toggle("active");
// }

// /*--------Active Section-----------------*/
// document.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("link-item") && e.target.hash !== "" )
//     {
//         //active the overlay to prevent multiple clicks
//         document.querySelector(".overlay").classList.add("active");
//         navToggler.classList.add("hide");
//        // const hash = e.target.hash;
//         if(e.target.classList.contains("nav-item"))
//         {
//             toggleNavbar();
//         }
//         else
//         {
//             //console.log("false");
//             hideSection();
//             document.body.classList.add("hide-scrolling");
//         }
//         setTimeout(()=>{
//             document.querySelector("selection.active").classList.remove("active","fade-out");
//             document.querySelector(e.target.hash).classList.add("active");
//             window.scrollTo(0,0);
//             document.body.classList.remove("hide-scrolling");
//             navToggler.classList.remove("hide");
//             document.querySelector(".overlay").classList.remove("active");

//         },500);

//     }
// });

/*------------------------ About Tabs -----------------------*/

// let expereince = document.getElementById("experience");
// let education = document.getElementById("education");
// let btnExp = document.getElementById("btnExperience");
// let btnEdu = document.getElementById("btnEducation");
// function educationClick(){
    
//     console.log("Education hailu");

//     expereince.classList.remove("active");
//     education.classList.add("active");

//     btnEdu.classList.add("active");

//     btnExp.classList.remove("active");
    

// }
// function expereinceClick(){
    
//     console.log("Expereince hailu");
    
//     education.classList.remove("active");
//     expereince.classList.add("active");
    
//     btnExp.classList.add("active");
//     btnEdu.classList.remove("active");
    
// }
let tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

console.log(tabsContainer);

tabsContainer.addEventListener("click",(e)=>{
    console.log(e);
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active"))
    {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");


    }
});


/*---------------portflolio Item Details popup-----------------------*/
// document.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("view-project-btn"))
//     {
//         togglePortfolioPopup()
//         document.querySelector(".portfolio-popup").scrollTo(0,0);
//         portfolioItemDetails(e.target.parentElement);
//     }
// });

// function togglePortfolioPopup()
// {
//     document.querySelector(".portfolio-popup").classList.toogle("open");
//     document.body.classList.toggle("hide-scrolling");
//     document.querySelector(".main").classList.toggle("fade-out");
// }

// document.querySelector(".pp-close".addEventListener("click",togglePortfolioPopup));


// // hide popup when clicking outside of it
// document.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("pp-inner"))
//     {
//         togglePortfolioPopup();
//     }
// });


// function portfolioItemDetails(portfolioItem)
// {
//     //console.log(portfolioItem);
//     document.querySelector(".pp-thumbnail img").src =
//     portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

//     document.querySelector(".pp-header h3").innerHTML = 
//     portfolioItem.querySelector(".portfolio-item-title").innerHTML;


//     document.querySelector(".pp-body").innerHTML = 
//     portfolioItem.querySelector(".portfolio-item-details").innerHTML;


// }


