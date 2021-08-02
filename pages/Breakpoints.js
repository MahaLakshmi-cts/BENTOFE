class Breakpoints {
    Desktop() {
        browser.setWindowSize(1280, 800)
    }

    Laptop() {
        browser.setWindowSize(1000, 449)
    }
    Ipad() {
        browser.setWindowSize(768, 1024)

    }
    Mobile() {
        browser.setWindowSize(375, 812)
    }



}

export default new Breakpoints()