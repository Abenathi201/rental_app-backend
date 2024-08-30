const db = require("../config/database");

class Reality {
    // Get all Realities
    getRealities(req, res) {
        const mysqlQuery = `
            SELECT * FROM Reality;
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching all the realities" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    };

    // Get a specific Reality by ID
    getReality(req, res) {
        const mysqlQuery = `
            SELECT * FROM Series
            WHERE reality_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching the reality" });
            } else {
                res.json({ status: res.statusCode, results: results[0] });
            }
        });
    };

    // Add a new Reality
    addReality(req, res) {
        const data = req.body;

        const mysqlQuery = `
            INSERT INTO Reality
            SET ?;
        `;
        
        db.query(mysqlQuery, [data], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error adding the reality" });
            } else {
                res.status(201).json({ status: res.statusCode, message: "Reality created!", reality_id: results.insertId });
            }
        });
    };

    // Update existing Reality
    updateReality(req, res) {
        const data = req.body;

        const mysqlQuery = `
            UPDATE Reality
            SET ?
            WHERE reality_id = ?;
        `;

        db.query(mysqlQuery, [data, req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error updating reality" });
            } else {
                res.json({ status: res.statusCode, message: "Reality updated successfully!" });
            }
        });
    };

    // Delete Reality
    deleteReality(req, res) {
        const mysqlQuery = `
            DELETE FROM Reality
            WHERE reality_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error deleting reality" });
            } else {
                res.json({ status: res.statusCode, message: "Reality deleted" });
            }
        });
    };
}

module.exports = Reality;