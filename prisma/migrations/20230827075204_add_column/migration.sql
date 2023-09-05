/*
  Warnings:

  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "products";

-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TEXT,
    "image_urls" TEXT[],
    "price" INTEGER,
    "availability" BOOLEAN,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "address1" TEXT,
    "address2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipCode" INTEGER,
    "phone" TEXT,
    "makeYear" TEXT,
    "registrationYear" TEXT,
    "hoursDriven" INTEGER,
    "no_of_owners" INTEGER,
    "vehicleNo" INTEGER,
    "insurance_validity" TEXT,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enquiry" (
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

    CONSTRAINT "enquiry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "enquiry" ADD CONSTRAINT "enquiry_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
