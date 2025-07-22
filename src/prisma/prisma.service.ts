import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { DbConnection } from './interfaces/DbConnection.interface';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    const dbConnection: DbConnection = {
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super(dbConnection);
  }
}
