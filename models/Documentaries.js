const db = require("../config/database");

class Documentaries {
    // Get all the Documentaries
    getDocumentaries(req, res) {
        const mysqlQuery = `
            SELECT * FROM Documentaries;
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching all the documentaries" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    };

    // Get a specific Documentaries by ID
    getDocumentary(req, res) {
        const mysqlQuery = `
            SELECT * FROM Documentaries 
            WHERE documentaries_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching the documentary" });
            } else {
                res.json({ status: res.statusCode, results: results[0] });
            }
        });
    };

    // Add a new Documentary
    addDocumentary(req, res) {
        const data = req.body;

        const mysqlQuery = `
            INSERT INTO Documentaries
            SET ?;
        `;
        
        db.query(mysqlQuery, [data], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error adding the documentary" });
            } else {
                res.status(201).json({ status: res.statusCode, message: "Documentary created!", series_id: results.insertId });
            }
        });
    };

    // Update existing Documentary
    updateDocumentary(req, res) {
        const data = req.body;

        const mysqlQuery = `
            UPDATE Documentaries
            SET ?
            WHERE documentaries_id = ?;
        `;

        db.query(mysqlQuery, [data, req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error updating documentary" });
            } else {
                res.json({ status: res.statusCode, message: "Documentary updated successfully!" });
            }
        });
    };

    // Delete Documentary
    deleteDocumentary(req, res) {
        const mysqlQuery = `
            DELETE FROM Documentaries
            WHERE documentaries_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error deleting documentary" });
            } else {
                res.json({ status: res.statusCode, message: "Documentary deleted" });
            }
        });
    };
}

module.exports = Documentaries;