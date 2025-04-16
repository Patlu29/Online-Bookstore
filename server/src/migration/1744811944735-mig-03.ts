import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig031744811944735 implements MigrationInterface {
    name = 'Mig031744811944735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`bookIdBookId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`userNameUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_8fd63d95f407ae7fb3928588384\` FOREIGN KEY (\`bookIdBookId\`) REFERENCES \`book\`(\`book_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_a6a2b7800643821a9c18c0cb8f3\` FOREIGN KEY (\`userNameUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_a6a2b7800643821a9c18c0cb8f3\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_8fd63d95f407ae7fb3928588384\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`userNameUserId\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`bookIdBookId\``);
    }

}
