-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "paid" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "payPerHour" DOUBLE PRECISION;
