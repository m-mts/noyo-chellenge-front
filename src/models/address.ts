export interface Address{
    id: string;
    user_id: string;
    street_one: string;
    street_two: string;
    city: string;
    state_id: string;
    zip_code: string;
    country_id: string;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export const readableAddressFields = Object.freeze(new Map<keyof Address, string>([
    ["id" as keyof Address, "Id"],
    ["user_id" as keyof Address, "User Id"],
    ["street_one" as keyof Address, "Street Address (line 1)"],
    ["street_two" as keyof Address, "Street Address (line 2)"],
    ["city" as keyof Address, "City"],
    ["state_id" as keyof Address, "State"],
    ["zip_code" as keyof Address, "ZIP"],
    ["country_id" as keyof Address, "Country"],
    ["created_at" as keyof Address, "Created"],
    ["updated_at" as keyof Address, "Updated"],
    ["deleted_at" as keyof Address, "Deleted"]
]));