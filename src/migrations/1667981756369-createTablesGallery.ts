import { MigrationInterface, QueryRunner } from "typeorm";

export class createTablesGallery1667981756369 implements MigrationInterface {
    name = 'createTablesGallery1667981756369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gallery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying NOT NULL, "vehicleId" uuid, CONSTRAINT "PK_65d7a1ef91ddafb3e7071b188a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "gallery" ADD CONSTRAINT "FK_f05dde19fbc454e34018f829f4d" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gallery" DROP CONSTRAINT "FK_f05dde19fbc454e34018f829f4d"`);
        await queryRunner.query(`DROP TABLE "gallery"`);
    }

}
