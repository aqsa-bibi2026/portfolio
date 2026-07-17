create table public.contact_messages (

    id bigint generated always as identity primary key,

    name varchar(100) not null,

    email varchar(150) not null,

    subject varchar(200),

    message text not null,

    created_at timestamptz default now()

);

create index idx_contact_created_at
on public.contact_messages(created_at desc);