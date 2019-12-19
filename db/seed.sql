create table inventory (
	inventory_id serial primary key,
	item_name text not null,
	item_desc text not null,
	item_count int not null,
	item_time_added timestamptz default current_timestamp
);