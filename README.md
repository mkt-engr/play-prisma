# 手順
## NestJSテンプレート作成
```
npx @nestjs/cli new .
```
##  DB立てる
```
docker-compose up -d 
```

## Prismaセットアップ 
### Prismaの初期化
[参考](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0)

```
npm i -D prisma 
npx prisma init
```

### Prisma ServiceとPrisma Moduleの作成

NestJSアプリケーションの内部では、Prisma Client APIをアプリケーションから抽象化するのがよい方法です。このためには、Prisma Clientを含む新しいサービスを作成します。このサービスはPrismaServiceと呼ばれ、PrismaClientインスタンスの生成とデータベースへの接続を担当します。
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

Prismaモジュールは、PrismaServiceのシングルトンインスタンスを作成し、アプリケーション全体でサービスを共有できるようにする役割を担う。そのために、prisma.module.tsファイルのexports配列にPrismaServiceを追加する。