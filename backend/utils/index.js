const { processUpload, deleteFile } = require('./upload')
const { checkRole } = require('./auth')

module.exports = {
    processUpload,
    deleteFile,
    checkRole
}