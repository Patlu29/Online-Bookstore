import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig041744818793574 implements MigrationInterface {
    name = 'Mig041744818793574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_a6a2b7800643821a9c18c0cb8f3\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_f5f59f9fe9208d2715e476c2801\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`titleBookId\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`userNameUserId\``);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`bookBookId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`userUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_6d65bacd56201ec92f39a427376\` FOREIGN KEY (\`bookBookId\`) REFERENCES \`book\`(\`book_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_5562843746d891af491ad6b30a1\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_5562843746d891af491ad6b30a1\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_6d65bacd56201ec92f39a427376\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`userUserId\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP COLUMN \`bookBookId\``);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`userNameUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD \`titleBookId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_f5f59f9fe9208d2715e476c2801\` FOREIGN KEY (\`titleBookId\`) REFERENCES \`book\`(\`book_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_a6a2b7800643821a9c18c0cb8f3\` FOREIGN KEY (\`userNameUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
