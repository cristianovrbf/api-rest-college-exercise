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


-- create users table
create table payments.users(
    id serial primary key,
    name text not null,
    email text unique not null,
    cpf text unique not null,
    birthdate timestamp,
    cellphone text,
    marital_status text,
    scholarity text,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    deleted_at timestamp
);

-- create service table
create table payments.service(
    id serial primary key,
    description text not null,
    price text not null,
    term text not null,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    deleted_at timestamp
);

-- create service_request table
create table payments.service_request(
    id serial primary key,
    request_date timestamp,
    predicted_realize_date timestamp,
    status text,
    service_id int,
    user_id int,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    deleted_at timestamp,
    CONSTRAINT fk_service FOREIGN KEY (service_id) REFERENCES payments.service(id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES payments.users(id),
);
