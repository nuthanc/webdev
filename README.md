# Webdev course by Andrei

### How the Internet Works
* Let's say, when we type google.com in our Browser, what happens?
* The request goes to the ISP, then to DNS and we get an IP which is sent back to our Browser
* The Browser makes a request to this IP
* The Google server responds with HTML, CSS and JS files

### WWW vs Internet
* Comparison: Internet->Smartphone and WWW->Instagram on that Smartphone
* WWW is essentially a common language for computers to speak to each other

### How the Internet Works for Developers
* Components:
  * Browser: Making requests
  * ISP: DNS resolution(Translates mysite.com to ip address)
  * Server: Giving back responses
* When we enter google.com, Browser makes request to the corresponding server after DNS resolution from the ISP
* The Server sends back a Response with Content-Type set(text/js)
* The Browser based on the Content-Type parses it
* If it is HTML, top to down parsing and it pauses when there is a request for css or js(Request Assets)
* The browser then again makes a request to the Server, the server sends back response with Content-Type set to text/css or text/js
* The Browser then continues the parsing of the HTML file
* Usually the css request is in the head section of the html file so that it can be loaded to style appropriately the HTML tags
* When the css is in the body, the html is rendered and then css is loaded(FOUC: Flash of Unstyled Content) and then it styles appropriately the previously loaded HTML tags
* When css and js are made it one files, then request for them is easier instead of multiple requests to the Server
* In Dev, the css and js are broken, but they can be bundled together also minified(removal of unwanted code(line breaks,comments,and then compressing), optimize css, use shorter variable and function names) when we deploy
* JS can also make requests which are XHR or AJAX requests
* After the response from the Server(with Content-Type: text/css), the Browser sends it the JS part instead of the HTML page

#### Sample requests
* Requests:
  * Headers
    * Host: www.google.com
    * Method: get, put, post, delete
    * Path: /images /logo.jpg
    * Cookies: string
    * user-agent: string
    * Content Type: application/json
  * If posting data, a POST BODY is also included
* Responses:
  * Headers
    * Content Type: text/html, image/jpeg, application/json
    * Status/Code: 200-ok 400-not found 500-error
      * Range:
        * 200: Ok
        * 300: Redirect
        * 400: Error, not found, not logged in
        * 500: Server broke
  * Response Body
    * Your file: html, css, js, image
    * Or your results: json, xml

#### Servers and Scaling
* Key points:
  * Backend: Web server(Basic Apache serving files) or Web Application(Advanced)
  * Web server: Based on the path, it will serve assets
    * Host to filesystem mapping
    * Configures different hosts to different folders
  * Web application: Will process based on path, like getting data from db and serving it after injecting into a template
    * Application, Database and file system
    * Will also do some API processing like delete, edit etc
    * Also serves static assets
  * For scaling, when the load increases, add more powerful server or even better alternative is have multiple copies running
  * Use loadbalancer to distribute the traffic

### HTML vs HTML5
* HTML5 is more semantic
* Also improves the performance of the web

### Copy a Website
* Good website to read: waitbutwhy.com
* View Page Source 
* Copy and Paste into your file

### CSS
* Good resource: https://css-tricks.com/almanac/

### CSS selectors
```txt
> is for direct child
h2 > p
<h2><p></p><h2>
h2 as parent of p
<h2><div><p></p></div><h2>
Doesn't apply here

h2 p is for descendant
p in h2

+ is for adjacent sibling
```
* CSS selector game: https://flukeout.github.io/
