class Native {

    Header() {
        const header = $('#content > div.header-and-footer--banner-ad.ad-container.topbannerAd.header-and-footer--static.isAdInitialRenderComplete.isScrolledToTop')
        return (header);
    }
    Rightrail() {
        const rightrail =  $('#content > div:nth-child(6) > div > div > article > div > div.article-body__section.article-body__last-section > div.styles_rightRail__2Yu8p.article-body__right-rail > div.ad.article-body__right-rail--ad.tc.tl-m.ad-container.dn-print');
        return (rightrail);
    }
    taboola() {
        const taboola =  $('//*[@id ="taboola-below-article-feed"]')
        return (taboola)

    }
    end() {
        const footer =  $('[class ="endmark"]');
        return(footer)
    }
}
export default new Native()