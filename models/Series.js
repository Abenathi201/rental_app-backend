const db = require("../config/database");

class Series {
    // Get all Series
    getAllSeries(req, res) {
        const mysqlQuery = `
            SELECT * FROM Series;
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching all the series" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    };

    // Get a specific Series by ID
    getSingleSeries(req, res) {
        const mysqlQuery = `
            SELECT * FROM Series WHERE series_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching the series" });
            } else {
                res.json({ status: res.statusCode, results: results[0] });
            }
        });
    };

    // Add a new Series
    addSeries(req, res) {
        const data = req.body;

        const mysqlQuery = `
            INSERT INTO Series
            SET ?;
        `;
        
        db.query(mysqlQuery, [data], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error adding the series" });
            } else {
                res.status(201).json({ status: res.statusCode, message: "Series created!", series_id: results.insertId });
            }
        });
    };

    // Update existing Series
    updateSeries(req, res) {
        const data = req.body;

        const mysqlQuery = `
            UPDATE Series
            SET ?
            WHERE series_id = ?;
        `;

        db.query(mysqlQuery, [data, req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error updating series" });
            } else {
                res.json({ status: res.statusCode, message: "Series updated successfully!" });
            }
        });
    };

    // Delete Series
    deleteSeries(req, res) {
        const mysqlQuery = `
            DELETE FROM Series
            WHERE series_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error deleting series" });
            } else {
                res.json({ status: res.statusCode, message: "Series deleted" });
            }
        });
    };
}

module.exports = Series;