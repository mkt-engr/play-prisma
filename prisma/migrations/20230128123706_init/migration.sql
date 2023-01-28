-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "schema01";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "schema02";

-- CreateTable
CREATE TABLE "schema01"."batch_execution_time" (
    "id" SERIAL NOT NULL,
    "updateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "batch_execution_time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schema02"."batch_execution_time" (
    "id" SERIAL NOT NULL,
    "updateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "batch_execution_time_pkey" PRIMARY KEY ("id")
);
