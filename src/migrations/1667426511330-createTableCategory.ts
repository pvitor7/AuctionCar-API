import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableCategory1667426511330 implements MigrationInterface {
    name = 'createTableCategory1667426511330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoty" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "categorie" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_06f113a0ee61527feba5a378439" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categoty"`);
    }

}
