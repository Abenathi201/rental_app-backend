const db = require("../config/database");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/Authentication");

class Customers {
    // Get all the customers
    getCustomers(req, res) {
        const mysqlQuery = `
            SELECT customer_id, first_name, last_name, email, street_address, city, state, zip_code, country, registration_date
            FROM Customers;
        `;

        db.query(mysqlQuery, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Error fetching customers" });
            } else {
                res.json({ status: res.statusCode, results });
            }
        });
    }

    // Single customer
    getCustomer(req, res) {
        const mysqlQuery = `
            SELECT customer_id, first_name, last_name, email, street_address, city, state, zip_code, country, registration_date
            FROM Customers
            WHERE customer_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: res.statusCode, error: "Customer could not be fetched" });
            } else if (result.length === 0) {
                res.status(404).json({ status: res.statusCode, error: "Customer not found" });
            } else {
                res.json({ status: res.statusCode, result: result[0] });
            }
        });
    }

    // Register a customer
    async registerCustomer(req, res) {
        const data = req.body;

        if (!data.password) {
            return res.status(400).json({ status: res.statusCode, msg: "Password is needed." });
        }

        try {
            data.password = await hash(data.password, 15);
        } catch (error) {
            return res.status(500).json({ status: res.statusCode, error: "Error hashing password" });
        }

        const mysqlQuery = `
            INSERT INTO Customers
            SET ?;
        `;

        db.query(mysqlQuery, [data], (error, result) => {
            if (error) {
                console.error("Error executing: ", error);
                res.status(500).json({ status: res.statusCode, error: "Error registering customer!" });
            } else {
                const token = createToken({ customer_id: result.insertId });
                res.status(201).json({ status: res.statusCode, msg: "You are registered!", token, customer_id: result.insertId });
            }
        });
    }

    // Login a customer
    loginCustomer(req, res) {
        const { email, password } = req.body;

        const mysqlQuery = `
            SELECT customer_id, password
            FROM Customers
            WHERE email = ?;
        `;

        db.query(mysqlQuery, [email], (error, result) => {
            if (error) {
                res.status(500).json({ status: res.statusCode, error: "Error fetching customer" });
                return;
            }

            if (!result.length) {
                return res.status(404).json({ status: res.statusCode, msg: "You provided the wrong email" });
            }

            compare(password, result[0].password, (compareError, compareResult) => {
                if (compareError) {
                    return res.status(500).json({ status: res.statusCode, error: "Error comparing password" });
                }

                if (compareResult) {
                    const token = createToken({ customer_id: result[0].customer_id });
                    res.status(200).json({ status: res.statusCode, msg: "You are Logged In!", token, customer_id: result[0].customer_id });
                } else {
                    return res.status(400).json({ status: res.statusCode, error: "Invalid password" });
                }
            });
        });
    }

    // Edit a customer or a customer edit themselves
    updateCustomer(req, res) {
        const data = req.body;

        if (data.password) {
            data.password = hashSync(data.password, 15);
        }

        const mysqlQuery = `
            UPDATE Customers
            SET ?
            WHERE customer_id = ?;
        `;

        db.query(mysqlQuery, [data, req.params.id], (error) => {
            if (error) {
                res.status(500).json({ status: res.statusCode, error: "Error updating customer" });
            } else {
                res.status(200).json({ status: res.statusCode, msg: "Customer successfully updated" });
            }
        });
    }

    // Delete a customer
    deleteCustomer(req, res) {
        const mysqlQuery = `
            DELETE FROM Customers
            WHERE customer_id = ?;
        `;

        db.query(mysqlQuery, [req.params.id], (error) => {
            if (error) {
                res.status(500).json({ status: res.statusCode, error: "Error deleting the customer" });
            } else {
                res.status(200).json({ status: res.statusCode, msg: "Customer successfully deleted!" });
            }
        });
    }
}

module.exports = Customers;