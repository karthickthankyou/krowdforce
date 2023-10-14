/*
  Warnings:

  - Made the column `payPerHour` on table `Job` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "payPerHour" SET NOT NULL,
ALTER COLUMN "payPerHour" SET DEFAULT 20;
