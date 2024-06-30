CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    avatar TEXT,
    cover TEXT,
    about TEXT
);

CREATE TABLE accounts (
    user_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY,
    image TEXT,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    content TEXT NOT NULL,
    date DATETIME NOT NULL
);

CREATE TABLE uploads (
    user_id INTEGER,
    post_id INTEGER,
    PRIMARY KEY(user_id, post_id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(post_id) REFERENCES posts(id)
);

CREATE TABLE followings (
    user_id INTEGER,
    following_id INTEGER,
    PRIMARY KEY(user_id, following_id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(following_id) REFERENCES users(id)
);

CREATE TABLE collections (
    id INTEGER PRIMARY KEY,
    post_id INTEGER,
    FOREIGN KEY(post_id) REFERENCES posts(id)
);

CREATE TABLE user_collections (
    user_id INTEGER,
    collection_id INTEGER,
    PRIMARY KEY(user_id, collection_id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(collection_id) REFERENCES collections(id)
);

CREATE TABLE post_reports (
    user_id INTEGER,
    post_id INTEGER,
    category TEXT NOT NULL,
    comment TEXT,
    date DATETIME NOT NULL,
    PRIMARY KEY(user_id, post_id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(post_id) REFERENCES posts(id)
);

CREATE TABLE accounts_life (
    user_id INTEGER PRIMARY KEY,
    email TEXT NOT NULL,
    creation_date DATETIME NOT NULL,
    deletion_date DATETIME,
    FOREIGN KEY(user_id) REFERENCES users(id)
);