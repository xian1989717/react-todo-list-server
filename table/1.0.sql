CREATE TABLE todo_list (
  id int auto_increment primary key,
  name varchar(255) not null,
  type varchar(20) not null,
  is_removed BOOLEAN not null DEFAULT FALSE
)