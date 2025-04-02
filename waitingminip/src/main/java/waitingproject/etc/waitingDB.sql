drop database if exists waitingproject;

create database waitingproject;
use waitingproject;

create table user(
	wno int auto_increment,
    name varchar(30),
    people varchar(30),
    phnum varchar(30),
    status boolean default false,
    primary key(wno)
);

select * from user;
# drop table user;