/**
 * Contracts for EntityBase.
 */
export abstract class BaseContract {

    /** Prefix for all tables. */
    static readonly TABLE_PREFIX = '_';

    /** Auto-generated ID. */
    static readonly COL_ID = 'id';

    /** Constant used for createdAt field. */
    static readonly COL_CREATED_AT = 'created_at';

    /** Constant used for createdAt field. */
    static readonly COL_UPDATED_AT = 'updated_at';

    /** Constant used for deleteTag field. */
    static readonly COL_DISABLE_TAG = 'disable_tag';
}
