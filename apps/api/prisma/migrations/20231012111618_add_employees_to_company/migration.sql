-- CreateTable
CREATE TABLE "_CompanyToEmployee" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToEmployee_AB_unique" ON "_CompanyToEmployee"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToEmployee_B_index" ON "_CompanyToEmployee"("B");

-- AddForeignKey
ALTER TABLE "_CompanyToEmployee" ADD CONSTRAINT "_CompanyToEmployee_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToEmployee" ADD CONSTRAINT "_CompanyToEmployee_B_fkey" FOREIGN KEY ("B") REFERENCES "Employee"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
