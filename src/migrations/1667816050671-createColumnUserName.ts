import { MigrationInterface, QueryRunner } from "typeorm";

export class createColumnUserName1667816050671 implements MigrationInterface {
    name = 'createColumnUserName1667816050671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" ADD "user_name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP COLUMN "user_name"`);
    }

}
