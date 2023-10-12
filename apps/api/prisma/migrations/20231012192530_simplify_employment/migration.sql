/*
  Warnings:

  - You are about to drop the column `description` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `Employment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employment" DROP COLUMN "description",
DROP COLUMN "position",
ALTER COLUMN "startDate" SET DEFAULT CURRENT_TIMESTAMP;
