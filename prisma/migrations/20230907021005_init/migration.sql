-- CreateTable
CREATE TABLE "video" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "Winner" TEXT NOT NULL,

    CONSTRAINT "video_pkey" PRIMARY KEY ("id")
);
