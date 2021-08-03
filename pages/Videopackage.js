import App from '../pageobjects/pages/App';
import Video from '../pageobjects/pages/Video';
import pause from '../pageobjects/pages/pause';
import Breakpoints from '../pageobjects/pages/Breakpoints';
import Share from '../pageobjects/pages/Share';

describe('NBCNEWS DIGITAL', () => {
    it('open URL', async () => {
        App.page();
        await pause.short();
        Breakpoints.Desktop();
        await pause.short();
       
    });

it('play button', async () => {
        const video= await Video.video();
        expect(video).toBeClickable();
         await video.click();
        await pause.short();
        //Ad pause
        const adpause= await Video.adpause();
        expect(adpause).toBeClickable();
        await adpause.click();
        await adpause.click();
await pause.long();
        //checking play icon
        const play = await Video.play();
        await play.click();
        expect(play).toBeClickable();
        await play.click(); 
       await  pause.medium();
        //checking captions
        const captions = await Video.captions();   
        expect(captions).toBeClickable();
        await captions.click();
        const english = await Video.english();
        await english.click();
       await  pause.short();
        //checking volume
        const volume = await Video.volume();
        expect(volume).toBeClickable();
        await volume.click();
       await pause.short();
         const mute = await Video.mute();
        await mute.click();
        pause.short();
        // checking expand
        const expand = await Video.expand();
        expect(expand).toBeClickable();
        await expand.click();
        await expand.click();
        await pause.short();
    }); 



    it('Headline', async () => {
        const headline = await Share.Title();
        const title = await headline.getText();
    expect(headline).toBeClickable();
        await headline.click();
        await pause.short();
        await expect(browser).toHaveTitleContaining(title);
});
 
});

    
