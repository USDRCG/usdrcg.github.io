# Welcome to the USDRCG website!

### About This ReadMe
* This ReadMe contains basic information on the organization and function of this website. 
* It is assumed that editors have an understanding of html and css, as well as the [bootstrap](https://www.w3schools.com/bootstrap/) framework for mobile-friendly design.
* Github Pages uses Jekyll in place of PHP and other server-side languages. Click [here](https://jekyllrb.com/docs/github-pages/) for Jekyll documentation. 
> Even though I have provided the link for the Jekyll documentation, I recommend that you use it for quick reference instead of a step-by-step guide, unless you'd like to get caught up in a messy web of Ruby gems, operating system incompatabilities, and general nightmares. 

### About Jekyll, as used here
If you edit the code from within GitHub's browser editor tool, there is no need to install anything to use Jekyll.   
The basics of Jekyll use are:
* You must have a `_config.yml` file that contains the following:
    ```
    basurl:
    exclude: ['README.md']
    ``` 
* The html document that contains the header, footer, and nav information must be placed in the `_layouts` folder. Ours is titled `default.html`. This allows us to modify the code only once and it will automatically populate throughout ALL subpages.
* In the html document that contains the header, footer, and nav information, a line of code that says `{{content}}` should appear in the middle of the document, between header and footer sections. GitHub will insert the page content there.
* In a page html document, you must include the following header information to allow GitHub to find the header, footer, and nav information and to display it correctly:
    ```
    ---
    Layout: default
    ---
    ```
* Local directory links to content (pages, images, css, etc.) can be done as usual, such as `/images/example_image.png`. However, Jekyll has a nifty feature that allows you to use a "project page url structure." This looks like `{{site.baseurl}}/images/example_image.png`. Either will build properly, but the latter allows you to later move your site to subfolders, in case you want to host multiple sites under one domain. 
> Even though we have no plans to move our site around, this code exists throughout the site, therefore it is included in this ReadMe.

### Templates

* There are many page templates available for use, should you need to add a new page. 
* Find them in the ALLTemplates folder. 
* Navigating to them in a browser allows you to see a live preview. Example: [http://usdrcg.github.io/AllTemplates/html/contact.html](http://usdrcg.github.io/AllTemplates/html/contact.html)

### Layouts (headers, footers, navs)
* Jekyll is used as a _faux_-server-side language that allows us to have headers, footers, and navigation sections seperate from each page.
* A configuration (`_config.yml`) file is needed that contains the following:

    ```
    baseurl:   
    exclude: ['README.md']
    ```

 > Note: the `baseurl` in our case is empty because we are working directly out of usdrcg.github.io. 
 > If we had a subfolder that contained another site, then we would list that subfolder there. 
 > This term allows us to create simple links to local documents.
 
 * At the top of each page, you must specify that you'd also like Jekyll to load your header, footer, and nav sections. This is done by including the following at the top of the page:

    ```
    ---   
    layout: default   
    ---
    ```

* The header, footer, and nav page must be located in the `_layouts` folder. This is where Jekyll knows how to find it.
* In the file `/_layouts/default.html`, you'll find the header and navigation code at the top, followed by `{{content}}` on the middle, then footer code at the bottom. The `{{content}}` code tells Jekyll where to include the page code.
 
 ### Workshop Pages
 
 There are three types of workshop pages:   
 1. Generic Landing Page (`workshop.html`)  
    * Where users will be directed to either sign-up or click on the date of their workshop.   
 2. Date-Specific Page (example: `w_2017.01.19.html`)  
     * The easiest way to create a new *date-specific page* is to copy the contents of another and paste into a new html document.   
     * An Etherpad frame exists on each date-specific workshop page. Simply update the _embedded url_ in the `<iframe>` tag. [Etherpad.net](http://etherpad.net) is the easiest way to generate a new Etherpad.   
 3. Sign-Up Page (`sign-up.html`)   
     * This is used to embedd a Google Form for users to fill out. The html for that is commented out. All you need to do is un-comment the code and change the _embedded url_ within the `<iframe>` tag.   
 
 
 
<hr>

[Source of template](https://wrapbootstrap.com/theme/bizwrap-elegant-bootstrap-4-template-WB07PT66X)
