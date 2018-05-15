global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Node Store!';

const urlBD = 'mongodb://gregory:gregory@ds119160.mlab.com:19160/node-store-app';

module.exports = {
    connectionString: urlBD
}
