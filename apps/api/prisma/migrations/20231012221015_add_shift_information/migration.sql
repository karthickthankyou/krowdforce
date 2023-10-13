-- CreateEnum
CREATE TYPE "Weekday" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateTable
CREATE TABLE "ShiftInformation" (
    "jobId" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "days" "Weekday"[],

    CONSTRAINT "ShiftInformation_pkey" PRIMARY KEY ("jobId")
);

-- AddForeignKey
ALTER TABLE "ShiftInformation" ADD CONSTRAINT "ShiftInformation_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
