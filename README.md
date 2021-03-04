
# How to run this project?
* First, install all dependency with **npm install**
* Then, run the project with **npm run serve**
* If you just want to see the result , I've already deployed it to [github page](https://s27840213.github.io/Personal-Website/#/).


# Project Structure
```
├── src
    ├── assets -- Icons, imgages, and scss
    ├── components -- Vue Single File Components
        ├── home -- Home page components
        ├── kyronus -- Kyronus page components
    ├── router
        └── index.js -- file of Vue-router
    ├── store -- file of Vuex
    ├── utils -- some global function that frequently used
    └── views -- view components of each router page
└── dist -- output directory generated from command "npm run build"
```

# Tools I used for this project
* **HTML and CSS Preprocessor:** Pug, SCSS
*  **Frontend Framework:** Vue, Vuex, Vue-router, Vue-CLI
*  **Build Tool:** Vue-CLI
*  **3rd Party Libraries:**: 
    *  **GSAP:** Light-weight, powerful Javascript animation library
    *  **vanilla-tilt.js**: Light-weight Javascript library used to implement the appealing tilt effect.
