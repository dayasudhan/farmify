/*
  Warnings:

  - You are about to drop the column `year` on the `item` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `item` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "item" DROP COLUMN "year";

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address1" TEXT,
    "address2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipCode" INTEGER,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "itemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_itemId_key" ON "order"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX "item_id_key" ON "item"("id");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
