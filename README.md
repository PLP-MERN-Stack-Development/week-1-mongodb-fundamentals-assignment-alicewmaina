# MongoDB Fundamentals Assignment

This repository contains my solutions for the MongoDB Fundamentals assignment, including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

- Set up a MongoDB database (`plp_bookstore`) and a `books` collection
- Populate the collection using `insert_books.js`
- Perform CRUD operations and advanced queries (see `queries.js`)
- Create aggregation pipelines for data analysis
- Implement indexing for performance optimization

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/PLP-MERN-Stack-Development/week-1-mongodb-fundamentals-assignment-alicewmaina.git

   cd week-1-mongodb-fundamentals-assignment-alicewmaina
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start MongoDB** (if running locally):
   ```sh
   sudo systemctl start mongod
   ```
   or
   ```sh
   mongod
   ```

4. **Populate the database:**
   ```sh
   node insert_books.js
   ```

5. **Run queries:**  
   Open `mongosh` and use the commands in `queries.js` to test CRUD, aggregation, and indexing.

## Files Included

- `Week1-Assignment.md`: Assignment instructions
- `insert_books.js`: Script to insert sample book data
- `queries.js`: All required MongoDB queries and aggregation pipelines
- `README.md`: This file

## Requirements

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- MongoDB Shell (`mongosh`) or MongoDB Compass

## Submission Checklist

- [x] All tasks in the assignment completed
- [x] `insert_books.js` and `queries.js` included
- [x] Screenshot of MongoDB Compass with your data
- [x] This `README.md` updated with setup instructions

## Resources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [MongoDB University](https://university.mongodb.com/)