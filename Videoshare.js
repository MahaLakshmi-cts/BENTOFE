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

    it('share', async () => {
        const open = await Share.expander()
        expect(open).toBeClickable();
        await open.click();
        await pause.short();
        // facebook share
        const facebook = await Share.facebook();
        expect(facebook).toBeClickable();
        await facebook.click();
        const Title = await Share.Title();
        const videotitle = await Title.getText()
        await pause.long();
        var handle = await browser.getWindowHandles();
        var i = 1;
        await browser.switchToWindow(handle[i])
        await pause.long();
        const fbid = await Share.fbid();
        await fbid.click();
        await fbid.setValue('nbcqaoffshore123@gmail.com')
        const fbpassword = await Share.fbpassword();
        await fbpassword.click();
        await fbpassword.setValue('nbcnews@2020');
        const fblogin = await Share.fblogin();
        await fblogin.click();
        await pause.long();
        const fbtitle = await Share.fbtitle();
        await expect(fbtitle).toHaveTextContaining(videotitle);
        await pause.long();
        //Twitter share
        await browser.switchToWindow(handle[0]);
        const twitter = await Share.twitter();
        //input
        expect(twitter).toBeClickable();
        await twitter.click();
        i++;
        var handle = await browser.getWindowHandles();
        await browser.switchToWindow(handle[i])
        const twitterid = await Share.twitterid();
        await twitterid.click();
        await twitterid.setValue('nbcqaoffshore123@gmail.com')
        const twitterpassword = await Share.twitterpassword();
        await twitterpassword.click();
        await twitterpassword.setValue('nbcnews@2020');
        const twitterlogin = await Share.twitterlogin();
        await twitterlogin.click();
        await pause.long();
        const twittertitle = await Share.twittertitle();
       await expect(twittertitle).toHaveTextContaining(videotitle);

        //Email
        await browser.switchToWindow(handle[0])
        await pause.long();
        const email = await Share.email();
        expect(email).toBeClickable();
        await email.click();
        await pause.long();

    });
});