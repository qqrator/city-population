const City = require('../models/city');

exports.getCity = async (req, res) => {
  try {
    const state = req.params.state? req.params.state.toLowerCase() : null;
    const city = req.params.city? req.params.city.toLowerCase() : null;
    if (!state || !city) {
        res.status(400).json({ error: 'Parameters missing!' });
    }
    const cities = await City.findOne({"city": city, "state": state}, {_id: 0, population: 1});
    if (!cities) {
        res.status(400).json({ error: "The given combination of city and state did not render results"})
    } else {
        res.status(200).json(cities);
    }
    
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch population, internal server error' });
  }
};

exports.updateCity = async (req, res) => {
    try {
      const state = req.params.state? req.params.state.toLowerCase() : null;
      const city = req.params.city? req.params.city.toLowerCase() : null;
      const population = parseInt(req.body);
      console.log(req.body)
      console.log(population)
      if (isNaN(population) || population < 0) {
        return res.status(400).json({ error: 'Invalid population value' });
      }
  
      const existingRecord = await City.findOne({ state: state, city: city });
  
      if (existingRecord) {
        existingRecord.population = population;
        await existingRecord.save();
        res.status(200).json({ message: 'Population data updated successfully' });
      } else {
        const newRecord = new City({
          state: state,
          city: city,
          population: population,
        });
        await newRecord.save();
        res.status(201).json({ message: 'Population data created successfully' });
      }
    } catch (error) {
      console.error('Error updating population:', error.message);
      res.status(500).json({ error: 'Could not update population data, internal server error' });
    }
  };
