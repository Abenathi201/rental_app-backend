const db = require("../config/database");

class Movies {
    // Get all Movies
    getMovies(req, res) {
        const mysqlQuery = `
            SELECT * FROM Movies;
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching all the movies" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    };

    // Get a specific Movie by ID
    getMovie(req, res) {
        const mysqlQuery = `
            SELECT * FROM Movies WHERE movie_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching the movie" });
            } else {
                res.json({ status: res.statusCode, results: results[0] });
            }
        });
    };

    // Add a new Movie
    addMovie(req, res) {
        const data = req.body;

        const mysqlQuery = `
            INSERT INTO Movies
            SET ?;
        `;
        
        db.query(mysqlQuery, [data], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error adding the movie" });
            } else {
                res.status(201).json({ status: res.statusCode, message: "Movie created!", movie_id: results.insertId });
            }
        });
    };

    // Update an existing Movie
    updateMovie(req, res) {
        const data = req.body;

        const mysqlQuery = `
            UPDATE Movies
            SET ?
            WHERE movie_id = ?;
        `;

        db.query(mysqlQuery, [data, req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error updating the movie" });
            } else {
                res.json({ status: res.statusCode, message: "Movie updated successfully!" });
            }
        });
    };

    // Delete a Movie
    deleteMovie(req, res) {
        const mysqlQuery = `
            DELETE FROM Movies
            WHERE movie_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error deleting the movie" });
            } else {
                res.json({ status: res.statusCode, message: "Movie deleted" });
            }
        });
    };
}

module.exports = Movies;