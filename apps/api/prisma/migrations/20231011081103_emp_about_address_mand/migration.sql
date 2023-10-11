/*
  Warnings:

  - Made the column `about` on table `Employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `addressId` on table `Employee` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_addressId_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "about" SET NOT NULL,
ALTER COLUMN "addressId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
