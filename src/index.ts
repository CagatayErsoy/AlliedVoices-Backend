import express, { Request, Response } from 'express';
import { Sequelize, DataTypes } from 'sequelize';

// Create an instance of Express
const app = express();

// Define the Sequelize instance for connecting to the database
const sequelize = new Sequelize('AlliedVoices-Articles', 'postgres', '123789', {
  host: 'localhost',
  dialect: 'postgres',
  port:5432
});

// Define a model for your database table
const Article = sequelize.define('articles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publisher: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  lat: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  lng: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  race: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  location_tags: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  incident_type: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  article_text: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },content_type: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },redundant: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }

},{
  timestamps: false
});

// Define a route to handle the GET request
app.get('/articles', async (req: Request, res: Response) => {
  console.log("here")
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  try {
    // Fetch all users from the database
    const articles = await Article.findAll();

    // Send the users as a JSON response
    res.json(articles);
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});