/*
  Warnings:

  - You are about to drop the column `updateDate` on the `batch_execution_time` table. All the data in the column will be lost.
  - You are about to drop the column `updateDate` on the `batch_execution_time` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "schema01"."batch_execution_time" DROP COLUMN "updateDate",
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "schema02"."batch_execution_time" DROP COLUMN "updateDate",
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
