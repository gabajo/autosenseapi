-- Up
CREATE TABLE stations (
    station_id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    address TEXT,
    city TEXT,
    latitude double,
    longitude double
    );

   
CREATE TABLE products (
    product_id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    product_name text,
    station_id integer REFERENCES stations(station_id),
    price double,
    currency text
  
    );



CREATE TABLE points (
    point_id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    point_number integer,
    status text ,
    product_id integer REFERENCES products(product_id)
    );


   
    
INSERT INTO stations(station_id, name, address, city, latitude, longitude)
    values(1234, "Migrol Tankstelle", "Scheffelstrasse 16", "Zürich", 47.3943939, 8.52981);

INSERT INTO stations(station_id, name, address, city, latitude, longitude)
    values(1235, "Migrol Service", "Birmensdorferstrasse 517", "Zürich", 47.367348257, 8.4942242729);




INSERT INTO products(product_id, product_name, station_id, price, currency)
    values(1, "Benzin", 1235, 1.75, "CHF");

INSERT INTO products(product_id, product_name, station_id, price, currency)
    values(2, "Benzin", 1234, 1.812, "CHF");


INSERT INTO points(point_id, point_number, status, product_id)
    values(1, 1, "available", 1);

INSERT INTO points(point_id, point_number, status, product_id)
    values(2, 2, "available", 1);

INSERT INTO points(point_id, point_number, status, product_id)
    values(3, 1, "available", 2);

INSERT INTO points(point_id, point_number, status, product_id)
    values(4, 2, "not_available", 2);







-- Down


DROP table if exists  stations ;
DROP table if exists  prices ;
DROP table if exists  products ;
DROP table if exists  points ;
