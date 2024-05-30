-- create the schema
create schema payments;

-- create payment_receiver table
create table payments.payment_receiver(
    id serial primary key,
    name text not null,
    max_value numeric not null,
    type text not null,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    deleted_at timestamp
);