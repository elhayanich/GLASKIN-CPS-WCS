CREATE TABLE skinproduct (
    skinproductId INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image TEXT,
    description TEXT,
    price DECIMAL(10, 2),
    url TEXT,
    skintype TEXT,
    skinconcern TEXT
);

CREATE TABLE hairproduct (
    hairproductId INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image TEXT,
    description TEXT,
    price DECIMAL(10, 2),
    url TEXT,
    hairtype TEXT,
    hairconcern TEXT
);

CREATE TABLE tips (
    tipsId INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT
);

CREATE TABLE user (
    userId INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE favorite (
    favoriteId INT PRIMARY KEY,
    userId  INT UNSIGNED NOT NULL,
    skinproductId INT,
    hairproductId INT,
    tipsId INT,
    FOREIGN KEY (userId) REFERENCES user(userId),
    FOREIGN KEY (skinproductId) REFERENCES skinproduct(skinproductId),
    FOREIGN KEY (hairproductId) REFERENCES hairproduct(hairproductId),
    FOREIGN KEY (tipsId) REFERENCES tips(tipsId)
);
