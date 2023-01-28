# 手順

## NestJS テンプレート作成

```
npx @nestjs/cli new .
```

## DB 立てる

```
docker-compose up -d
```

## Prisma セットアップ

### Prisma の初期化

[参考](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0)

```
npm i -D prisma
npx prisma init
```

### Prisma Service と Prisma Module の作成

NestJS アプリケーションの内部では、Prisma Client API をアプリケーションから抽象化するのがよい方法です。このためには、Prisma Client を含む新しいサービスを作成します。このサービスは PrismaService と呼ばれ、PrismaClient インスタンスの生成とデータベースへの接続を担当します。

```
npx nest generate module prisma
npx nest generate service prisma
```

```ts:src/prisma/prisma.service.ts
import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
```

Prisma モジュールは、PrismaService のシングルトンインスタンスを作成し、アプリケーション全体でサービスを共有できるようにする役割を担う。そのために、prisma.module.ts ファイルの exports 配列に PrismaService を追加する。

```ts:src/prisma/prisma.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

## REST リソースの作成

今回は異なるスキーマに同一テーブルを作成する想定。
バッチ実行時間を記録する。

```
npx nest generate resource
```

1. `What name would you like to use for this resource (plural, e.g., "users")?` batch
2. `What transport layer do you use?` REST API
3. `Would you like to generate CRUD entry points?` Yes

### Prisma クライアントを Batch モジュールに加える

```ts:src/batch/batch.module.ts
import { Module } from '@nestjs/common';
import { BatchService } from './batch.service';
import { BatchController } from './batch.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BatchController],
  providers: [BatchService],
  imports: [PrismaModule],
})
export class BatchModule {}

```

サービスも変更
```ts:src/batch/batch.service.ts

```