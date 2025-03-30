#	[DB]
create database mydb1125;	# 데이터베이스 생성
# jdbc:mysql://localhost:3306/mydb1125
show databases;

#	[TABLE]
use mydb1125;
drop table if exists board; #만일 지정한 테이블이 존재하면 삭제
create table board(
	num int unsigned auto_increment,	#게시물의 번호, int 이용한 정수를 저장 가능. ,unsigned (부호없음) +-21억 -> 0 ~ 42억
										# auto_increment : 레코드 추가/삽입할 경우 필드의 자동 번호 부여
	content longtext,					#게시물의 내용, longtext 이용한 최대 4G까지 저장할 수 있다.
    writer varchar(100) not null,		#게시물의 작성자, varchar(100) 이용한 최대 100자까지 저장가능. not null : 지정한 필드의 null값을 허용 X
    pwd int,							#게시물의 비밀번호, int 이용한 정수를 저장 가능.
    primary key(num)					#게시물의 번호를 식별자(PK) 선정
);
show tables								#모든 테이블 목록 보기

#[ 게시물 등록 샘플 SQL ]
# insert :  insert into 테이블명(필드명1, 필드명2, 필드명3) values(값1, 값2, 값3)
insert into board(connect, writer, pwd) values('안녕하세요','유재석','1234'); #SQL작성
#insert into board(connect, writer, pwd) values(?,?,?);
select * from board;

