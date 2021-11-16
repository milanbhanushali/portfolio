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
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn"))
    {
        // console.log("HI");
        togglePortfolioPopup()
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup()
{
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);


// hide popup when clicking outside of it
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pp-inner"))
    {
        togglePortfolioPopup();
    }
});


function portfolioItemDetails(portfolioItem)
{
    //console.log(portfolioItem);
    document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;


    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;


}


    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7' , 'Sem 8'],
            datasets: [{
                label: 'SPI',
                data: [8.44, 8.57, 8.48, 10, 8.76, 8.85],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });