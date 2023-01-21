CREATE DATABASE IF NOT EXISTS productsDB;

use productsDB;

create table product(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    price INT(6) DEFAULT NULL,
    PRIMARY KEY (id)
);
 
DESCRIBE product; 
