const db = require("../config/database");

class Categories {
    // Get all Categories
    getCategories(req, res) {
        const mysqlQuery = `
            SELECT category_name FROM Categories;
        `;

        db.query(mysqlQuery, (error, results) => {
            if(error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching categories" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    };

     // Fetch all Movies
     getMovies(req, res) {
        const mysqlQuery = `
            SELECT * FROM Movies WHERE category_id = (SELECT category_id FROM Categories WHERE category_name = 'Movies');
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Database query error" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    }

    // Fetch all Series
    getSeries(req, res) {
        const mysqlQuery = `
            SELECT * FROM Series WHERE category_id = (SELECT category_id FROM Categories WHERE category_name = 'Series');
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Database query error" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    }

    // Fetch all Documentaries
    getDocumentaries(req, res) {
        const mysqlQuery = `
            SELECT * FROM Documentaries WHERE category_id = (SELECT category_id FROM Categories WHERE category_name = 'Documentary');
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Database query error" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    }

    // Fetch all Animations & Anime
    getAnimationsAnime(req, res) {
        const mysqlQuery = `
            SELECT * FROM Animations_Anime WHERE category_id = (SELECT category_id FROM Categories WHERE category_name = 'Animations & Anime');
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Database query error" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    }

    // Fetch all Kids content
    getKids(req, res) {
        const mysqlQuery = `
            SELECT * FROM Kids WHERE category_id = (SELECT category_id FROM Categories WHERE category_name = 'Kids');
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Database query error" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    }

    // Fetch all Reality content
    getReality(req, res) {
        const mysqlQuery = `
            SELECT * FROM Reality WHERE category_id = (SELECT category_id FROM Categories WHERE category_name = 'Reality');
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Database query error" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    }

    // Fetch all Stand-Up Comedy content
    getStandUpComedy(req, res) {
        const mysqlQuery = `
            SELECT * FROM Stand_Up_Comedy WHERE category_id = (SELECT category_id FROM Categories WHERE category_name = 'Stand-Up Comedy');
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Database query error" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    }
};

module.exports = Categories;