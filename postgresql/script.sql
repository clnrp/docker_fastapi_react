create database dbtests;
\c dbtests;

CREATE TABLE if not exists tb1 (
  id BIGSERIAL PRIMARY KEY,
  file varchar(200) DEFAULT NULL,
  version varchar(50) DEFAULT NULL,
  type SMALLINT DEFAULT NULL,
  value SMALLINT DEFAULT NULL,
  date timestamp DEFAULT NULL,
  sync_date timestamp DEFAULT NULL
);

CREATE INDEX date_idx ON tb1(date);
CREATE INDEX sync_date_idx ON tb1(sync_date);

create user utests with encrypted password '51Y1UbhSe';
grant all privileges on table tb1 to dbtests;
grant usage, select on all sequences in schema public to dbtests;
