/*
  Warnings:

  - You are about to drop the `_CompanyToEmployee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CompanyToEmployee" DROP CONSTRAINT "_CompanyToEmployee_A_fkey";

-- DropForeignKey
ALTER TABLE "_CompanyToEmployee" DROP CONSTRAINT "_CompanyToEmployee_B_fkey";

-- DropTable
DROP TABLE "_CompanyToEmployee";

-- CreateTable
CREATE TABLE "Employment" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "position" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER NOT NULL,
    "employeeId" TEXT NOT NULL,

    CONSTRAINT "Employment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Employment" ADD CONSTRAINT "Employment_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employment" ADD CONSTRAINT "Employment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
