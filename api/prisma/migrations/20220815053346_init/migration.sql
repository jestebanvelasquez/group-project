-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CONTRACTOR', 'ARTIST', 'ADMIN');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "rol" "UserRole" NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Show" (
    "id" TEXT NOT NULL,
    "nickName" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagesEvent" TEXT[],
    "duration" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "priceTime" INTEGER NOT NULL,
    "priceDay" INTEGER NOT NULL,

    CONSTRAINT "Show_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShowArtist" (
    "showId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ShowArtist_pkey" PRIMARY KEY ("showId","userId")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "asignedBy" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category_Show" (
    "showId" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_Show_pkey" PRIMARY KEY ("showId","categoryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Show_nickName_key" ON "Show"("nickName");

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_key" ON "Category"("id");

-- AddForeignKey
ALTER TABLE "ShowArtist" ADD CONSTRAINT "ShowArtist_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowArtist" ADD CONSTRAINT "ShowArtist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_Show" ADD CONSTRAINT "Category_Show_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_Show" ADD CONSTRAINT "Category_Show_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
