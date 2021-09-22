import {MigrationInterface, QueryRunner} from "typeorm";

export class fixDetailUserDetailsName1632283098621 implements MigrationInterface {
    name = 'fixDetailUserDetailsName1632283098621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user_details" ALTER COLUMN "name" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user_details" ALTER COLUMN "name" SET NOT NULL`);
    }

}
