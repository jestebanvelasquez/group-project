/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category_Show` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Show` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShowArtist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category_Show" DROP CONSTRAINT "Category_Show_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Category_Show" DROP CONSTRAINT "Category_Show_showId_fkey";

-- DropForeignKey
ALTER TABLE "ShowArtist" DROP CONSTRAINT "ShowArtist_showId_fkey";

-- DropForeignKey
ALTER TABLE "ShowArtist" DROP CONSTRAINT "ShowArtist_userId_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Category_Show";

-- DropTable
DROP TABLE "Show";

-- DropTable
DROP TABLE "ShowArtist";

-- DropTable
DROP TABLE "Users";

-- DropEnum
DROP TYPE "UserRole";
