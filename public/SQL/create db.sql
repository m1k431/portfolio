CREATE DATABASE portfolio;
CREATE USER webuser@localhost IDENTIFIED BY 'iop';
GRANT select, insert ON portfolio.* TO webuser@localhost;
FLUSH PRIVILEGES;
quit