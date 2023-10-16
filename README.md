## Instructions

This app requires MongoDB 5.0 or later.

1. **Create a Database:**
   - Create a database named **city-population** in MongoDB. You can choose any name, but remember to specify the name in your connection string in `environment.json` later.

2. **Specify Connection String:**
   - Open `environment.json` and specify the connection string for MongoDB, for example `mongodb://yourserverhostname:27017/city-population`.

3. **Import JSON Data:**
   - Import the JSON file with city data into the MongoDB database. Use the data from `data/cities.json`.

4. **Run the App:**
   - Execute the following command to start the application:
     ```bash
     npm start
     ```
   - Ensure MongoDB is running, and the connection details in `environment.json` are accurate.