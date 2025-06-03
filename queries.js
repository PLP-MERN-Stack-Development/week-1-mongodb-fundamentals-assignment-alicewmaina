//Task 1
// To create or switch to the 'plp_bookstore' database, run the following in the MongoDB shell:
//use plp_bookstore
// Create the 'books' collection and insert the sample data
db.createCollection("books")
// run the insert_books.js script to populate the collection
//node insert_books.js


// Task 2

// 1. Find all books in a specific genre
db.books.find({ genre: "Dystopian" });

// 2. Find books published after a certain year 
db.books.find({ published_year: { $gt: 1955 } });

// 3. Find books by a specific author 
db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book 
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 15.99 } }
);

// 5. Delete a book by its title 
db.books.deleteOne({ title: "Moby Dick" });




//Task 3

// 1. Find books that are both in stock and published after 2010
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } }
);

// 2. Use projection to return only the title, author, and price fields
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 3. Sort by price ascending
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: 1 });

// 4. Sort by price descending
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: -1 });

// 5. Pagination: limit to 5 books per page, skip to next page (e.g., page 2)
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: 1 }).skip(5).limit(5);


// Task 4

// 1. Calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);

// 2. Find the author with the most books in the collection
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { $concat: [
        { $toString: { $multiply: [ { $floor: { $divide: [ "$published_year", 10 ] } }, 10 ] } },
        "s"
      ] },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

//Task 5

// 1. Create an index on the `title` field
db.books.createIndex({ title: 1 });

// 2. Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: 1 });

// 3. Use the `explain()` method to show query performance before and after indexing
// Example: Find a book by title, with explain
db.books.find({ title: "1984" }).explain("executionStats");

// Example: Find books by author and published_year, with explain
db.books.find({ author: "George Orwell", published_year: 1949 }).explain("executionStats");