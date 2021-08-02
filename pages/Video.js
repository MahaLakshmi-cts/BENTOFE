class Video {

	video() {

		const video = $('#content > div:nth-child(6) > div > div.fullWidth.layout-grid-container.layout-index-1 > div > section.pkg.videoPkg.gutter-collapse-m.video-package > div > div.video-package__columns.df.flex-column > div.video-package__wrapper-outer > div.video-package__video-wrapper > div > div.videoSlate > a')
		return video; 
	}
	
	 adpause() {
		const adpause = $('//*[@id="content"]/div[5]/div/div[3]/div/section[1]/div/div[1]/div[2]/div[1]/div/div[2]/div[2]/span')
		return adpause;
	}
	 play() {
		 const play = $('//*[@id="content"]/div[5]/div/div[3]/div/section[1]/div/div[1]/div[2]/div[1]/div/div[2]/div[2]/span[1]')
		 return play;
	 }

	 captions() {
		 const captions = $('#content > div:nth-child(6) > div > div.fullWidth.layout-grid-container.layout-index-1 > div > section.pkg.videoPkg.gutter-collapse-m.video-package > div > div.video-package__columns.df.flex-column > div.video-package__wrapper-outer > div.video-package__video-wrapper > div > div.styles_controls__3r7FA > div:nth-child(2) > div > span.styles_icon__3LR75.icon.icon-caption-off')
		 return captions;
	}
	english() {
		const english = $('//*[@id="content"]/div[5]/div/div[3]/div/section[1]/div/div[1]/div[2]/div[1]/div/div[2]/div[2]/div/span[2]/div/li[2]')
		return english;
	}
	 volume() {
		const volume =  $('#content > div:nth-child(6) > div > div.fullWidth.layout-grid-container.layout-index-1 > div > section.pkg.videoPkg.gutter-collapse-m.video-package > div > div.video-package__columns.df.flex-column > div.video-package__wrapper-outer > div.video-package__video-wrapper > div > div.styles_controls__3r7FA > div:nth-child(2) > div > span:nth-child(1) > span')
		return volume;
	}
      mute() {
		 const mute = $('#content > div:nth-child(6) > div > div.fullWidth.layout-grid-container.layout-index-1 > div > section.pkg.videoPkg.gutter-collapse-m.video-package > div > div.video-package__columns.df.flex-column > div.video-package__wrapper-outer > div.video-package__video-wrapper > div > button > span.styles_unmuteIcon__DzqXh.icon.icon-volume-level-0')
		return mute;
	}
	 expand() {
		 const expand = $('#content > div:nth-child(6) > div > div.fullWidth.layout-grid-container.layout-index-1 > div > section.pkg.videoPkg.gutter-collapse-m.video-package > div > div.video-package__columns.df.flex-column > div.video-package__wrapper-outer > div.video-package__video-wrapper > div > div.styles_controls__3r7FA > div:nth-child(2) > div > span.videoPlayer__full-screen.styles_icon__3LR75.icon.icon-full-screen')
		return expand;
	}
	headline() {
		const headline =  $('#content > div:nth-child(6) > div > div.fullWidth.layout-grid-container.layout-index-1 > div > section.pkg.videoPkg.gutter-collapse-m.video-package > div > div.video-package__columns.df.flex-column > div.video-package__wrapper-outer > div.video-package__video-meta.pl5-m.pl6-l.pt5 > h3 > a');
		return headline;
	}
	


}

export default new Video()