import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Vote } from './../src/app.controller';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('returns rewards when consensus is reached', async () => {
    for (let i = 0; i < 10; i++) {
      const vote: Vote = {
        accountId: i,
        value: i % 2,
      };
      await request(app.getHttpServer()).post('/vote').send(vote).expect(201);
    }
    const rewardedAccounts = [0, 2, 4, 6, 8];
    await request(app.getHttpServer())
      .get('/rewarded-accounts')
      .expect(200)
      .expect({
        rewardedAccounts,
      });
    await request(app.getHttpServer())
      .get('/rewarded-accounts/0')
      .expect(200)
      .expect({
        isRewarded: true,
      });
    await request(app.getHttpServer())
      .get('/rewarded-accounts/1')
      .expect(200)
      .expect({
        isRewarded: false,
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
