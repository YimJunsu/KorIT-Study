drop database if exists waitingproject;

create database waitingproject;
use waitingproject;

create table user(
	wno int auto_increment,
    name varchar(30),
    people varchar(30),
    phnum varchar(30),
    status boolean,
    primary key(wno)
);

insert into user (name,people,phnum,status) values ('홍길동','4','01012341234',false);

select * from user;