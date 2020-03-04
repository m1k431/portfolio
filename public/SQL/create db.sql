CREATE DATABASE portfolio;
--admin user
CREATE USER 'admin' @ 'localhost' IDENTIFIED BY 'iop';
GRANT ALL PRIVILEGES ON portfolio.* TO 'admin' @ 'localhost';
FLUSH PRIVILEGES;
--webuser
CREATE USER 'webuser' @ 'localhost' IDENTIFIED BY 'iop';
GRANT
SELECT,
INSERT ON portfolio.* TO 'webuser' @ 'localhost';
FLUSH PRIVILEGES;
quit