/*
  Warnings:

  - You are about to drop the column `anime_titles` on the `collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `anime_titles`,
    ADD COLUMN `anime_title` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `comment` ADD COLUMN `anime_title` VARCHAR(191) NULL;
