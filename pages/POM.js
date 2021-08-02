

class POM {

    //1 up

    get oneup() {

        return $('#content > div:nth-child(7) > div > div.layout-rightRailTabbed.small > div.rail__container.layout-grid-container > div.right-rail-tabbed__container--left.layout-grid-item.grid-col-8-l.grid-col-9-xl > section.pkg.one-up.pkg-index-rail.tease-card--one-up > article > div.tease-card__info > h2 > a > span');
    }
    result() {
        const ele = this.oneup;

        return ele;
    }
    // 2up
    get twoup() {
        return $('#content > div:nth-child(7) > div > div.layout-rightRailTabbed.small > div.rail__container.layout-grid-container > div.right-rail-tabbed__container--left.layout-grid-item.grid-col-8-l.grid-col-9-xl > section.dynamic-up.pkg.dynamic-up__2up--rail-adj > div > article:nth-child(1) > section > div > div:nth-child(2) > h3 > a')
    }
    get twoup2() {
        return $('#content > div:nth-child(7) > div > div.layout-rightRailTabbed.small > div.rail__container.layout-grid-container > div.right-rail-tabbed__container--left.layout-grid-item.grid-col-8-l.grid-col-9-xl > section.dynamic-up.pkg.dynamic-up__2up--rail-adj > div > article.tease-card.tease-card__content > div.tease-card__info > h2 > a > span');

    }

    // 3 up

    get threeup1() {

        return $('#content > div:nth-child(7) > div > div.layout-rightRailTabbed.small > div.rail__container.layout-grid-container > div.right-rail-tabbed__container--left.layout-grid-item.grid-col-8-l.grid-col-9-xl > section.pkg.multiUpRail.multiUpRail--threeUp.multi-up-rail.bg-knockout-primary.multi-up-rail__three-up > div.multi-up-rail__articles > div.multi-up-rail__article.tease-card__main-tease.multi-up-rail__tease-card--three-up > article > div.tease-card__info > h2 > a > span')
    }
    get threeup2() {

        return $('#content > div:nth-child(7) > div > div.layout-rightRailTabbed.small > div.rail__container.layout-grid-container > div.right-rail-tabbed__container--left.layout-grid-item.grid-col-8-l.grid-col-9-xl > section.pkg.multiUpRail.multiUpRail--threeUp.multi-up-rail.bg-knockout-primary.multi-up-rail__three-up > div.multi-up-rail__articles > div:nth-child(2) > article > div.tease-card__info > h2 > a > span')
    }
    get threeup3() {

        return $('#content > div:nth-child(7) > div > div.layout-rightRailTabbed.small > div.rail__container.layout-grid-container > div.right-rail-tabbed__container--left.layout-grid-item.grid-col-8-l.grid-col-9-xl > section.pkg.multiUpRail.multiUpRail--threeUp.multi-up-rail.bg-knockout-primary.multi-up-rail__three-up > div.multi-up-rail__articles > div:nth-child(3) > article > div.tease-card__info > h2 > a > span')
    }
    // 4up
    get fourup1() {

        return $('#content > div:nth-child(7) > div > div.layout-rightRailTabbed.small > div.rail__container.layout-grid-container > div.right-rail-tabbed__container--left.layout-grid-item.grid-col-8-l.grid-col-9-xl > section:nth-child(10) > div.multi-up-rail__articles > div:nth-child(1) > article > div.tease-card__info > h2 > a > span')
    }
    get fourup2() {

        return $('#content > div:nth-child(7) > div > div.layout-rightRailTabbed.small > div.rail__container.layout-grid-container > div.right-rail-tabbed__container--left.layout-grid-item.grid-col-8-l.grid-col-9-xl > section:nth-child(10) > div.multi-up-rail__articles > div:nth-child(2) > article > div.tease-card__info > h2 > a > span')
    }
    get fourup3() {

        return $('#content > div:nth-child(7) > div > div.layout-rightRailTabbed.small > div.rail__container.layout-grid-container > div.right-rail-tabbed__container--left.layout-grid-item.grid-col-8-l.grid-col-9-xl > section:nth-child(10) > div.multi-up-rail__articles > div:nth-child(3) > article > div.tease-card__info > h2 > a > span')
    }
    get fourup4() {

        return $('#content > div:nth-child(7) > div > div.layout-rightRailTabbed.small > div.rail__container.layout-grid-container > div.right-rail-tabbed__container--left.layout-grid-item.grid-col-8-l.grid-col-9-xl > section:nth-child(10) > div.multi-up-rail__articles > div:nth-child(4) > article > div.tease-card__info > h2 > a > span')
    }

    result1() {
        const ele1 = this.twoup;
        return ele1;

    }
    result2() {
        const ele2 = this.twoup2;
        return ele2;
    }
    result3() {
        const ele3 = this.threeup1;
        return ele3;
    }

    result4() {
        const ele4 = this.threeup1;
        return ele4;
    }
    result5() {
        const ele4 = this.threeup1;
        return ele4;
    }

    // 4up
    result6() {
        const ele5 = this.threeup1;
        return ele5;
    }
    result7() {
        const ele6 = this.threeup1;
        return ele6;
    }
    result8() {
        const ele7 = this.threeup1;
        return ele7;
    }
    result9() {
        const ele8 = this.threeup1;
        return ele8;
    }

}
export default new POM()