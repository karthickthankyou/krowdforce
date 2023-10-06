/*
  Warnings:

  - You are about to drop the column `employerId` on the `Job` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_employerId_fkey";

-- AlterTable
ALTER TABLE "Employer" ADD COLUMN     "companyId" INTEGER;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "employerId",
ADD COLUMN     "companyId" INTEGER;

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Employer" ADD CONSTRAINT "Employer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
