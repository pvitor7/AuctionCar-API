import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1673030344014 implements MigrationInterface {
    name = 'initialMigration1673030344014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "offers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "offer" numeric(10,2) NOT NULL DEFAULT '0', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "vehicleId" uuid, "userId" uuid, CONSTRAINT "PK_4c88e956195bba85977da21b8f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "celphone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "seller" boolean NOT NULL, "buyer" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_name" character varying NOT NULL, "vehiclesId" uuid, "userId" uuid, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gallery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying NOT NULL, "vehicleId" uuid, CONSTRAINT "PK_65d7a1ef91ddafb3e7071b188a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "heading" character varying NOT NULL, "status" boolean NOT NULL, "year" character varying NOT NULL, "km" character varying NOT NULL, "price" character varying NOT NULL, "description" character varying NOT NULL, "published" boolean NOT NULL, "auction" boolean NOT NULL, "img" character varying NOT NULL, "username" character varying NOT NULL, "userId" uuid NOT NULL, "category" character varying NOT NULL, "dateAuction" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "categorieId" uuid, CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "categorie" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "offers" ADD CONSTRAINT "FK_78967735db52f6b4d84bdff6762" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offers" ADD CONSTRAINT "FK_dee629b1248f4ad48268faa9ea1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_5a44d0d960af9ec597003b5b865" FOREIGN KEY ("vehiclesId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gallery" ADD CONSTRAINT "FK_f05dde19fbc454e34018f829f4d" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_fc4d8883fbac8c5dd4ab20cc3fd" FOREIGN KEY ("categorieId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1"`);
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_fc4d8883fbac8c5dd4ab20cc3fd"`);
        await queryRunner.query(`ALTER TABLE "gallery" DROP CONSTRAINT "FK_f05dde19fbc454e34018f829f4d"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_5a44d0d960af9ec597003b5b865"`);
        await queryRunner.query(`ALTER TABLE "offers" DROP CONSTRAINT "FK_dee629b1248f4ad48268faa9ea1"`);
        await queryRunner.query(`ALTER TABLE "offers" DROP CONSTRAINT "FK_78967735db52f6b4d84bdff6762"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
        await queryRunner.query(`DROP TABLE "gallery"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "offers"`);
    }

}
