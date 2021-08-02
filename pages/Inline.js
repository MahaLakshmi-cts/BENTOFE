class Inline {

	video() {

		const video = $('#content > div:nth-child(6) > div > div > article > div > div.article-body__section.article-body__last-section > div.styles_body__1uzzK.article-body.publico-txt.f4.f5-m.lh-copy.gray-100 > div.article-body__content > section.styles_inlineVideo__sgWJp.styles_contentBody__1NR0m.mv8 > div.styles_background__u5iG0 > div > div > div.videoSlate > a');
		return video;
	}
	adpause() {
		const adpause = $('#content > div:nth-child(6) > div > div > article > div > div.article-body__section.article-body__last-section > div.styles_body__1uzzK.article-body.publico-txt.f4.f5-m.lh-copy.gray-100 > div.article-body__content > section.styles_inlineVideo__sgWJp.styles_contentBody__1NR0m.mv8 > div.styles_background__u5iG0 > div > div')
		return adpause;
	}
	play() {
		const play = $('//*[@id="content"]/div[5]/div/div/article/div/div[3]/div[1]/div[1]/section[1]/div[1]/div/div/div[2]/div[2]/span[1]')
		return play;
	}
	captions() {
		const captions = $('#content > div:nth-child(6) > div > div > article > div > div.article-body__section.article-body__last-section > div.styles_body__1uzzK.article-body.publico-txt.f4.f5-m.lh-copy.gray-100 > div.article-body__content > section.styles_inlineVideo__sgWJp.styles_contentBody__1NR0m.mv8 > div.styles_background__u5iG0 > div > div > div.styles_controls__3r7FA > div:nth-child(2) > div > span.styles_icon__3LR75.icon.icon-caption-off')
		return captions;
	}
	english() {
		const english = $('#content > div:nth-child(6) > div > div > article > div > div.article-body__section.article-body__last-section > div.styles_body__1uzzK.article-body.publico-txt.f4.f5-m.lh-copy.gray-100 > div.article-body__content > section.styles_inlineVideo__sgWJp.styles_contentBody__1NR0m.mv8 > div.styles_background__u5iG0 > div > div > div.styles_controls__3r7FA > div:nth-child(2) > div > span.styles_icon__3LR75.icon.icon-caption-off > div > li:nth-child(2)')
		return english;
	}
	volume() {
		const volume = $('#content > div:nth-child(6) > div > div > article > div > div.article-body__section.article-body__last-section > div.styles_body__1uzzK.article-body.publico-txt.f4.f5-m.lh-copy.gray-100 > div.article-body__content > section.styles_inlineVideo__sgWJp.styles_contentBody__1NR0m.mv8 > div.styles_background__u5iG0 > div > div > div.styles_controls__3r7FA > div:nth-child(2) > div > span:nth-child(1) > span')
		return volume;
	}
	expand() {
		const expand = $('#content > div:nth-child(6) > div > div > article > div > div.article-body__section.article-body__last-section > div.styles_body__1uzzK.article-body.publico-txt.f4.f5-m.lh-copy.gray-100 > div.article-body__content > section.styles_inlineVideo__sgWJp.styles_contentBody__1NR0m.mv8 > div.styles_background__u5iG0 > div > div > div.styles_controls__3r7FA > div:nth-child(2) > div > span.videoPlayer__full-screen.styles_icon__3LR75.icon.icon-full-screen')
		return expand;
	}

}

export default new Inline()