import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBookExtras1744739181360 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE book ADD COLUMN star_rating INT DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE book ADD COLUMN rating_count VARCHAR(255) DEFAULT '0'`);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE book DROP COLUMN rating_count`);
        await queryRunner.query(`ALTER TABLE book DROP COLUMN star_rating`);
      }

}
