import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig011744701490401 implements MigrationInterface {
    name = 'Mig011744701490401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`book\` (\`book_id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`genre\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`price\` decimal NOT NULL, \`image_url\` varchar(255) NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`book_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`review\` (\`review_id\` int NOT NULL AUTO_INCREMENT, \`rating\` int NOT NULL, \`comment\` text NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`bookIdBookId\` int NULL, \`userIdUserId\` int NULL, PRIMARY KEY (\`review_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`userName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL DEFAULT 'user', \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_da5934070b5f2726ebfd3122c8\` (\`userName\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_8fd63d95f407ae7fb3928588384\` FOREIGN KEY (\`bookIdBookId\`) REFERENCES \`book\`(\`book_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_7bcc37eaadbb6d5d6c680bd960b\` FOREIGN KEY (\`userIdUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_7bcc37eaadbb6d5d6c680bd960b\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_8fd63d95f407ae7fb3928588384\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_da5934070b5f2726ebfd3122c8\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`review\``);
        await queryRunner.query(`DROP TABLE \`book\``);
    }

}
