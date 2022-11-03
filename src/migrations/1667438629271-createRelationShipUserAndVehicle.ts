import { MigrationInterface, QueryRunner } from "typeorm";

export class createRelationShipUserAndVehicle1667438629271 implements MigrationInterface {
    name = 'createRelationShipUserAndVehicle1667438629271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1"`);
        await queryRunner.query(`ALTER TABLE "vehicle" DROP COLUMN "userId"`);
    }

}
