import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableCommentsAndRelationshipUser1667883312678 implements MigrationInterface {
    name = 'createTableCommentsAndRelationshipUser1667883312678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "vehiclesId" uuid, "userId" uuid, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicle" DROP COLUMN "user_name"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_5a44d0d960af9ec597003b5b865" FOREIGN KEY ("vehiclesId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_5a44d0d960af9ec597003b5b865"`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD "user_name" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "comment"`);
    }

}
