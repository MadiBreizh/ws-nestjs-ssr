import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';
import { BaseContract } from '../contracts/base.contract';

/**
 * Provides Skeleton of all entities.
 */
export abstract class BaseEntity {

  /** Auto-generated ID. */
  @PrimaryGeneratedColumn({ name: BaseContract.COL_ID })
  id: number;

  /** Date at which the entity is persisted. */
  @CreateDateColumn({ name: BaseContract.COL_CREATED_AT, type: 'timestamp with time zone' })
  createdAt: Date;

  /** Date at which the entity is persisted. */
  @UpdateDateColumn({ name: BaseContract.COL_UPDATED_AT, type: 'timestamp with time zone' })
  updatedAt: Date;

  /** Determe if entity is disable. */
  @Column({ name: BaseContract.COL_DISABLE_TAG, type: 'boolean', default: false})
  disableTag: boolean;
}
