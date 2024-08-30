const db = require("../config/database");

class Animations_Anime {
    // Get all Animations
    getAnimations(req, res) {
        const mysqlQuery = `
            SELECT * FROM Animations_Anime;
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching animations" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    };

    // Get a specific Animation by ID
    getAnimation(req, res) {
        const mysqlQuery = `
            SELECT * FROM Animations_Anime
            WHERE animations_anime_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching the Animation" });
            } else {
                res.json({ status: res.statusCode, results: results[0] });
            }
        });
    };

    // Add a new Animations
    addAnimation(req, res) {
        const data = req.body;

        const mysqlQuery = `
            INSERT INTO Animations_Anime
            SET ?;
        `;
        
        db.query(mysqlQuery, [data], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error adding Animations" });
            } else {
                res.status(201).json({ status: res.statusCode, message: "Animation created!", series_id: results.insertId });
            }
        });
    };

    // Update existing Animation
    updateAnimation(req, res) {
        const data = req.body;

        const mysqlQuery = `
            UPDATE Animations_Anime
            SET ?
            WHERE animations_anime_id = ?;
        `;

        db.query(mysqlQuery, [data, req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error updating animation" });
            } else {
                res.json({ status: res.statusCode, message: "Animation updated successfully!" });
            }
        });
    };

    // Delete Animation
    deleteAnimation(req, res) {
        const mysqlQuery = `
            DELETE FROM Animations_Anime
            WHERE animations_anime_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error deleting animation" });
            } else {
                res.json({ status: res.statusCode, message: "Animation deleted" });
            }
        });
    };
}

module.exports = Animations_Anime;