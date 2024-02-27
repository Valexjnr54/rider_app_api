
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Rider
 * 
 */
export type Rider = $Result.DefaultSelection<Prisma.$RiderPayload>
/**
 * Model Delivery
 * 
 */
export type Delivery = $Result.DefaultSelection<Prisma.$DeliveryPayload>
/**
 * Model Operating_areas
 * 
 */
export type Operating_areas = $Result.DefaultSelection<Prisma.$Operating_areasPayload>
/**
 * Model Bank_details
 * 
 */
export type Bank_details = $Result.DefaultSelection<Prisma.$Bank_detailsPayload>
/**
 * Model Rider_rating
 * 
 */
export type Rider_rating = $Result.DefaultSelection<Prisma.$Rider_ratingPayload>
/**
 * Model Rider_credentials
 * 
 */
export type Rider_credentials = $Result.DefaultSelection<Prisma.$Rider_credentialsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  User: 'User',
  Rider: 'Rider',
  Admin: 'Admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  Available: 'Available',
  Pending: 'Pending',
  Delivered: 'Delivered',
  Rejected: 'Rejected',
  Approved: 'Approved',
  Inactive: 'Inactive',
  Active: 'Active',
  Suspend: 'Suspend'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.rider`: Exposes CRUD operations for the **Rider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Riders
    * const riders = await prisma.rider.findMany()
    * ```
    */
  get rider(): Prisma.RiderDelegate<ExtArgs>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **Delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.DeliveryDelegate<ExtArgs>;

  /**
   * `prisma.operating_areas`: Exposes CRUD operations for the **Operating_areas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operating_areas
    * const operating_areas = await prisma.operating_areas.findMany()
    * ```
    */
  get operating_areas(): Prisma.Operating_areasDelegate<ExtArgs>;

  /**
   * `prisma.bank_details`: Exposes CRUD operations for the **Bank_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bank_details
    * const bank_details = await prisma.bank_details.findMany()
    * ```
    */
  get bank_details(): Prisma.Bank_detailsDelegate<ExtArgs>;

  /**
   * `prisma.rider_rating`: Exposes CRUD operations for the **Rider_rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rider_ratings
    * const rider_ratings = await prisma.rider_rating.findMany()
    * ```
    */
  get rider_rating(): Prisma.Rider_ratingDelegate<ExtArgs>;

  /**
   * `prisma.rider_credentials`: Exposes CRUD operations for the **Rider_credentials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rider_credentials
    * const rider_credentials = await prisma.rider_credentials.findMany()
    * ```
    */
  get rider_credentials(): Prisma.Rider_credentialsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.1
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    User: 'User',
    Rider: 'Rider',
    Delivery: 'Delivery',
    Operating_areas: 'Operating_areas',
    Bank_details: 'Bank_details',
    Rider_rating: 'Rider_rating',
    Rider_credentials: 'Rider_credentials'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'admin' | 'user' | 'rider' | 'delivery' | 'operating_areas' | 'bank_details' | 'rider_rating' | 'rider_credentials'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Rider: {
        payload: Prisma.$RiderPayload<ExtArgs>
        fields: Prisma.RiderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findFirst: {
            args: Prisma.RiderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findMany: {
            args: Prisma.RiderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          create: {
            args: Prisma.RiderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          createMany: {
            args: Prisma.RiderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RiderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          update: {
            args: Prisma.RiderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          deleteMany: {
            args: Prisma.RiderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RiderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RiderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          aggregate: {
            args: Prisma.RiderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRider>
          }
          groupBy: {
            args: Prisma.RiderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RiderGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiderCountArgs<ExtArgs>,
            result: $Utils.Optional<RiderCountAggregateOutputType> | number
          }
        }
      }
      Delivery: {
        payload: Prisma.$DeliveryPayload<ExtArgs>
        fields: Prisma.DeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findFirst: {
            args: Prisma.DeliveryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findMany: {
            args: Prisma.DeliveryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          create: {
            args: Prisma.DeliveryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          createMany: {
            args: Prisma.DeliveryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DeliveryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          update: {
            args: Prisma.DeliveryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DeliveryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.DeliveryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryCountArgs<ExtArgs>,
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      Operating_areas: {
        payload: Prisma.$Operating_areasPayload<ExtArgs>
        fields: Prisma.Operating_areasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Operating_areasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Operating_areasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          findFirst: {
            args: Prisma.Operating_areasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Operating_areasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          findMany: {
            args: Prisma.Operating_areasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>[]
          }
          create: {
            args: Prisma.Operating_areasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          createMany: {
            args: Prisma.Operating_areasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Operating_areasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          update: {
            args: Prisma.Operating_areasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          deleteMany: {
            args: Prisma.Operating_areasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Operating_areasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Operating_areasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          aggregate: {
            args: Prisma.Operating_areasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOperating_areas>
          }
          groupBy: {
            args: Prisma.Operating_areasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Operating_areasGroupByOutputType>[]
          }
          count: {
            args: Prisma.Operating_areasCountArgs<ExtArgs>,
            result: $Utils.Optional<Operating_areasCountAggregateOutputType> | number
          }
        }
      }
      Bank_details: {
        payload: Prisma.$Bank_detailsPayload<ExtArgs>
        fields: Prisma.Bank_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Bank_detailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Bank_detailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          findFirst: {
            args: Prisma.Bank_detailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Bank_detailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          findMany: {
            args: Prisma.Bank_detailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>[]
          }
          create: {
            args: Prisma.Bank_detailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          createMany: {
            args: Prisma.Bank_detailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Bank_detailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          update: {
            args: Prisma.Bank_detailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          deleteMany: {
            args: Prisma.Bank_detailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Bank_detailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Bank_detailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          aggregate: {
            args: Prisma.Bank_detailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBank_details>
          }
          groupBy: {
            args: Prisma.Bank_detailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Bank_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Bank_detailsCountArgs<ExtArgs>,
            result: $Utils.Optional<Bank_detailsCountAggregateOutputType> | number
          }
        }
      }
      Rider_rating: {
        payload: Prisma.$Rider_ratingPayload<ExtArgs>
        fields: Prisma.Rider_ratingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Rider_ratingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Rider_ratingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          findFirst: {
            args: Prisma.Rider_ratingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Rider_ratingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          findMany: {
            args: Prisma.Rider_ratingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>[]
          }
          create: {
            args: Prisma.Rider_ratingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          createMany: {
            args: Prisma.Rider_ratingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Rider_ratingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          update: {
            args: Prisma.Rider_ratingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          deleteMany: {
            args: Prisma.Rider_ratingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Rider_ratingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Rider_ratingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          aggregate: {
            args: Prisma.Rider_ratingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRider_rating>
          }
          groupBy: {
            args: Prisma.Rider_ratingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Rider_ratingGroupByOutputType>[]
          }
          count: {
            args: Prisma.Rider_ratingCountArgs<ExtArgs>,
            result: $Utils.Optional<Rider_ratingCountAggregateOutputType> | number
          }
        }
      }
      Rider_credentials: {
        payload: Prisma.$Rider_credentialsPayload<ExtArgs>
        fields: Prisma.Rider_credentialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Rider_credentialsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Rider_credentialsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          findFirst: {
            args: Prisma.Rider_credentialsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Rider_credentialsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          findMany: {
            args: Prisma.Rider_credentialsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>[]
          }
          create: {
            args: Prisma.Rider_credentialsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          createMany: {
            args: Prisma.Rider_credentialsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Rider_credentialsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          update: {
            args: Prisma.Rider_credentialsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          deleteMany: {
            args: Prisma.Rider_credentialsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Rider_credentialsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Rider_credentialsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          aggregate: {
            args: Prisma.Rider_credentialsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRider_credentials>
          }
          groupBy: {
            args: Prisma.Rider_credentialsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Rider_credentialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Rider_credentialsCountArgs<ExtArgs>,
            result: $Utils.Optional<Rider_credentialsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    delivery: number
    rider_rating: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | UserCountOutputTypeCountDeliveryArgs
    rider_rating?: boolean | UserCountOutputTypeCountRider_ratingArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRider_ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rider_ratingWhereInput
  }



  /**
   * Count Type RiderCountOutputType
   */

  export type RiderCountOutputType = {
    delivery: number
    bank_details: number
    rider_rating: number
    rider_credentials: number
  }

  export type RiderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | RiderCountOutputTypeCountDeliveryArgs
    bank_details?: boolean | RiderCountOutputTypeCountBank_detailsArgs
    rider_rating?: boolean | RiderCountOutputTypeCountRider_ratingArgs
    rider_credentials?: boolean | RiderCountOutputTypeCountRider_credentialsArgs
  }

  // Custom InputTypes

  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiderCountOutputType
     */
    select?: RiderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeCountDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }


  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeCountBank_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_detailsWhereInput
  }


  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeCountRider_ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rider_ratingWhereInput
  }


  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeCountRider_credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rider_credentialsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    role: number
    profile_image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    role: $Enums.Role
    profile_image: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      role: $Enums.Role
      profile_image: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly fullname: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly profile_image: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    ip_address: string | null
    device_token: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    ip_address: string | null
    device_token: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    phone_number: number
    ip_address: number
    device_token: number
    current_position: number
    role: number
    profile_image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    ip_address?: true
    device_token?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    ip_address?: true
    device_token?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    ip_address?: true
    device_token?: true
    current_position?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address: string | null
    device_token: string | null
    current_position: JsonValue | null
    role: $Enums.Role
    profile_image: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    ip_address?: boolean
    device_token?: boolean
    current_position?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delivery?: boolean | User$deliveryArgs<ExtArgs>
    rider_rating?: boolean | User$rider_ratingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    ip_address?: boolean
    device_token?: boolean
    current_position?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | User$deliveryArgs<ExtArgs>
    rider_rating?: boolean | User$rider_ratingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      delivery: Prisma.$DeliveryPayload<ExtArgs>[]
      rider_rating: Prisma.$Rider_ratingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      phone_number: string
      ip_address: string | null
      device_token: string | null
      current_position: Prisma.JsonValue | null
      role: $Enums.Role
      profile_image: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    delivery<T extends User$deliveryArgs<ExtArgs> = {}>(args?: Subset<T, User$deliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findMany'> | Null>;

    rider_rating<T extends User$rider_ratingArgs<ExtArgs> = {}>(args?: Subset<T, User$rider_ratingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly ip_address: FieldRef<"User", 'String'>
    readonly device_token: FieldRef<"User", 'String'>
    readonly current_position: FieldRef<"User", 'Json'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profile_image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.delivery
   */
  export type User$deliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }


  /**
   * User.rider_rating
   */
  export type User$rider_ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    where?: Rider_ratingWhereInput
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    cursor?: Rider_ratingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rider_ratingScalarFieldEnum | Rider_ratingScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Rider
   */

  export type AggregateRider = {
    _count: RiderCountAggregateOutputType | null
    _avg: RiderAvgAggregateOutputType | null
    _sum: RiderSumAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  export type RiderAvgAggregateOutputType = {
    id: number | null
    avg_rating: number | null
  }

  export type RiderSumAggregateOutputType = {
    id: number | null
    avg_rating: number | null
  }

  export type RiderMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    ip_address: string | null
    device_token: string | null
    role: $Enums.Role | null
    profile_image: string | null
    avg_rating: number | null
    password: string | null
    status: $Enums.Status | null
    is_verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiderMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    ip_address: string | null
    device_token: string | null
    role: $Enums.Role | null
    profile_image: string | null
    avg_rating: number | null
    password: string | null
    status: $Enums.Status | null
    is_verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiderCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    phone_number: number
    ip_address: number
    device_token: number
    current_position: number
    role: number
    profile_image: number
    avg_rating: number
    password: number
    status: number
    is_verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RiderAvgAggregateInputType = {
    id?: true
    avg_rating?: true
  }

  export type RiderSumAggregateInputType = {
    id?: true
    avg_rating?: true
  }

  export type RiderMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    ip_address?: true
    device_token?: true
    role?: true
    profile_image?: true
    avg_rating?: true
    password?: true
    status?: true
    is_verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiderMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    ip_address?: true
    device_token?: true
    role?: true
    profile_image?: true
    avg_rating?: true
    password?: true
    status?: true
    is_verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiderCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    ip_address?: true
    device_token?: true
    current_position?: true
    role?: true
    profile_image?: true
    avg_rating?: true
    password?: true
    status?: true
    is_verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RiderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider to aggregate.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Riders
    **/
    _count?: true | RiderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiderMaxAggregateInputType
  }

  export type GetRiderAggregateType<T extends RiderAggregateArgs> = {
        [P in keyof T & keyof AggregateRider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRider[P]>
      : GetScalarType<T[P], AggregateRider[P]>
  }




  export type RiderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiderWhereInput
    orderBy?: RiderOrderByWithAggregationInput | RiderOrderByWithAggregationInput[]
    by: RiderScalarFieldEnum[] | RiderScalarFieldEnum
    having?: RiderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiderCountAggregateInputType | true
    _avg?: RiderAvgAggregateInputType
    _sum?: RiderSumAggregateInputType
    _min?: RiderMinAggregateInputType
    _max?: RiderMaxAggregateInputType
  }

  export type RiderGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address: string | null
    device_token: string | null
    current_position: JsonValue | null
    role: $Enums.Role
    profile_image: string
    avg_rating: number
    password: string
    status: $Enums.Status
    is_verified: boolean
    createdAt: Date
    updatedAt: Date
    _count: RiderCountAggregateOutputType | null
    _avg: RiderAvgAggregateOutputType | null
    _sum: RiderSumAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  type GetRiderGroupByPayload<T extends RiderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiderGroupByOutputType[P]>
            : GetScalarType<T[P], RiderGroupByOutputType[P]>
        }
      >
    >


  export type RiderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    ip_address?: boolean
    device_token?: boolean
    current_position?: boolean
    role?: boolean
    profile_image?: boolean
    avg_rating?: boolean
    password?: boolean
    status?: boolean
    is_verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delivery?: boolean | Rider$deliveryArgs<ExtArgs>
    bank_details?: boolean | Rider$bank_detailsArgs<ExtArgs>
    rider_rating?: boolean | Rider$rider_ratingArgs<ExtArgs>
    rider_credentials?: boolean | Rider$rider_credentialsArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rider"]>

  export type RiderSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    ip_address?: boolean
    device_token?: boolean
    current_position?: boolean
    role?: boolean
    profile_image?: boolean
    avg_rating?: boolean
    password?: boolean
    status?: boolean
    is_verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RiderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | Rider$deliveryArgs<ExtArgs>
    bank_details?: boolean | Rider$bank_detailsArgs<ExtArgs>
    rider_rating?: boolean | Rider$rider_ratingArgs<ExtArgs>
    rider_credentials?: boolean | Rider$rider_credentialsArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RiderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rider"
    objects: {
      delivery: Prisma.$DeliveryPayload<ExtArgs>[]
      bank_details: Prisma.$Bank_detailsPayload<ExtArgs>[]
      rider_rating: Prisma.$Rider_ratingPayload<ExtArgs>[]
      rider_credentials: Prisma.$Rider_credentialsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      phone_number: string
      ip_address: string | null
      device_token: string | null
      current_position: Prisma.JsonValue | null
      role: $Enums.Role
      profile_image: string
      avg_rating: number
      password: string
      status: $Enums.Status
      is_verified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rider"]>
    composites: {}
  }


  type RiderGetPayload<S extends boolean | null | undefined | RiderDefaultArgs> = $Result.GetResult<Prisma.$RiderPayload, S>

  type RiderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RiderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RiderCountAggregateInputType | true
    }

  export interface RiderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rider'], meta: { name: 'Rider' } }
    /**
     * Find zero or one Rider that matches the filter.
     * @param {RiderFindUniqueArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RiderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RiderFindUniqueArgs<ExtArgs>>
    ): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rider that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RiderFindUniqueOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RiderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RiderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RiderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RiderFindFirstArgs<ExtArgs>>
    ): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RiderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RiderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Riders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Riders
     * const riders = await prisma.rider.findMany()
     * 
     * // Get first 10 Riders
     * const riders = await prisma.rider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riderWithIdOnly = await prisma.rider.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RiderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RiderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rider.
     * @param {RiderCreateArgs} args - Arguments to create a Rider.
     * @example
     * // Create one Rider
     * const Rider = await prisma.rider.create({
     *   data: {
     *     // ... data to create a Rider
     *   }
     * })
     * 
    **/
    create<T extends RiderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RiderCreateArgs<ExtArgs>>
    ): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Riders.
     *     @param {RiderCreateManyArgs} args - Arguments to create many Riders.
     *     @example
     *     // Create many Riders
     *     const rider = await prisma.rider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RiderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RiderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rider.
     * @param {RiderDeleteArgs} args - Arguments to delete one Rider.
     * @example
     * // Delete one Rider
     * const Rider = await prisma.rider.delete({
     *   where: {
     *     // ... filter to delete one Rider
     *   }
     * })
     * 
    **/
    delete<T extends RiderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RiderDeleteArgs<ExtArgs>>
    ): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rider.
     * @param {RiderUpdateArgs} args - Arguments to update one Rider.
     * @example
     * // Update one Rider
     * const rider = await prisma.rider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RiderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RiderUpdateArgs<ExtArgs>>
    ): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Riders.
     * @param {RiderDeleteManyArgs} args - Arguments to filter Riders to delete.
     * @example
     * // Delete a few Riders
     * const { count } = await prisma.rider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RiderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RiderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Riders
     * const rider = await prisma.rider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RiderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RiderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rider.
     * @param {RiderUpsertArgs} args - Arguments to update or create a Rider.
     * @example
     * // Update or create a Rider
     * const rider = await prisma.rider.upsert({
     *   create: {
     *     // ... data to create a Rider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rider we want to update
     *   }
     * })
    **/
    upsert<T extends RiderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RiderUpsertArgs<ExtArgs>>
    ): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderCountArgs} args - Arguments to filter Riders to count.
     * @example
     * // Count the number of Riders
     * const count = await prisma.rider.count({
     *   where: {
     *     // ... the filter for the Riders we want to count
     *   }
     * })
    **/
    count<T extends RiderCountArgs>(
      args?: Subset<T, RiderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiderAggregateArgs>(args: Subset<T, RiderAggregateArgs>): Prisma.PrismaPromise<GetRiderAggregateType<T>>

    /**
     * Group by Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiderGroupByArgs['orderBy'] }
        : { orderBy?: RiderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rider model
   */
  readonly fields: RiderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    delivery<T extends Rider$deliveryArgs<ExtArgs> = {}>(args?: Subset<T, Rider$deliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findMany'> | Null>;

    bank_details<T extends Rider$bank_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Rider$bank_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    rider_rating<T extends Rider$rider_ratingArgs<ExtArgs> = {}>(args?: Subset<T, Rider$rider_ratingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, 'findMany'> | Null>;

    rider_credentials<T extends Rider$rider_credentialsArgs<ExtArgs> = {}>(args?: Subset<T, Rider$rider_credentialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Rider model
   */ 
  interface RiderFieldRefs {
    readonly id: FieldRef<"Rider", 'Int'>
    readonly fullname: FieldRef<"Rider", 'String'>
    readonly username: FieldRef<"Rider", 'String'>
    readonly email: FieldRef<"Rider", 'String'>
    readonly phone_number: FieldRef<"Rider", 'String'>
    readonly ip_address: FieldRef<"Rider", 'String'>
    readonly device_token: FieldRef<"Rider", 'String'>
    readonly current_position: FieldRef<"Rider", 'Json'>
    readonly role: FieldRef<"Rider", 'Role'>
    readonly profile_image: FieldRef<"Rider", 'String'>
    readonly avg_rating: FieldRef<"Rider", 'Float'>
    readonly password: FieldRef<"Rider", 'String'>
    readonly status: FieldRef<"Rider", 'Status'>
    readonly is_verified: FieldRef<"Rider", 'Boolean'>
    readonly createdAt: FieldRef<"Rider", 'DateTime'>
    readonly updatedAt: FieldRef<"Rider", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Rider findUnique
   */
  export type RiderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }


  /**
   * Rider findUniqueOrThrow
   */
  export type RiderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }


  /**
   * Rider findFirst
   */
  export type RiderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }


  /**
   * Rider findFirstOrThrow
   */
  export type RiderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }


  /**
   * Rider findMany
   */
  export type RiderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Riders to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }


  /**
   * Rider create
   */
  export type RiderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to create a Rider.
     */
    data: XOR<RiderCreateInput, RiderUncheckedCreateInput>
  }


  /**
   * Rider createMany
   */
  export type RiderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Riders.
     */
    data: RiderCreateManyInput | RiderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Rider update
   */
  export type RiderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to update a Rider.
     */
    data: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
    /**
     * Choose, which Rider to update.
     */
    where: RiderWhereUniqueInput
  }


  /**
   * Rider updateMany
   */
  export type RiderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Riders.
     */
    data: XOR<RiderUpdateManyMutationInput, RiderUncheckedUpdateManyInput>
    /**
     * Filter which Riders to update
     */
    where?: RiderWhereInput
  }


  /**
   * Rider upsert
   */
  export type RiderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The filter to search for the Rider to update in case it exists.
     */
    where: RiderWhereUniqueInput
    /**
     * In case the Rider found by the `where` argument doesn't exist, create a new Rider with this data.
     */
    create: XOR<RiderCreateInput, RiderUncheckedCreateInput>
    /**
     * In case the Rider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
  }


  /**
   * Rider delete
   */
  export type RiderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter which Rider to delete.
     */
    where: RiderWhereUniqueInput
  }


  /**
   * Rider deleteMany
   */
  export type RiderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Riders to delete
     */
    where?: RiderWhereInput
  }


  /**
   * Rider.delivery
   */
  export type Rider$deliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }


  /**
   * Rider.bank_details
   */
  export type Rider$bank_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    where?: Bank_detailsWhereInput
    orderBy?: Bank_detailsOrderByWithRelationInput | Bank_detailsOrderByWithRelationInput[]
    cursor?: Bank_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bank_detailsScalarFieldEnum | Bank_detailsScalarFieldEnum[]
  }


  /**
   * Rider.rider_rating
   */
  export type Rider$rider_ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    where?: Rider_ratingWhereInput
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    cursor?: Rider_ratingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rider_ratingScalarFieldEnum | Rider_ratingScalarFieldEnum[]
  }


  /**
   * Rider.rider_credentials
   */
  export type Rider$rider_credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    where?: Rider_credentialsWhereInput
    orderBy?: Rider_credentialsOrderByWithRelationInput | Rider_credentialsOrderByWithRelationInput[]
    cursor?: Rider_credentialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rider_credentialsScalarFieldEnum | Rider_credentialsScalarFieldEnum[]
  }


  /**
   * Rider without action
   */
  export type RiderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RiderInclude<ExtArgs> | null
  }



  /**
   * Model Delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    rider_id: number | null
    delivery_code: number | null
  }

  export type DeliverySumAggregateOutputType = {
    id: number | null
    user_id: number | null
    rider_id: number | null
    delivery_code: number | null
  }

  export type DeliveryMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    package_name: string | null
    phone_number: string | null
    pickup_location: string | null
    delivery_location: string | null
    estimated_delivery_price: string | null
    package_image: string | null
    rider_id: number | null
    delivery_code: number | null
    is_pickedup: boolean | null
    is_delivered: boolean | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    package_name: string | null
    phone_number: string | null
    pickup_location: string | null
    delivery_location: string | null
    estimated_delivery_price: string | null
    package_image: string | null
    rider_id: number | null
    delivery_code: number | null
    is_pickedup: boolean | null
    is_delivered: boolean | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryCountAggregateOutputType = {
    id: number
    user_id: number
    package_name: number
    phone_number: number
    pickup_location: number
    delivery_location: number
    pickup_coordinate: number
    delivery_coordinate: number
    estimated_delivery_price: number
    package_image: number
    rider_id: number
    delivery_code: number
    is_pickedup: number
    is_delivered: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    id?: true
    user_id?: true
    rider_id?: true
    delivery_code?: true
  }

  export type DeliverySumAggregateInputType = {
    id?: true
    user_id?: true
    rider_id?: true
    delivery_code?: true
  }

  export type DeliveryMinAggregateInputType = {
    id?: true
    user_id?: true
    package_name?: true
    phone_number?: true
    pickup_location?: true
    delivery_location?: true
    estimated_delivery_price?: true
    package_image?: true
    rider_id?: true
    delivery_code?: true
    is_pickedup?: true
    is_delivered?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryMaxAggregateInputType = {
    id?: true
    user_id?: true
    package_name?: true
    phone_number?: true
    pickup_location?: true
    delivery_location?: true
    estimated_delivery_price?: true
    package_image?: true
    rider_id?: true
    delivery_code?: true
    is_pickedup?: true
    is_delivered?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryCountAggregateInputType = {
    id?: true
    user_id?: true
    package_name?: true
    phone_number?: true
    pickup_location?: true
    delivery_location?: true
    pickup_coordinate?: true
    delivery_coordinate?: true
    estimated_delivery_price?: true
    package_image?: true
    rider_id?: true
    delivery_code?: true
    is_pickedup?: true
    is_delivered?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delivery to aggregate.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type DeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithAggregationInput | DeliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: DeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    id: number
    user_id: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    pickup_coordinate: JsonValue
    delivery_coordinate: JsonValue
    estimated_delivery_price: string
    package_image: string
    rider_id: number | null
    delivery_code: number | null
    is_pickedup: boolean
    is_delivered: boolean
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type DeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    package_name?: boolean
    phone_number?: boolean
    pickup_location?: boolean
    delivery_location?: boolean
    pickup_coordinate?: boolean
    delivery_coordinate?: boolean
    estimated_delivery_price?: boolean
    package_image?: boolean
    rider_id?: boolean
    delivery_code?: boolean
    is_pickedup?: boolean
    is_delivered?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rider?: boolean | Delivery$riderArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectScalar = {
    id?: boolean
    user_id?: boolean
    package_name?: boolean
    phone_number?: boolean
    pickup_location?: boolean
    delivery_location?: boolean
    pickup_coordinate?: boolean
    delivery_coordinate?: boolean
    estimated_delivery_price?: boolean
    package_image?: boolean
    rider_id?: boolean
    delivery_code?: boolean
    is_pickedup?: boolean
    is_delivered?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rider?: boolean | Delivery$riderArgs<ExtArgs>
  }


  export type $DeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delivery"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      rider: Prisma.$RiderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      package_name: string
      phone_number: string
      pickup_location: string
      delivery_location: string
      pickup_coordinate: Prisma.JsonValue
      delivery_coordinate: Prisma.JsonValue
      estimated_delivery_price: string
      package_image: string
      rider_id: number | null
      delivery_code: number | null
      is_pickedup: boolean
      is_delivered: boolean
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }


  type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPayload, S>

  type DeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface DeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delivery'], meta: { name: 'Delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {DeliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DeliveryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Delivery that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DeliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DeliveryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryWithIdOnly = await prisma.delivery.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DeliveryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Delivery.
     * @param {DeliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
    **/
    create<T extends DeliveryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryCreateArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Deliveries.
     *     @param {DeliveryCreateManyArgs} args - Arguments to create many Deliveries.
     *     @example
     *     // Create many Deliveries
     *     const delivery = await prisma.delivery.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DeliveryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Delivery.
     * @param {DeliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
    **/
    delete<T extends DeliveryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Delivery.
     * @param {DeliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DeliveryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DeliveryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DeliveryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Delivery.
     * @param {DeliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
    **/
    upsert<T extends DeliveryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>
    ): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveryCountArgs>(
      args?: Subset<T, DeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delivery model
   */
  readonly fields: DeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    rider<T extends Delivery$riderArgs<ExtArgs> = {}>(args?: Subset<T, Delivery$riderArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Delivery model
   */ 
  interface DeliveryFieldRefs {
    readonly id: FieldRef<"Delivery", 'Int'>
    readonly user_id: FieldRef<"Delivery", 'Int'>
    readonly package_name: FieldRef<"Delivery", 'String'>
    readonly phone_number: FieldRef<"Delivery", 'String'>
    readonly pickup_location: FieldRef<"Delivery", 'String'>
    readonly delivery_location: FieldRef<"Delivery", 'String'>
    readonly pickup_coordinate: FieldRef<"Delivery", 'Json'>
    readonly delivery_coordinate: FieldRef<"Delivery", 'Json'>
    readonly estimated_delivery_price: FieldRef<"Delivery", 'String'>
    readonly package_image: FieldRef<"Delivery", 'String'>
    readonly rider_id: FieldRef<"Delivery", 'Int'>
    readonly delivery_code: FieldRef<"Delivery", 'Int'>
    readonly is_pickedup: FieldRef<"Delivery", 'Boolean'>
    readonly is_delivered: FieldRef<"Delivery", 'Boolean'>
    readonly status: FieldRef<"Delivery", 'Status'>
    readonly createdAt: FieldRef<"Delivery", 'DateTime'>
    readonly updatedAt: FieldRef<"Delivery", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Delivery findUnique
   */
  export type DeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }


  /**
   * Delivery findUniqueOrThrow
   */
  export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }


  /**
   * Delivery findFirst
   */
  export type DeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }


  /**
   * Delivery findFirstOrThrow
   */
  export type DeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }


  /**
   * Delivery findMany
   */
  export type DeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }


  /**
   * Delivery create
   */
  export type DeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a Delivery.
     */
    data: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
  }


  /**
   * Delivery createMany
   */
  export type DeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Delivery update
   */
  export type DeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a Delivery.
     */
    data: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
    /**
     * Choose, which Delivery to update.
     */
    where: DeliveryWhereUniqueInput
  }


  /**
   * Delivery updateMany
   */
  export type DeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
  }


  /**
   * Delivery upsert
   */
  export type DeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the Delivery to update in case it exists.
     */
    where: DeliveryWhereUniqueInput
    /**
     * In case the Delivery found by the `where` argument doesn't exist, create a new Delivery with this data.
     */
    create: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
    /**
     * In case the Delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
  }


  /**
   * Delivery delete
   */
  export type DeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter which Delivery to delete.
     */
    where: DeliveryWhereUniqueInput
  }


  /**
   * Delivery deleteMany
   */
  export type DeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveryWhereInput
  }


  /**
   * Delivery.rider
   */
  export type Delivery$riderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RiderInclude<ExtArgs> | null
    where?: RiderWhereInput
  }


  /**
   * Delivery without action
   */
  export type DeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryInclude<ExtArgs> | null
  }



  /**
   * Model Operating_areas
   */

  export type AggregateOperating_areas = {
    _count: Operating_areasCountAggregateOutputType | null
    _avg: Operating_areasAvgAggregateOutputType | null
    _sum: Operating_areasSumAggregateOutputType | null
    _min: Operating_areasMinAggregateOutputType | null
    _max: Operating_areasMaxAggregateOutputType | null
  }

  export type Operating_areasAvgAggregateOutputType = {
    id: number | null
  }

  export type Operating_areasSumAggregateOutputType = {
    id: number | null
  }

  export type Operating_areasMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Operating_areasMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Operating_areasCountAggregateOutputType = {
    id: number
    name: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Operating_areasAvgAggregateInputType = {
    id?: true
  }

  export type Operating_areasSumAggregateInputType = {
    id?: true
  }

  export type Operating_areasMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Operating_areasMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Operating_areasCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Operating_areasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operating_areas to aggregate.
     */
    where?: Operating_areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operating_areas to fetch.
     */
    orderBy?: Operating_areasOrderByWithRelationInput | Operating_areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Operating_areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operating_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operating_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operating_areas
    **/
    _count?: true | Operating_areasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Operating_areasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Operating_areasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Operating_areasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Operating_areasMaxAggregateInputType
  }

  export type GetOperating_areasAggregateType<T extends Operating_areasAggregateArgs> = {
        [P in keyof T & keyof AggregateOperating_areas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperating_areas[P]>
      : GetScalarType<T[P], AggregateOperating_areas[P]>
  }




  export type Operating_areasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Operating_areasWhereInput
    orderBy?: Operating_areasOrderByWithAggregationInput | Operating_areasOrderByWithAggregationInput[]
    by: Operating_areasScalarFieldEnum[] | Operating_areasScalarFieldEnum
    having?: Operating_areasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Operating_areasCountAggregateInputType | true
    _avg?: Operating_areasAvgAggregateInputType
    _sum?: Operating_areasSumAggregateInputType
    _min?: Operating_areasMinAggregateInputType
    _max?: Operating_areasMaxAggregateInputType
  }

  export type Operating_areasGroupByOutputType = {
    id: number
    name: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: Operating_areasCountAggregateOutputType | null
    _avg: Operating_areasAvgAggregateOutputType | null
    _sum: Operating_areasSumAggregateOutputType | null
    _min: Operating_areasMinAggregateOutputType | null
    _max: Operating_areasMaxAggregateOutputType | null
  }

  type GetOperating_areasGroupByPayload<T extends Operating_areasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Operating_areasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Operating_areasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Operating_areasGroupByOutputType[P]>
            : GetScalarType<T[P], Operating_areasGroupByOutputType[P]>
        }
      >
    >


  export type Operating_areasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["operating_areas"]>

  export type Operating_areasSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $Operating_areasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operating_areas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["operating_areas"]>
    composites: {}
  }


  type Operating_areasGetPayload<S extends boolean | null | undefined | Operating_areasDefaultArgs> = $Result.GetResult<Prisma.$Operating_areasPayload, S>

  type Operating_areasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Operating_areasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Operating_areasCountAggregateInputType | true
    }

  export interface Operating_areasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operating_areas'], meta: { name: 'Operating_areas' } }
    /**
     * Find zero or one Operating_areas that matches the filter.
     * @param {Operating_areasFindUniqueArgs} args - Arguments to find a Operating_areas
     * @example
     * // Get one Operating_areas
     * const operating_areas = await prisma.operating_areas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Operating_areasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Operating_areasFindUniqueArgs<ExtArgs>>
    ): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Operating_areas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Operating_areasFindUniqueOrThrowArgs} args - Arguments to find a Operating_areas
     * @example
     * // Get one Operating_areas
     * const operating_areas = await prisma.operating_areas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Operating_areasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Operating_areasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Operating_areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasFindFirstArgs} args - Arguments to find a Operating_areas
     * @example
     * // Get one Operating_areas
     * const operating_areas = await prisma.operating_areas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Operating_areasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Operating_areasFindFirstArgs<ExtArgs>>
    ): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Operating_areas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasFindFirstOrThrowArgs} args - Arguments to find a Operating_areas
     * @example
     * // Get one Operating_areas
     * const operating_areas = await prisma.operating_areas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Operating_areasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Operating_areasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Operating_areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operating_areas
     * const operating_areas = await prisma.operating_areas.findMany()
     * 
     * // Get first 10 Operating_areas
     * const operating_areas = await prisma.operating_areas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operating_areasWithIdOnly = await prisma.operating_areas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Operating_areasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Operating_areasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Operating_areas.
     * @param {Operating_areasCreateArgs} args - Arguments to create a Operating_areas.
     * @example
     * // Create one Operating_areas
     * const Operating_areas = await prisma.operating_areas.create({
     *   data: {
     *     // ... data to create a Operating_areas
     *   }
     * })
     * 
    **/
    create<T extends Operating_areasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Operating_areasCreateArgs<ExtArgs>>
    ): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Operating_areas.
     *     @param {Operating_areasCreateManyArgs} args - Arguments to create many Operating_areas.
     *     @example
     *     // Create many Operating_areas
     *     const operating_areas = await prisma.operating_areas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Operating_areasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Operating_areasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Operating_areas.
     * @param {Operating_areasDeleteArgs} args - Arguments to delete one Operating_areas.
     * @example
     * // Delete one Operating_areas
     * const Operating_areas = await prisma.operating_areas.delete({
     *   where: {
     *     // ... filter to delete one Operating_areas
     *   }
     * })
     * 
    **/
    delete<T extends Operating_areasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Operating_areasDeleteArgs<ExtArgs>>
    ): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Operating_areas.
     * @param {Operating_areasUpdateArgs} args - Arguments to update one Operating_areas.
     * @example
     * // Update one Operating_areas
     * const operating_areas = await prisma.operating_areas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Operating_areasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Operating_areasUpdateArgs<ExtArgs>>
    ): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Operating_areas.
     * @param {Operating_areasDeleteManyArgs} args - Arguments to filter Operating_areas to delete.
     * @example
     * // Delete a few Operating_areas
     * const { count } = await prisma.operating_areas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Operating_areasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Operating_areasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operating_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operating_areas
     * const operating_areas = await prisma.operating_areas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Operating_areasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Operating_areasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Operating_areas.
     * @param {Operating_areasUpsertArgs} args - Arguments to update or create a Operating_areas.
     * @example
     * // Update or create a Operating_areas
     * const operating_areas = await prisma.operating_areas.upsert({
     *   create: {
     *     // ... data to create a Operating_areas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operating_areas we want to update
     *   }
     * })
    **/
    upsert<T extends Operating_areasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Operating_areasUpsertArgs<ExtArgs>>
    ): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Operating_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasCountArgs} args - Arguments to filter Operating_areas to count.
     * @example
     * // Count the number of Operating_areas
     * const count = await prisma.operating_areas.count({
     *   where: {
     *     // ... the filter for the Operating_areas we want to count
     *   }
     * })
    **/
    count<T extends Operating_areasCountArgs>(
      args?: Subset<T, Operating_areasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Operating_areasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operating_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Operating_areasAggregateArgs>(args: Subset<T, Operating_areasAggregateArgs>): Prisma.PrismaPromise<GetOperating_areasAggregateType<T>>

    /**
     * Group by Operating_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Operating_areasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Operating_areasGroupByArgs['orderBy'] }
        : { orderBy?: Operating_areasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Operating_areasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperating_areasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operating_areas model
   */
  readonly fields: Operating_areasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operating_areas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Operating_areasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Operating_areas model
   */ 
  interface Operating_areasFieldRefs {
    readonly id: FieldRef<"Operating_areas", 'Int'>
    readonly name: FieldRef<"Operating_areas", 'String'>
    readonly status: FieldRef<"Operating_areas", 'Status'>
    readonly createdAt: FieldRef<"Operating_areas", 'DateTime'>
    readonly updatedAt: FieldRef<"Operating_areas", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Operating_areas findUnique
   */
  export type Operating_areasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Filter, which Operating_areas to fetch.
     */
    where: Operating_areasWhereUniqueInput
  }


  /**
   * Operating_areas findUniqueOrThrow
   */
  export type Operating_areasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Filter, which Operating_areas to fetch.
     */
    where: Operating_areasWhereUniqueInput
  }


  /**
   * Operating_areas findFirst
   */
  export type Operating_areasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Filter, which Operating_areas to fetch.
     */
    where?: Operating_areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operating_areas to fetch.
     */
    orderBy?: Operating_areasOrderByWithRelationInput | Operating_areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operating_areas.
     */
    cursor?: Operating_areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operating_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operating_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operating_areas.
     */
    distinct?: Operating_areasScalarFieldEnum | Operating_areasScalarFieldEnum[]
  }


  /**
   * Operating_areas findFirstOrThrow
   */
  export type Operating_areasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Filter, which Operating_areas to fetch.
     */
    where?: Operating_areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operating_areas to fetch.
     */
    orderBy?: Operating_areasOrderByWithRelationInput | Operating_areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operating_areas.
     */
    cursor?: Operating_areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operating_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operating_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operating_areas.
     */
    distinct?: Operating_areasScalarFieldEnum | Operating_areasScalarFieldEnum[]
  }


  /**
   * Operating_areas findMany
   */
  export type Operating_areasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Filter, which Operating_areas to fetch.
     */
    where?: Operating_areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operating_areas to fetch.
     */
    orderBy?: Operating_areasOrderByWithRelationInput | Operating_areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operating_areas.
     */
    cursor?: Operating_areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operating_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operating_areas.
     */
    skip?: number
    distinct?: Operating_areasScalarFieldEnum | Operating_areasScalarFieldEnum[]
  }


  /**
   * Operating_areas create
   */
  export type Operating_areasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * The data needed to create a Operating_areas.
     */
    data: XOR<Operating_areasCreateInput, Operating_areasUncheckedCreateInput>
  }


  /**
   * Operating_areas createMany
   */
  export type Operating_areasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operating_areas.
     */
    data: Operating_areasCreateManyInput | Operating_areasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Operating_areas update
   */
  export type Operating_areasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * The data needed to update a Operating_areas.
     */
    data: XOR<Operating_areasUpdateInput, Operating_areasUncheckedUpdateInput>
    /**
     * Choose, which Operating_areas to update.
     */
    where: Operating_areasWhereUniqueInput
  }


  /**
   * Operating_areas updateMany
   */
  export type Operating_areasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operating_areas.
     */
    data: XOR<Operating_areasUpdateManyMutationInput, Operating_areasUncheckedUpdateManyInput>
    /**
     * Filter which Operating_areas to update
     */
    where?: Operating_areasWhereInput
  }


  /**
   * Operating_areas upsert
   */
  export type Operating_areasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * The filter to search for the Operating_areas to update in case it exists.
     */
    where: Operating_areasWhereUniqueInput
    /**
     * In case the Operating_areas found by the `where` argument doesn't exist, create a new Operating_areas with this data.
     */
    create: XOR<Operating_areasCreateInput, Operating_areasUncheckedCreateInput>
    /**
     * In case the Operating_areas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Operating_areasUpdateInput, Operating_areasUncheckedUpdateInput>
  }


  /**
   * Operating_areas delete
   */
  export type Operating_areasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Filter which Operating_areas to delete.
     */
    where: Operating_areasWhereUniqueInput
  }


  /**
   * Operating_areas deleteMany
   */
  export type Operating_areasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operating_areas to delete
     */
    where?: Operating_areasWhereInput
  }


  /**
   * Operating_areas without action
   */
  export type Operating_areasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
  }



  /**
   * Model Bank_details
   */

  export type AggregateBank_details = {
    _count: Bank_detailsCountAggregateOutputType | null
    _avg: Bank_detailsAvgAggregateOutputType | null
    _sum: Bank_detailsSumAggregateOutputType | null
    _min: Bank_detailsMinAggregateOutputType | null
    _max: Bank_detailsMaxAggregateOutputType | null
  }

  export type Bank_detailsAvgAggregateOutputType = {
    id: number | null
    rider_id: number | null
  }

  export type Bank_detailsSumAggregateOutputType = {
    id: number | null
    rider_id: number | null
  }

  export type Bank_detailsMinAggregateOutputType = {
    id: number | null
    rider_id: number | null
    bank_name: string | null
    account_name: string | null
    account_number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Bank_detailsMaxAggregateOutputType = {
    id: number | null
    rider_id: number | null
    bank_name: string | null
    account_name: string | null
    account_number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Bank_detailsCountAggregateOutputType = {
    id: number
    rider_id: number
    bank_name: number
    account_name: number
    account_number: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Bank_detailsAvgAggregateInputType = {
    id?: true
    rider_id?: true
  }

  export type Bank_detailsSumAggregateInputType = {
    id?: true
    rider_id?: true
  }

  export type Bank_detailsMinAggregateInputType = {
    id?: true
    rider_id?: true
    bank_name?: true
    account_name?: true
    account_number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Bank_detailsMaxAggregateInputType = {
    id?: true
    rider_id?: true
    bank_name?: true
    account_name?: true
    account_number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Bank_detailsCountAggregateInputType = {
    id?: true
    rider_id?: true
    bank_name?: true
    account_name?: true
    account_number?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Bank_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank_details to aggregate.
     */
    where?: Bank_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_details to fetch.
     */
    orderBy?: Bank_detailsOrderByWithRelationInput | Bank_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Bank_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bank_details
    **/
    _count?: true | Bank_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bank_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bank_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bank_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bank_detailsMaxAggregateInputType
  }

  export type GetBank_detailsAggregateType<T extends Bank_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateBank_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBank_details[P]>
      : GetScalarType<T[P], AggregateBank_details[P]>
  }




  export type Bank_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_detailsWhereInput
    orderBy?: Bank_detailsOrderByWithAggregationInput | Bank_detailsOrderByWithAggregationInput[]
    by: Bank_detailsScalarFieldEnum[] | Bank_detailsScalarFieldEnum
    having?: Bank_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bank_detailsCountAggregateInputType | true
    _avg?: Bank_detailsAvgAggregateInputType
    _sum?: Bank_detailsSumAggregateInputType
    _min?: Bank_detailsMinAggregateInputType
    _max?: Bank_detailsMaxAggregateInputType
  }

  export type Bank_detailsGroupByOutputType = {
    id: number
    rider_id: number
    bank_name: string
    account_name: string
    account_number: string
    createdAt: Date
    updatedAt: Date
    _count: Bank_detailsCountAggregateOutputType | null
    _avg: Bank_detailsAvgAggregateOutputType | null
    _sum: Bank_detailsSumAggregateOutputType | null
    _min: Bank_detailsMinAggregateOutputType | null
    _max: Bank_detailsMaxAggregateOutputType | null
  }

  type GetBank_detailsGroupByPayload<T extends Bank_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bank_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bank_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bank_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Bank_detailsGroupByOutputType[P]>
        }
      >
    >


  export type Bank_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rider_id?: boolean
    bank_name?: boolean
    account_name?: boolean
    account_number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bank_details"]>

  export type Bank_detailsSelectScalar = {
    id?: boolean
    rider_id?: boolean
    bank_name?: boolean
    account_name?: boolean
    account_number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Bank_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }


  export type $Bank_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bank_details"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rider_id: number
      bank_name: string
      account_name: string
      account_number: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bank_details"]>
    composites: {}
  }


  type Bank_detailsGetPayload<S extends boolean | null | undefined | Bank_detailsDefaultArgs> = $Result.GetResult<Prisma.$Bank_detailsPayload, S>

  type Bank_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Bank_detailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Bank_detailsCountAggregateInputType | true
    }

  export interface Bank_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bank_details'], meta: { name: 'Bank_details' } }
    /**
     * Find zero or one Bank_details that matches the filter.
     * @param {Bank_detailsFindUniqueArgs} args - Arguments to find a Bank_details
     * @example
     * // Get one Bank_details
     * const bank_details = await prisma.bank_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Bank_detailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Bank_detailsFindUniqueArgs<ExtArgs>>
    ): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bank_details that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Bank_detailsFindUniqueOrThrowArgs} args - Arguments to find a Bank_details
     * @example
     * // Get one Bank_details
     * const bank_details = await prisma.bank_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Bank_detailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Bank_detailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bank_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsFindFirstArgs} args - Arguments to find a Bank_details
     * @example
     * // Get one Bank_details
     * const bank_details = await prisma.bank_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Bank_detailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Bank_detailsFindFirstArgs<ExtArgs>>
    ): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bank_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsFindFirstOrThrowArgs} args - Arguments to find a Bank_details
     * @example
     * // Get one Bank_details
     * const bank_details = await prisma.bank_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Bank_detailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Bank_detailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bank_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bank_details
     * const bank_details = await prisma.bank_details.findMany()
     * 
     * // Get first 10 Bank_details
     * const bank_details = await prisma.bank_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bank_detailsWithIdOnly = await prisma.bank_details.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Bank_detailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Bank_detailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bank_details.
     * @param {Bank_detailsCreateArgs} args - Arguments to create a Bank_details.
     * @example
     * // Create one Bank_details
     * const Bank_details = await prisma.bank_details.create({
     *   data: {
     *     // ... data to create a Bank_details
     *   }
     * })
     * 
    **/
    create<T extends Bank_detailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Bank_detailsCreateArgs<ExtArgs>>
    ): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bank_details.
     *     @param {Bank_detailsCreateManyArgs} args - Arguments to create many Bank_details.
     *     @example
     *     // Create many Bank_details
     *     const bank_details = await prisma.bank_details.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Bank_detailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Bank_detailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bank_details.
     * @param {Bank_detailsDeleteArgs} args - Arguments to delete one Bank_details.
     * @example
     * // Delete one Bank_details
     * const Bank_details = await prisma.bank_details.delete({
     *   where: {
     *     // ... filter to delete one Bank_details
     *   }
     * })
     * 
    **/
    delete<T extends Bank_detailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Bank_detailsDeleteArgs<ExtArgs>>
    ): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bank_details.
     * @param {Bank_detailsUpdateArgs} args - Arguments to update one Bank_details.
     * @example
     * // Update one Bank_details
     * const bank_details = await prisma.bank_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Bank_detailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Bank_detailsUpdateArgs<ExtArgs>>
    ): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bank_details.
     * @param {Bank_detailsDeleteManyArgs} args - Arguments to filter Bank_details to delete.
     * @example
     * // Delete a few Bank_details
     * const { count } = await prisma.bank_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Bank_detailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Bank_detailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bank_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bank_details
     * const bank_details = await prisma.bank_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Bank_detailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Bank_detailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bank_details.
     * @param {Bank_detailsUpsertArgs} args - Arguments to update or create a Bank_details.
     * @example
     * // Update or create a Bank_details
     * const bank_details = await prisma.bank_details.upsert({
     *   create: {
     *     // ... data to create a Bank_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bank_details we want to update
     *   }
     * })
    **/
    upsert<T extends Bank_detailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Bank_detailsUpsertArgs<ExtArgs>>
    ): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bank_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsCountArgs} args - Arguments to filter Bank_details to count.
     * @example
     * // Count the number of Bank_details
     * const count = await prisma.bank_details.count({
     *   where: {
     *     // ... the filter for the Bank_details we want to count
     *   }
     * })
    **/
    count<T extends Bank_detailsCountArgs>(
      args?: Subset<T, Bank_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bank_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bank_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Bank_detailsAggregateArgs>(args: Subset<T, Bank_detailsAggregateArgs>): Prisma.PrismaPromise<GetBank_detailsAggregateType<T>>

    /**
     * Group by Bank_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Bank_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Bank_detailsGroupByArgs['orderBy'] }
        : { orderBy?: Bank_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Bank_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBank_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bank_details model
   */
  readonly fields: Bank_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bank_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Bank_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rider<T extends RiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiderDefaultArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bank_details model
   */ 
  interface Bank_detailsFieldRefs {
    readonly id: FieldRef<"Bank_details", 'Int'>
    readonly rider_id: FieldRef<"Bank_details", 'Int'>
    readonly bank_name: FieldRef<"Bank_details", 'String'>
    readonly account_name: FieldRef<"Bank_details", 'String'>
    readonly account_number: FieldRef<"Bank_details", 'String'>
    readonly createdAt: FieldRef<"Bank_details", 'DateTime'>
    readonly updatedAt: FieldRef<"Bank_details", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Bank_details findUnique
   */
  export type Bank_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Bank_details to fetch.
     */
    where: Bank_detailsWhereUniqueInput
  }


  /**
   * Bank_details findUniqueOrThrow
   */
  export type Bank_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Bank_details to fetch.
     */
    where: Bank_detailsWhereUniqueInput
  }


  /**
   * Bank_details findFirst
   */
  export type Bank_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Bank_details to fetch.
     */
    where?: Bank_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_details to fetch.
     */
    orderBy?: Bank_detailsOrderByWithRelationInput | Bank_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bank_details.
     */
    cursor?: Bank_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bank_details.
     */
    distinct?: Bank_detailsScalarFieldEnum | Bank_detailsScalarFieldEnum[]
  }


  /**
   * Bank_details findFirstOrThrow
   */
  export type Bank_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Bank_details to fetch.
     */
    where?: Bank_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_details to fetch.
     */
    orderBy?: Bank_detailsOrderByWithRelationInput | Bank_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bank_details.
     */
    cursor?: Bank_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bank_details.
     */
    distinct?: Bank_detailsScalarFieldEnum | Bank_detailsScalarFieldEnum[]
  }


  /**
   * Bank_details findMany
   */
  export type Bank_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Bank_details to fetch.
     */
    where?: Bank_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_details to fetch.
     */
    orderBy?: Bank_detailsOrderByWithRelationInput | Bank_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bank_details.
     */
    cursor?: Bank_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_details.
     */
    skip?: number
    distinct?: Bank_detailsScalarFieldEnum | Bank_detailsScalarFieldEnum[]
  }


  /**
   * Bank_details create
   */
  export type Bank_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bank_details.
     */
    data: XOR<Bank_detailsCreateInput, Bank_detailsUncheckedCreateInput>
  }


  /**
   * Bank_details createMany
   */
  export type Bank_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bank_details.
     */
    data: Bank_detailsCreateManyInput | Bank_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bank_details update
   */
  export type Bank_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bank_details.
     */
    data: XOR<Bank_detailsUpdateInput, Bank_detailsUncheckedUpdateInput>
    /**
     * Choose, which Bank_details to update.
     */
    where: Bank_detailsWhereUniqueInput
  }


  /**
   * Bank_details updateMany
   */
  export type Bank_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bank_details.
     */
    data: XOR<Bank_detailsUpdateManyMutationInput, Bank_detailsUncheckedUpdateManyInput>
    /**
     * Filter which Bank_details to update
     */
    where?: Bank_detailsWhereInput
  }


  /**
   * Bank_details upsert
   */
  export type Bank_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bank_details to update in case it exists.
     */
    where: Bank_detailsWhereUniqueInput
    /**
     * In case the Bank_details found by the `where` argument doesn't exist, create a new Bank_details with this data.
     */
    create: XOR<Bank_detailsCreateInput, Bank_detailsUncheckedCreateInput>
    /**
     * In case the Bank_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Bank_detailsUpdateInput, Bank_detailsUncheckedUpdateInput>
  }


  /**
   * Bank_details delete
   */
  export type Bank_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter which Bank_details to delete.
     */
    where: Bank_detailsWhereUniqueInput
  }


  /**
   * Bank_details deleteMany
   */
  export type Bank_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank_details to delete
     */
    where?: Bank_detailsWhereInput
  }


  /**
   * Bank_details without action
   */
  export type Bank_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Bank_detailsInclude<ExtArgs> | null
  }



  /**
   * Model Rider_rating
   */

  export type AggregateRider_rating = {
    _count: Rider_ratingCountAggregateOutputType | null
    _avg: Rider_ratingAvgAggregateOutputType | null
    _sum: Rider_ratingSumAggregateOutputType | null
    _min: Rider_ratingMinAggregateOutputType | null
    _max: Rider_ratingMaxAggregateOutputType | null
  }

  export type Rider_ratingAvgAggregateOutputType = {
    id: number | null
    rider_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type Rider_ratingSumAggregateOutputType = {
    id: number | null
    rider_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type Rider_ratingMinAggregateOutputType = {
    id: number | null
    rider_id: number | null
    user_id: number | null
    rating: number | null
    review: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rider_ratingMaxAggregateOutputType = {
    id: number | null
    rider_id: number | null
    user_id: number | null
    rating: number | null
    review: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rider_ratingCountAggregateOutputType = {
    id: number
    rider_id: number
    user_id: number
    rating: number
    review: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Rider_ratingAvgAggregateInputType = {
    id?: true
    rider_id?: true
    user_id?: true
    rating?: true
  }

  export type Rider_ratingSumAggregateInputType = {
    id?: true
    rider_id?: true
    user_id?: true
    rating?: true
  }

  export type Rider_ratingMinAggregateInputType = {
    id?: true
    rider_id?: true
    user_id?: true
    rating?: true
    review?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rider_ratingMaxAggregateInputType = {
    id?: true
    rider_id?: true
    user_id?: true
    rating?: true
    review?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rider_ratingCountAggregateInputType = {
    id?: true
    rider_id?: true
    user_id?: true
    rating?: true
    review?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Rider_ratingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider_rating to aggregate.
     */
    where?: Rider_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_ratings to fetch.
     */
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Rider_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rider_ratings
    **/
    _count?: true | Rider_ratingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rider_ratingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rider_ratingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rider_ratingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rider_ratingMaxAggregateInputType
  }

  export type GetRider_ratingAggregateType<T extends Rider_ratingAggregateArgs> = {
        [P in keyof T & keyof AggregateRider_rating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRider_rating[P]>
      : GetScalarType<T[P], AggregateRider_rating[P]>
  }




  export type Rider_ratingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rider_ratingWhereInput
    orderBy?: Rider_ratingOrderByWithAggregationInput | Rider_ratingOrderByWithAggregationInput[]
    by: Rider_ratingScalarFieldEnum[] | Rider_ratingScalarFieldEnum
    having?: Rider_ratingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rider_ratingCountAggregateInputType | true
    _avg?: Rider_ratingAvgAggregateInputType
    _sum?: Rider_ratingSumAggregateInputType
    _min?: Rider_ratingMinAggregateInputType
    _max?: Rider_ratingMaxAggregateInputType
  }

  export type Rider_ratingGroupByOutputType = {
    id: number
    rider_id: number
    user_id: number
    rating: number
    review: string
    createdAt: Date
    updatedAt: Date
    _count: Rider_ratingCountAggregateOutputType | null
    _avg: Rider_ratingAvgAggregateOutputType | null
    _sum: Rider_ratingSumAggregateOutputType | null
    _min: Rider_ratingMinAggregateOutputType | null
    _max: Rider_ratingMaxAggregateOutputType | null
  }

  type GetRider_ratingGroupByPayload<T extends Rider_ratingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rider_ratingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rider_ratingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rider_ratingGroupByOutputType[P]>
            : GetScalarType<T[P], Rider_ratingGroupByOutputType[P]>
        }
      >
    >


  export type Rider_ratingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rider_id?: boolean
    user_id?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rider_rating"]>

  export type Rider_ratingSelectScalar = {
    id?: boolean
    rider_id?: boolean
    user_id?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Rider_ratingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $Rider_ratingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rider_rating"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rider_id: number
      user_id: number
      rating: number
      review: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rider_rating"]>
    composites: {}
  }


  type Rider_ratingGetPayload<S extends boolean | null | undefined | Rider_ratingDefaultArgs> = $Result.GetResult<Prisma.$Rider_ratingPayload, S>

  type Rider_ratingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Rider_ratingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Rider_ratingCountAggregateInputType | true
    }

  export interface Rider_ratingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rider_rating'], meta: { name: 'Rider_rating' } }
    /**
     * Find zero or one Rider_rating that matches the filter.
     * @param {Rider_ratingFindUniqueArgs} args - Arguments to find a Rider_rating
     * @example
     * // Get one Rider_rating
     * const rider_rating = await prisma.rider_rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Rider_ratingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_ratingFindUniqueArgs<ExtArgs>>
    ): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rider_rating that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Rider_ratingFindUniqueOrThrowArgs} args - Arguments to find a Rider_rating
     * @example
     * // Get one Rider_rating
     * const rider_rating = await prisma.rider_rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Rider_ratingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_ratingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rider_rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingFindFirstArgs} args - Arguments to find a Rider_rating
     * @example
     * // Get one Rider_rating
     * const rider_rating = await prisma.rider_rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Rider_ratingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_ratingFindFirstArgs<ExtArgs>>
    ): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rider_rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingFindFirstOrThrowArgs} args - Arguments to find a Rider_rating
     * @example
     * // Get one Rider_rating
     * const rider_rating = await prisma.rider_rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Rider_ratingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_ratingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rider_ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rider_ratings
     * const rider_ratings = await prisma.rider_rating.findMany()
     * 
     * // Get first 10 Rider_ratings
     * const rider_ratings = await prisma.rider_rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rider_ratingWithIdOnly = await prisma.rider_rating.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Rider_ratingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_ratingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rider_rating.
     * @param {Rider_ratingCreateArgs} args - Arguments to create a Rider_rating.
     * @example
     * // Create one Rider_rating
     * const Rider_rating = await prisma.rider_rating.create({
     *   data: {
     *     // ... data to create a Rider_rating
     *   }
     * })
     * 
    **/
    create<T extends Rider_ratingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_ratingCreateArgs<ExtArgs>>
    ): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rider_ratings.
     *     @param {Rider_ratingCreateManyArgs} args - Arguments to create many Rider_ratings.
     *     @example
     *     // Create many Rider_ratings
     *     const rider_rating = await prisma.rider_rating.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Rider_ratingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_ratingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rider_rating.
     * @param {Rider_ratingDeleteArgs} args - Arguments to delete one Rider_rating.
     * @example
     * // Delete one Rider_rating
     * const Rider_rating = await prisma.rider_rating.delete({
     *   where: {
     *     // ... filter to delete one Rider_rating
     *   }
     * })
     * 
    **/
    delete<T extends Rider_ratingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_ratingDeleteArgs<ExtArgs>>
    ): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rider_rating.
     * @param {Rider_ratingUpdateArgs} args - Arguments to update one Rider_rating.
     * @example
     * // Update one Rider_rating
     * const rider_rating = await prisma.rider_rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Rider_ratingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_ratingUpdateArgs<ExtArgs>>
    ): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rider_ratings.
     * @param {Rider_ratingDeleteManyArgs} args - Arguments to filter Rider_ratings to delete.
     * @example
     * // Delete a few Rider_ratings
     * const { count } = await prisma.rider_rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Rider_ratingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_ratingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rider_ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rider_ratings
     * const rider_rating = await prisma.rider_rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Rider_ratingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_ratingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rider_rating.
     * @param {Rider_ratingUpsertArgs} args - Arguments to update or create a Rider_rating.
     * @example
     * // Update or create a Rider_rating
     * const rider_rating = await prisma.rider_rating.upsert({
     *   create: {
     *     // ... data to create a Rider_rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rider_rating we want to update
     *   }
     * })
    **/
    upsert<T extends Rider_ratingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_ratingUpsertArgs<ExtArgs>>
    ): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rider_ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingCountArgs} args - Arguments to filter Rider_ratings to count.
     * @example
     * // Count the number of Rider_ratings
     * const count = await prisma.rider_rating.count({
     *   where: {
     *     // ... the filter for the Rider_ratings we want to count
     *   }
     * })
    **/
    count<T extends Rider_ratingCountArgs>(
      args?: Subset<T, Rider_ratingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rider_ratingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rider_rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rider_ratingAggregateArgs>(args: Subset<T, Rider_ratingAggregateArgs>): Prisma.PrismaPromise<GetRider_ratingAggregateType<T>>

    /**
     * Group by Rider_rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Rider_ratingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Rider_ratingGroupByArgs['orderBy'] }
        : { orderBy?: Rider_ratingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Rider_ratingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRider_ratingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rider_rating model
   */
  readonly fields: Rider_ratingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rider_rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Rider_ratingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rider<T extends RiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiderDefaultArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Rider_rating model
   */ 
  interface Rider_ratingFieldRefs {
    readonly id: FieldRef<"Rider_rating", 'Int'>
    readonly rider_id: FieldRef<"Rider_rating", 'Int'>
    readonly user_id: FieldRef<"Rider_rating", 'Int'>
    readonly rating: FieldRef<"Rider_rating", 'Int'>
    readonly review: FieldRef<"Rider_rating", 'String'>
    readonly createdAt: FieldRef<"Rider_rating", 'DateTime'>
    readonly updatedAt: FieldRef<"Rider_rating", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Rider_rating findUnique
   */
  export type Rider_ratingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter, which Rider_rating to fetch.
     */
    where: Rider_ratingWhereUniqueInput
  }


  /**
   * Rider_rating findUniqueOrThrow
   */
  export type Rider_ratingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter, which Rider_rating to fetch.
     */
    where: Rider_ratingWhereUniqueInput
  }


  /**
   * Rider_rating findFirst
   */
  export type Rider_ratingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter, which Rider_rating to fetch.
     */
    where?: Rider_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_ratings to fetch.
     */
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rider_ratings.
     */
    cursor?: Rider_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rider_ratings.
     */
    distinct?: Rider_ratingScalarFieldEnum | Rider_ratingScalarFieldEnum[]
  }


  /**
   * Rider_rating findFirstOrThrow
   */
  export type Rider_ratingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter, which Rider_rating to fetch.
     */
    where?: Rider_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_ratings to fetch.
     */
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rider_ratings.
     */
    cursor?: Rider_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rider_ratings.
     */
    distinct?: Rider_ratingScalarFieldEnum | Rider_ratingScalarFieldEnum[]
  }


  /**
   * Rider_rating findMany
   */
  export type Rider_ratingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter, which Rider_ratings to fetch.
     */
    where?: Rider_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_ratings to fetch.
     */
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rider_ratings.
     */
    cursor?: Rider_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_ratings.
     */
    skip?: number
    distinct?: Rider_ratingScalarFieldEnum | Rider_ratingScalarFieldEnum[]
  }


  /**
   * Rider_rating create
   */
  export type Rider_ratingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rider_rating.
     */
    data: XOR<Rider_ratingCreateInput, Rider_ratingUncheckedCreateInput>
  }


  /**
   * Rider_rating createMany
   */
  export type Rider_ratingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rider_ratings.
     */
    data: Rider_ratingCreateManyInput | Rider_ratingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Rider_rating update
   */
  export type Rider_ratingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rider_rating.
     */
    data: XOR<Rider_ratingUpdateInput, Rider_ratingUncheckedUpdateInput>
    /**
     * Choose, which Rider_rating to update.
     */
    where: Rider_ratingWhereUniqueInput
  }


  /**
   * Rider_rating updateMany
   */
  export type Rider_ratingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rider_ratings.
     */
    data: XOR<Rider_ratingUpdateManyMutationInput, Rider_ratingUncheckedUpdateManyInput>
    /**
     * Filter which Rider_ratings to update
     */
    where?: Rider_ratingWhereInput
  }


  /**
   * Rider_rating upsert
   */
  export type Rider_ratingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rider_rating to update in case it exists.
     */
    where: Rider_ratingWhereUniqueInput
    /**
     * In case the Rider_rating found by the `where` argument doesn't exist, create a new Rider_rating with this data.
     */
    create: XOR<Rider_ratingCreateInput, Rider_ratingUncheckedCreateInput>
    /**
     * In case the Rider_rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Rider_ratingUpdateInput, Rider_ratingUncheckedUpdateInput>
  }


  /**
   * Rider_rating delete
   */
  export type Rider_ratingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter which Rider_rating to delete.
     */
    where: Rider_ratingWhereUniqueInput
  }


  /**
   * Rider_rating deleteMany
   */
  export type Rider_ratingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider_ratings to delete
     */
    where?: Rider_ratingWhereInput
  }


  /**
   * Rider_rating without action
   */
  export type Rider_ratingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_ratingInclude<ExtArgs> | null
  }



  /**
   * Model Rider_credentials
   */

  export type AggregateRider_credentials = {
    _count: Rider_credentialsCountAggregateOutputType | null
    _avg: Rider_credentialsAvgAggregateOutputType | null
    _sum: Rider_credentialsSumAggregateOutputType | null
    _min: Rider_credentialsMinAggregateOutputType | null
    _max: Rider_credentialsMaxAggregateOutputType | null
  }

  export type Rider_credentialsAvgAggregateOutputType = {
    id: number | null
    rider_id: number | null
  }

  export type Rider_credentialsSumAggregateOutputType = {
    id: number | null
    rider_id: number | null
  }

  export type Rider_credentialsMinAggregateOutputType = {
    id: number | null
    rider_id: number | null
    nin: string | null
    nin_image: string | null
    driver_license: string | null
    driver_license_image: string | null
    plate_number: string | null
    vehicle_image: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rider_credentialsMaxAggregateOutputType = {
    id: number | null
    rider_id: number | null
    nin: string | null
    nin_image: string | null
    driver_license: string | null
    driver_license_image: string | null
    plate_number: string | null
    vehicle_image: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rider_credentialsCountAggregateOutputType = {
    id: number
    rider_id: number
    nin: number
    nin_image: number
    driver_license: number
    driver_license_image: number
    plate_number: number
    vehicle_image: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Rider_credentialsAvgAggregateInputType = {
    id?: true
    rider_id?: true
  }

  export type Rider_credentialsSumAggregateInputType = {
    id?: true
    rider_id?: true
  }

  export type Rider_credentialsMinAggregateInputType = {
    id?: true
    rider_id?: true
    nin?: true
    nin_image?: true
    driver_license?: true
    driver_license_image?: true
    plate_number?: true
    vehicle_image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rider_credentialsMaxAggregateInputType = {
    id?: true
    rider_id?: true
    nin?: true
    nin_image?: true
    driver_license?: true
    driver_license_image?: true
    plate_number?: true
    vehicle_image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rider_credentialsCountAggregateInputType = {
    id?: true
    rider_id?: true
    nin?: true
    nin_image?: true
    driver_license?: true
    driver_license_image?: true
    plate_number?: true
    vehicle_image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Rider_credentialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider_credentials to aggregate.
     */
    where?: Rider_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_credentials to fetch.
     */
    orderBy?: Rider_credentialsOrderByWithRelationInput | Rider_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Rider_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rider_credentials
    **/
    _count?: true | Rider_credentialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rider_credentialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rider_credentialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rider_credentialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rider_credentialsMaxAggregateInputType
  }

  export type GetRider_credentialsAggregateType<T extends Rider_credentialsAggregateArgs> = {
        [P in keyof T & keyof AggregateRider_credentials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRider_credentials[P]>
      : GetScalarType<T[P], AggregateRider_credentials[P]>
  }




  export type Rider_credentialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rider_credentialsWhereInput
    orderBy?: Rider_credentialsOrderByWithAggregationInput | Rider_credentialsOrderByWithAggregationInput[]
    by: Rider_credentialsScalarFieldEnum[] | Rider_credentialsScalarFieldEnum
    having?: Rider_credentialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rider_credentialsCountAggregateInputType | true
    _avg?: Rider_credentialsAvgAggregateInputType
    _sum?: Rider_credentialsSumAggregateInputType
    _min?: Rider_credentialsMinAggregateInputType
    _max?: Rider_credentialsMaxAggregateInputType
  }

  export type Rider_credentialsGroupByOutputType = {
    id: number
    rider_id: number
    nin: string
    nin_image: string | null
    driver_license: string
    driver_license_image: string | null
    plate_number: string
    vehicle_image: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: Rider_credentialsCountAggregateOutputType | null
    _avg: Rider_credentialsAvgAggregateOutputType | null
    _sum: Rider_credentialsSumAggregateOutputType | null
    _min: Rider_credentialsMinAggregateOutputType | null
    _max: Rider_credentialsMaxAggregateOutputType | null
  }

  type GetRider_credentialsGroupByPayload<T extends Rider_credentialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rider_credentialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rider_credentialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rider_credentialsGroupByOutputType[P]>
            : GetScalarType<T[P], Rider_credentialsGroupByOutputType[P]>
        }
      >
    >


  export type Rider_credentialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rider_id?: boolean
    nin?: boolean
    nin_image?: boolean
    driver_license?: boolean
    driver_license_image?: boolean
    plate_number?: boolean
    vehicle_image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rider_credentials"]>

  export type Rider_credentialsSelectScalar = {
    id?: boolean
    rider_id?: boolean
    nin?: boolean
    nin_image?: boolean
    driver_license?: boolean
    driver_license_image?: boolean
    plate_number?: boolean
    vehicle_image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Rider_credentialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }


  export type $Rider_credentialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rider_credentials"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rider_id: number
      nin: string
      nin_image: string | null
      driver_license: string
      driver_license_image: string | null
      plate_number: string
      vehicle_image: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rider_credentials"]>
    composites: {}
  }


  type Rider_credentialsGetPayload<S extends boolean | null | undefined | Rider_credentialsDefaultArgs> = $Result.GetResult<Prisma.$Rider_credentialsPayload, S>

  type Rider_credentialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Rider_credentialsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Rider_credentialsCountAggregateInputType | true
    }

  export interface Rider_credentialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rider_credentials'], meta: { name: 'Rider_credentials' } }
    /**
     * Find zero or one Rider_credentials that matches the filter.
     * @param {Rider_credentialsFindUniqueArgs} args - Arguments to find a Rider_credentials
     * @example
     * // Get one Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Rider_credentialsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_credentialsFindUniqueArgs<ExtArgs>>
    ): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rider_credentials that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Rider_credentialsFindUniqueOrThrowArgs} args - Arguments to find a Rider_credentials
     * @example
     * // Get one Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Rider_credentialsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_credentialsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rider_credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsFindFirstArgs} args - Arguments to find a Rider_credentials
     * @example
     * // Get one Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Rider_credentialsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_credentialsFindFirstArgs<ExtArgs>>
    ): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rider_credentials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsFindFirstOrThrowArgs} args - Arguments to find a Rider_credentials
     * @example
     * // Get one Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Rider_credentialsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_credentialsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rider_credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findMany()
     * 
     * // Get first 10 Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rider_credentialsWithIdOnly = await prisma.rider_credentials.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Rider_credentialsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_credentialsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rider_credentials.
     * @param {Rider_credentialsCreateArgs} args - Arguments to create a Rider_credentials.
     * @example
     * // Create one Rider_credentials
     * const Rider_credentials = await prisma.rider_credentials.create({
     *   data: {
     *     // ... data to create a Rider_credentials
     *   }
     * })
     * 
    **/
    create<T extends Rider_credentialsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_credentialsCreateArgs<ExtArgs>>
    ): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rider_credentials.
     *     @param {Rider_credentialsCreateManyArgs} args - Arguments to create many Rider_credentials.
     *     @example
     *     // Create many Rider_credentials
     *     const rider_credentials = await prisma.rider_credentials.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Rider_credentialsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_credentialsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rider_credentials.
     * @param {Rider_credentialsDeleteArgs} args - Arguments to delete one Rider_credentials.
     * @example
     * // Delete one Rider_credentials
     * const Rider_credentials = await prisma.rider_credentials.delete({
     *   where: {
     *     // ... filter to delete one Rider_credentials
     *   }
     * })
     * 
    **/
    delete<T extends Rider_credentialsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_credentialsDeleteArgs<ExtArgs>>
    ): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rider_credentials.
     * @param {Rider_credentialsUpdateArgs} args - Arguments to update one Rider_credentials.
     * @example
     * // Update one Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Rider_credentialsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_credentialsUpdateArgs<ExtArgs>>
    ): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rider_credentials.
     * @param {Rider_credentialsDeleteManyArgs} args - Arguments to filter Rider_credentials to delete.
     * @example
     * // Delete a few Rider_credentials
     * const { count } = await prisma.rider_credentials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Rider_credentialsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Rider_credentialsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rider_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Rider_credentialsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_credentialsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rider_credentials.
     * @param {Rider_credentialsUpsertArgs} args - Arguments to update or create a Rider_credentials.
     * @example
     * // Update or create a Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.upsert({
     *   create: {
     *     // ... data to create a Rider_credentials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rider_credentials we want to update
     *   }
     * })
    **/
    upsert<T extends Rider_credentialsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Rider_credentialsUpsertArgs<ExtArgs>>
    ): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rider_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsCountArgs} args - Arguments to filter Rider_credentials to count.
     * @example
     * // Count the number of Rider_credentials
     * const count = await prisma.rider_credentials.count({
     *   where: {
     *     // ... the filter for the Rider_credentials we want to count
     *   }
     * })
    **/
    count<T extends Rider_credentialsCountArgs>(
      args?: Subset<T, Rider_credentialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rider_credentialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rider_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rider_credentialsAggregateArgs>(args: Subset<T, Rider_credentialsAggregateArgs>): Prisma.PrismaPromise<GetRider_credentialsAggregateType<T>>

    /**
     * Group by Rider_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Rider_credentialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Rider_credentialsGroupByArgs['orderBy'] }
        : { orderBy?: Rider_credentialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Rider_credentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRider_credentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rider_credentials model
   */
  readonly fields: Rider_credentialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rider_credentials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Rider_credentialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rider<T extends RiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiderDefaultArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Rider_credentials model
   */ 
  interface Rider_credentialsFieldRefs {
    readonly id: FieldRef<"Rider_credentials", 'Int'>
    readonly rider_id: FieldRef<"Rider_credentials", 'Int'>
    readonly nin: FieldRef<"Rider_credentials", 'String'>
    readonly nin_image: FieldRef<"Rider_credentials", 'String'>
    readonly driver_license: FieldRef<"Rider_credentials", 'String'>
    readonly driver_license_image: FieldRef<"Rider_credentials", 'String'>
    readonly plate_number: FieldRef<"Rider_credentials", 'String'>
    readonly vehicle_image: FieldRef<"Rider_credentials", 'String'>
    readonly status: FieldRef<"Rider_credentials", 'Status'>
    readonly createdAt: FieldRef<"Rider_credentials", 'DateTime'>
    readonly updatedAt: FieldRef<"Rider_credentials", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Rider_credentials findUnique
   */
  export type Rider_credentialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which Rider_credentials to fetch.
     */
    where: Rider_credentialsWhereUniqueInput
  }


  /**
   * Rider_credentials findUniqueOrThrow
   */
  export type Rider_credentialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which Rider_credentials to fetch.
     */
    where: Rider_credentialsWhereUniqueInput
  }


  /**
   * Rider_credentials findFirst
   */
  export type Rider_credentialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which Rider_credentials to fetch.
     */
    where?: Rider_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_credentials to fetch.
     */
    orderBy?: Rider_credentialsOrderByWithRelationInput | Rider_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rider_credentials.
     */
    cursor?: Rider_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rider_credentials.
     */
    distinct?: Rider_credentialsScalarFieldEnum | Rider_credentialsScalarFieldEnum[]
  }


  /**
   * Rider_credentials findFirstOrThrow
   */
  export type Rider_credentialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which Rider_credentials to fetch.
     */
    where?: Rider_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_credentials to fetch.
     */
    orderBy?: Rider_credentialsOrderByWithRelationInput | Rider_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rider_credentials.
     */
    cursor?: Rider_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rider_credentials.
     */
    distinct?: Rider_credentialsScalarFieldEnum | Rider_credentialsScalarFieldEnum[]
  }


  /**
   * Rider_credentials findMany
   */
  export type Rider_credentialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which Rider_credentials to fetch.
     */
    where?: Rider_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_credentials to fetch.
     */
    orderBy?: Rider_credentialsOrderByWithRelationInput | Rider_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rider_credentials.
     */
    cursor?: Rider_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_credentials.
     */
    skip?: number
    distinct?: Rider_credentialsScalarFieldEnum | Rider_credentialsScalarFieldEnum[]
  }


  /**
   * Rider_credentials create
   */
  export type Rider_credentialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * The data needed to create a Rider_credentials.
     */
    data: XOR<Rider_credentialsCreateInput, Rider_credentialsUncheckedCreateInput>
  }


  /**
   * Rider_credentials createMany
   */
  export type Rider_credentialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rider_credentials.
     */
    data: Rider_credentialsCreateManyInput | Rider_credentialsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Rider_credentials update
   */
  export type Rider_credentialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * The data needed to update a Rider_credentials.
     */
    data: XOR<Rider_credentialsUpdateInput, Rider_credentialsUncheckedUpdateInput>
    /**
     * Choose, which Rider_credentials to update.
     */
    where: Rider_credentialsWhereUniqueInput
  }


  /**
   * Rider_credentials updateMany
   */
  export type Rider_credentialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rider_credentials.
     */
    data: XOR<Rider_credentialsUpdateManyMutationInput, Rider_credentialsUncheckedUpdateManyInput>
    /**
     * Filter which Rider_credentials to update
     */
    where?: Rider_credentialsWhereInput
  }


  /**
   * Rider_credentials upsert
   */
  export type Rider_credentialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * The filter to search for the Rider_credentials to update in case it exists.
     */
    where: Rider_credentialsWhereUniqueInput
    /**
     * In case the Rider_credentials found by the `where` argument doesn't exist, create a new Rider_credentials with this data.
     */
    create: XOR<Rider_credentialsCreateInput, Rider_credentialsUncheckedCreateInput>
    /**
     * In case the Rider_credentials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Rider_credentialsUpdateInput, Rider_credentialsUncheckedUpdateInput>
  }


  /**
   * Rider_credentials delete
   */
  export type Rider_credentialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter which Rider_credentials to delete.
     */
    where: Rider_credentialsWhereUniqueInput
  }


  /**
   * Rider_credentials deleteMany
   */
  export type Rider_credentialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider_credentials to delete
     */
    where?: Rider_credentialsWhereInput
  }


  /**
   * Rider_credentials without action
   */
  export type Rider_credentialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    role: 'role',
    profile_image: 'profile_image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    ip_address: 'ip_address',
    device_token: 'device_token',
    current_position: 'current_position',
    role: 'role',
    profile_image: 'profile_image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RiderScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    ip_address: 'ip_address',
    device_token: 'device_token',
    current_position: 'current_position',
    role: 'role',
    profile_image: 'profile_image',
    avg_rating: 'avg_rating',
    password: 'password',
    status: 'status',
    is_verified: 'is_verified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RiderScalarFieldEnum = (typeof RiderScalarFieldEnum)[keyof typeof RiderScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    package_name: 'package_name',
    phone_number: 'phone_number',
    pickup_location: 'pickup_location',
    delivery_location: 'delivery_location',
    pickup_coordinate: 'pickup_coordinate',
    delivery_coordinate: 'delivery_coordinate',
    estimated_delivery_price: 'estimated_delivery_price',
    package_image: 'package_image',
    rider_id: 'rider_id',
    delivery_code: 'delivery_code',
    is_pickedup: 'is_pickedup',
    is_delivered: 'is_delivered',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const Operating_areasScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Operating_areasScalarFieldEnum = (typeof Operating_areasScalarFieldEnum)[keyof typeof Operating_areasScalarFieldEnum]


  export const Bank_detailsScalarFieldEnum: {
    id: 'id',
    rider_id: 'rider_id',
    bank_name: 'bank_name',
    account_name: 'account_name',
    account_number: 'account_number',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Bank_detailsScalarFieldEnum = (typeof Bank_detailsScalarFieldEnum)[keyof typeof Bank_detailsScalarFieldEnum]


  export const Rider_ratingScalarFieldEnum: {
    id: 'id',
    rider_id: 'rider_id',
    user_id: 'user_id',
    rating: 'rating',
    review: 'review',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Rider_ratingScalarFieldEnum = (typeof Rider_ratingScalarFieldEnum)[keyof typeof Rider_ratingScalarFieldEnum]


  export const Rider_credentialsScalarFieldEnum: {
    id: 'id',
    rider_id: 'rider_id',
    nin: 'nin',
    nin_image: 'nin_image',
    driver_license: 'driver_license',
    driver_license_image: 'driver_license_image',
    plate_number: 'plate_number',
    vehicle_image: 'vehicle_image',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Rider_credentialsScalarFieldEnum = (typeof Rider_credentialsScalarFieldEnum)[keyof typeof Rider_credentialsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    fullname?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    profile_image?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    fullname?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    profile_image?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "username" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    fullname?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    profile_image?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullname?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    ip_address?: StringNullableFilter<"User"> | string | null
    device_token?: StringNullableFilter<"User"> | string | null
    current_position?: JsonNullableFilter<"User">
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile_image?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    delivery?: DeliveryListRelationFilter
    rider_rating?: Rider_ratingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    device_token?: SortOrderInput | SortOrder
    current_position?: SortOrderInput | SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delivery?: DeliveryOrderByRelationAggregateInput
    rider_rating?: Rider_ratingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone_number?: string
    ip_address?: string
    device_token?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    current_position?: JsonNullableFilter<"User">
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile_image?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    delivery?: DeliveryListRelationFilter
    rider_rating?: Rider_ratingListRelationFilter
  }, "id" | "username" | "email" | "phone_number" | "ip_address" | "device_token">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    device_token?: SortOrderInput | SortOrder
    current_position?: SortOrderInput | SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullname?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringWithAggregatesFilter<"User"> | string
    ip_address?: StringNullableWithAggregatesFilter<"User"> | string | null
    device_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    current_position?: JsonNullableWithAggregatesFilter<"User">
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profile_image?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RiderWhereInput = {
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    id?: IntFilter<"Rider"> | number
    fullname?: StringFilter<"Rider"> | string
    username?: StringFilter<"Rider"> | string
    email?: StringFilter<"Rider"> | string
    phone_number?: StringFilter<"Rider"> | string
    ip_address?: StringNullableFilter<"Rider"> | string | null
    device_token?: StringNullableFilter<"Rider"> | string | null
    current_position?: JsonNullableFilter<"Rider">
    role?: EnumRoleFilter<"Rider"> | $Enums.Role
    profile_image?: StringFilter<"Rider"> | string
    avg_rating?: FloatFilter<"Rider"> | number
    password?: StringFilter<"Rider"> | string
    status?: EnumStatusFilter<"Rider"> | $Enums.Status
    is_verified?: BoolFilter<"Rider"> | boolean
    createdAt?: DateTimeFilter<"Rider"> | Date | string
    updatedAt?: DateTimeFilter<"Rider"> | Date | string
    delivery?: DeliveryListRelationFilter
    bank_details?: Bank_detailsListRelationFilter
    rider_rating?: Rider_ratingListRelationFilter
    rider_credentials?: Rider_credentialsListRelationFilter
  }

  export type RiderOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    device_token?: SortOrderInput | SortOrder
    current_position?: SortOrderInput | SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    avg_rating?: SortOrder
    password?: SortOrder
    status?: SortOrder
    is_verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delivery?: DeliveryOrderByRelationAggregateInput
    bank_details?: Bank_detailsOrderByRelationAggregateInput
    rider_rating?: Rider_ratingOrderByRelationAggregateInput
    rider_credentials?: Rider_credentialsOrderByRelationAggregateInput
  }

  export type RiderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone_number?: string
    ip_address?: string
    device_token?: string
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    fullname?: StringFilter<"Rider"> | string
    current_position?: JsonNullableFilter<"Rider">
    role?: EnumRoleFilter<"Rider"> | $Enums.Role
    profile_image?: StringFilter<"Rider"> | string
    avg_rating?: FloatFilter<"Rider"> | number
    password?: StringFilter<"Rider"> | string
    status?: EnumStatusFilter<"Rider"> | $Enums.Status
    is_verified?: BoolFilter<"Rider"> | boolean
    createdAt?: DateTimeFilter<"Rider"> | Date | string
    updatedAt?: DateTimeFilter<"Rider"> | Date | string
    delivery?: DeliveryListRelationFilter
    bank_details?: Bank_detailsListRelationFilter
    rider_rating?: Rider_ratingListRelationFilter
    rider_credentials?: Rider_credentialsListRelationFilter
  }, "id" | "username" | "email" | "phone_number" | "ip_address" | "device_token">

  export type RiderOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    device_token?: SortOrderInput | SortOrder
    current_position?: SortOrderInput | SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    avg_rating?: SortOrder
    password?: SortOrder
    status?: SortOrder
    is_verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RiderCountOrderByAggregateInput
    _avg?: RiderAvgOrderByAggregateInput
    _max?: RiderMaxOrderByAggregateInput
    _min?: RiderMinOrderByAggregateInput
    _sum?: RiderSumOrderByAggregateInput
  }

  export type RiderScalarWhereWithAggregatesInput = {
    AND?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    OR?: RiderScalarWhereWithAggregatesInput[]
    NOT?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rider"> | number
    fullname?: StringWithAggregatesFilter<"Rider"> | string
    username?: StringWithAggregatesFilter<"Rider"> | string
    email?: StringWithAggregatesFilter<"Rider"> | string
    phone_number?: StringWithAggregatesFilter<"Rider"> | string
    ip_address?: StringNullableWithAggregatesFilter<"Rider"> | string | null
    device_token?: StringNullableWithAggregatesFilter<"Rider"> | string | null
    current_position?: JsonNullableWithAggregatesFilter<"Rider">
    role?: EnumRoleWithAggregatesFilter<"Rider"> | $Enums.Role
    profile_image?: StringWithAggregatesFilter<"Rider"> | string
    avg_rating?: FloatWithAggregatesFilter<"Rider"> | number
    password?: StringWithAggregatesFilter<"Rider"> | string
    status?: EnumStatusWithAggregatesFilter<"Rider"> | $Enums.Status
    is_verified?: BoolWithAggregatesFilter<"Rider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Rider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rider"> | Date | string
  }

  export type DeliveryWhereInput = {
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    id?: IntFilter<"Delivery"> | number
    user_id?: IntFilter<"Delivery"> | number
    package_name?: StringFilter<"Delivery"> | string
    phone_number?: StringFilter<"Delivery"> | string
    pickup_location?: StringFilter<"Delivery"> | string
    delivery_location?: StringFilter<"Delivery"> | string
    pickup_coordinate?: JsonFilter<"Delivery">
    delivery_coordinate?: JsonFilter<"Delivery">
    estimated_delivery_price?: StringFilter<"Delivery"> | string
    package_image?: StringFilter<"Delivery"> | string
    rider_id?: IntNullableFilter<"Delivery"> | number | null
    delivery_code?: IntNullableFilter<"Delivery"> | number | null
    is_pickedup?: BoolFilter<"Delivery"> | boolean
    is_delivered?: BoolFilter<"Delivery"> | boolean
    status?: EnumStatusFilter<"Delivery"> | $Enums.Status
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    rider?: XOR<RiderNullableRelationFilter, RiderWhereInput> | null
  }

  export type DeliveryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    package_name?: SortOrder
    phone_number?: SortOrder
    pickup_location?: SortOrder
    delivery_location?: SortOrder
    pickup_coordinate?: SortOrder
    delivery_coordinate?: SortOrder
    estimated_delivery_price?: SortOrder
    package_image?: SortOrder
    rider_id?: SortOrderInput | SortOrder
    delivery_code?: SortOrderInput | SortOrder
    is_pickedup?: SortOrder
    is_delivered?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    rider?: RiderOrderByWithRelationInput
  }

  export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    delivery_code?: number
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    user_id?: IntFilter<"Delivery"> | number
    package_name?: StringFilter<"Delivery"> | string
    phone_number?: StringFilter<"Delivery"> | string
    pickup_location?: StringFilter<"Delivery"> | string
    delivery_location?: StringFilter<"Delivery"> | string
    pickup_coordinate?: JsonFilter<"Delivery">
    delivery_coordinate?: JsonFilter<"Delivery">
    estimated_delivery_price?: StringFilter<"Delivery"> | string
    package_image?: StringFilter<"Delivery"> | string
    rider_id?: IntNullableFilter<"Delivery"> | number | null
    is_pickedup?: BoolFilter<"Delivery"> | boolean
    is_delivered?: BoolFilter<"Delivery"> | boolean
    status?: EnumStatusFilter<"Delivery"> | $Enums.Status
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    rider?: XOR<RiderNullableRelationFilter, RiderWhereInput> | null
  }, "id" | "delivery_code">

  export type DeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    package_name?: SortOrder
    phone_number?: SortOrder
    pickup_location?: SortOrder
    delivery_location?: SortOrder
    pickup_coordinate?: SortOrder
    delivery_coordinate?: SortOrder
    estimated_delivery_price?: SortOrder
    package_image?: SortOrder
    rider_id?: SortOrderInput | SortOrder
    delivery_code?: SortOrderInput | SortOrder
    is_pickedup?: SortOrder
    is_delivered?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeliveryCountOrderByAggregateInput
    _avg?: DeliveryAvgOrderByAggregateInput
    _max?: DeliveryMaxOrderByAggregateInput
    _min?: DeliveryMinOrderByAggregateInput
    _sum?: DeliverySumOrderByAggregateInput
  }

  export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    OR?: DeliveryScalarWhereWithAggregatesInput[]
    NOT?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Delivery"> | number
    user_id?: IntWithAggregatesFilter<"Delivery"> | number
    package_name?: StringWithAggregatesFilter<"Delivery"> | string
    phone_number?: StringWithAggregatesFilter<"Delivery"> | string
    pickup_location?: StringWithAggregatesFilter<"Delivery"> | string
    delivery_location?: StringWithAggregatesFilter<"Delivery"> | string
    pickup_coordinate?: JsonWithAggregatesFilter<"Delivery">
    delivery_coordinate?: JsonWithAggregatesFilter<"Delivery">
    estimated_delivery_price?: StringWithAggregatesFilter<"Delivery"> | string
    package_image?: StringWithAggregatesFilter<"Delivery"> | string
    rider_id?: IntNullableWithAggregatesFilter<"Delivery"> | number | null
    delivery_code?: IntNullableWithAggregatesFilter<"Delivery"> | number | null
    is_pickedup?: BoolWithAggregatesFilter<"Delivery"> | boolean
    is_delivered?: BoolWithAggregatesFilter<"Delivery"> | boolean
    status?: EnumStatusWithAggregatesFilter<"Delivery"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
  }

  export type Operating_areasWhereInput = {
    AND?: Operating_areasWhereInput | Operating_areasWhereInput[]
    OR?: Operating_areasWhereInput[]
    NOT?: Operating_areasWhereInput | Operating_areasWhereInput[]
    id?: IntFilter<"Operating_areas"> | number
    name?: StringFilter<"Operating_areas"> | string
    status?: EnumStatusFilter<"Operating_areas"> | $Enums.Status
    createdAt?: DateTimeFilter<"Operating_areas"> | Date | string
    updatedAt?: DateTimeFilter<"Operating_areas"> | Date | string
  }

  export type Operating_areasOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Operating_areasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Operating_areasWhereInput | Operating_areasWhereInput[]
    OR?: Operating_areasWhereInput[]
    NOT?: Operating_areasWhereInput | Operating_areasWhereInput[]
    name?: StringFilter<"Operating_areas"> | string
    status?: EnumStatusFilter<"Operating_areas"> | $Enums.Status
    createdAt?: DateTimeFilter<"Operating_areas"> | Date | string
    updatedAt?: DateTimeFilter<"Operating_areas"> | Date | string
  }, "id">

  export type Operating_areasOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Operating_areasCountOrderByAggregateInput
    _avg?: Operating_areasAvgOrderByAggregateInput
    _max?: Operating_areasMaxOrderByAggregateInput
    _min?: Operating_areasMinOrderByAggregateInput
    _sum?: Operating_areasSumOrderByAggregateInput
  }

  export type Operating_areasScalarWhereWithAggregatesInput = {
    AND?: Operating_areasScalarWhereWithAggregatesInput | Operating_areasScalarWhereWithAggregatesInput[]
    OR?: Operating_areasScalarWhereWithAggregatesInput[]
    NOT?: Operating_areasScalarWhereWithAggregatesInput | Operating_areasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Operating_areas"> | number
    name?: StringWithAggregatesFilter<"Operating_areas"> | string
    status?: EnumStatusWithAggregatesFilter<"Operating_areas"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Operating_areas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Operating_areas"> | Date | string
  }

  export type Bank_detailsWhereInput = {
    AND?: Bank_detailsWhereInput | Bank_detailsWhereInput[]
    OR?: Bank_detailsWhereInput[]
    NOT?: Bank_detailsWhereInput | Bank_detailsWhereInput[]
    id?: IntFilter<"Bank_details"> | number
    rider_id?: IntFilter<"Bank_details"> | number
    bank_name?: StringFilter<"Bank_details"> | string
    account_name?: StringFilter<"Bank_details"> | string
    account_number?: StringFilter<"Bank_details"> | string
    createdAt?: DateTimeFilter<"Bank_details"> | Date | string
    updatedAt?: DateTimeFilter<"Bank_details"> | Date | string
    rider?: XOR<RiderRelationFilter, RiderWhereInput>
  }

  export type Bank_detailsOrderByWithRelationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    bank_name?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByWithRelationInput
  }

  export type Bank_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rider_id?: number
    AND?: Bank_detailsWhereInput | Bank_detailsWhereInput[]
    OR?: Bank_detailsWhereInput[]
    NOT?: Bank_detailsWhereInput | Bank_detailsWhereInput[]
    bank_name?: StringFilter<"Bank_details"> | string
    account_name?: StringFilter<"Bank_details"> | string
    account_number?: StringFilter<"Bank_details"> | string
    createdAt?: DateTimeFilter<"Bank_details"> | Date | string
    updatedAt?: DateTimeFilter<"Bank_details"> | Date | string
    rider?: XOR<RiderRelationFilter, RiderWhereInput>
  }, "id" | "rider_id">

  export type Bank_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    bank_name?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Bank_detailsCountOrderByAggregateInput
    _avg?: Bank_detailsAvgOrderByAggregateInput
    _max?: Bank_detailsMaxOrderByAggregateInput
    _min?: Bank_detailsMinOrderByAggregateInput
    _sum?: Bank_detailsSumOrderByAggregateInput
  }

  export type Bank_detailsScalarWhereWithAggregatesInput = {
    AND?: Bank_detailsScalarWhereWithAggregatesInput | Bank_detailsScalarWhereWithAggregatesInput[]
    OR?: Bank_detailsScalarWhereWithAggregatesInput[]
    NOT?: Bank_detailsScalarWhereWithAggregatesInput | Bank_detailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bank_details"> | number
    rider_id?: IntWithAggregatesFilter<"Bank_details"> | number
    bank_name?: StringWithAggregatesFilter<"Bank_details"> | string
    account_name?: StringWithAggregatesFilter<"Bank_details"> | string
    account_number?: StringWithAggregatesFilter<"Bank_details"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bank_details"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bank_details"> | Date | string
  }

  export type Rider_ratingWhereInput = {
    AND?: Rider_ratingWhereInput | Rider_ratingWhereInput[]
    OR?: Rider_ratingWhereInput[]
    NOT?: Rider_ratingWhereInput | Rider_ratingWhereInput[]
    id?: IntFilter<"Rider_rating"> | number
    rider_id?: IntFilter<"Rider_rating"> | number
    user_id?: IntFilter<"Rider_rating"> | number
    rating?: IntFilter<"Rider_rating"> | number
    review?: StringFilter<"Rider_rating"> | string
    createdAt?: DateTimeFilter<"Rider_rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_rating"> | Date | string
    rider?: XOR<RiderRelationFilter, RiderWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type Rider_ratingOrderByWithRelationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type Rider_ratingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Rider_ratingWhereInput | Rider_ratingWhereInput[]
    OR?: Rider_ratingWhereInput[]
    NOT?: Rider_ratingWhereInput | Rider_ratingWhereInput[]
    rider_id?: IntFilter<"Rider_rating"> | number
    user_id?: IntFilter<"Rider_rating"> | number
    rating?: IntFilter<"Rider_rating"> | number
    review?: StringFilter<"Rider_rating"> | string
    createdAt?: DateTimeFilter<"Rider_rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_rating"> | Date | string
    rider?: XOR<RiderRelationFilter, RiderWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type Rider_ratingOrderByWithAggregationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Rider_ratingCountOrderByAggregateInput
    _avg?: Rider_ratingAvgOrderByAggregateInput
    _max?: Rider_ratingMaxOrderByAggregateInput
    _min?: Rider_ratingMinOrderByAggregateInput
    _sum?: Rider_ratingSumOrderByAggregateInput
  }

  export type Rider_ratingScalarWhereWithAggregatesInput = {
    AND?: Rider_ratingScalarWhereWithAggregatesInput | Rider_ratingScalarWhereWithAggregatesInput[]
    OR?: Rider_ratingScalarWhereWithAggregatesInput[]
    NOT?: Rider_ratingScalarWhereWithAggregatesInput | Rider_ratingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rider_rating"> | number
    rider_id?: IntWithAggregatesFilter<"Rider_rating"> | number
    user_id?: IntWithAggregatesFilter<"Rider_rating"> | number
    rating?: IntWithAggregatesFilter<"Rider_rating"> | number
    review?: StringWithAggregatesFilter<"Rider_rating"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rider_rating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rider_rating"> | Date | string
  }

  export type Rider_credentialsWhereInput = {
    AND?: Rider_credentialsWhereInput | Rider_credentialsWhereInput[]
    OR?: Rider_credentialsWhereInput[]
    NOT?: Rider_credentialsWhereInput | Rider_credentialsWhereInput[]
    id?: IntFilter<"Rider_credentials"> | number
    rider_id?: IntFilter<"Rider_credentials"> | number
    nin?: StringFilter<"Rider_credentials"> | string
    nin_image?: StringNullableFilter<"Rider_credentials"> | string | null
    driver_license?: StringFilter<"Rider_credentials"> | string
    driver_license_image?: StringNullableFilter<"Rider_credentials"> | string | null
    plate_number?: StringFilter<"Rider_credentials"> | string
    vehicle_image?: StringNullableFilter<"Rider_credentials"> | string | null
    status?: EnumStatusFilter<"Rider_credentials"> | $Enums.Status
    createdAt?: DateTimeFilter<"Rider_credentials"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_credentials"> | Date | string
    rider?: XOR<RiderRelationFilter, RiderWhereInput>
  }

  export type Rider_credentialsOrderByWithRelationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrderInput | SortOrder
    driver_license?: SortOrder
    driver_license_image?: SortOrderInput | SortOrder
    plate_number?: SortOrder
    vehicle_image?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByWithRelationInput
  }

  export type Rider_credentialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nin?: string
    driver_license?: string
    plate_number?: string
    AND?: Rider_credentialsWhereInput | Rider_credentialsWhereInput[]
    OR?: Rider_credentialsWhereInput[]
    NOT?: Rider_credentialsWhereInput | Rider_credentialsWhereInput[]
    rider_id?: IntFilter<"Rider_credentials"> | number
    nin_image?: StringNullableFilter<"Rider_credentials"> | string | null
    driver_license_image?: StringNullableFilter<"Rider_credentials"> | string | null
    vehicle_image?: StringNullableFilter<"Rider_credentials"> | string | null
    status?: EnumStatusFilter<"Rider_credentials"> | $Enums.Status
    createdAt?: DateTimeFilter<"Rider_credentials"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_credentials"> | Date | string
    rider?: XOR<RiderRelationFilter, RiderWhereInput>
  }, "id" | "nin" | "driver_license" | "plate_number">

  export type Rider_credentialsOrderByWithAggregationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrderInput | SortOrder
    driver_license?: SortOrder
    driver_license_image?: SortOrderInput | SortOrder
    plate_number?: SortOrder
    vehicle_image?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Rider_credentialsCountOrderByAggregateInput
    _avg?: Rider_credentialsAvgOrderByAggregateInput
    _max?: Rider_credentialsMaxOrderByAggregateInput
    _min?: Rider_credentialsMinOrderByAggregateInput
    _sum?: Rider_credentialsSumOrderByAggregateInput
  }

  export type Rider_credentialsScalarWhereWithAggregatesInput = {
    AND?: Rider_credentialsScalarWhereWithAggregatesInput | Rider_credentialsScalarWhereWithAggregatesInput[]
    OR?: Rider_credentialsScalarWhereWithAggregatesInput[]
    NOT?: Rider_credentialsScalarWhereWithAggregatesInput | Rider_credentialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rider_credentials"> | number
    rider_id?: IntWithAggregatesFilter<"Rider_credentials"> | number
    nin?: StringWithAggregatesFilter<"Rider_credentials"> | string
    nin_image?: StringNullableWithAggregatesFilter<"Rider_credentials"> | string | null
    driver_license?: StringWithAggregatesFilter<"Rider_credentials"> | string
    driver_license_image?: StringNullableWithAggregatesFilter<"Rider_credentials"> | string | null
    plate_number?: StringWithAggregatesFilter<"Rider_credentials"> | string
    vehicle_image?: StringNullableWithAggregatesFilter<"Rider_credentials"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Rider_credentials"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Rider_credentials"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rider_credentials"> | Date | string
  }

  export type AdminCreateInput = {
    fullname: string
    username: string
    email: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryCreateNestedManyWithoutUserInput
    rider_rating?: Rider_ratingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryUncheckedCreateNestedManyWithoutUserInput
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUpdateManyWithoutUserNestedInput
    rider_rating?: Rider_ratingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUncheckedUpdateManyWithoutUserNestedInput
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderCreateInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryCreateNestedManyWithoutRiderInput
    bank_details?: Bank_detailsCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryUncheckedCreateNestedManyWithoutRiderInput
    bank_details?: Bank_detailsUncheckedCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUpdateManyWithoutRiderNestedInput
    bank_details?: Bank_detailsUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUncheckedUpdateManyWithoutRiderNestedInput
    bank_details?: Bank_detailsUncheckedUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type RiderCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiderUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateInput = {
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    pickup_coordinate: JsonNullValueInput | InputJsonValue
    delivery_coordinate: JsonNullValueInput | InputJsonValue
    estimated_delivery_price: string
    package_image: string
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDeliveryInput
    rider?: RiderCreateNestedOneWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateInput = {
    id?: number
    user_id: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    pickup_coordinate: JsonNullValueInput | InputJsonValue
    delivery_coordinate: JsonNullValueInput | InputJsonValue
    estimated_delivery_price: string
    package_image: string
    rider_id?: number | null
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryUpdateInput = {
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    pickup_coordinate?: JsonNullValueInput | InputJsonValue
    delivery_coordinate?: JsonNullValueInput | InputJsonValue
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDeliveryNestedInput
    rider?: RiderUpdateOneWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    pickup_coordinate?: JsonNullValueInput | InputJsonValue
    delivery_coordinate?: JsonNullValueInput | InputJsonValue
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    rider_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateManyInput = {
    id?: number
    user_id: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    pickup_coordinate: JsonNullValueInput | InputJsonValue
    delivery_coordinate: JsonNullValueInput | InputJsonValue
    estimated_delivery_price: string
    package_image: string
    rider_id?: number | null
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryUpdateManyMutationInput = {
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    pickup_coordinate?: JsonNullValueInput | InputJsonValue
    delivery_coordinate?: JsonNullValueInput | InputJsonValue
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    pickup_coordinate?: JsonNullValueInput | InputJsonValue
    delivery_coordinate?: JsonNullValueInput | InputJsonValue
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    rider_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Operating_areasCreateInput = {
    name: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Operating_areasUncheckedCreateInput = {
    id?: number
    name: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Operating_areasUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Operating_areasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Operating_areasCreateManyInput = {
    id?: number
    name: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Operating_areasUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Operating_areasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bank_detailsCreateInput = {
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutBank_detailsInput
  }

  export type Bank_detailsUncheckedCreateInput = {
    id?: number
    rider_id: number
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Bank_detailsUpdateInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutBank_detailsNestedInput
  }

  export type Bank_detailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bank_detailsCreateManyInput = {
    id?: number
    rider_id: number
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Bank_detailsUpdateManyMutationInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bank_detailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingCreateInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutRider_ratingInput
    user: UserCreateNestedOneWithoutRider_ratingInput
  }

  export type Rider_ratingUncheckedCreateInput = {
    id?: number
    rider_id: number
    user_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_ratingUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutRider_ratingNestedInput
    user?: UserUpdateOneRequiredWithoutRider_ratingNestedInput
  }

  export type Rider_ratingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingCreateManyInput = {
    id?: number
    rider_id: number
    user_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_ratingUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsCreateInput = {
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutRider_credentialsInput
  }

  export type Rider_credentialsUncheckedCreateInput = {
    id?: number
    rider_id: number
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_credentialsUpdateInput = {
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutRider_credentialsNestedInput
  }

  export type Rider_credentialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsCreateManyInput = {
    id?: number
    rider_id: number
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_credentialsUpdateManyMutationInput = {
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DeliveryListRelationFilter = {
    every?: DeliveryWhereInput
    some?: DeliveryWhereInput
    none?: DeliveryWhereInput
  }

  export type Rider_ratingListRelationFilter = {
    every?: Rider_ratingWhereInput
    some?: Rider_ratingWhereInput
    none?: Rider_ratingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Rider_ratingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    ip_address?: SortOrder
    device_token?: SortOrder
    current_position?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    ip_address?: SortOrder
    device_token?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    ip_address?: SortOrder
    device_token?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Bank_detailsListRelationFilter = {
    every?: Bank_detailsWhereInput
    some?: Bank_detailsWhereInput
    none?: Bank_detailsWhereInput
  }

  export type Rider_credentialsListRelationFilter = {
    every?: Rider_credentialsWhereInput
    some?: Rider_credentialsWhereInput
    none?: Rider_credentialsWhereInput
  }

  export type Bank_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Rider_credentialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RiderCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    ip_address?: SortOrder
    device_token?: SortOrder
    current_position?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    avg_rating?: SortOrder
    password?: SortOrder
    status?: SortOrder
    is_verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderAvgOrderByAggregateInput = {
    id?: SortOrder
    avg_rating?: SortOrder
  }

  export type RiderMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    ip_address?: SortOrder
    device_token?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    avg_rating?: SortOrder
    password?: SortOrder
    status?: SortOrder
    is_verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    ip_address?: SortOrder
    device_token?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    avg_rating?: SortOrder
    password?: SortOrder
    status?: SortOrder
    is_verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderSumOrderByAggregateInput = {
    id?: SortOrder
    avg_rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RiderNullableRelationFilter = {
    is?: RiderWhereInput | null
    isNot?: RiderWhereInput | null
  }

  export type DeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    package_name?: SortOrder
    phone_number?: SortOrder
    pickup_location?: SortOrder
    delivery_location?: SortOrder
    pickup_coordinate?: SortOrder
    delivery_coordinate?: SortOrder
    estimated_delivery_price?: SortOrder
    package_image?: SortOrder
    rider_id?: SortOrder
    delivery_code?: SortOrder
    is_pickedup?: SortOrder
    is_delivered?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rider_id?: SortOrder
    delivery_code?: SortOrder
  }

  export type DeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    package_name?: SortOrder
    phone_number?: SortOrder
    pickup_location?: SortOrder
    delivery_location?: SortOrder
    estimated_delivery_price?: SortOrder
    package_image?: SortOrder
    rider_id?: SortOrder
    delivery_code?: SortOrder
    is_pickedup?: SortOrder
    is_delivered?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    package_name?: SortOrder
    phone_number?: SortOrder
    pickup_location?: SortOrder
    delivery_location?: SortOrder
    estimated_delivery_price?: SortOrder
    package_image?: SortOrder
    rider_id?: SortOrder
    delivery_code?: SortOrder
    is_pickedup?: SortOrder
    is_delivered?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliverySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rider_id?: SortOrder
    delivery_code?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Operating_areasCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Operating_areasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Operating_areasMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Operating_areasMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Operating_areasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RiderRelationFilter = {
    is?: RiderWhereInput
    isNot?: RiderWhereInput
  }

  export type Bank_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    bank_name?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Bank_detailsAvgOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
  }

  export type Bank_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    bank_name?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Bank_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    bank_name?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Bank_detailsSumOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
  }

  export type Rider_ratingCountOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_ratingAvgOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type Rider_ratingMaxOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_ratingMinOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_ratingSumOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type Rider_credentialsCountOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    driver_license?: SortOrder
    driver_license_image?: SortOrder
    plate_number?: SortOrder
    vehicle_image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_credentialsAvgOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
  }

  export type Rider_credentialsMaxOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    driver_license?: SortOrder
    driver_license_image?: SortOrder
    plate_number?: SortOrder
    vehicle_image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_credentialsMinOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    driver_license?: SortOrder
    driver_license_image?: SortOrder
    plate_number?: SortOrder
    vehicle_image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_credentialsSumOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeliveryCreateNestedManyWithoutUserInput = {
    create?: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput> | DeliveryCreateWithoutUserInput[] | DeliveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutUserInput | DeliveryCreateOrConnectWithoutUserInput[]
    createMany?: DeliveryCreateManyUserInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type Rider_ratingCreateNestedManyWithoutUserInput = {
    create?: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput> | Rider_ratingCreateWithoutUserInput[] | Rider_ratingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutUserInput | Rider_ratingCreateOrConnectWithoutUserInput[]
    createMany?: Rider_ratingCreateManyUserInputEnvelope
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput> | DeliveryCreateWithoutUserInput[] | DeliveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutUserInput | DeliveryCreateOrConnectWithoutUserInput[]
    createMany?: DeliveryCreateManyUserInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type Rider_ratingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput> | Rider_ratingCreateWithoutUserInput[] | Rider_ratingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutUserInput | Rider_ratingCreateOrConnectWithoutUserInput[]
    createMany?: Rider_ratingCreateManyUserInputEnvelope
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DeliveryUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput> | DeliveryCreateWithoutUserInput[] | DeliveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutUserInput | DeliveryCreateOrConnectWithoutUserInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutUserInput | DeliveryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeliveryCreateManyUserInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutUserInput | DeliveryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutUserInput | DeliveryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type Rider_ratingUpdateManyWithoutUserNestedInput = {
    create?: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput> | Rider_ratingCreateWithoutUserInput[] | Rider_ratingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutUserInput | Rider_ratingCreateOrConnectWithoutUserInput[]
    upsert?: Rider_ratingUpsertWithWhereUniqueWithoutUserInput | Rider_ratingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Rider_ratingCreateManyUserInputEnvelope
    set?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    disconnect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    delete?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    update?: Rider_ratingUpdateWithWhereUniqueWithoutUserInput | Rider_ratingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Rider_ratingUpdateManyWithWhereWithoutUserInput | Rider_ratingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput> | DeliveryCreateWithoutUserInput[] | DeliveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutUserInput | DeliveryCreateOrConnectWithoutUserInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutUserInput | DeliveryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeliveryCreateManyUserInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutUserInput | DeliveryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutUserInput | DeliveryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type Rider_ratingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput> | Rider_ratingCreateWithoutUserInput[] | Rider_ratingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutUserInput | Rider_ratingCreateOrConnectWithoutUserInput[]
    upsert?: Rider_ratingUpsertWithWhereUniqueWithoutUserInput | Rider_ratingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Rider_ratingCreateManyUserInputEnvelope
    set?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    disconnect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    delete?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    update?: Rider_ratingUpdateWithWhereUniqueWithoutUserInput | Rider_ratingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Rider_ratingUpdateManyWithWhereWithoutUserInput | Rider_ratingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
  }

  export type DeliveryCreateNestedManyWithoutRiderInput = {
    create?: XOR<DeliveryCreateWithoutRiderInput, DeliveryUncheckedCreateWithoutRiderInput> | DeliveryCreateWithoutRiderInput[] | DeliveryUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutRiderInput | DeliveryCreateOrConnectWithoutRiderInput[]
    createMany?: DeliveryCreateManyRiderInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type Bank_detailsCreateNestedManyWithoutRiderInput = {
    create?: XOR<Bank_detailsCreateWithoutRiderInput, Bank_detailsUncheckedCreateWithoutRiderInput> | Bank_detailsCreateWithoutRiderInput[] | Bank_detailsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutRiderInput | Bank_detailsCreateOrConnectWithoutRiderInput[]
    createMany?: Bank_detailsCreateManyRiderInputEnvelope
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
  }

  export type Rider_ratingCreateNestedManyWithoutRiderInput = {
    create?: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput> | Rider_ratingCreateWithoutRiderInput[] | Rider_ratingUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutRiderInput | Rider_ratingCreateOrConnectWithoutRiderInput[]
    createMany?: Rider_ratingCreateManyRiderInputEnvelope
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
  }

  export type Rider_credentialsCreateNestedManyWithoutRiderInput = {
    create?: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput> | Rider_credentialsCreateWithoutRiderInput[] | Rider_credentialsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_credentialsCreateOrConnectWithoutRiderInput | Rider_credentialsCreateOrConnectWithoutRiderInput[]
    createMany?: Rider_credentialsCreateManyRiderInputEnvelope
    connect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutRiderInput = {
    create?: XOR<DeliveryCreateWithoutRiderInput, DeliveryUncheckedCreateWithoutRiderInput> | DeliveryCreateWithoutRiderInput[] | DeliveryUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutRiderInput | DeliveryCreateOrConnectWithoutRiderInput[]
    createMany?: DeliveryCreateManyRiderInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type Bank_detailsUncheckedCreateNestedManyWithoutRiderInput = {
    create?: XOR<Bank_detailsCreateWithoutRiderInput, Bank_detailsUncheckedCreateWithoutRiderInput> | Bank_detailsCreateWithoutRiderInput[] | Bank_detailsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutRiderInput | Bank_detailsCreateOrConnectWithoutRiderInput[]
    createMany?: Bank_detailsCreateManyRiderInputEnvelope
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
  }

  export type Rider_ratingUncheckedCreateNestedManyWithoutRiderInput = {
    create?: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput> | Rider_ratingCreateWithoutRiderInput[] | Rider_ratingUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutRiderInput | Rider_ratingCreateOrConnectWithoutRiderInput[]
    createMany?: Rider_ratingCreateManyRiderInputEnvelope
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
  }

  export type Rider_credentialsUncheckedCreateNestedManyWithoutRiderInput = {
    create?: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput> | Rider_credentialsCreateWithoutRiderInput[] | Rider_credentialsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_credentialsCreateOrConnectWithoutRiderInput | Rider_credentialsCreateOrConnectWithoutRiderInput[]
    createMany?: Rider_credentialsCreateManyRiderInputEnvelope
    connect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DeliveryUpdateManyWithoutRiderNestedInput = {
    create?: XOR<DeliveryCreateWithoutRiderInput, DeliveryUncheckedCreateWithoutRiderInput> | DeliveryCreateWithoutRiderInput[] | DeliveryUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutRiderInput | DeliveryCreateOrConnectWithoutRiderInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutRiderInput | DeliveryUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: DeliveryCreateManyRiderInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutRiderInput | DeliveryUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutRiderInput | DeliveryUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type Bank_detailsUpdateManyWithoutRiderNestedInput = {
    create?: XOR<Bank_detailsCreateWithoutRiderInput, Bank_detailsUncheckedCreateWithoutRiderInput> | Bank_detailsCreateWithoutRiderInput[] | Bank_detailsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutRiderInput | Bank_detailsCreateOrConnectWithoutRiderInput[]
    upsert?: Bank_detailsUpsertWithWhereUniqueWithoutRiderInput | Bank_detailsUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: Bank_detailsCreateManyRiderInputEnvelope
    set?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    disconnect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    delete?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    update?: Bank_detailsUpdateWithWhereUniqueWithoutRiderInput | Bank_detailsUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: Bank_detailsUpdateManyWithWhereWithoutRiderInput | Bank_detailsUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: Bank_detailsScalarWhereInput | Bank_detailsScalarWhereInput[]
  }

  export type Rider_ratingUpdateManyWithoutRiderNestedInput = {
    create?: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput> | Rider_ratingCreateWithoutRiderInput[] | Rider_ratingUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutRiderInput | Rider_ratingCreateOrConnectWithoutRiderInput[]
    upsert?: Rider_ratingUpsertWithWhereUniqueWithoutRiderInput | Rider_ratingUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: Rider_ratingCreateManyRiderInputEnvelope
    set?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    disconnect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    delete?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    update?: Rider_ratingUpdateWithWhereUniqueWithoutRiderInput | Rider_ratingUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: Rider_ratingUpdateManyWithWhereWithoutRiderInput | Rider_ratingUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
  }

  export type Rider_credentialsUpdateManyWithoutRiderNestedInput = {
    create?: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput> | Rider_credentialsCreateWithoutRiderInput[] | Rider_credentialsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_credentialsCreateOrConnectWithoutRiderInput | Rider_credentialsCreateOrConnectWithoutRiderInput[]
    upsert?: Rider_credentialsUpsertWithWhereUniqueWithoutRiderInput | Rider_credentialsUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: Rider_credentialsCreateManyRiderInputEnvelope
    set?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    disconnect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    delete?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    connect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    update?: Rider_credentialsUpdateWithWhereUniqueWithoutRiderInput | Rider_credentialsUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: Rider_credentialsUpdateManyWithWhereWithoutRiderInput | Rider_credentialsUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: Rider_credentialsScalarWhereInput | Rider_credentialsScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: XOR<DeliveryCreateWithoutRiderInput, DeliveryUncheckedCreateWithoutRiderInput> | DeliveryCreateWithoutRiderInput[] | DeliveryUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutRiderInput | DeliveryCreateOrConnectWithoutRiderInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutRiderInput | DeliveryUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: DeliveryCreateManyRiderInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutRiderInput | DeliveryUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutRiderInput | DeliveryUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type Bank_detailsUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: XOR<Bank_detailsCreateWithoutRiderInput, Bank_detailsUncheckedCreateWithoutRiderInput> | Bank_detailsCreateWithoutRiderInput[] | Bank_detailsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutRiderInput | Bank_detailsCreateOrConnectWithoutRiderInput[]
    upsert?: Bank_detailsUpsertWithWhereUniqueWithoutRiderInput | Bank_detailsUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: Bank_detailsCreateManyRiderInputEnvelope
    set?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    disconnect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    delete?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    update?: Bank_detailsUpdateWithWhereUniqueWithoutRiderInput | Bank_detailsUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: Bank_detailsUpdateManyWithWhereWithoutRiderInput | Bank_detailsUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: Bank_detailsScalarWhereInput | Bank_detailsScalarWhereInput[]
  }

  export type Rider_ratingUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput> | Rider_ratingCreateWithoutRiderInput[] | Rider_ratingUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutRiderInput | Rider_ratingCreateOrConnectWithoutRiderInput[]
    upsert?: Rider_ratingUpsertWithWhereUniqueWithoutRiderInput | Rider_ratingUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: Rider_ratingCreateManyRiderInputEnvelope
    set?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    disconnect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    delete?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    update?: Rider_ratingUpdateWithWhereUniqueWithoutRiderInput | Rider_ratingUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: Rider_ratingUpdateManyWithWhereWithoutRiderInput | Rider_ratingUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
  }

  export type Rider_credentialsUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput> | Rider_credentialsCreateWithoutRiderInput[] | Rider_credentialsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_credentialsCreateOrConnectWithoutRiderInput | Rider_credentialsCreateOrConnectWithoutRiderInput[]
    upsert?: Rider_credentialsUpsertWithWhereUniqueWithoutRiderInput | Rider_credentialsUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: Rider_credentialsCreateManyRiderInputEnvelope
    set?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    disconnect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    delete?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    connect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    update?: Rider_credentialsUpdateWithWhereUniqueWithoutRiderInput | Rider_credentialsUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: Rider_credentialsUpdateManyWithWhereWithoutRiderInput | Rider_credentialsUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: Rider_credentialsScalarWhereInput | Rider_credentialsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDeliveryInput = {
    create?: XOR<UserCreateWithoutDeliveryInput, UserUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryInput
    connect?: UserWhereUniqueInput
  }

  export type RiderCreateNestedOneWithoutDeliveryInput = {
    create?: XOR<RiderCreateWithoutDeliveryInput, RiderUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: RiderCreateOrConnectWithoutDeliveryInput
    connect?: RiderWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDeliveryNestedInput = {
    create?: XOR<UserCreateWithoutDeliveryInput, UserUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryInput
    upsert?: UserUpsertWithoutDeliveryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeliveryInput, UserUpdateWithoutDeliveryInput>, UserUncheckedUpdateWithoutDeliveryInput>
  }

  export type RiderUpdateOneWithoutDeliveryNestedInput = {
    create?: XOR<RiderCreateWithoutDeliveryInput, RiderUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: RiderCreateOrConnectWithoutDeliveryInput
    upsert?: RiderUpsertWithoutDeliveryInput
    disconnect?: RiderWhereInput | boolean
    delete?: RiderWhereInput | boolean
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutDeliveryInput, RiderUpdateWithoutDeliveryInput>, RiderUncheckedUpdateWithoutDeliveryInput>
  }

  export type RiderCreateNestedOneWithoutBank_detailsInput = {
    create?: XOR<RiderCreateWithoutBank_detailsInput, RiderUncheckedCreateWithoutBank_detailsInput>
    connectOrCreate?: RiderCreateOrConnectWithoutBank_detailsInput
    connect?: RiderWhereUniqueInput
  }

  export type RiderUpdateOneRequiredWithoutBank_detailsNestedInput = {
    create?: XOR<RiderCreateWithoutBank_detailsInput, RiderUncheckedCreateWithoutBank_detailsInput>
    connectOrCreate?: RiderCreateOrConnectWithoutBank_detailsInput
    upsert?: RiderUpsertWithoutBank_detailsInput
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutBank_detailsInput, RiderUpdateWithoutBank_detailsInput>, RiderUncheckedUpdateWithoutBank_detailsInput>
  }

  export type RiderCreateNestedOneWithoutRider_ratingInput = {
    create?: XOR<RiderCreateWithoutRider_ratingInput, RiderUncheckedCreateWithoutRider_ratingInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRider_ratingInput
    connect?: RiderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRider_ratingInput = {
    create?: XOR<UserCreateWithoutRider_ratingInput, UserUncheckedCreateWithoutRider_ratingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRider_ratingInput
    connect?: UserWhereUniqueInput
  }

  export type RiderUpdateOneRequiredWithoutRider_ratingNestedInput = {
    create?: XOR<RiderCreateWithoutRider_ratingInput, RiderUncheckedCreateWithoutRider_ratingInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRider_ratingInput
    upsert?: RiderUpsertWithoutRider_ratingInput
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutRider_ratingInput, RiderUpdateWithoutRider_ratingInput>, RiderUncheckedUpdateWithoutRider_ratingInput>
  }

  export type UserUpdateOneRequiredWithoutRider_ratingNestedInput = {
    create?: XOR<UserCreateWithoutRider_ratingInput, UserUncheckedCreateWithoutRider_ratingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRider_ratingInput
    upsert?: UserUpsertWithoutRider_ratingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRider_ratingInput, UserUpdateWithoutRider_ratingInput>, UserUncheckedUpdateWithoutRider_ratingInput>
  }

  export type RiderCreateNestedOneWithoutRider_credentialsInput = {
    create?: XOR<RiderCreateWithoutRider_credentialsInput, RiderUncheckedCreateWithoutRider_credentialsInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRider_credentialsInput
    connect?: RiderWhereUniqueInput
  }

  export type RiderUpdateOneRequiredWithoutRider_credentialsNestedInput = {
    create?: XOR<RiderCreateWithoutRider_credentialsInput, RiderUncheckedCreateWithoutRider_credentialsInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRider_credentialsInput
    upsert?: RiderUpsertWithoutRider_credentialsInput
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutRider_credentialsInput, RiderUpdateWithoutRider_credentialsInput>, RiderUncheckedUpdateWithoutRider_credentialsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DeliveryCreateWithoutUserInput = {
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    pickup_coordinate: JsonNullValueInput | InputJsonValue
    delivery_coordinate: JsonNullValueInput | InputJsonValue
    estimated_delivery_price: string
    package_image: string
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderCreateNestedOneWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateWithoutUserInput = {
    id?: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    pickup_coordinate: JsonNullValueInput | InputJsonValue
    delivery_coordinate: JsonNullValueInput | InputJsonValue
    estimated_delivery_price: string
    package_image: string
    rider_id?: number | null
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryCreateOrConnectWithoutUserInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput>
  }

  export type DeliveryCreateManyUserInputEnvelope = {
    data: DeliveryCreateManyUserInput | DeliveryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Rider_ratingCreateWithoutUserInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutRider_ratingInput
  }

  export type Rider_ratingUncheckedCreateWithoutUserInput = {
    id?: number
    rider_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_ratingCreateOrConnectWithoutUserInput = {
    where: Rider_ratingWhereUniqueInput
    create: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput>
  }

  export type Rider_ratingCreateManyUserInputEnvelope = {
    data: Rider_ratingCreateManyUserInput | Rider_ratingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryUpsertWithWhereUniqueWithoutUserInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutUserInput, DeliveryUncheckedUpdateWithoutUserInput>
    create: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutUserInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutUserInput, DeliveryUncheckedUpdateWithoutUserInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutUserInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutUserInput>
  }

  export type DeliveryScalarWhereInput = {
    AND?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    OR?: DeliveryScalarWhereInput[]
    NOT?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    id?: IntFilter<"Delivery"> | number
    user_id?: IntFilter<"Delivery"> | number
    package_name?: StringFilter<"Delivery"> | string
    phone_number?: StringFilter<"Delivery"> | string
    pickup_location?: StringFilter<"Delivery"> | string
    delivery_location?: StringFilter<"Delivery"> | string
    pickup_coordinate?: JsonFilter<"Delivery">
    delivery_coordinate?: JsonFilter<"Delivery">
    estimated_delivery_price?: StringFilter<"Delivery"> | string
    package_image?: StringFilter<"Delivery"> | string
    rider_id?: IntNullableFilter<"Delivery"> | number | null
    delivery_code?: IntNullableFilter<"Delivery"> | number | null
    is_pickedup?: BoolFilter<"Delivery"> | boolean
    is_delivered?: BoolFilter<"Delivery"> | boolean
    status?: EnumStatusFilter<"Delivery"> | $Enums.Status
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
  }

  export type Rider_ratingUpsertWithWhereUniqueWithoutUserInput = {
    where: Rider_ratingWhereUniqueInput
    update: XOR<Rider_ratingUpdateWithoutUserInput, Rider_ratingUncheckedUpdateWithoutUserInput>
    create: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput>
  }

  export type Rider_ratingUpdateWithWhereUniqueWithoutUserInput = {
    where: Rider_ratingWhereUniqueInput
    data: XOR<Rider_ratingUpdateWithoutUserInput, Rider_ratingUncheckedUpdateWithoutUserInput>
  }

  export type Rider_ratingUpdateManyWithWhereWithoutUserInput = {
    where: Rider_ratingScalarWhereInput
    data: XOR<Rider_ratingUpdateManyMutationInput, Rider_ratingUncheckedUpdateManyWithoutUserInput>
  }

  export type Rider_ratingScalarWhereInput = {
    AND?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
    OR?: Rider_ratingScalarWhereInput[]
    NOT?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
    id?: IntFilter<"Rider_rating"> | number
    rider_id?: IntFilter<"Rider_rating"> | number
    user_id?: IntFilter<"Rider_rating"> | number
    rating?: IntFilter<"Rider_rating"> | number
    review?: StringFilter<"Rider_rating"> | string
    createdAt?: DateTimeFilter<"Rider_rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_rating"> | Date | string
  }

  export type DeliveryCreateWithoutRiderInput = {
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    pickup_coordinate: JsonNullValueInput | InputJsonValue
    delivery_coordinate: JsonNullValueInput | InputJsonValue
    estimated_delivery_price: string
    package_image: string
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateWithoutRiderInput = {
    id?: number
    user_id: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    pickup_coordinate: JsonNullValueInput | InputJsonValue
    delivery_coordinate: JsonNullValueInput | InputJsonValue
    estimated_delivery_price: string
    package_image: string
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryCreateOrConnectWithoutRiderInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutRiderInput, DeliveryUncheckedCreateWithoutRiderInput>
  }

  export type DeliveryCreateManyRiderInputEnvelope = {
    data: DeliveryCreateManyRiderInput | DeliveryCreateManyRiderInput[]
    skipDuplicates?: boolean
  }

  export type Bank_detailsCreateWithoutRiderInput = {
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Bank_detailsUncheckedCreateWithoutRiderInput = {
    id?: number
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Bank_detailsCreateOrConnectWithoutRiderInput = {
    where: Bank_detailsWhereUniqueInput
    create: XOR<Bank_detailsCreateWithoutRiderInput, Bank_detailsUncheckedCreateWithoutRiderInput>
  }

  export type Bank_detailsCreateManyRiderInputEnvelope = {
    data: Bank_detailsCreateManyRiderInput | Bank_detailsCreateManyRiderInput[]
    skipDuplicates?: boolean
  }

  export type Rider_ratingCreateWithoutRiderInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRider_ratingInput
  }

  export type Rider_ratingUncheckedCreateWithoutRiderInput = {
    id?: number
    user_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_ratingCreateOrConnectWithoutRiderInput = {
    where: Rider_ratingWhereUniqueInput
    create: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput>
  }

  export type Rider_ratingCreateManyRiderInputEnvelope = {
    data: Rider_ratingCreateManyRiderInput | Rider_ratingCreateManyRiderInput[]
    skipDuplicates?: boolean
  }

  export type Rider_credentialsCreateWithoutRiderInput = {
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_credentialsUncheckedCreateWithoutRiderInput = {
    id?: number
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_credentialsCreateOrConnectWithoutRiderInput = {
    where: Rider_credentialsWhereUniqueInput
    create: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput>
  }

  export type Rider_credentialsCreateManyRiderInputEnvelope = {
    data: Rider_credentialsCreateManyRiderInput | Rider_credentialsCreateManyRiderInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryUpsertWithWhereUniqueWithoutRiderInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutRiderInput, DeliveryUncheckedUpdateWithoutRiderInput>
    create: XOR<DeliveryCreateWithoutRiderInput, DeliveryUncheckedCreateWithoutRiderInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutRiderInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutRiderInput, DeliveryUncheckedUpdateWithoutRiderInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutRiderInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutRiderInput>
  }

  export type Bank_detailsUpsertWithWhereUniqueWithoutRiderInput = {
    where: Bank_detailsWhereUniqueInput
    update: XOR<Bank_detailsUpdateWithoutRiderInput, Bank_detailsUncheckedUpdateWithoutRiderInput>
    create: XOR<Bank_detailsCreateWithoutRiderInput, Bank_detailsUncheckedCreateWithoutRiderInput>
  }

  export type Bank_detailsUpdateWithWhereUniqueWithoutRiderInput = {
    where: Bank_detailsWhereUniqueInput
    data: XOR<Bank_detailsUpdateWithoutRiderInput, Bank_detailsUncheckedUpdateWithoutRiderInput>
  }

  export type Bank_detailsUpdateManyWithWhereWithoutRiderInput = {
    where: Bank_detailsScalarWhereInput
    data: XOR<Bank_detailsUpdateManyMutationInput, Bank_detailsUncheckedUpdateManyWithoutRiderInput>
  }

  export type Bank_detailsScalarWhereInput = {
    AND?: Bank_detailsScalarWhereInput | Bank_detailsScalarWhereInput[]
    OR?: Bank_detailsScalarWhereInput[]
    NOT?: Bank_detailsScalarWhereInput | Bank_detailsScalarWhereInput[]
    id?: IntFilter<"Bank_details"> | number
    rider_id?: IntFilter<"Bank_details"> | number
    bank_name?: StringFilter<"Bank_details"> | string
    account_name?: StringFilter<"Bank_details"> | string
    account_number?: StringFilter<"Bank_details"> | string
    createdAt?: DateTimeFilter<"Bank_details"> | Date | string
    updatedAt?: DateTimeFilter<"Bank_details"> | Date | string
  }

  export type Rider_ratingUpsertWithWhereUniqueWithoutRiderInput = {
    where: Rider_ratingWhereUniqueInput
    update: XOR<Rider_ratingUpdateWithoutRiderInput, Rider_ratingUncheckedUpdateWithoutRiderInput>
    create: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput>
  }

  export type Rider_ratingUpdateWithWhereUniqueWithoutRiderInput = {
    where: Rider_ratingWhereUniqueInput
    data: XOR<Rider_ratingUpdateWithoutRiderInput, Rider_ratingUncheckedUpdateWithoutRiderInput>
  }

  export type Rider_ratingUpdateManyWithWhereWithoutRiderInput = {
    where: Rider_ratingScalarWhereInput
    data: XOR<Rider_ratingUpdateManyMutationInput, Rider_ratingUncheckedUpdateManyWithoutRiderInput>
  }

  export type Rider_credentialsUpsertWithWhereUniqueWithoutRiderInput = {
    where: Rider_credentialsWhereUniqueInput
    update: XOR<Rider_credentialsUpdateWithoutRiderInput, Rider_credentialsUncheckedUpdateWithoutRiderInput>
    create: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput>
  }

  export type Rider_credentialsUpdateWithWhereUniqueWithoutRiderInput = {
    where: Rider_credentialsWhereUniqueInput
    data: XOR<Rider_credentialsUpdateWithoutRiderInput, Rider_credentialsUncheckedUpdateWithoutRiderInput>
  }

  export type Rider_credentialsUpdateManyWithWhereWithoutRiderInput = {
    where: Rider_credentialsScalarWhereInput
    data: XOR<Rider_credentialsUpdateManyMutationInput, Rider_credentialsUncheckedUpdateManyWithoutRiderInput>
  }

  export type Rider_credentialsScalarWhereInput = {
    AND?: Rider_credentialsScalarWhereInput | Rider_credentialsScalarWhereInput[]
    OR?: Rider_credentialsScalarWhereInput[]
    NOT?: Rider_credentialsScalarWhereInput | Rider_credentialsScalarWhereInput[]
    id?: IntFilter<"Rider_credentials"> | number
    rider_id?: IntFilter<"Rider_credentials"> | number
    nin?: StringFilter<"Rider_credentials"> | string
    nin_image?: StringNullableFilter<"Rider_credentials"> | string | null
    driver_license?: StringFilter<"Rider_credentials"> | string
    driver_license_image?: StringNullableFilter<"Rider_credentials"> | string | null
    plate_number?: StringFilter<"Rider_credentials"> | string
    vehicle_image?: StringNullableFilter<"Rider_credentials"> | string | null
    status?: EnumStatusFilter<"Rider_credentials"> | $Enums.Status
    createdAt?: DateTimeFilter<"Rider_credentials"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_credentials"> | Date | string
  }

  export type UserCreateWithoutDeliveryInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider_rating?: Rider_ratingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeliveryInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeliveryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeliveryInput, UserUncheckedCreateWithoutDeliveryInput>
  }

  export type RiderCreateWithoutDeliveryInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bank_details?: Bank_detailsCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutDeliveryInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bank_details?: Bank_detailsUncheckedCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutDeliveryInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutDeliveryInput, RiderUncheckedCreateWithoutDeliveryInput>
  }

  export type UserUpsertWithoutDeliveryInput = {
    update: XOR<UserUpdateWithoutDeliveryInput, UserUncheckedUpdateWithoutDeliveryInput>
    create: XOR<UserCreateWithoutDeliveryInput, UserUncheckedCreateWithoutDeliveryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeliveryInput, UserUncheckedUpdateWithoutDeliveryInput>
  }

  export type UserUpdateWithoutDeliveryInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider_rating?: Rider_ratingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeliveryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RiderUpsertWithoutDeliveryInput = {
    update: XOR<RiderUpdateWithoutDeliveryInput, RiderUncheckedUpdateWithoutDeliveryInput>
    create: XOR<RiderCreateWithoutDeliveryInput, RiderUncheckedCreateWithoutDeliveryInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutDeliveryInput, RiderUncheckedUpdateWithoutDeliveryInput>
  }

  export type RiderUpdateWithoutDeliveryInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank_details?: Bank_detailsUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutDeliveryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank_details?: Bank_detailsUncheckedUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type RiderCreateWithoutBank_detailsInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutBank_detailsInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryUncheckedCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutBank_detailsInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutBank_detailsInput, RiderUncheckedCreateWithoutBank_detailsInput>
  }

  export type RiderUpsertWithoutBank_detailsInput = {
    update: XOR<RiderUpdateWithoutBank_detailsInput, RiderUncheckedUpdateWithoutBank_detailsInput>
    create: XOR<RiderCreateWithoutBank_detailsInput, RiderUncheckedCreateWithoutBank_detailsInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutBank_detailsInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutBank_detailsInput, RiderUncheckedUpdateWithoutBank_detailsInput>
  }

  export type RiderUpdateWithoutBank_detailsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutBank_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUncheckedUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type RiderCreateWithoutRider_ratingInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryCreateNestedManyWithoutRiderInput
    bank_details?: Bank_detailsCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutRider_ratingInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryUncheckedCreateNestedManyWithoutRiderInput
    bank_details?: Bank_detailsUncheckedCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutRider_ratingInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutRider_ratingInput, RiderUncheckedCreateWithoutRider_ratingInput>
  }

  export type UserCreateWithoutRider_ratingInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRider_ratingInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRider_ratingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRider_ratingInput, UserUncheckedCreateWithoutRider_ratingInput>
  }

  export type RiderUpsertWithoutRider_ratingInput = {
    update: XOR<RiderUpdateWithoutRider_ratingInput, RiderUncheckedUpdateWithoutRider_ratingInput>
    create: XOR<RiderCreateWithoutRider_ratingInput, RiderUncheckedCreateWithoutRider_ratingInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutRider_ratingInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutRider_ratingInput, RiderUncheckedUpdateWithoutRider_ratingInput>
  }

  export type RiderUpdateWithoutRider_ratingInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUpdateManyWithoutRiderNestedInput
    bank_details?: Bank_detailsUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutRider_ratingInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUncheckedUpdateManyWithoutRiderNestedInput
    bank_details?: Bank_detailsUncheckedUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type UserUpsertWithoutRider_ratingInput = {
    update: XOR<UserUpdateWithoutRider_ratingInput, UserUncheckedUpdateWithoutRider_ratingInput>
    create: XOR<UserCreateWithoutRider_ratingInput, UserUncheckedCreateWithoutRider_ratingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRider_ratingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRider_ratingInput, UserUncheckedUpdateWithoutRider_ratingInput>
  }

  export type UserUpdateWithoutRider_ratingInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRider_ratingInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RiderCreateWithoutRider_credentialsInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryCreateNestedManyWithoutRiderInput
    bank_details?: Bank_detailsCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutRider_credentialsInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    ip_address?: string | null
    device_token?: string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryUncheckedCreateNestedManyWithoutRiderInput
    bank_details?: Bank_detailsUncheckedCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutRider_credentialsInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutRider_credentialsInput, RiderUncheckedCreateWithoutRider_credentialsInput>
  }

  export type RiderUpsertWithoutRider_credentialsInput = {
    update: XOR<RiderUpdateWithoutRider_credentialsInput, RiderUncheckedUpdateWithoutRider_credentialsInput>
    create: XOR<RiderCreateWithoutRider_credentialsInput, RiderUncheckedCreateWithoutRider_credentialsInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutRider_credentialsInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutRider_credentialsInput, RiderUncheckedUpdateWithoutRider_credentialsInput>
  }

  export type RiderUpdateWithoutRider_credentialsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUpdateManyWithoutRiderNestedInput
    bank_details?: Bank_detailsUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutRider_credentialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_token?: NullableStringFieldUpdateOperationsInput | string | null
    current_position?: NullableJsonNullValueInput | InputJsonValue
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUncheckedUpdateManyWithoutRiderNestedInput
    bank_details?: Bank_detailsUncheckedUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type DeliveryCreateManyUserInput = {
    id?: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    pickup_coordinate: JsonNullValueInput | InputJsonValue
    delivery_coordinate: JsonNullValueInput | InputJsonValue
    estimated_delivery_price: string
    package_image: string
    rider_id?: number | null
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_ratingCreateManyUserInput = {
    id?: number
    rider_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryUpdateWithoutUserInput = {
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    pickup_coordinate?: JsonNullValueInput | InputJsonValue
    delivery_coordinate?: JsonNullValueInput | InputJsonValue
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    pickup_coordinate?: JsonNullValueInput | InputJsonValue
    delivery_coordinate?: JsonNullValueInput | InputJsonValue
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    rider_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    pickup_coordinate?: JsonNullValueInput | InputJsonValue
    delivery_coordinate?: JsonNullValueInput | InputJsonValue
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    rider_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutRider_ratingNestedInput
  }

  export type Rider_ratingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateManyRiderInput = {
    id?: number
    user_id: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    pickup_coordinate: JsonNullValueInput | InputJsonValue
    delivery_coordinate: JsonNullValueInput | InputJsonValue
    estimated_delivery_price: string
    package_image: string
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Bank_detailsCreateManyRiderInput = {
    id?: number
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_ratingCreateManyRiderInput = {
    id?: number
    user_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_credentialsCreateManyRiderInput = {
    id?: number
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryUpdateWithoutRiderInput = {
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    pickup_coordinate?: JsonNullValueInput | InputJsonValue
    delivery_coordinate?: JsonNullValueInput | InputJsonValue
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    pickup_coordinate?: JsonNullValueInput | InputJsonValue
    delivery_coordinate?: JsonNullValueInput | InputJsonValue
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUncheckedUpdateManyWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    pickup_coordinate?: JsonNullValueInput | InputJsonValue
    delivery_coordinate?: JsonNullValueInput | InputJsonValue
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bank_detailsUpdateWithoutRiderInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bank_detailsUncheckedUpdateWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bank_detailsUncheckedUpdateManyWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingUpdateWithoutRiderInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRider_ratingNestedInput
  }

  export type Rider_ratingUncheckedUpdateWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingUncheckedUpdateManyWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsUpdateWithoutRiderInput = {
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsUncheckedUpdateWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsUncheckedUpdateManyWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RiderCountOutputTypeDefaultArgs instead
     */
    export type RiderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RiderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RiderDefaultArgs instead
     */
    export type RiderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RiderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeliveryDefaultArgs instead
     */
    export type DeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeliveryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Operating_areasDefaultArgs instead
     */
    export type Operating_areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Operating_areasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Bank_detailsDefaultArgs instead
     */
    export type Bank_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Bank_detailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Rider_ratingDefaultArgs instead
     */
    export type Rider_ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Rider_ratingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Rider_credentialsDefaultArgs instead
     */
    export type Rider_credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Rider_credentialsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}