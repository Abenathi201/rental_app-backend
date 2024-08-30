const db = require("../config/database");

class Kids {
    // Get all Kids
    getKids(req, res) {
        const mysqlQuery = `
            SELECT * FROM Kids;
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching all the kids" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    };

    // Get a specific Kid by ID
    getSingleKid(req, res) {
        const mysqlQuery = `
            SELECT * FROM Kids
            WHERE kid_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching the kids" });
            } else {
                res.json({ status: res.statusCode, results: results[0] });
            }
        });
    };

    // Add a new Kid
    addKids(req, res) {
        const data = req.body;

        const mysqlQuery = `
            INSERT INTO Kids
            SET ?;
        `;
        
        db.query(mysqlQuery, [data], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error adding the kid" });
            } else {
                res.status(201).json({ status: res.statusCode, message: "Kids created!", kids_id: results.insertId });
            }
        });
    };

    // Update existing Series
    updateKids(req, res) {
        const data = req.body;

        const mysqlQuery = `
            UPDATE Kids
            SET ?
            WHERE kids_id = ?;
        `;

        db.query(mysqlQuery, [data, req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error updating kids" });
            } else {
                res.json({ status: res.statusCode, message: "Kids updated successfully!" });
            }
        });
    };

    // Delete Kid
    deleteKid(req, res) {
        const mysqlQuery = `
            DELETE FROM Kids
            WHERE kids_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error deleting kid" });
            } else {
                res.json({ status: res.statusCode, message: "Kid deleted" });
            }
        });
    };
}

module.exports = Kids;