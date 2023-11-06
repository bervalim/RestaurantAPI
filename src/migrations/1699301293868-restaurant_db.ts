import { MigrationInterface, QueryRunner } from "typeorm";

export class RestaurantDb1699301293868 implements MigrationInterface {
    name = 'RestaurantDb1699301293868'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(120) NOT NULL, "admin" boolean NOT NULL DEFAULT false, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bookings" ("id" SERIAL NOT NULL, "date" date NOT NULL, "hour" TIME NOT NULL, "bookingCode" uuid NOT NULL DEFAULT uuid_generate_v4(), "clientId" integer, "restaurantId" integer, CONSTRAINT "PK_d63ad4e40c3db561d511b0cce1b" PRIMARY KEY ("id", "bookingCode"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restaurants" ("id" SERIAL NOT NULL, "michelinStar" boolean NOT NULL DEFAULT false, "name" character varying(50) NOT NULL, "priceRange" numeric(12,2) NOT NULL DEFAULT '0', "meals" character varying(30) NOT NULL, "partnerSince" date NOT NULL DEFAULT now(), "updateInfo" date NOT NULL DEFAULT now(), "addressId" integer, "categoryId" integer, CONSTRAINT "UQ_dfeffbef9c31936dbac54733daa" UNIQUE ("name"), CONSTRAINT "REL_6ed5e37a5a3021bd177acb48ca" UNIQUE ("addressId"), CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying(120) NOT NULL, "ZIP" character varying(8) NOT NULL, "city" character varying(50) NOT NULL, "number" integer NOT NULL, "state" character varying(2) NOT NULL, "neighborhood" character varying(30) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD CONSTRAINT "FK_ea203405627b9fb15023dd75661" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD CONSTRAINT "FK_f3d3732851fa88ab74ad476d072" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurants" ADD CONSTRAINT "FK_6ed5e37a5a3021bd177acb48ca5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurants" ADD CONSTRAINT "FK_7fdcc1d748547f43b649ea86244" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurants" DROP CONSTRAINT "FK_7fdcc1d748547f43b649ea86244"`);
        await queryRunner.query(`ALTER TABLE "restaurants" DROP CONSTRAINT "FK_6ed5e37a5a3021bd177acb48ca5"`);
        await queryRunner.query(`ALTER TABLE "bookings" DROP CONSTRAINT "FK_f3d3732851fa88ab74ad476d072"`);
        await queryRunner.query(`ALTER TABLE "bookings" DROP CONSTRAINT "FK_ea203405627b9fb15023dd75661"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "restaurants"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "bookings"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
