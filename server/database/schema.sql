
CREATE TABLE category (
    categoryId INT PRIMARY KEY,
    categoryName VARCHAR(255) NOT NULL
);

CREATE TABLE product (
    productId INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    url VARCHAR(255),
    categoryId INT,
    FOREIGN KEY (categoryId) REFERENCES Category(categoryId)
);


CREATE TABLE skinType (
    skintypeId INT PRIMARY KEY,
    skintypeName VARCHAR(255) NOT NULL
);


CREATE TABLE hairType (
    hairtypeId INT PRIMARY KEY,
    hairtypeName VARCHAR(255) NOT NULL
);


CREATE TABLE product_skinType (
    productId INT,
    skintypeId INT,
    PRIMARY KEY (productId, skintypeId),
    FOREIGN KEY (productId) REFERENCES Product(productId),
    FOREIGN KEY (skintypeId) REFERENCES SkinType(skintypeId)
);

--
CREATE TABLE product_hairType (
    productId INT,
    hairtypeId INT,
    PRIMARY KEY (productId, hairtypeId),
    FOREIGN KEY (productId) REFERENCES Product(productId),
    FOREIGN KEY (hairtypeId) REFERENCES HairType(hairtypeId)
);


CREATE TABLE tips (
    tipsId INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT
);


CREATE TABLE user (
    userId INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE favorite (
    favoriteId INT PRIMARY KEY,
    userId INT,
    productId INT,
    tipsId INT,
    FOREIGN KEY (userId) REFERENCES User(userId),
    FOREIGN KEY (productId) REFERENCES Product(productId),
    FOREIGN KEY (tipsId) REFERENCES Tips(tipsId)
);
