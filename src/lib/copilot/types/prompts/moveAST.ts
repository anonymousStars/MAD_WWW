export default `
enum MoveAbilities {
    Copy,  // Allows values of types with this ability to be copied.
    Drop,  // Allows values of types with this ability to be popped/dropped.
    Store, // Allows values of types with this ability to exist inside a struct in global storage.
    Key,   // Allows the type to serve as a key for global storage operations.
}

interface MoveFunctionParameter {
    name: string,
    type: MoveType,
}

interface MoveFunction {
    name: string,
    structs: string[], // The struct names that are used in the function
    parameters: MoveFunctionParameter[],
    returnType?: MoveType,
    implementation: string // Description of the function's implementation
}

interface MoveModule {
    name: string,
    functions: MoveFunction[],
    structs: MoveStruct[],
}

interface MoveStructField {
    name: string,
    type: MoveType,
    comment?: string // Description of the field
}

interface MoveStruct {
    name: string,
    abilities?: MoveAbilities[],
    fields: MoveStructField[]
}

enum MovePrimitiveType {
    Bool,
    U8,
    U16,
    U32,
    U64,
    U128,
    U256,
    Address,   // In the format of @0x...
    Reference  // Write out as: &T (none-mutable) | &mut T (mutable)
}

enum MoveExternalType {
    /* Data structures */
    Vector<T>,   // Write out as: Vector<T>
    String,      // utf-8 string
    UID,         // Unique identifier
    ID,          // Generic identifier

    /* 
    | Transaction context: 
    | Must be passed in as reference when used as function arguments: &mut TxContext
    */
    &mut TxContext,     // As Argument

    /* CoinType */
    SUI,                 // SUI, the native coin of the blockchain.

    /* Coin structures */
    Coin<CoinType>,      // Coin<CoinType>, a structure representing a quantity of a specific currency, with fields including id (UID) and the amount this coin represents - balance (Balance<CoinType>).

    /* Balance types */
    Balance<CoinType>,  // Balance<CoinType>, a structure tracking the quantity of a specific currency owned by an entity, with a field including value (u64).
    Supply<CoinType>,   // Supply<CoinType>, Represents the total circulating supply of a specific currency type, with a field including value (u64).
}

type MoveType = MovePrimitiveType | MoveExternalType;`