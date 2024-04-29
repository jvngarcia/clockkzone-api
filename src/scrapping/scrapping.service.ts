import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { response } from 'express';

@Injectable()
export class ScrappingService {
  async findAll() {
    const content = await fetch('https://meetingplanner.io/es/timezone/cities')
      .then((response: Response) => response.text())
      .catch((error) => error.text())
      .finally(() => 'done');

    const $ = cheerio.load(content);

    // const data = $('#tabCities .row div:nth-child(1)').text();
    const data = $('#tabCities .row').map((i, el) => {
      const city = $(el)
        .find('div:nth-child(1)')
        .text()
        .replace('\n', '')
        .trim();

      if (city != 'Ciudad') {
        const country = $(el)
          .find('div:nth-child(2)')
          .text()
          .replace('\n', '')
          .trim();
        const timezone = $(el)
          .find('div:nth-child(3)')
          .text()
          .replace('\n', '')
          .trim();
        const hour = $(el)
          .find('div:nth-child(4)')
          .text()
          .replace('\n', '')
          .trim();

        return {
          city,
          country,
          timezone,
          hour,
        };
      }
    });

    return data.get();
  }

  findOne(search: string) {
    return `This action returns a ${search} scrapping`;
  }
}
