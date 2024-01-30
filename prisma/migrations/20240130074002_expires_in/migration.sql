-- AlterTable
ALTER TABLE "Account" ADD COLUMN "refreshTokenExpiresIn" DATETIME;
ALTER TABLE "Account" ADD COLUMN "refresh_token_expires_in" TEXT;
