const db = require("../config/database");

class Stand_Up_Comedy {
    // Get all Realities
    getStandUpComedies(req, res) {
        const mysqlQuery = `
            SELECT * FROM Stand_Up_Comedy;
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching all the Stand Up Comedies" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    };

    // Get a specific Reality by ID
    getStandUpComedy(req, res) {
        const mysqlQuery = `
            SELECT * FROM Stand_Up_Comedy
            WHERE stand_up_comedy_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching the Stand Up Comedy" });
            } else {
                res.json({ status: res.statusCode, results: results[0] });
            }
        });
    };

    // Add a new Reality
    addStandUpComedy(req, res) {
        const data = req.body;

        const mysqlQuery = `
            INSERT INTO Stand_Up_Comedy
            SET ?;
        `;
        
        db.query(mysqlQuery, [data], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error adding the Stand Up Comedy" });
            } else {
                res.status(201).json({ status: res.statusCode, message: "Stand Up Comedy created!", stand_up_comedy_id: results.insertId });
            }
        });
    };

    // Update existing Reality
    updateStandUp(req, res) {
        const data = req.body;

        const mysqlQuery = `
            UPDATE Stand_Up_Comedy
            SET ?
            WHERE stand_up_comedy_id = ?;
        `;

        db.query(mysqlQuery, [data, req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error updating Stand Up Comedy" });
            } else {
                res.json({ status: res.statusCode, message: "Stand Up Comedy updated successfully!" });
            }
        });
    };

    // Delete Reality
    deletegetStandUp(req, res) {
        const mysqlQuery = `
            DELETE FROM Stand_Up_Comedy
            WHERE stand_up_comedy_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error deleting Stand Up Comedy" });
            } else {
                res.json({ status: res.statusCode, message: "Stand Up Comedy deleted" });
            }
        });
    };
};

module.exports = Stand_Up_Comedy;