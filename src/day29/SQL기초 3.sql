
-- 한줄주석 / # 한줄주석alter
/*	여러줄 주석	*/

-- 명령어(;) 단위 실행 : 커서두고 ctrl + enter
-- 전체 명령어 실행 : ctrl+shift+enter

#1. 데이터베이스 생성 -> 데이터(자료)들의 모임, 데이터 저장하기 위해서 사용.
create database mydb1122;
#2. 모든 데이터베이스 목록 확인
show databases;
#3. 데이터베이스 활성화(여러 데이터베이스 중에 사용할 데이터베이스 선택)
use mydb1122;
#4. 활성화된 데이터베이스에 테이블/표 생성
create table board(
	bno int unsigned auto_increment ,
    -- unsigned -> 부호가 없다 -> int(+-21억) -> (부호가 없으면)42억정도
    -- bno 게시물번호 -> 숫자 -> 숫자중에 적절한 타입
    -- auto_increment -> 레크드/행/표의값 삽입시 자동으로 순차적으로 번호 할당 해주는 키워드
	bcontent longtext not null,
	-- longtext -> 게시물의 내용이 많은 내용들이 들어가면 좋을것 같아서 (longtext -> 4GB)
    -- not null -> 해당 파일에 빈 칸이 없게, 게시물 내용은 꼭 공백이 아니면 좋을 것 같아서
	bwriter varchar(15) not null,
    -- varchar = 가변길이
    bpwd int(4) not null,
    
    primary key(bno)
		-- primary key란? 기본(식별)키, 여러개의 필드중에서 식별 가능한 필드, 중복 X
		-- 게시물번호를 pk로 사용하는 이유? 게시물/작성자/비밀번호는 충분히 중복 데이터가 존재할 경우가 크다.
		-- 관례적(무조건X,일반적O)으로 테이블마다 1개 이상의 pk(기본키) 필수,
        --	(주민등록번호O-사람이름x)/(학번o/학생이름x) (제품번호o/제품명x)(ISbmn/도서명)
        ); 
        #5. DML : 데이터 조작
	#1) select : 레코드 조회 SQL
    #select *from 테이블명; 				: 지정한 테이블의 모든(*) 필드의 레코드 조회/검색
    #select 필드명1, 필드면2 from 테이블명;	: 지정한 테이블의 특정 필드의 레코드 조회/검색
    select * from board; #여러번 실행 가능.		 -- 지정한 테이블의 모든(*) 필드의 레코드 조회
    select bcontent, bwriter from board;	 -- 지정한 테이블의 'bcontent' 와 'bwriter'필드의 레코드 조회/검색
    
	#2) insert : 레코드 삽입/추가 SQL
	# insert into 테이블명 values(값1, 값2, 값3);
    # insertinto 테이블명([값1]필드명1,[값2]필드명2, [값3]필드명3) values(값1, 값2, 값3);
    
    insert into board values(1, '안녕하세요', '유재석', 1234); #1번 실행  #board 테이블에 필드선언 순서대로 'bno'에는 1, 'bcontent'에는 안녕하세요, 'bwriter'에는 유재석, 'bpwd'에는 1234삽입
    
    -- insert into board values('그래 안녕', '강호동', 4567 #오류발생 -> 필드의 개수와 데이터 개수가 일치하지 않다
    insert into board(bcontent, bwriter, bpwd) values('그래 안녕', '강호동', 4567);
    
    #3) update : 특정 레코드의 필드값 수정 SQL
    #1. 전체 필드 값 수정
    # update 테이블명 set 수정할필드명 = 새로운값
    
    #2. 특정 조건을 충족하는 레코드만 필드값 수정
    # update 테이블명 set 수정할필드명 = 새로운값 where 조건필드 = 조건값
    update board set bwriter = '신동엽' where bno = 1
    -- update board set bwriter ='하하' ; #-- 레코드 조건이 없으면 전체 수정됨
    
    #4) delete : 특정 레코드 ( 한줄 )삭제 SQL
    #1. 지정한 테이블의 전체 레코드 삭제
	# 			delete from 테이블명 ;
	#2. 지정한 테이블의 특정 조건을 충족하는 레코드만 삭제
    # 			delete from 테이블명 ; where 조건필드 = 조건값
    delete from board where bno = 1; -- 만약에 게시물번호가 1이면 레코드를 삭제한다.
    
/*---------------------------------------------------------------------------------------------------------------------
[문제1]: 테이블이 존재한다는 가정하에 products 테이블에 새로운 제품을 추가하세요. 제품의 정보는 다음과 같습니다 ,
   필드명 : 값  
    product_id: 201
   product_name: 'Wireless Mouse'
   category: 'Electronics'
   price: 'Electronics'
   stock_quantity: 150
   
*/
insert into products(product_id, product_name, category, price, stock_quantity) 
values(201, 'Wireless Mouse', 'Electronics', 'Electronics', 150);
-- [문제2]: 테이블이 존재한다는 가정하에 employees 테이블에서 모든 직원의 first_name과 email을 조회하세요.
#[레코드 조회]
#(1특정필드조회) select 필드명1, 필드명2 from 테이블명,
#(2전체필드조회) select * from 테이블명,
#(3조건레코드조회) select * from 테이블명, where 조건필드 = 조건값
select first_name, email from employees; 
-- [문제3]: 테이블이 존재한다는 가정하에 products 테이블에서 price가 1000 인 제품의 product_name과 price를 조회하세요.
select product_name, price from products where price = 1000;
-- [문제4]: 테이블이 존재한다는 가정하에 employees 테이블에서 employee_id가 101인 직원의 email을 'john.doe@company.com'으로 업데이트하세요.
update employees set email = 'john.doe@company.com' where employee_id = 101;
-- [문제5]: 테이블이 존재한다는 가정하에 products 테이블에서 product_id가 201인 제품의 price를 24.99로 업데이트하세요.
update products set price = 24.99 where product_id = 201;
-- [문제6]: 테이블이 존재한다는 가정하에 employees 테이블에서 employee_id가 101인 직원을 삭제하세요.
delete from employees where employee_id = 101; 
-- [문제7]: 테이블이 존재한다는 가정하에 products 테이블에서 product_id가 201인 제품을 삭제하세요.
delete from products where product_id = 201;
...