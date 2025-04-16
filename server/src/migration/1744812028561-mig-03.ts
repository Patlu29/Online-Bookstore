import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig031744812028561 implements MigrationInterface {
    name = 'Mig031744812028561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_8fd63d95f407ae7fb3928588384\``);
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`bookIdBookId\` \`titleBookId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_f5f59f9fe9208d2715e476c2801\` FOREIGN KEY (\`titleBookId\`) REFERENCES \`book\`(\`book_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_f5f59f9fe9208d2715e476c2801\``);
        await queryRunner.query(`ALTER TABLE \`review\` CHANGE \`titleBookId\` \`bookIdBookId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_8fd63d95f407ae7fb3928588384\` FOREIGN KEY (\`bookIdBookId\`) REFERENCES \`book\`(\`book_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
