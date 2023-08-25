-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "year" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "products"
ADD COLUMN image_urls TEXT[];