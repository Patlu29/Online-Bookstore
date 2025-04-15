import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig021744701650566 implements MigrationInterface {
    name = 'Mig021744701650566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`total_price\` decimal NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'pending', \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`userIdUserId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_394929fa45658ed4fb73fcf0030\` FOREIGN KEY (\`userIdUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_394929fa45658ed4fb73fcf0030\``);
        await queryRunner.query(`DROP TABLE \`order\``);
    }

}
