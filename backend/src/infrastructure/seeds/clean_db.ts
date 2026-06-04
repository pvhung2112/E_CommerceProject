import mongoose from "mongoose";

const clean = async () => {
  try {
    const url = process.env.MONGODB_URL || 'mongodb+srv://pvhung2005:eOOulKznwtyT1eAJ@cluster0.rcv7htg.mongodb.net/?appName=Test1';
    await mongoose.connect(url);
    console.log("Connected to MongoDB");

    const db = mongoose.connection.db;
    if (!db) {
      throw new Error("Database connection not established");
    }
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    console.log("Current collections in database:", collectionNames);

    const keepCollections = ["users", "products", "reviews", "categories", "roles"];
    let droppedCount = 0;

    for (const colName of collectionNames) {
      if (!keepCollections.includes(colName) && !colName.startsWith("system.")) {
        console.log(`Dropping redundant collection: "${colName}"...`);
        await db.dropCollection(colName);
        droppedCount++;
      }
    }

    if (droppedCount === 0) {
      console.log("No redundant collections found. Database is already clean!");
    } else {
      console.log(`Successfully dropped ${droppedCount} redundant collection(s).`);
    }

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  } catch (error) {
    console.error("Cleanup error:", error);
    process.exit(1);
  }
};

clean();
