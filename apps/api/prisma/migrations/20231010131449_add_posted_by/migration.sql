-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "employerId" TEXT;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employer"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
