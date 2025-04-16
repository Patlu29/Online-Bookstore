import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig021744811458541 implements MigrationInterface {
    name = 'Mig021744811458541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`demo\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`demo\``);
    }

}
