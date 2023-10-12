
/* navbar scroll hiding */

var lastScrollTop; // This Varibale will store the top position

window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar'); // Get The NavBar
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    //This line will get the location on scroll

    if (scrollTop > lastScrollTop) { //if it will be greater than the previous
        navbar.style.top = '-80px';
        //set the value to the negetive of height of navbar 
    }

    else {
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});
