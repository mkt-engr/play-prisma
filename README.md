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
[参考](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0)

```
npm i -D prisma 
npx prisma init
```
