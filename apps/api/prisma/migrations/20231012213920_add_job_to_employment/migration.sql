/*
  Warnings:

  - You are about to drop the column `companyId` on the `Employment` table. All the data in the column will be lost.
  - Added the required column `jobId` to the `Employment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Employment" DROP CONSTRAINT "Employment_companyId_fkey";

-- AlterTable
ALTER TABLE "Employment" DROP COLUMN "companyId",
ADD COLUMN     "jobId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Employment" ADD CONSTRAINT "Employment_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
