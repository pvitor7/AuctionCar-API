import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableVehicle1667426910833 implements MigrationInterface {
    name = 'createTableVehicle1667426910833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "heading" character varying NOT NULL, "status" character varying NOT NULL, "year" character varying NOT NULL, "km" character varying NOT NULL, "price" character varying NOT NULL, "description" character varying NOT NULL, "published" boolean NOT NULL, "img" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "categorieId" uuid, CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_fc4d8883fbac8c5dd4ab20cc3fd" FOREIGN KEY ("categorieId") REFERENCES "categoty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_fc4d8883fbac8c5dd4ab20cc3fd"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
    }

}
