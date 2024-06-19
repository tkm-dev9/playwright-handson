import test from "@playwright/test";
import getRepoInfo from 'git-repo-info';
import Jimp from 'jimp';
import dayjs from 'dayjs';
import { join } from 'path';

test('スクリーンショット', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/form');
  const buffer = await page.screenshot();

  const image = await Jimp.read(buffer);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  const git = getRepoInfo();
  
  await image.print(font, 0, 0, {
    alignmentX: Jimp.HORIZONTAL_ALIGN_RIGHT,
    alignmentY: Jimp.VERTICAL_ALIGN_BOTTOM,
    text: `${git.sha.slice(0, 10)} : ${dayjs().format('YYYY/MM/DD HH:mm:ss')}`
  }, image.getWidth(), image.getHeight());
  await image.write(join(testInfo.outputDir, 'screenshot01.png'));
})