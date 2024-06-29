# Dream Tea House
Scenario: Dream Teahouse is a newly established premium teashop that offers a unique, high-quality tea blend as its flagship product. To portray their commitment to providing an exceptional tea-drinking experience, Dream Teahouse plans to create an informational website that will serve as an online resource for tea enthusiasts and potential customers. 
## Deployment
![dream teahouse](docs/Readmeimages/validation/DTH-amiresponsive.png)
This is the live website and repo:
* [Dream Teahouse](https://jonfd4.github.io/dreamTeaHouseProject/)
* [Repositiory](https://github.com/JonFD4/dreamTeaHouseProject.git)
### To deploy on github
1. Sign in to github and find the right repository.
2. Click on settings and then pages.
3. Under build and deployment, make sure set the source: "Deploy from a branch" and Branch: "main" - another dropdown will I appear beside this; make sure the selected item is "file icon/root".
4. Click save to begin the building process. When the page is refreshed the link to the live deployment website will be available at the top.

### Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the GitHub Repository.
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.
   
### Making a Local Clone
1. Log in to GitHub and find the GitHub Repository
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.
     ```bash
     $ git clonehttps://github.com/JonFD4/dreamTeaHouseProject.git
     ```
7. Press Enter. Your local clone will be created.
---
<br>

# Overview
Create a functional and aesthetically pleasing website that is responsive, considers accesbility and is user-friendly.

**Remaking portfolio one**


## Design process
## User Perspective:
As a potential customer or a tea enthusiast, visiting Dream Teahouse's website, the user would expect the following:

1. Product Details: Users would want comprehensive information about the tea blend, including its unique flavors, origins, the ingredients used, and the detailed brewing instructions. This will help them understand the quality and uniqueness of the product.

2. Mission and Story: Users are interested in learning about the teashop's mission, values, and the story behind the creation of the signature tea blend. This information gives them a deeper connection and understanding of the brand.

3. Tea Education: Users would want access to educational content about tea, such as brewing tips, information on different types of tea, health benefits, and the proper way to serve and enjoy tea. They desire a platform that not only offers products but also educates and enriches their tea-drinking experience.

4. Product Availability: Users would appreciate a section that informs them about where the product can be purchased, both online and in physical stores. Details about shipping options, retail partners, and any upcoming events or promotions would be useful.

## Familiarity of users
**First time user**
* I want to understand the primary goal of the site.
* I want to the website to be easily navigable through the website and clear directions as well as CTAs.
* I want to find product sections and learn about the purpose of each product.
 * I want exploration and usage of the site to be intuitive
 
 **Returning and/ or Frequent user**
 * I want exploration and usage of the site to be intuitive
 * I want to be able to readily and easily purchase products


## Developer Perspective:
When developing the website for Dream Teahouse, the website developer would focus on the following aspects:

1. Engaging Design: The developer would create an aesthetically pleasing and user-friendly website design that aligns with the teahouse's brand identity. The design should evoke a sense of tranquility and elegance, reflecting the essence of tea.

2. Responsive Design: The developer would prioritize making the website fully responsive, ensuring it functions seamlessly across various devices (desktops, tablets, and mobile phones). This enhances the user experience and accessibility.

3. Integration of Multimedia: To enhance the user experience, the developer may integrate multimedia elements such as high-resolution images and videos demonstrating tea brewing techniques. These elements can make the website more engaging and informative.

4. SEO Optimization: The developer would implement search engine optimization techniques to improve the website's visibility on search engines. This helps potential customers find Dream Teahouse easily when searching for tea-related information or products.

5. The developers aims to make use and achieve understanding of the potential of CSS and its implementation for web development.

---

## Planning
* Imagery: The images used are vital in conveying peace and traquility witouth overshadowing the writting context of the page. The ones used in the products sections are to attract user and give them an idea of the product they will be receiving.

* Colours: Notably, the primary colour seen consitently is green colour palette. This represents health. Additional colours including black and white used, especially on text, is to create contrast.

* Fonts: `cursive, sans-serif` font used creates elegance and keeps the page from being overly uniformed and boring.

### WireFrames
Balsamiq was used in the design of the website.

The structure of the image was designed with the intention that not all of it will be implemented in the website, due to stylistic changes and determine what fits the aim of the website.

<details>
<summary> Lo-fi prototyping of dream tea house website with balsamiq</summary>

* Desktop wireframe
  - [Landing page 1](docs/Readmeimages/Dream-Teahouse-planning/landing-page.png)
  - [Landing page 2](docs/Readmeimages/Dream-Teahouse-planning/dream-teahouse-landing-page.png)
  - [About](docs/Readmeimages/Dream-Teahouse-planning/About-us.png)
  - [product carousel section](docs/Readmeimages/Dream-Teahouse-planning/product-carousel.png)
  - [popular product section](docs/Readmeimages/Dream-Teahouse-planning/popular-product.png)
  - [blog section](docs/Readmeimages/Dream-Teahouse-planning/Blog-desktop.png)
  - [footer section](docs/Readmeimages/Dream-Teahouse-planning/footer.png)
  <br>
* Mobile wireframe
    - [landing page mobile 1](docs/Readmeimages/Dream-Teahouse-planning/mobile-layout/smaller-screen-landing-page.png)
    - [landing page mobile 2](docs/Readmeimages/Dream-Teahouse-planning/mobile-layout/pt2-landing-page-mobilepng.png)
     - [About ](docs/Readmeimages/Dream-Teahouse-planning/mobile-layout/smaller-screen-about.png)
     - [product carousel mobile screen](docs/Readmeimages/Dream-Teahouse-planning/mobile-layout/product-carousel-smaller-screen.png)
     - [Full product page](docs/Readmeimages/Dream-Teahouse-planning/mobile-layout/product-html-smaller-screen.png)
</details>

## Features
<details> 
<summary> Description of Home page</summary>

**Landing Page**
<br>

![navbar page](docs/ReadmeImg/features/A-landingpage.png)
![responsive navbar page](docs/Readmeimages/features/responsivenavbar.jpeg)
* The navigation bar is fully responsive, and redirects the user to:
  - about, blog, and contact. The home button reloads the page.
  - The elements are styled so that as user hovers background changes.
  - the responsive styling converts the navigation bar to a hamburger menu that retains all features.
  - the navigation bar can be seen through out all the web pages. Except for the thank you pages

![landing page](docs/Readmeimages/features/B-landingpage.png)
* The landing page, on load, shows a fade in of the welcome text.
* The button underneath directs user to product section


**About section**
![About page](docs/Readmeimages/features/about-section.png)
* The about page gives details about the company and their mission for ethical productions.
* The button when clicked shows more details. This function is implemented using JS.

**Product section**
![product section](docs/Readmeimages/features/product-carousel.png)
* The product section acts as a precursor to the whole product page. It allows user to view some interesting and popular products.
* It has scroll function that shows images three at a time and one at a time when screen width is reduced.
* The more product button sends user to the product page.

**Knowmore section**
![popular products section](docs/Readmeimages/features/popular-productimage.png)
* The image inspire calm and relaxation related to the product.
* Hovering over the text causes the scale to increase.
* The button sends user to an article about the product.
**Blog section**
![blog section](docs/Readmeimages/features/blog-sectimages.png)
* The blog section consists of a number of articles that when hovered on the box shadow effect appears.
* The buttons do direct user to a simple page that represents each of the tiles on that section.

**location and contact**
![location](docs/Readmeimages/features/location-imagesect.png)
* The location section shows a whimsical image to attract customers, a map, opening times, and  contact information.
* A map for user direction, contact details, as well as opening  and closing times

![footer](docs/Readmeimages/features/footerimage.png)
* The footer consists of empty text to represent buttons. (All elements under `teahouse events`, `stay connected on social media`,and `careers` )
* Hovering over the text causes the scale to increase.
* Elements of `Discover out tea` direct user to product page
* Subscribe newsletter button directs user to thank you page
* It also has a button that directs user to the top of the page. This button remains fixed through out the age as user scrolls.
</details>

<details>
<summary> Description of product page and Cart-page </summary>

![product page](docs/Readmeimages/features/product-page.png)
* The navbar is remains the same with index page.
* It maintains the same functionality as the index page. The buttons present will direct user to the sections on index.html.
* the responsive feature remains the same.
* Each product is in a tile. A button to chose the number of products the user wants and beside is the basket icon which leads user to the cart-page.
* The description feature reveals the product details and how to use it.


![cart page](docs/Readmeimages/features/cart-pageimage.png)
* The cart-page shows a layout based on a user's selection.
* It has a non-functional delete button, an input to apply discount, and a proceed to checkout button that sends user to purchasecompletion page.
</details>

<details>
<summary> Description of purchase completion and thank you page</summary>

**Thank you for your purchase**
![Thank you purchase page](docs/Readmeimages/features/purchasecompletimage.png)
* This page acknowledges the user purchase.
* A link to send user to the home page

**Thank you for subscribing**
![Thank you subscription page](docs/Readmeimages/features/thankyousubscription-page.png)
* This page acknowledges the user.
* It also presents icons for the user to access the companies social media
* A link to send user to the home page

</details>


<details>
<summary> Description of popular product page</summary>

![Popular product page](docs/Readmeimages/features/pop-product1.png)
* The page features a navbar the functions in the same manner as the other pages.
* It contains descriptive text about the popular product. Including images and a video.
* The video, on load is muted, however has controls for user to determine what they want to do with the video.
* At the bottom is a link that directs user to the product page.

![Popular product page](docs/Readmeimages/features/pop-product.png)

</details>

---

## Tools and technologies
 **Language**
 - CSS
 - JavaScript
 - HTML

**Libraries and Frameworks used**
* VS Code
* git and github- used for version control
* Balsamiq- used for wireframes
* AmIResponsive - Used to verify responsiveness of website on different devices.
* Chrome Dev Tools - Used for overall development responsiveness and performance.
* Font Awesome - For icons
* W3C - Used for HTML Validation.
* Jigsaw validator - for css validation
* freepik - used for images
* pexel - used for images
* pinterest- for inspiration


---

## Test and validation
validations was carried out and used to make necessary improvements to code for final products.
<details>
<summary> Lighthouse validation </summary>
The accessibility aspect of the code was challenging. Some flaws highlighted by lighthouse validator  and fixed by developer included in this folder: 

[Find lighthous errors](docs/Readmeimages/validation/lighthouse)

The lighthouse was used to the performance of the website on each page. The most troublesome one was the product pages which had multiple layout shifts. This was remedied by change the images and restyling the html to minimize layout shift. It brought the performance from 75 to 89.

**Landing page**
* forms id and label mismatch
* image loading issues: not fixed
* contrast issues

**Product page**
* Input label mismatch- labels not necessary
* buttons do no have accessibility names.

**Thank you page**
No meta description

* Background image loading issues on the homepage
 - This caused reduction in accessibility and performance. Nonetheless, the other pages had better performance and accessibility.
</details>

<details>
<summary>Fixing and debugging<summary>

* lighthous errors were fixed and tested again. Some errors such as image loading were not resolved since they will break the website.

* There were a no errors with CSS according to jigsaw validator. This can be seen in [here](docs/Readmeimages/validation/jigsaw-validation). These were fixed.

* A lot of the [w3c tests](docs/Readmeimages/validation/w3chtmlvalidation) found through out the html were similar:
 most consist of bad practices and trail slashing. I took note of this and took the effective time to make the relevant changes in accordance with w3c validation standards.

</details>

<details>
<summary>Errors not fixed<summary>

**Lighthouse home page**

* Background and foreground colors do not have a sufficient contrast ratio.
* '`<frame>` or `<iframe>`' elements do not have a title.
* Elements with visible text labels do not have matching accessible names.
* Image elements have [alt] attributes that are redundant text.

**lighthouse product page**
* Buttons do not have an accessible name
* Elements with visible text labels do not have matching accessible names.
* Image elements have [alt] attributes that are redundant text.
* Select elements do not have associated label elements.
</details>

### Form testing
* Forms were tested to and ensured to send user to the right location
* Developer ensured forms indicated required alert when user clicked on submit button

### links testing
* The links were verified to make sure they sent user to the right location


### Browser Testing
The Website was tested on Google Chrome, Firefox, and safari browsers with no major issues noted except for the display of favicon.

### Responsiveness testing
* [Responsive checker](https://www.responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fjonfd4.github.io%2FdreamTeaHouseProject%2Findex.html&width=1400&height=700)
* [Amiresponsive](docs/Readmeimages/validation/DTH-amiresponsive.png)

---
## Credits
- I would like to thank code institute for providing the opportunity to learn and redo this task.
- Gratitudes to Tutor support for assisting with css.

### Media
Images were acquired from freepik library.
* [Image for product detail (different oolong tea)](https://guilteapleasures.wordpress.com/2015/03/07/what-is-oolong-tea/)
* [video on how to brew oolong tea](https://youtu.be/_TNgqtyqPM8)


