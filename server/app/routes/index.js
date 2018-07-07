const nodeMailer = require('nodemailer');
const config = require('../config');
const tpl = require('../templates/email');
const queryMap = require('./utils/query-map');
const testQuery = require('./utils/test-query');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.end('Welcome to the real estate profit calculator!');
    });

    app.get('/test', (req, res) => {
        res.end(tpl(queryMap(testQuery)));
    });

    app.get('/send-email', (req, res) => {
        const query = queryMap(req.query);
        const email = query.email;

        let transporter = nodeMailer.createTransport({
            host: config.get('smpt:host'),
            port: config.get('smpt:port'),
            secure: false,
            auth: {
                user: config.get('smpt:username'),
                pass: config.get('smpt:password')
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        let mailOptions = {
            from: config.get('mailOptions:from'),
            to: email,
            subject: config.get('mailOptions:subject') + query.author,
            text: '',
            html: tpl(query)
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                if (error.response) {
                    console.log(error.response);
                }
                else {
                    console.log(error);
                }

                res
                    .status(500)
                    .send({
                        text: 'Email has not been send. Server is overloaded or you entered a wrong email. Please, try again later.'
                    });
            }
            else {
                res.send({
                    text: 'Report has been send to ' + email
                });
            }
        });
    });
};
