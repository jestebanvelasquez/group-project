-- CreateTable
CREATE TABLE "Compras" (
    "id" TEXT NOT NULL,
    "code" VARCHAR(255) NOT NULL,

    CONSTRAINT "Compras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventosCompras" (
    "idEvento" TEXT NOT NULL,
    "idCompra" TEXT NOT NULL,

    CONSTRAINT "EventosCompras_pkey" PRIMARY KEY ("idEvento","idCompra")
);

-- AddForeignKey
ALTER TABLE "EventosCompras" ADD CONSTRAINT "EventosCompras_idEvento_fkey" FOREIGN KEY ("idEvento") REFERENCES "Eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventosCompras" ADD CONSTRAINT "EventosCompras_idCompra_fkey" FOREIGN KEY ("idCompra") REFERENCES "Compras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
