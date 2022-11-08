import { MigrationInterface, QueryRunner } from "typeorm";

export class createColumnUserName1667900152155 implements MigrationInterface {
    name = 'createColumnUserName1667900152155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" ADD "user_name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "user_name"`);
    }

}
