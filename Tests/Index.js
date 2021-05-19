import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://na.leagueoflegends.com/de-de/`;

test('Test3', async t => {
    await t
        .click(Selector('#gatsby-focus-wrapper span').withText('WEITERE CHAMPIONS ENTDECKEN'))
        .click(Selector('#gatsby-focus-wrapper div').withText('SUCHEN').nth(9))
        .typeText('#react-select-2-input', 'b')
        .pressKey('enter')
        .click(Selector('#gatsby-focus-wrapper [class^="style__NoScriptImg-sc-1rs2qnb-0 style__Img-sc-1rs2"]').nth(6));
});