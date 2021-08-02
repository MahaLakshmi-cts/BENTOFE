class App {

    open() {
        browser.url('https://releases-ramen2.dev.nbcnews.com/');
   }
    page() {
        browser.url('https://releases-ramen2.dev.nbcnews.com/nightly-news');
    }
    Article() {
        browser.url('https://releases-ramen2.dev.nbcnews.com/politics/meet-the-press/here-are-six-things-could-change-2020-presidential-race-n1235084');
    }
    Shorthand() {
        browser.url('https://releases-ramen2.dev.nbcnews.com/news/us-news/pediatrician-said-girl-s-burns-showed-child-abuse-her-caregiver-n1070986');

    }
    

}

export default new App()